# ElectroPay

ElectroPay is a browser-based electricity payment ledger. Its interface and app logic are kept separate from the HTML so each part is easier to maintain.

## Project structure

- `index.html` - app page and external library loading
- `css/styles.css` - app-specific styling and print layouts
- `js/app.js` - app state, ledger calculations, screens, receipts, and backup logic

## Customer records

Customers are stored separately from payment records with a required `customerName` and optional `contactNumber` and `location`. Each payment references a customer by `customerId`; receipt numbers remain transaction references. Existing installations are migrated without guessing customer names: unlinked legacy payments are assigned to an editable customer whose name is left blank until updated.

JSON backups include the customer directory. Excel backups keep a Customer Directory sheet and link payment rows to customers by ID.

## Record numbers

Customers and payments have separate stable display references (`CUS-000001`, `PAY-000001`) in addition to their internal IDs. Existing IDs and receipt numbers are preserved. Monotonic number sequences are stored in app state and Excel backup metadata so deleting or restoring records does not renumber them or reuse issued numbers. S.N. values in tables are display positions and follow the current filtered/sorted list; payment-list serials continue across pages. Bills, meter readings, and sections are not separate record types in the current data model.

## Deleted records

Deleting a customer or payment moves it to Deleted Records instead of removing it immediately. Deleted customers and their active payments are grouped so restoring the customer restores the related payment history and recalculates active balances. Deleted payments are excluded from active lists, reports, receipts, and ledger calculations until restored. Permanently deleted items are recorded in a minimal local audit log.

Trash items are retained for one calendar month. Because ElectroPay currently runs entirely in the browser and stores data in `localStorage`, automatic expiration cleanup can only run when the application is opened; it cannot run while the browser/app is closed. Deleted-by metadata is recorded as `Local user` because this version has no authentication system. Do not treat browser-only cleanup as a server-enforced retention guarantee.

## Run

Open `index.html` in a browser. Tailwind CSS, Chart.js, Lucide, and ExcelJS are loaded from CDNs, so an internet connection is needed for those libraries.
