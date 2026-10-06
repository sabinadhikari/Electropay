-- Run this file in the Supabase SQL Editor for a new ElectroPay project.
-- New self-registered accounts are automatically assigned to the default
-- ElectroPay organization and created as STAFF users by the trigger below.

create extension if not exists pgcrypto;

create table if not exists public.organizations (
  id uuid primary key,
  name text not null,
  created_at timestamptz not null default now()
);

insert into public.organizations (id, name)
values ('8d711fa8-aeba-4e25-8e8d-759450822d4f', 'ElectroPay')
on conflict (id) do nothing;

create table if not exists public.profiles (
  user_id uuid primary key references auth.users (id) on delete cascade,
  organization_id uuid not null references public.organizations (id),
  full_name text not null default '',
  role text not null check (role in ('ADMIN', 'STAFF')),
  active boolean not null default true,
  created_at timestamptz not null default now()
);

create table if not exists public.staff_access_requests (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null unique references auth.users (id) on delete cascade,
  full_name text not null,
  email text not null,
  requested_access text not null default 'Existing business records',
  request_status text not null default 'PENDING' check (request_status in ('PENDING', 'APPROVED', 'REJECTED', 'REVOKED')),
  requested_at timestamptz not null default now(),
  reviewed_by uuid references auth.users (id) on delete set null,
  reviewed_at timestamptz,
  notes text
);

create table if not exists public.electropay_permissions (
  organization_id uuid not null references public.organizations (id) on delete cascade,
  user_id uuid not null references public.profiles (user_id) on delete cascade,
  permission_key text not null check (permission_key in ('BUSINESS_DATA_READ')),
  granted_by uuid references auth.users (id) on delete set null,
  granted_at timestamptz not null default now(),
  primary key (organization_id, user_id, permission_key)
);

create table if not exists public.notifications (
  id uuid primary key default gen_random_uuid(),
  organization_id uuid not null references public.organizations (id) on delete cascade,
  sender_id uuid references auth.users (id) on delete set null,
  title text not null check (length(trim(title)) between 1 and 160),
  message text not null check (length(trim(message)) between 1 and 5000),
  priority text not null default 'NORMAL' check (priority in ('LOW', 'NORMAL', 'HIGH')),
  created_at timestamptz not null default now(),
  archived_at timestamptz
);

create table if not exists public.notification_recipients (
  notification_id uuid not null references public.notifications (id) on delete cascade,
  user_id uuid not null references auth.users (id) on delete cascade,
  read_at timestamptz,
  primary key (notification_id, user_id)
);

create index if not exists notification_recipients_user_unread_idx
  on public.notification_recipients (user_id, read_at, notification_id);
create index if not exists notifications_org_created_idx
  on public.notifications (organization_id, created_at desc);

do $$
declare
  v_has_access_granted boolean;
  v_has_access_status boolean;
  v_has_access_requested_at boolean;
begin
  select exists (
    select 1 from information_schema.columns
    where table_schema = 'public' and table_name = 'profiles'
      and column_name = 'data_access_granted'
  ) into v_has_access_granted;
  select exists (
    select 1 from information_schema.columns
    where table_schema = 'public' and table_name = 'profiles'
      and column_name = 'access_status'
  ) into v_has_access_status;
  select exists (
    select 1 from information_schema.columns
    where table_schema = 'public' and table_name = 'profiles'
      and column_name = 'access_requested_at'
  ) into v_has_access_requested_at;

  if v_has_access_status then
    if v_has_access_requested_at then
      execute $migration$
        insert into public.staff_access_requests
          (user_id, full_name, email, request_status, requested_at)
        select p.user_id,
               p.full_name,
               coalesce(u.email, ''),
               p.access_status,
               coalesce(p.access_requested_at, p.created_at)
        from public.profiles p
        join auth.users u on u.id = p.user_id
        where p.role = 'STAFF'
          and p.access_status in ('PENDING', 'APPROVED', 'REJECTED', 'REVOKED')
        on conflict (user_id) do nothing
      $migration$;
    else
      execute $migration$
        insert into public.staff_access_requests
          (user_id, full_name, email, request_status, requested_at)
        select p.user_id,
               p.full_name,
               coalesce(u.email, ''),
               p.access_status,
               p.created_at
        from public.profiles p
        join auth.users u on u.id = p.user_id
        where p.role = 'STAFF'
          and p.access_status in ('PENDING', 'APPROVED', 'REJECTED', 'REVOKED')
        on conflict (user_id) do nothing
      $migration$;
    end if;
  end if;

  if v_has_access_granted then
    execute $migration$
      insert into public.electropay_permissions
        (organization_id, user_id, permission_key)
      select p.organization_id, p.user_id, 'BUSINESS_DATA_READ'
      from public.profiles p
      where p.role = 'STAFF' and p.data_access_granted
      on conflict (organization_id, user_id, permission_key) do nothing
    $migration$;
  end if;
end;
$$;

create or replace function public.handle_new_user_profile()
returns trigger
language plpgsql
security definer
set search_path = ''
as $$
begin
  if new.id = '6156f29e-bc99-4238-a33c-f0f8a31187ef'::uuid then
    return new;
  end if;

  insert into public.profiles (user_id, organization_id, full_name, role, active)
  values (
    new.id,
    '8d711fa8-aeba-4e25-8e8d-759450822d4f'::uuid,
    coalesce(new.raw_user_meta_data ->> 'full_name', ''),
    'STAFF',
    true
  )
  on conflict (user_id) do nothing;

  insert into public.audit_log (organization_id, actor_id, action, record_type, record_id)
  values (
    '8d711fa8-aeba-4e25-8e8d-759450822d4f'::uuid,
    new.id,
    'USER_REGISTERED',
    'USER',
    new.id::text
  );

  return new;
end;
$$;

drop trigger if exists on_auth_user_profile_created on auth.users;
create trigger on_auth_user_profile_created
after insert on auth.users
for each row execute procedure public.handle_new_user_profile();

