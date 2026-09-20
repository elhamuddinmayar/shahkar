# Shahkar Software Solution website

A React and Vite website for Shahkar Software Solution. The interface uses the supplied Shahkar logo and a deep blue, orange, and white design system.

The homepage uses a lightweight animated Shahkar logo composition created with CSS. It respects reduced-motion preferences and does not require a 3D library.

## Run locally

```bash
npm install
npm run dev
```

Build for production with `npm run build`.

## Content

- `src/data/company.js` holds company details and the capability statements. Add the verified email, phone, and social links there when available.
- `src/data/content.js` holds the navigation, services, solution areas, concept studies, technologies, process, and industries.
- The project visuals are interface concepts with illustrative data. Replace them with approved project assets and facts before presenting them as client work.
- The contact form prepares an email when `company.email` is set. Until then, it copies the inquiry so visitors do not mistake it for a submitted message.

## Pages

The home page introduces each major area. Dedicated routes cover services, solutions, concept studies, about, technology, insights, and contact. The insights page is ready for verified articles when they exist.
