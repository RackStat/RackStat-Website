# RackStat website

Static, production-ready foundation for [rackstat.co.uk](https://rackstat.co.uk/). The site is deliberately built with plain HTML, CSS and a small amount of JavaScript so it can be hosted directly on GitHub Pages without a build step or backend.

## Project structure

```text
/
├── index.html
├── styles.css
├── scripts.js
├── CNAME
├── assets/
│   ├── diagrams/
│   ├── icons/
│   └── images/
└── pages/
    ├── privacy.html
    └── terms.html
```

## Preview locally

Open `index.html` directly in a browser, or serve the folder with any simple static file server. No package installation is required.

## Publish with GitHub Pages

1. Add these files to the root of the `RackStat-Website` repository.
2. In the repository settings, open **Pages**.
3. Select **Deploy from a branch** and publish the repository root from the chosen production branch.
4. Confirm the custom domain is `rackstat.co.uk`. The included `CNAME` file preserves that setting on deployment.
5. Configure the required DNS records with the domain provider and enable HTTPS once GitHub verifies the domain.

## Before the first public launch

- Replace the placeholder favicon, touch icon and social-sharing card with final brand assets.
- Add a professional contact address or connect a clearly labelled form service. Do not add a form until submissions have a real destination.
- Add only verified social profile URLs.
- Review every planned feature and development milestone against the latest project status.
- Replace concept hardware or interface visuals when genuine photography, PCB renders or firmware screenshots are available.
- Expand the privacy and terms pages before collecting personal information, accepting testing applications or offering a product for sale.

## Routine content updates

- Product copy and page sections live in `index.html`.
- Colours, spacing and responsive layout live in `styles.css`; the core design tokens are at the top of the file.
- Mobile navigation, current-year output and active section navigation live in `scripts.js`.
- Future social URLs can be added to the `socialLinks` configuration object near the top of `scripts.js`. Empty entries are intentionally not shown.

## Accuracy rules

RackStat is presented as a product in active development. Keep completed prototype work separate from planned V1 features. Do not add certification, release-date, pricing, customer-count or performance claims until they are factually supported.

The interface data on the homepage is explicitly labelled as demonstration data and must not be represented as live telemetry.

## Accessibility and performance

The site uses semantic sections, a skip link, keyboard-operable mobile navigation, visible focus styling, responsive technical layouts and reduced-motion support. It uses no external fonts, frameworks, analytics or runtime dependencies.