create table if not exists public.electropay_state (
  organization_id uuid primary key references public.organizations (id),
  revision bigint not null default 0 check (revision >= 0),
  initialized boolean not null default false,
  payload jsonb not null default '{
    "version": "2.0",
    "settings": {
      "rate": 10,
      "receiptPrefix": "EPR-",
      "paymentMethods": ["Cash", "eSewa", "Khalti", "Bank Transfer"],
      "autoExcelBackup": true
    },
    "uiPreferences": {"lang": "en", "theme": "light"},
    "customers": [],
    "records": [],
    "numberSequences": {"customer": 0, "payment": 0},
    "deletedRecordIds": [],
    "trashAudit": []
  }'::jsonb,
  updated_at timestamptz not null default now()
);

insert into public.electropay_state (organization_id)
values ('8d711fa8-aeba-4e25-8e8d-759450822d4f')
on conflict (organization_id) do nothing;

create table if not exists public.audit_log (
  id bigint generated always as identity primary key,
  organization_id uuid not null references public.organizations (id),
  actor_id uuid references auth.users (id) on delete set null,
  action text not null,
  record_type text,
  record_id text,
  occurred_at timestamptz not null default now()
);

create or replace function public.log_electropay_email_verified()
returns trigger
language plpgsql
security definer
set search_path = ''
as $$
declare
  v_organization_id uuid;
begin
  if new.email_confirmed_at is not null
     and old.email_confirmed_at is distinct from new.email_confirmed_at then
    select p.organization_id into v_organization_id
    from public.profiles p
    where p.user_id = new.id;
    if v_organization_id is not null then
      insert into public.audit_log (organization_id, actor_id, action, record_type, record_id)
      values (v_organization_id, new.id, 'EMAIL_VERIFIED', 'USER', new.id::text);
    end if;
  end if;
  return new;
end
$$;

drop trigger if exists on_auth_user_email_verified on auth.users;
create trigger on_auth_user_email_verified
after update of email_confirmed_at on auth.users
for each row execute procedure public.log_electropay_email_verified();

alter table public.profiles enable row level security;
alter table public.staff_access_requests enable row level security;
alter table public.electropay_permissions enable row level security;
alter table public.notifications enable row level security;
alter table public.notification_recipients enable row level security;
alter table public.electropay_state enable row level security;
alter table public.audit_log enable row level security;

revoke all on public.organizations, public.profiles, public.staff_access_requests, public.electropay_permissions, public.notifications, public.notification_recipients, public.electropay_state, public.audit_log from anon, authenticated;
grant select on public.profiles, public.audit_log to authenticated;

drop function if exists public.electropay_current_profile();
create or replace function public.electropay_current_profile()
returns table (
  user_id uuid,
  organization_id uuid,
  organization_name text,
  role text,
  active boolean,
  full_name text,
  has_business_data_access boolean,
  access_status text,
  has_pending_access_request boolean,
  email_confirmed boolean
)
language sql
stable
security definer
set search_path = ''
as $$
  select p.user_id,
         p.organization_id,
         o.name,
         p.role,
         p.active,
         p.full_name,
         (p.active and (p.role = 'ADMIN' or exists (
           select 1
           from public.electropay_permissions ep
           where ep.organization_id = p.organization_id
             and ep.user_id = p.user_id
             and ep.permission_key = 'BUSINESS_DATA_READ'
         ))),
         case
           when not p.active then 'SUSPENDED'
           when p.role = 'ADMIN' or exists (
             select 1
             from public.electropay_permissions ep
             where ep.organization_id = p.organization_id
               and ep.user_id = p.user_id
               and ep.permission_key = 'BUSINESS_DATA_READ'
           ) then 'APPROVED'
           when (select r.request_status from public.staff_access_requests r
                   where r.user_id = p.user_id) = 'REVOKED' then 'SUSPENDED'
           else coalesce((
             select r.request_status
             from public.staff_access_requests r
             where r.user_id = p.user_id
           ), 'PENDING')
         end,
         exists (
             select 1 from public.staff_access_requests r
             where r.user_id = p.user_id and r.request_status = 'PENDING'
         ),
         u.email_confirmed_at is not null
  from public.profiles p
  join public.organizations o on o.id = p.organization_id
  join auth.users u on u.id = p.user_id
  where p.user_id = (select auth.uid())
$$;

create or replace function public.electropay_is_active_admin(target_organization uuid)
returns boolean
language sql
stable
security definer
set search_path = ''
as $$
  select exists (
    select 1
    from public.profiles p
    where p.user_id = (select auth.uid())
      and p.organization_id = target_organization
      and p.role = 'ADMIN'
      and p.active
  )
$$;

create or replace function public.electropay_list_staff()
returns table (
  user_id uuid,
  full_name text,
  email text,
  role text,
  active boolean,
  has_business_data_access boolean,
  access_status text,
  email_confirmed boolean,
  created_at timestamptz,
  last_sign_in_at timestamptz
)
language plpgsql
security definer
set search_path = ''
as $$
declare
  v_organization_id uuid;
begin
  select p.organization_id into v_organization_id
  from public.profiles p
  where p.user_id = (select auth.uid())
    and p.role = 'ADMIN'
    and p.active;

  if v_organization_id is null then
    raise exception 'Only an active administrator can view staff.' using errcode = '42501';
  end if;

  return query
  select p.user_id,
         p.full_name,
         coalesce(u.email, ''),
         p.role,
         p.active,
         (p.active and (p.role = 'ADMIN' or exists (
           select 1
           from public.electropay_permissions ep
           where ep.organization_id = p.organization_id
             and ep.user_id = p.user_id
             and ep.permission_key = 'BUSINESS_DATA_READ'
         ))),
         case
           when not p.active then 'SUSPENDED'
           when p.role = 'ADMIN' then 'APPROVED'
           when exists (
             select 1
             from public.electropay_permissions ep
             where ep.organization_id = p.organization_id
               and ep.user_id = p.user_id
               and ep.permission_key = 'BUSINESS_DATA_READ'
           ) then 'APPROVED'
           when r.request_status = 'REVOKED' then 'SUSPENDED'
           else coalesce(r.request_status, 'PENDING')
         end,
         u.email_confirmed_at is not null,
         p.created_at,
         u.last_sign_in_at
  from public.profiles p
  join auth.users u on u.id = p.user_id
  left join public.staff_access_requests r on r.user_id = p.user_id
  where p.organization_id = v_organization_id
    and p.role in ('ADMIN', 'STAFF')
  order by p.created_at;
end
$$;

