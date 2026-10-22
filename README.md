# PrintBiz Manager

PrintBiz Manager is a demo web application for a printing and branding business. It is designed as a responsive single-page dashboard that helps owners manage orders, customers, inventory, payments, expenses and reporting in a simple local browser environment.

## Overview

The application is built using HTML5, CSS3 and vanilla JavaScript. It is intended to run as a static site on GitHub Pages and uses browser localStorage to retain sample data between visits. This demo uses fictional sample data only and does not include authentication or a secure database layer.

## Included features

- Dashboard with summary cards for order value, payments received, outstanding balances, expenses, estimated profit, pending orders and low-stock items.
- Order management with add, edit, search, filter, status tracking and delete controls.
- Customer directory with add, edit, search and order-count tracking.
- Inventory management for materials, stock movements, low-stock alerts and minimum stock configuration.
- Payments and expenses tracker to record customer payments and business costs.
- Reports section with monthly and daily summaries for sales, collections, outstanding balances, expenses and estimated profit.
- Demo data reset and localStorage management controls.

## File structure

- `index.html` — application layout and all UI sections.
- `styles.css` — responsive business dashboard styling.
- `app.js` — application logic, sample data, rendering and localStorage persistence.
- `README.md` — project overview and deployment notes.

## Local setup

1. Download or clone the repository.
2. Open the folder in a code editor.
3. You can run the app by opening `index.html` directly in a browser or by serving it locally with a static server.

Example using Python:

```bash
cd PrintBiz-Manager
python -m http.server 8000
```

Then open `http://localhost:8000` in your browser.

## GitHub Pages deployment

1. Push the repository to GitHub.
2. In the GitHub repository, go to Settings > Pages.
3. Under "Build and deployment", choose the branch as `main` and the folder as `/root`.
4. Save the settings.
5. GitHub Pages will publish the static site and provide the site URL.

## Important notes and limitations

- This is a front-end demo only; it stores data in browser localStorage.
- Data is not encrypted and is not intended for production multi-user use.
- No authentication, backend API, or secret management is included.
- The app is designed for demonstration and user testing, not secure business data handling.
- All sample values are fictional and intended for presentation only.

## Accessibility and usability

- Forms include labels and clear validation messaging.
- The layout is responsive for desktop, tablet and mobile screens.
- Buttons and forms are designed to be usable without hidden placeholder features.
- Monetary values are displayed in Nigerian naira format.
