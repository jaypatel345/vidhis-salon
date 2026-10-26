# Maison Aurélle — Hair Atelier

A complete, production-quality marketing website for a **fictional** premium hair
salon, built as an agency-grade demonstration.

> **Demo brand disclosure.** Maison Aurélle is a fictional sample brand. All
> business details (address, phone, email, hours), stylist profiles,
> testimonials, offers, prices, and policies are **illustrative placeholder
> content** for demonstration only — not verified real-world information.
> Replace everything marked as sample before any real launch.

## Stack

- **Next.js 16** (App Router) + **React 19**
- **TypeScript**
- **Tailwind CSS v4** (CSS-first `@theme` design tokens, via `@tailwindcss/postcss`)
- **lucide-react** icons
- **next/font** (Cormorant Garamond display serif + Jost sans body)
- **next/image** with remote optimization for Unsplash photography

## Getting started

```bash
npm install
npm run dev     # http://localhost:3000
```

Production:

```bash
npm run build
npm run start
```

Lint / type-check:

```bash
npm run lint
npx tsc --noEmit
```

## Pages (all routes verified 200)

| Route        | Page                                   |
|--------------|----------------------------------------|
| `/`          | Home (editorial, 12 sections)          |
| `/services`  | Services & pricing (4 categories)      |
| `/stylists`  | Our stylists (alternating profiles)    |
| `/gallery`   | Gallery (filters + accessible lightbox)|
| `/about`     | About / brand story                    |
| `/booking`   | Multi-step appointment booking (demo)  |
| `/contact`   | Contact (form + map + details)         |
| `/faq`       | FAQ (accessible accordions)            |
| `/privacy`   | Privacy policy (sample)                |
| `/terms`     | Terms & conditions (sample)            |
| `*`          | Custom 404 (`not-found.tsx`)           |

Plus generated `sitemap.xml` and `robots.txt`.

## Design system

Defined in `src/app/globals.css` via Tailwind `@theme` tokens:

- **Colors:** warm ivory ground, espresso ink, champagne/bronze accents.
- **Type:** Cormorant Garamond (display) + Jost (body); fluid `display-1/2/3` scale.
- **Motion:** scroll reveals, image zoom-on-hover, animated underlines — all
  respect `prefers-reduced-motion`.
- **A11y:** skip link, visible focus rings, semantic headings, labeled controls.

## Content is data-driven

Edit these files — no component changes needed:

- `src/data/site.ts` — name, contact, hours, social, nav
- `src/data/services.ts` — service menu, INR prices, durations
- `src/data/stylists.ts` — team profiles
- `src/data/testimonials.ts` — sample testimonials
- `src/data/faqs.ts` — FAQ content
- `src/data/gallery.ts` — gallery images + categories
- `src/data/images.ts` — verified Unsplash photo library + `unsplash()` helper

## Working interactions

- Desktop + mobile navigation (scroll-aware, scroll-locking mobile menu)
- Gallery category filtering + lightbox (click, prev/next, Esc, arrow keys)
- FAQ accordions (ARIA `expanded`/`controls`, keyboard operable)
- 6-step booking flow with per-step validation, progress indicator, summary,
  and confirmation screen
- Contact form with client-side validation and success state
- `SmartImage` renders a branded fallback instead of a broken image if a remote
  photo fails to load

## Honest limitations (demo-only behaviors)

- **Booking** is a **front-end demonstration**. Submitting does **not** send,
  store, or confirm a real appointment. The final step is structured as a clean
  integration boundary for a real scheduling API/backend.
- **Contact form** validates in the browser but does **not** transmit messages.
- **Map**, **social links**, and **Instagram** section use sample
  locations/handles — connect real ones before launch.
- **Structured data** (`HairSalon` JSON-LD) uses placeholder business values and
  deliberately contains **no fake ratings or reviews**.
- Photography is editorial/stock imagery illustrating the aesthetic — it does
  **not** document specific real client results.

## Image sources

All photography is served from Unsplash via `next/image`. The remote host is
allow-listed in `next.config.ts`. Every photo ID in `src/data/images.ts` was
verified reachable (HTTP 200) during the build.