create or replace function public.electropay_update_my_profile(p_full_name text)
returns void
language plpgsql
security definer
set search_path = ''
as $$
begin
  if nullif(trim(p_full_name), '') is null or length(trim(p_full_name)) > 120 then
    raise exception 'Enter a name between 1 and 120 characters.' using errcode = '22023';
  end if;
  update public.profiles set full_name = trim(p_full_name)
  where user_id = (select auth.uid());
  if not found then
    raise exception 'The ElectroPay profile could not be found.' using errcode = 'P0002';
  end if;
  insert into public.audit_log (organization_id, actor_id, action, record_type, record_id)
  select p.organization_id, p.user_id, 'PROFILE_UPDATED', 'USER', p.user_id::text
  from public.profiles p
  where p.user_id = (select auth.uid());
end
$$;

create or replace function public.electropay_update_staff_profile(p_user_id uuid, p_full_name text)
returns void
language plpgsql
security definer
set search_path = ''
as $$
declare
  v_profile public.profiles%rowtype;
begin
  select * into v_profile from public.profiles where user_id = p_user_id;
  if not found or v_profile.role <> 'STAFF' or not v_profile.active
     or not public.electropay_is_active_admin(v_profile.organization_id) then
    raise exception 'Only an active administrator can edit staff profiles.' using errcode = '42501';
  end if;
  if nullif(trim(p_full_name), '') is null or length(trim(p_full_name)) > 120 then
    raise exception 'Enter a name between 1 and 120 characters.' using errcode = '22023';
  end if;
  update public.profiles set full_name = trim(p_full_name) where user_id = p_user_id;
  insert into public.audit_log (organization_id, actor_id, action, record_type, record_id)
  values (v_profile.organization_id, (select auth.uid()), 'PROFILE_UPDATED', 'STAFF', p_user_id::text);
end
$$;

create or replace function public.electropay_set_staff_active(p_user_id uuid, p_active boolean)
returns void
language plpgsql
security definer
set search_path = ''
as $$
declare
  v_profile public.profiles%rowtype;
begin
  select * into v_profile from public.profiles where user_id = p_user_id;
  if not found or v_profile.role <> 'STAFF'
     or not public.electropay_is_active_admin(v_profile.organization_id) then
    raise exception 'Only an active administrator can change staff status.' using errcode = '42501';
  end if;

  update public.profiles set active = p_active where user_id = p_user_id;
  if not p_active then
    delete from public.electropay_permissions
    where organization_id = v_profile.organization_id
      and user_id = p_user_id
      and permission_key = 'BUSINESS_DATA_READ';
    update public.staff_access_requests
    set request_status = 'REVOKED',
        reviewed_by = (select auth.uid()),
        reviewed_at = now()
    where user_id = p_user_id;
  end if;

  insert into public.audit_log (organization_id, actor_id, action, record_type, record_id)
  values (v_profile.organization_id, (select auth.uid()),
          case when p_active then 'STAFF_REACTIVATED' else 'STAFF_SUSPENDED' end,
          'STAFF', p_user_id::text);
end
$$;

create or replace function public.electropay_reject_staff_access(p_user_id uuid, p_notes text default null)
returns void
language plpgsql
security definer
set search_path = ''
as $$
declare
  v_profile public.profiles%rowtype;
begin
  select * into v_profile from public.profiles where user_id = p_user_id;
  if not found or v_profile.role <> 'STAFF'
     or not public.electropay_is_active_admin(v_profile.organization_id) then
    raise exception 'Only an active administrator can reject staff access.' using errcode = '42501';
  end if;
  delete from public.electropay_permissions
  where organization_id = v_profile.organization_id
    and user_id = p_user_id
    and permission_key = 'BUSINESS_DATA_READ';
  insert into public.staff_access_requests
    (user_id, full_name, email, requested_access, request_status, reviewed_by, reviewed_at, notes)
  select p.user_id, p.full_name, coalesce(u.email, ''), 'Existing business records',
         'REJECTED', (select auth.uid()), now(), p_notes
  from public.profiles p join auth.users u on u.id = p.user_id
  where p.user_id = p_user_id
  on conflict (user_id) do update
  set request_status = 'REJECTED',
      reviewed_by = excluded.reviewed_by,
      reviewed_at = excluded.reviewed_at,
      notes = coalesce(excluded.notes, public.staff_access_requests.notes);
  insert into public.audit_log (organization_id, actor_id, action, record_type, record_id)
  values (v_profile.organization_id, (select auth.uid()), 'ACCESS_REJECTED', 'STAFF', p_user_id::text);
end
$$;

create or replace function public.electropay_list_activity(p_limit integer default 100)
returns table (
  id bigint,
  occurred_at timestamptz,
  actor_name text,
  actor_email text,
  action text,
  record_type text,
  record_id text
)
language plpgsql
security definer
set search_path = ''
as $$
declare
  v_organization_id uuid;
begin
  select p.organization_id into v_organization_id
  from public.profiles p
  where p.user_id = (select auth.uid()) and p.role = 'ADMIN' and p.active;
  if v_organization_id is null then
    raise exception 'Only an active administrator can view activity.' using errcode = '42501';
  end if;
  return query
  select a.id, a.occurred_at, coalesce(p.full_name, 'Former user'),
         coalesce(u.email, ''), a.action, a.record_type, a.record_id
  from public.audit_log a
  left join public.profiles p on p.user_id = a.actor_id
  left join auth.users u on u.id = a.actor_id
  where a.organization_id = v_organization_id
  order by a.occurred_at desc
  limit greatest(1, least(coalesce(p_limit, 100), 500));
end
$$;

create or replace function public.electropay_send_notification(
  p_title text,
  p_message text,
  p_priority text default 'NORMAL',
  p_user_ids uuid[] default null
)
returns uuid
language plpgsql
security definer
set search_path = ''
as $$
declare
  v_organization_id uuid;
  v_notification_id uuid;
  v_recipient_count integer;
