# Shahkar Software Solutions — Website

A professional multi-page marketing site for Shahkar, built with **React + Vite** and **Tailwind CSS**.
The navbar and footer are shared across every page via a single `Layout` component, so editing either
one updates the whole site.

## Getting started

```bash
npm install
npm run dev       # start local dev server
npm run build      # production build → dist/
npm run preview    # preview the production build locally
```

## Project structure

```
src/
  components/       Navbar, Footer, Layout, and shared UI (PageHero, CTASection, StatGrid, SocialIcon)
  pages/            One file per route (Home, About, Services, Products, Projects,
                     Pricing, Gallery, Team, Blog, Contact, Privacy, Terms, NotFound)
  data/
    nav.js          Navigation links, footer links, and company contact info — edit this
                     file to update the address/phone/email shown across the whole site
    content.js       All page content: services, products, projects, pricing plans,
                     team members, blog posts, testimonials, gallery items
  index.css         Global styles, color tokens, and reusable utility classes (.btn-primary, .card, etc.)
```

## Editing content

- **Contact details, nav links, footer links** → `src/data/nav.js`
- **Services, products, projects, pricing, team, blog posts, testimonials** → `src/data/content.js`
- Both files are plain JavaScript arrays/objects — no need to touch component code to update copy.

## Brand system

Colors, fonts and spacing tokens live in `tailwind.config.js` under `theme.extend`:

- `ink` — near-black/navy tones (backgrounds, dark sections)
- `brand` — the core Shahkar blue, pulled from the logo
- `sky` — lighter accent blue for gradients
- `mist` — light neutral backgrounds

Fonts: **Space Grotesk** for headings, **Inter** for body text, **JetBrains Mono** for small
uppercase labels — loaded via Google Fonts in `index.html`.

## Contact form (EmailJS)

The contact form and both newsletter forms send messages straight from the browser using
[EmailJS](https://www.emailjs.com/), so there's no backend to host.

All EmailJS settings live in one file: **`src/data/emailjs.js`**.

```js
export const EMAILJS_CONFIG = {
  SERVICE_ID: 'YOUR_SERVICE_ID',
  TEMPLATE_ID: 'YOUR_TEMPLATE_ID',
  NEWSLETTER_TEMPLATE_ID: 'YOUR_TEMPLATE_ID',
  PUBLIC_KEY: 'YOUR_PUBLIC_KEY',
  TO_EMAIL: 'elhamuddinmayar@gmail.com',
}
```

To finish wiring it up:

1. Log in at https://dashboard.emailjs.com
2. **Email Services** → copy your Service ID → paste into `SERVICE_ID`
3. **Email Templates** → open (or create) your template → copy its Template ID → paste into
   `TEMPLATE_ID` (and `NEWSLETTER_TEMPLATE_ID`, or make a second simpler template for
   newsletter signups and use its ID there instead)
4. In the template editor, set:
   - **To Email**: `elhamuddinmayar@gmail.com`
   - **Reply To**: `{{from_email}}` — so you can hit reply in Gmail and it goes straight
     to the visitor, not back to yourself
   - Body variables available: `{{from_name}}`, `{{from_email}}`, `{{phone}}`,
     `{{subject}}`, `{{message}}`
5. **Account** → **General** → copy your Public Key → paste into `PUBLIC_KEY`
6. Rebuild (`npm run build`) or restart `npm run dev` — the form will now send real emails.

Until these four placeholder values are filled in, submitting the form will show the
red error state (this is expected — it's not broken, it just doesn't have real credentials yet).

## Before going live

1. Replace the placeholder contact details in `src/data/nav.js` (phone, email, address) with real ones.
2. Swap the placeholder team member names in `src/data/content.js` with your actual team, and
   the placeholder project/testimonial copy with real client work once you have it.
3. Wire the contact form (`src/pages/Contact.jsx`) and the newsletter forms (`Footer.jsx`, `Blog.jsx`)
   to a real backend or a service like Formspree/Resend — they currently just show a success state locally.
4. Add a real embedded map in `src/pages/Contact.jsx` where the placeholder panel is.
