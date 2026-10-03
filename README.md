# ElectroPay

ElectroPay is a browser-based electricity payment ledger. Its interface and app logic are kept separate from the HTML so each part is easier to maintain.

## Project structure

- `index.html` - app page and external library loading
- `css/styles.css` - app-specific styling and print layouts
- `js/app.js` - app state, ledger calculations, screens, receipts, and backup logic

## Run

Open `index.html` in a browser. Tailwind CSS, Chart.js, Lucide, and ExcelJS are loaded from CDNs, so an internet connection is needed for those libraries.