begin
  select p.organization_id into v_organization_id
  from public.profiles p
  where p.user_id = (select auth.uid()) and p.role = 'ADMIN' and p.active;
  if v_organization_id is null then
    raise exception 'Only an active administrator can send notifications.' using errcode = '42501';
  end if;
  if nullif(trim(p_title), '') is null or length(trim(p_title)) > 160
     or nullif(trim(p_message), '') is null or length(trim(p_message)) > 5000
     or p_priority not in ('LOW', 'NORMAL', 'HIGH') then
    raise exception 'Enter a valid notification title, message, and priority.' using errcode = '22023';
  end if;
  if p_user_ids is not null and exists (
    select 1
    from unnest(p_user_ids) requested(user_id)
    left join public.profiles p
      on p.user_id = requested.user_id
     and p.organization_id = v_organization_id
     and p.role = 'STAFF'
     and p.active
    where p.user_id is null
  ) then
    raise exception 'Recipients must be active staff in the administrator organization.' using errcode = '42501';
  end if;

  insert into public.notifications (organization_id, sender_id, title, message, priority)
  values (v_organization_id, (select auth.uid()), trim(p_title), trim(p_message), p_priority)
  returning id into v_notification_id;

  insert into public.notification_recipients (notification_id, user_id)
  select v_notification_id, p.user_id
  from public.profiles p
  where p.organization_id = v_organization_id
    and p.role = 'STAFF'
    and p.active
    and (p_user_ids is null or p.user_id = any(p_user_ids));
  get diagnostics v_recipient_count = row_count;
  if v_recipient_count = 0 then
    raise exception 'Select at least one active staff recipient.' using errcode = '22023';
  end if;

  insert into public.audit_log (organization_id, actor_id, action, record_type, record_id)
  values (v_organization_id, (select auth.uid()), 'NOTIFICATION_SENT', 'NOTIFICATION', v_notification_id::text);
  return v_notification_id;
end
$$;

create or replace function public.electropay_list_my_notifications()
returns table (
  notification_id uuid,
  title text,
  message text,
  priority text,
  created_at timestamptz,
  read_at timestamptz
)
language sql
stable
security definer
set search_path = ''
as $$
  select n.id, n.title, n.message, n.priority, n.created_at, nr.read_at
  from public.notification_recipients nr
  join public.notifications n on n.id = nr.notification_id
  where nr.user_id = (select auth.uid()) and n.archived_at is null
  order by n.created_at desc
  limit 100
$$;

create or replace function public.electropay_mark_notification_read(p_notification_id uuid)
returns void
language plpgsql
security definer
set search_path = ''
as $$
begin
  update public.notification_recipients
  set read_at = coalesce(read_at, now())
  where notification_id = p_notification_id and user_id = (select auth.uid());
  if not found then
    raise exception 'Notification not found for this account.' using errcode = 'P0002';
  end if;
end
$$;

create or replace function public.electropay_admin_list_notifications()
returns table (
  notification_id uuid,
  title text,
  message text,
  priority text,
  created_at timestamptz,
  archived_at timestamptz,
  recipient_count bigint,
  read_count bigint
)
language plpgsql
security definer
set search_path = ''
as $$
declare
  v_organization_id uuid;
begin
  select p.organization_id into v_organization_id
  from public.profiles p
  where p.user_id = (select auth.uid()) and p.role = 'ADMIN' and p.active;
  if v_organization_id is null then
    raise exception 'Only an active administrator can manage notifications.' using errcode = '42501';
  end if;
  return query
  select n.id, n.title, n.message, n.priority, n.created_at, n.archived_at,
         count(nr.user_id), count(nr.read_at)
  from public.notifications n
  left join public.notification_recipients nr on nr.notification_id = n.id
  where n.organization_id = v_organization_id
  group by n.id
  order by n.created_at desc
  limit 100;
end
$$;

create or replace function public.electropay_archive_notification(p_notification_id uuid)
returns void
language plpgsql
security definer
set search_path = ''
as $$
begin
  update public.notifications n
  set archived_at = now()
  where n.id = p_notification_id
    and public.electropay_is_active_admin(n.organization_id);
  if not found then
    raise exception 'Notification not found or administrator access denied.' using errcode = '42501';
  end if;
end
$$;

drop policy if exists profiles_read_self_or_admin on public.profiles;
create policy profiles_read_self_or_admin
on public.profiles for select to authenticated
using (
  user_id = (select auth.uid())
  or public.electropay_is_active_admin(organization_id)
);

drop policy if exists profiles_update_self_or_admin on public.profiles;
drop policy if exists staff_access_requests_manage on public.staff_access_requests;

drop policy if exists audit_read_admin on public.audit_log;
create policy audit_read_admin
on public.audit_log for select to authenticated
using (public.electropay_is_active_admin(organization_id));

drop function if exists public.request_electropay_data_access(text);
create function public.request_electropay_data_access(p_requested_access text default 'Existing business records')
returns jsonb
language plpgsql
security definer
set search_path = ''
as $$
declare
  v_profile public.profiles%rowtype;
  v_request public.staff_access_requests%rowtype;
begin
  select * into v_profile from public.profiles where user_id = (select auth.uid());
  if not found or not v_profile.active then
    raise exception 'An active ElectroPay account is required.' using errcode = '42501';
  end if;
  if v_profile.role <> 'STAFF' then
    raise exception 'Only staff accounts can request business-data access.' using errcode = '42501';
  end if;
  if exists (
    select 1
    from public.electropay_permissions ep
    where ep.organization_id = v_profile.organization_id
      and ep.user_id = v_profile.user_id
      and ep.permission_key = 'BUSINESS_DATA_READ'
  ) then
    raise exception 'Business-data access has already been granted.' using errcode = '22023';
  end if;
  select * into v_request
  from public.staff_access_requests
  where user_id = v_profile.user_id
    and request_status = 'PENDING';
  if found then
    return jsonb_build_object('request', to_jsonb(v_request), 'already_pending', true);
  end if;

  insert into public.staff_access_requests (user_id, full_name, email, requested_access, request_status)
  values (
    v_profile.user_id,
    v_profile.full_name,
    (select email from auth.users where id = v_profile.user_id),
    coalesce(p_requested_access, 'Existing business records'),
    'PENDING'
  )
  on conflict (user_id) do update
    set requested_access = excluded.requested_access,
        full_name = excluded.full_name,
        email = excluded.email,
        request_status = 'PENDING',
        requested_at = now(),
        reviewed_by = null,
        reviewed_at = null,
        notes = null
  returning * into v_request;

  insert into public.audit_log (organization_id, actor_id, action, record_type, record_id)
  values (v_profile.organization_id, v_profile.user_id, 'ACCESS_REQUESTED', 'STAFF', v_profile.user_id::text);
  return jsonb_build_object('request', to_jsonb(v_request), 'already_pending', false);
