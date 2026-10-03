# ElectroPay

ElectroPay is a browser-based electricity payment ledger. Its interface and app logic are kept separate from the HTML so each part is easier to maintain.

## Project structure

- `index.html` - app page and external library loading
- `css/styles.css` - app-specific styling and print layouts
- `js/app.js` - app state, ledger calculations, screens, receipts, and backup logic

## Customer records

Customers are stored separately from payment records with a required `customerName` and optional `contactNumber` and `location`. Each payment references a customer by `customerId`; receipt numbers remain transaction references. Existing installations are migrated without guessing customer names: unlinked legacy payments are assigned to an editable customer whose name is left blank until updated.

JSON backups include the customer directory. Excel backups keep a Customer Directory sheet and link payment rows to customers by ID.

## Run

Open `index.html` in a browser. Tailwind CSS, Chart.js, Lucide, and ExcelJS are loaded from CDNs, so an internet connection is needed for those libraries.
