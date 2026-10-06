# ElectroPay

ElectroPay is a browser-based electricity payment ledger. Its interface and app logic are kept separate from the HTML so each part is easier to maintain.

## Project structure

- `index.html` - app page and external library loading
- `css/styles.css` - app-specific styling and print layouts
- `js/app.js` - app state, ledger calculations, screens, receipts, and backup logic
- `js/auth.js` - Supabase Auth session, login, password reset, and profile handling
- `js/supabase-config.js` - public Supabase project URL and publishable key
- `supabase/schema.sql` - organization tables, permission grants, row security, role-checked RPCs, and audit log

## Customer records

Customers are stored separately from payment records with a required `customerName` and optional `contactNumber` and `location`. Each payment references a customer by `customerId`; receipt numbers remain transaction references. Existing installations are migrated without guessing customer names: unlinked legacy payments are assigned to an editable customer whose name is left blank until updated.

JSON backups include the customer directory. Excel backups keep a Customer Directory sheet and link payment rows to customers by ID.

## Record numbers

Customers and payments have separate stable display references (`CUS-000001`, `PAY-000001`) in addition to their internal IDs. Existing IDs and receipt numbers are preserved. Monotonic number sequences are stored in app state and Excel backup metadata so deleting or restoring records does not renumber them or reuse issued numbers. S.N. values in tables are display positions and follow the current filtered/sorted list; payment-list serials continue across pages. Bills, meter readings, and sections are not separate record types in the current data model.

## Deleted records

Deleting a customer or payment moves it to Deleted Records instead of removing it immediately. Deleted customers and their active payments are grouped so restoring the customer restores the related payment history and recalculates active balances. Deleted payments are excluded from active lists, reports, receipts, and ledger calculations until restored. Important record actions are recorded in the administrator-readable Supabase audit log.

Trash items are retained for one calendar month. Expired items are purged when an administrator opens the application; cleanup does not run while the browser is closed. Authenticated user names are recorded for new trash operations; historical local records may continue to show `Local user`.

## Run

Serve the project from `localhost` or deploy it to an HTTPS static host; do not open `index.html` as a `file://` URL. Tailwind CSS, Chart.js, Lucide, ExcelJS, and the Supabase browser SDK are loaded from CDNs, so an internet connection is needed.

## Supabase authentication and access control

ElectroPay requires a Supabase project. Until it is configured, the application remains on the login screen and does not load ledger records.

1. Create a Supabase project and run [`supabase/schema.sql`](./supabase/schema.sql) in its SQL Editor. For an existing ElectroPay project, make a database backup first, then apply the idempotent schema; it creates permission, notification, and recipient tables, migrates existing profile-based grants, and leaves legacy profile columns and business records intact.
2. In Supabase Authentication → Providers → Email, enable email/password sign-in, allow self-service sign-up, and enable **Confirm email**. Configure working email/SMTP delivery. In Authentication → URL Configuration, set the production Site URL and add the exact development/production HTTPS redirect URLs used by the app. Email confirmation is a project-level setting and cannot be enabled from the static client code. Keep the password minimum at 8 characters to match registration validation; the in-app password-change form requires at least 12.
3. Copy the project's Project URL and publishable/anon key into `url` and `anonKey` in [`js/supabase-config.js`](./js/supabase-config.js). These are browser-public values. Never use a `service_role` key or database password in frontend files.
4. Create the initial administrator account in Supabase Auth, then use that user's UUID in the following SQL to assign the initial administrator role; replace the UUID and display name:

   ```sql
   insert into public.profiles (user_id, organization_id, full_name, role, active)
   values (
     '<AUTH_USER_UUID>'::uuid,
     '8d711fa8-aeba-4e25-8e8d-759450822d4f'::uuid,
     '<ADMIN_DISPLAY_NAME>',
     'ADMIN',
     true
   );
   ```

5. Self-registering users create their own account with `supabase.auth.signUp()`. The SQL trigger in [`supabase/schema.sql`](./supabase/schema.sql) automatically creates a `public.profiles` row for each new user with the ElectroPay organization, `role = 'STAFF'`, and `active = true`. Staff receive no business-data permission until approved by an administrator. Manage pending/approved/suspended users, profile names, and access from Staff & User Management. Account deactivation is reversible; the initial administrator and other admin profiles cannot be modified through staff-management RPCs. The schema migrates existing profile-based grants into `public.electropay_permissions` while leaving legacy profile fields intact. Do not expose the Supabase service-role key. Passwords are managed only through Supabase Auth and cannot be viewed in ElectroPay.
6. Sign in as the initial administrator. If this browser has an older local ElectroPay ledger, first-time setup offers to import it into the new shared workspace. Confirming the import removes the old browser copy only after the cloud save succeeds. Canceling leaves both setup and the local ledger unchanged. Back up important local data before migration.

The SQL schema stores the existing application state as one revisioned JSON document per organization so existing ledger, receipt, backup, and restore behavior can be preserved. It denies direct client access to business state and permission/request/notification tables: access is mediated by authenticated RPCs, with staff grants stored in `electropay_permissions` and requests in `staff_access_requests`. Notifications use normalized `notifications` and `notification_recipients` tables, so each user can only read and mark their own notifications. Staff can request access but cannot grant it or promote themselves; administrators manage grants, suspensions, profile names, and notifications through organization-checked RPCs. `STAFF` can add a payment and manage customer details, but cannot edit/delete existing payments, restore or permanently delete records, restore/import backups, or change system settings. Staff payments must use the configured rate and cannot be backdated before the latest ledger entry. The database rejects stale revisions rather than silently overwriting another user's save.

If Staff Management or profile updates report that `electropay_list_staff()` or `electropay_update_my_profile(p_full_name)` cannot be found in the PostgREST schema cache, run [`supabase/migrations/20261006210000_restore_staff_management_rpcs.sql`](./supabase/migrations/20261006210000_restore_staff_management_rpcs.sql) in the Supabase SQL Editor. It restores both RPCs from the schema implementations, grants execution only to `authenticated`, and requests a PostgREST schema-cache reload. To inspect deployed function signatures first, run:

```sql
SELECT
  n.nspname AS schema_name,
  p.proname AS function_name,
  pg_get_function_identity_arguments(p.oid) AS arguments
FROM pg_proc p
JOIN pg_namespace n ON n.oid = p.pronamespace
WHERE n.nspname = 'public'
  AND p.proname IN (
    'electropay_list_staff',
    'electropay_update_my_profile'
  );
```

Registration, email verification, login/logout, access review, staff management, notification, payment, backup, and settings events are written to `public.audit_log`; only administrators can query the activity feed. Email addresses are read-only in ElectroPay. Users can update their own display name and change their password after re-authenticating through Supabase Auth. Configure password-recovery and email-confirmation redirect URLs for the deployed app. For production financial records, configure Supabase backups/retention and verify the provider's project security settings before inviting users.