end
$$;

create or replace function public.approve_staff_access(p_user_id uuid, p_notes text default null)
returns public.profiles
language plpgsql
security definer
set search_path = ''
as $$
declare
  v_profile public.profiles%rowtype;
begin
  select * into v_profile
  from public.profiles
  where user_id = p_user_id;
  if not found or v_profile.role <> 'STAFF' or not v_profile.active
     or not public.electropay_is_active_admin(v_profile.organization_id) then
    raise exception 'Only an active administrator can approve access.' using errcode = '42501';
  end if;

  insert into public.electropay_permissions
    (organization_id, user_id, permission_key, granted_by, granted_at)
  values (
    v_profile.organization_id,
    v_profile.user_id,
    'BUSINESS_DATA_READ',
    (select auth.uid()),
    now()
  )
  on conflict (organization_id, user_id, permission_key)
  do update set granted_by = excluded.granted_by, granted_at = excluded.granted_at;

  update public.staff_access_requests
  set request_status = 'APPROVED',
      reviewed_by = (select auth.uid()),
      reviewed_at = now(),
      notes = coalesce(p_notes, notes)
  where user_id = p_user_id;

  insert into public.staff_access_requests
    (user_id, full_name, email, requested_access, request_status, reviewed_by, reviewed_at, notes)
  select v_profile.user_id, v_profile.full_name, coalesce(u.email, ''),
         'Existing business records', 'APPROVED', (select auth.uid()), now(), p_notes
  from auth.users u
  where u.id = v_profile.user_id
  on conflict (user_id) do update
  set request_status = 'APPROVED',
      reviewed_by = excluded.reviewed_by,
      reviewed_at = excluded.reviewed_at,
      notes = coalesce(excluded.notes, public.staff_access_requests.notes);

  insert into public.audit_log (organization_id, actor_id, action, record_type, record_id)
  values (v_profile.organization_id, (select auth.uid()), 'ACCESS_APPROVED', 'STAFF', p_user_id::text);
  return v_profile;
end
$$;

create or replace function public.revoke_staff_access(p_user_id uuid, p_notes text default null)
returns void
language plpgsql
security definer
set search_path = ''
as $$
declare
  v_profile public.profiles%rowtype;
begin
  select * into v_profile
  from public.profiles
  where user_id = p_user_id;
  if not found or v_profile.role <> 'STAFF'
     or not public.electropay_is_active_admin(v_profile.organization_id) then
    raise exception 'Only an active administrator can revoke staff access.' using errcode = '42501';
  end if;

  delete from public.electropay_permissions
  where organization_id = v_profile.organization_id
    and user_id = v_profile.user_id
    and permission_key = 'BUSINESS_DATA_READ';

  update public.staff_access_requests
  set request_status = 'REVOKED',
      reviewed_by = (select auth.uid()),
      reviewed_at = now(),
      notes = coalesce(p_notes, notes)
  where user_id = p_user_id;

  insert into public.audit_log (organization_id, actor_id, action, record_type, record_id)
  values (v_profile.organization_id, (select auth.uid()), 'STAFF_SUSPENDED', 'STAFF', p_user_id::text);
end
$$;

create or replace function public.get_electropay_state()
returns jsonb
language plpgsql
security definer
set search_path = ''
as $$
declare
  v_profile record;
  v_state public.electropay_state%rowtype;
begin
  select * into v_profile from public.electropay_current_profile();
  if not found or not v_profile.active then
    raise exception 'An active ElectroPay account is required.' using errcode = '42501';
  end if;

  if v_profile.role = 'STAFF' and not v_profile.has_business_data_access then
    raise exception 'Access to existing business records is pending admin approval.' using errcode = '42501';
  end if;

  select * into v_state
  from public.electropay_state
  where organization_id = v_profile.organization_id;

  if not found then
    raise exception 'ElectroPay storage has not been initialized.' using errcode = 'P0002';
  end if;

  return jsonb_build_object(
    'state', v_state.payload,
    'revision', v_state.revision,
    'initialized', v_state.initialized
  );
end
$$;

create or replace function public.save_electropay_state(p_state jsonb, p_expected_revision bigint)
returns jsonb
language plpgsql
security definer
set search_path = ''
as $$
declare
  v_profile record;
  v_current public.electropay_state%rowtype;
  v_old jsonb;
  v_new_customer jsonb;
  v_old_customer jsonb;
  v_new_record jsonb;
  v_old_record jsonb;
  v_customer_id text;
  v_record_id text;
  v_deleted_id text;
  v_action text;
  v_revision bigint;
  v_new_payment_count integer;
  v_new_customer_count integer;
  v_new_customer_index integer := 0;
  v_last_payment_date text;
  v_new_record_position bigint;
  v_previous_reading double precision;
  v_current_reading double precision;
  v_rate double precision;
  v_amount_paid double precision;
  v_opening_bill double precision;
  v_previous_advance double precision;
  v_previous_due double precision;
  v_units double precision;
  v_bill_cost double precision;
  v_advance_applied double precision;
  v_net_payable double precision;
  v_new_advance double precision;
  v_new_due double precision;
  v_expected_status text;
  v_expected_customer_no text;
begin
  if p_state is null or jsonb_typeof(p_state) is distinct from 'object'
     or jsonb_typeof(p_state->'settings') is distinct from 'object'
     or jsonb_typeof(p_state->'uiPreferences') is distinct from 'object'
     or jsonb_typeof(p_state->'customers') is distinct from 'array'
     or jsonb_typeof(p_state->'records') is distinct from 'array'
     or jsonb_typeof(p_state->'deletedRecordIds') is distinct from 'array'
     or jsonb_typeof(p_state->'trashAudit') is distinct from 'array'
     or jsonb_typeof(p_state->'numberSequences') is distinct from 'object'
     or coalesce(p_state->'numberSequences'->>'customer', '') !~ '^[0-9]+$'
     or coalesce(p_state->'numberSequences'->>'payment', '') !~ '^[0-9]+$'
     or jsonb_typeof(p_state->'settings'->'paymentMethods') is distinct from 'array' then
    raise exception 'Invalid ElectroPay state.' using errcode = '22023';
  end if;
  if exists (
    select 1 from jsonb_array_elements(p_state->'records') item
    group by item->>'id' having item->>'id' is null or count(*) > 1
  ) or exists (
    select 1 from jsonb_array_elements(p_state->'customers') item
    group by item->>'id' having item->>'id' is null or count(*) > 1
  ) then
    raise exception 'ElectroPay record identifiers must be present and unique.' using errcode = '22023';
  end if;

  select * into v_profile from public.electropay_current_profile();
  if not found or not v_profile.active then
    raise exception 'An active ElectroPay account is required.' using errcode = '42501';
  end if;
  if v_profile.role = 'STAFF' and not v_profile.has_business_data_access then
    raise exception 'Access to existing business records is pending admin approval.' using errcode = '42501';
  end if;

  select * into v_current
  from public.electropay_state
  where organization_id = v_profile.organization_id
  for update;
  if not found then
    raise exception 'ElectroPay storage has not been initialized.' using errcode = 'P0002';
  end if;
  if v_current.revision <> p_expected_revision then
    raise exception 'ElectroPay data changed in another session. Reload before saving.' using errcode = '40001';
  end if;

  v_old := v_current.payload;
  if not v_current.initialized and v_profile.role <> 'ADMIN' then
    raise exception 'An administrator must initialize ElectroPay before staff can use it.' using errcode = '42501';
  end if;

  if v_current.initialized and v_profile.role <> 'ADMIN' then
    if p_state->'settings' is distinct from v_old->'settings'
       or p_state->'deletedRecordIds' is distinct from v_old->'deletedRecordIds'
       or p_state->'trashAudit' is distinct from v_old->'trashAudit'
       or p_state->'version' is distinct from v_old->'version'
       or (p_state->'numberSequences'->>'customer')::bigint
          < (v_old->'numberSequences'->>'customer')::bigint
       or (p_state->'numberSequences'->>'payment')::bigint
          < (v_old->'numberSequences'->>'payment')::bigint then
      raise exception 'This action requires an administrator role.' using errcode = '42501';
    end if;

    select count(*) into v_new_payment_count
    from jsonb_array_elements(p_state->'records') item
    where not exists (
      select 1 from jsonb_array_elements(v_old->'records') old_item
      where old_item->>'id' = item->>'id'
    );
    select count(*) into v_new_customer_count
    from jsonb_array_elements(p_state->'customers') item
    where not exists (
      select 1 from jsonb_array_elements(v_old->'customers') old_item
      where old_item->>'id' = item->>'id'
    );
    if v_new_payment_count > 1
       or (p_state->'numberSequences'->>'payment')::bigint
          <> (v_old->'numberSequences'->>'payment')::bigint + v_new_payment_count
       or (p_state->'numberSequences'->>'customer')::bigint
          <> (v_old->'numberSequences'->>'customer')::bigint + v_new_customer_count then
      raise exception 'Staff may add one payment per save and may not reserve unused record numbers.' using errcode = '42501';
    end if;

    for v_new_customer in
      select customers.item
      from jsonb_array_elements(p_state->'customers') with ordinality as customers(item, position)
      where not exists (
        select 1 from jsonb_array_elements(v_old->'customers') old_item
        where old_item->>'id' = customers.item->>'id'
      )
      order by customers.position
    loop
      v_new_customer_index := v_new_customer_index + 1;
      v_expected_customer_no := 'CUS-' || lpad(
        ((v_old->'numberSequences'->>'customer')::bigint + v_new_customer_index)::text, 6, '0'
      );
      if coalesce((v_new_customer->>'isDeleted')::boolean, false)
         or coalesce(v_new_customer->>'customerName', '') = ''
         or v_new_customer->>'customerNo' is distinct from v_expected_customer_no then
        raise exception 'Staff may only add active customers with a name.' using errcode = '22023';
      end if;
    end loop;

    for v_old_record in
      select value from jsonb_array_elements(coalesce(v_old->'records', '[]'::jsonb))
    loop
      v_record_id := v_old_record->>'id';
      select value into v_new_record
      from jsonb_array_elements(p_state->'records')
      where value->>'id' = v_record_id
      limit 1;
      if v_new_record is null or v_new_record is distinct from v_old_record then
        raise exception 'Staff may add payments but cannot edit, delete, restore, or permanently remove existing payment records.' using errcode = '42501';
      end if;
    end loop;

    for v_old_customer in
      select value from jsonb_array_elements(coalesce(v_old->'customers', '[]'::jsonb))
    loop
      v_customer_id := v_old_customer->>'id';
      select value into v_new_customer
      from jsonb_array_elements(p_state->'customers')
      where value->>'id' = v_customer_id
      limit 1;
      if v_new_customer is null
         or (v_new_customer - array['customerName', 'contactNumber', 'location', 'updatedAt'])
            is distinct from
            (v_old_customer - array['customerName', 'contactNumber', 'location', 'updatedAt']) then
        raise exception 'Staff may edit customer details but cannot delete customers or change their protected fields.' using errcode = '42501';
      end if;
    end loop;

    if v_new_payment_count = 1 then
      select rows.item->>'date'
      into v_last_payment_date
      from jsonb_array_elements(v_old->'records') with ordinality as rows(item, position)
      where not coalesce((rows.item->>'isDeleted')::boolean, false)
      order by rows.item->>'date' desc, rows.position desc
      limit 1;

      select rows.item, rows.position
      into v_new_record, v_new_record_position
      from jsonb_array_elements(p_state->'records') with ordinality as rows(item, position)
      where not exists (
        select 1 from jsonb_array_elements(v_old->'records') old_item
        where old_item->>'id' = rows.item->>'id'
      )
      limit 1;

      if v_new_record->>'date' is null
         or v_new_record->>'date' !~ '^[0-9]{4}-[0-9]{2}-[0-9]{2}$'
         or (v_last_payment_date is not null and v_new_record->>'date' < v_last_payment_date)
         or coalesce((v_new_record->>'isDeleted')::boolean, false) then
        raise exception 'Staff must add an active payment dated no earlier than the latest ledger entry.' using errcode = '42501';
      end if;
      if coalesce(v_new_record->>'paymentNo', '') <>
           'PAY-' || lpad(((v_old->'numberSequences'->>'payment')::bigint + 1)::text, 6, '0')
         or coalesce(v_new_record->>'receiptNo', '') <>
           coalesce(v_old->'settings'->>'receiptPrefix', 'EPR-') || lpad(v_new_record_position::text, 6, '0') then
        raise exception 'The new payment must use the next assigned payment and receipt numbers.' using errcode = '22023';
      end if;

      if not exists (
        select 1 from jsonb_array_elements(p_state->'customers') item
        where item->>'id' = v_new_record->>'customerId'
          and not coalesce((item->>'isDeleted')::boolean, false)
      ) then
        raise exception 'A payment must reference an active customer.' using errcode = '22023';
      end if;

      v_previous_reading := nullif(v_new_record->>'previousReading', '')::double precision;
      v_current_reading := (v_new_record->>'currentReading')::double precision;
      v_rate := (v_new_record->>'rate')::double precision;
      v_amount_paid := (v_new_record->>'amountPaid')::double precision;
      v_opening_bill := coalesce((v_new_record->>'openingBillAmount')::double precision, 0);
      if v_current_reading is null or v_rate is null or v_amount_paid is null
         or v_current_reading < 0 or v_rate < 0 or v_amount_paid < 0 or v_opening_bill < 0
         or (v_previous_reading is not null and (v_previous_reading < 0 or v_current_reading < v_previous_reading))
         or (v_previous_reading is not null and v_opening_bill <> 0)
         or v_rate <> (v_old->'settings'->>'rate')::double precision then
        raise exception 'Staff payment amounts and readings must be valid and use the configured billing rate.' using errcode = '22023';
      end if;

      if (
  v_new_record->>'readingType' is distinct from
    (
      case
        when v_previous_reading is null then 'FIRST'
        else 'NORMAL'
      end
    )
  or not exists (
    select 1
    from jsonb_array_elements(
      coalesce(v_old->'settings'->'paymentMethods', '[]'::jsonb)
    ) as methods(method)
    where methods.method #>> '{}' = v_new_record->>'paymentMethod'
  )
) then
  raise exception
    'Staff payments must use a valid reading type and configured payment method.'
    using errcode = '22023';
end if;

      select coalesce(rows.item->>'newAdvance', '0')::double precision,
             coalesce(rows.item->>'newDue', '0')::double precision
      into v_previous_advance, v_previous_due
      from jsonb_array_elements(v_old->'records') with ordinality as rows(item, position)
      where rows.item->>'customerId' = v_new_record->>'customerId'
        and not coalesce((rows.item->>'isDeleted')::boolean, false)
      order by rows.item->>'date' desc, rows.position desc
      limit 1;
      v_previous_advance := coalesce(v_previous_advance, 0);
      v_previous_due := coalesce(v_previous_due, 0);
      v_units := case when v_previous_reading is null
        then 0 else greatest(0, v_current_reading - v_previous_reading) end;
      v_bill_cost := case when v_previous_reading is null
        then v_opening_bill else v_units * v_rate end;
      v_advance_applied := least(v_previous_advance, v_bill_cost);
      v_net_payable := v_bill_cost - v_advance_applied + v_previous_due;
      v_new_advance := v_previous_advance - v_advance_applied
        + greatest(0, v_amount_paid - v_net_payable);
      v_new_due := greatest(0, v_net_payable - v_amount_paid);
      v_expected_status := case
        when v_new_due > 0 and v_previous_reading is null and v_opening_bill > 0 then 'DUE'
        when v_new_due > 0 and v_amount_paid > 0 then 'PARTIAL'
        when v_new_due > 0 then 'DUE'
        when v_new_advance > 0 then 'ADVANCE'
        else 'PAID'
      end;
      if (v_new_record->>'units')::double precision is distinct from v_units
         or (v_new_record->>'billCost')::double precision is distinct from v_bill_cost
         or (v_new_record->>'previousAdvance')::double precision is distinct from v_previous_advance
         or (v_new_record->>'advanceApplied')::double precision is distinct from v_advance_applied
         or (v_new_record->>'previousDue')::double precision is distinct from v_previous_due
         or (v_new_record->>'netPayable')::double precision is distinct from v_net_payable
         or (v_new_record->>'newAdvance')::double precision is distinct from v_new_advance
         or (v_new_record->>'newDue')::double precision is distinct from v_new_due
         or v_new_record->>'status' is distinct from v_expected_status then
        raise exception 'The payment totals do not match the ledger calculation.' using errcode = '22023';
      end if;
    end if;
  end if;

  if coalesce(v_current.initialized, false) then
    for v_new_customer in
      select value from jsonb_array_elements(p_state->'customers')
    loop
      v_customer_id := v_new_customer->>'id';
      select value into v_old_customer
      from jsonb_array_elements(v_old->'customers')
      where value->>'id' = v_customer_id
      limit 1;
      if v_old_customer is null then
        insert into public.audit_log (organization_id, actor_id, action, record_type, record_id)
        values (v_profile.organization_id, v_profile.user_id, 'CUSTOMER_CREATED', 'CUSTOMER', v_customer_id);
      elsif v_old_customer->'isDeleted' is distinct from v_new_customer->'isDeleted' then
        insert into public.audit_log (organization_id, actor_id, action, record_type, record_id)
        values (
          v_profile.organization_id, v_profile.user_id,
          case when coalesce((v_new_customer->>'isDeleted')::boolean, false)
            then 'CUSTOMER_DELETED' else 'CUSTOMER_RESTORED' end,
          'CUSTOMER', v_customer_id
        );
      elsif v_old_customer is distinct from v_new_customer then
        insert into public.audit_log (organization_id, actor_id, action, record_type, record_id)
        values (v_profile.organization_id, v_profile.user_id, 'CUSTOMER_UPDATED', 'CUSTOMER', v_customer_id);
      end if;
    end loop;

    for v_new_record in
      select value from jsonb_array_elements(p_state->'records')
    loop
      v_record_id := v_new_record->>'id';
      select value into v_old_record
      from jsonb_array_elements(v_old->'records')
      where value->>'id' = v_record_id
      limit 1;

      if v_old_record is null then
        v_action := 'PAYMENT_CREATED';
      elsif coalesce((v_old_record->>'isDeleted')::boolean, false)
        and not coalesce((v_new_record->>'isDeleted')::boolean, false) then
        v_action := 'PAYMENT_RESTORED';
      elsif not coalesce((v_old_record->>'isDeleted')::boolean, false)
        and coalesce((v_new_record->>'isDeleted')::boolean, false) then
        v_action := 'PAYMENT_DELETED';
      elsif v_profile.role = 'ADMIN' and v_old_record is distinct from v_new_record then
        v_action := 'PAYMENT_UPDATED';
      else
        v_action := null;
      end if;

      if v_action is not null then
        insert into public.audit_log (organization_id, actor_id, action, record_type, record_id)
        values (v_profile.organization_id, v_profile.user_id, v_action, 'PAYMENT', v_record_id);
      end if;
    end loop;

    for v_old_record in
      select value from jsonb_array_elements(v_old->'records')
    loop
      if not exists (
        select 1 from jsonb_array_elements(p_state->'records') item
        where item->>'id' = v_old_record->>'id'
      ) then
        insert into public.audit_log (organization_id, actor_id, action, record_type, record_id)
        values (v_profile.organization_id, v_profile.user_id, 'RECORD_PERMANENTLY_DELETED', 'PAYMENT', v_old_record->>'id');
      end if;
    end loop;

    for v_old_customer in
      select value from jsonb_array_elements(v_old->'customers')
    loop
      if not exists (
        select 1 from jsonb_array_elements(p_state->'customers') item
        where item->>'id' = v_old_customer->>'id'
      ) then
        insert into public.audit_log (organization_id, actor_id, action, record_type, record_id)
        values (v_profile.organization_id, v_profile.user_id, 'RECORD_PERMANENTLY_DELETED', 'CUSTOMER', v_old_customer->>'id');
      end if;
    end loop;

    if v_profile.role = 'ADMIN' and v_old->'settings' is distinct from p_state->'settings' then
      insert into public.audit_log (organization_id, actor_id, action, record_type)
      values (v_profile.organization_id, v_profile.user_id, 'SETTINGS_CHANGED', 'SETTINGS');
    end if;
  end if;

  v_revision := v_current.revision + 1;
  update public.electropay_state
  set payload = p_state,
      initialized = true,
      revision = v_revision,
      updated_at = now()
  where organization_id = v_profile.organization_id;

  return jsonb_build_object('revision', v_revision);
end
$$;

create or replace function public.log_electropay_event(p_action text)
returns void
language plpgsql
security definer
set search_path = ''
as $$
declare
  v_profile record;
begin
  select * into v_profile from public.electropay_current_profile();
  if not found then
    raise exception 'An authenticated ElectroPay account is required.' using errcode = '42501';
  end if;
  if p_action not in ('LOGIN', 'LOGOUT', 'BACKUP_CREATED', 'BACKUP_RESTORED') then
    raise exception 'Unsupported audit action.' using errcode = '22023';
  end if;
  if p_action in ('BACKUP_CREATED', 'BACKUP_RESTORED') and v_profile.role <> 'ADMIN' then
    raise exception 'This action requires an administrator role.' using errcode = '42501';
  end if;
  if p_action in ('BACKUP_CREATED', 'BACKUP_RESTORED') and not v_profile.active then
    raise exception 'An active administrator account is required.' using errcode = '42501';
  end if;

  insert into public.audit_log (organization_id, actor_id, action)
  values (v_profile.organization_id, v_profile.user_id, p_action);
end
$$;

revoke all on function public.electropay_current_profile() from public, anon;
revoke all on function public.electropay_is_active_admin(uuid) from public, anon;
revoke all on function public.electropay_list_staff() from public, anon;
revoke all on function public.electropay_update_my_profile(text) from public, anon;
revoke all on function public.electropay_update_staff_profile(uuid, text) from public, anon;
revoke all on function public.electropay_set_staff_active(uuid, boolean) from public, anon;
revoke all on function public.electropay_reject_staff_access(uuid, text) from public, anon;
revoke all on function public.electropay_list_activity(integer) from public, anon;
revoke all on function public.request_electropay_data_access(text) from public, anon;
revoke all on function public.approve_staff_access(uuid, text) from public, anon;
revoke all on function public.revoke_staff_access(uuid, text) from public, anon;
revoke all on function public.electropay_send_notification(text, text, text, uuid[]) from public, anon;
revoke all on function public.electropay_list_my_notifications() from public, anon;
revoke all on function public.electropay_mark_notification_read(uuid) from public, anon;
revoke all on function public.electropay_admin_list_notifications() from public, anon;
revoke all on function public.electropay_archive_notification(uuid) from public, anon;
revoke all on function public.get_electropay_state() from public, anon;
revoke all on function public.save_electropay_state(jsonb, bigint) from public, anon;
revoke all on function public.log_electropay_event(text) from public, anon;
grant execute on function public.electropay_current_profile() to authenticated;
grant execute on function public.electropay_is_active_admin(uuid) to authenticated;
grant execute on function public.electropay_list_staff() to authenticated;
grant execute on function public.electropay_update_my_profile(text) to authenticated;
grant execute on function public.electropay_update_staff_profile(uuid, text) to authenticated;
grant execute on function public.electropay_set_staff_active(uuid, boolean) to authenticated;
grant execute on function public.electropay_reject_staff_access(uuid, text) to authenticated;
grant execute on function public.electropay_list_activity(integer) to authenticated;
grant execute on function public.request_electropay_data_access(text) to authenticated;
grant execute on function public.approve_staff_access(uuid, text) to authenticated;
grant execute on function public.revoke_staff_access(uuid, text) to authenticated;
grant execute on function public.electropay_send_notification(text, text, text, uuid[]) to authenticated;
grant execute on function public.electropay_list_my_notifications() to authenticated;
grant execute on function public.electropay_mark_notification_read(uuid) to authenticated;
grant execute on function public.electropay_admin_list_notifications() to authenticated;
grant execute on function public.electropay_archive_notification(uuid) to authenticated;
grant execute on function public.get_electropay_state() to authenticated;
grant execute on function public.save_electropay_state(jsonb, bigint) to authenticated;
grant execute on function public.log_electropay_event(text) to authenticated;
