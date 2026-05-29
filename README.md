# Lunamar Digital

Premium marketing website for **Lunamar Digital** — a digital agency offering
websites, SEO and marketing through simple monthly membership plans.

> **Tagline:** Websites. Marketing. Growth.
> **Sales hook:** No-upfront websites and digital growth plans from £97/month.

---

## Brand overview

- **Positioning:** Lunamar Digital helps growing businesses build better
  websites, stronger visibility and smarter marketing systems. Not local-only —
  it works with growing businesses generally.
- **Style:** Premium, futuristic, dark, minimal, moon/eclipse inspired. Black
  background, white typography, blue/purple glow accents, glassmorphism panels,
  smooth motion.
- **Business model:** Monthly membership plans instead of large upfront build
  fees (website, hosting, maintenance and small updates bundled monthly).

---

## Tech stack

| Area       | Choice                                  |
| ---------- | --------------------------------------- |
| Framework  | Next.js 15 (App Router)                 |
| Language   | TypeScript                              |
| Styling    | Tailwind CSS v4 (CSS-first `@theme`)    |
| Fonts      | `next/font` — Inter + Space Grotesk     |
| Animation  | CSS animations + IntersectionObserver   |
| Backend    | None (static-first). Contact = mailto.  |

No animation library, database, auth or payment system is used — animations are
pure CSS (with `prefers-reduced-motion` support) to keep the bundle small.

---

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run start    # serve the production build
npm run lint     # ESLint
```

> **Windows note:** if `node`/`npm` aren't on your PATH, this repo was built
> against Node installed at `C:\Program Files\nodejs`. The preview config in
> `.claude/launch.json` points directly at that `node.exe`.

---

## Pages

| Route                          | Purpose                                        |
| ------------------------------ | ---------------------------------------------- |
| `/`                            | Homepage (all sections)                        |
| `/services`                    | Services deep-dive + optional ecommerce add-on |
| `/pricing`                     | All plans, comparison table, terms, FAQ        |
| `/work`                        | Case-study listing                             |
| `/case-studies/gym-vibe-cafe`  | Gym Vibe Café case study                       |
| `/contact`                     | Free-preview request form (mailto)             |
| `/privacy`                     | Plain-language privacy summary                 |
| `sitemap.xml`, `robots.txt`    | Generated from `siteConfig` + data files       |

Each page renders exactly **one `<h1>`** for a correct document outline.

---

## Project structure

```
src/
  app/            # routes, layout, globals.css, sitemap, robots, icon, og
  components/     # UI components
    sections/     # homepage section blocks
  data/           # ← single source of truth for content
  types/          # shared TypeScript types
public/
  og.svg          # social share image (replace with branded PNG)
  images/
    logo/         # drop real logo assets here
    case-studies/ # drop approved screenshots here
```

---

## Editing content

Content lives in **`src/data/`** — avoid hard-coding copy in components.

| To change…                       | Edit                       |
| -------------------------------- | -------------------------- |
| Pricing & plan features          | `src/data/pricing.ts`      |
| Services                         | `src/data/services.ts`     |
| Case studies                     | `src/data/caseStudies.ts`  |
| FAQs                             | `src/data/faqs.ts`         |
| Value strip / process / outcomes | `src/data/content.ts`      |
| Navigation & CTAs                | `src/data/navigation.ts`   |
| Contact, domain, socials, OG     | `src/data/siteConfig.ts`   |

### Update pricing

Edit the `pricingPlans` array in `src/data/pricing.ts`. The same data powers the
homepage pricing section, the pricing page cards and the comparison table (update
`comparisonFeatures` too if you add/rename a plan). `included`, `notIncluded`
and `terms` drive the pricing-page detail blocks.

### Update services

Edit `services` (the six core cards) and `optionalService` (the ecommerce
add-on) in `src/data/services.ts`. Icons map to keys in
`src/components/Icon.tsx`.

### Update case studies

Edit `caseStudies` in `src/data/caseStudies.ts`. Keep status wording honest
(e.g. "Active project") and avoid claiming launches or results that aren't real.

### Update contact info

Everything lives in `src/data/siteConfig.ts`: `email`, `domain`, `url`,
`socials`. Change them once and the header, footer, contact page, privacy page,
metadata and sitemap all follow.

---

## Configuring the canonical domain / URL

Set `siteConfig.url` in `src/data/siteConfig.ts`. It feeds `metadataBase`,
Open Graph URLs, canonical tags, `sitemap.xml` and `robots.txt`. No fake
canonical domain is hard-coded anywhere else.

---

## Adding the real logo

1. Add files to `public/images/logo/` (see the README there).
2. In `src/components/Logo.tsx`, replace the inline SVG mark with a `next/image`
   pointing at your asset. The wordmark text can stay or be replaced by a full
   logo image.

Also replace `public/og.svg` with a **1200×630 PNG/JPG** — most social platforms
don't render SVG OG images. Update `siteConfig.ogImage` if you change the path.

---

## Configuring the contact form (later)

The contact form (`src/components/ContactForm.tsx`) currently uses a **mailto
fallback** — submitting opens the visitor's email client with a prefilled
message. Nothing is stored or sent by the site.

To accept submissions server-side, wire up a provider (e.g. Formspree,
Web3Forms, Resend, or a Next.js route handler) and replace the `handleSubmit`
logic. Update the privacy page if you start storing data, and add a consent
mechanism if you add analytics.

---

## Deploy

This is a static-first Next.js app and deploys cleanly to **Vercel**
(recommended) or any Node host:

```bash
npm run build && npm run start
```

On Vercel: import the repo, framework auto-detects as Next.js, no env vars
required for the current (static) build.

---

## Accessibility & performance notes

- Semantic HTML, one `<h1>` per page, logical heading order.
- Keyboard-navigable header and mobile nav (Escape to close, focus return,
  scroll lock); visible `:focus-visible` rings; skip-to-content link.
- `prefers-reduced-motion` disables all animation and scroll-reveal.
- All decorative visuals are `aria-hidden`; no information lives only in motion.
- CSS-only animation, optimised fonts via `next/font`, fully static pages,
  ~106 kB first-load JS.

---

## Remaining business tasks

- [ ] Confirm final **domain** (update `siteConfig.url` / `domain`)
- [ ] Confirm business **email** (update `siteConfig.email`)
- [ ] Confirm business **phone** (if using one)
- [ ] Confirm **social handles** (update `siteConfig.socials` hrefs)
- [ ] Finalise legal/business structure & **privacy policy** wording
- [ ] Finalise package wording & **contract terms**; create client agreement
- [ ] Create proposal template
- [ ] Add **real logo** assets and a **1200×630 OG image**
- [ ] Add **real case-study screenshots** (and team photos if wanted)
- [ ] Wire up a **real contact form** provider
- [ ] Add **analytics** only after choosing a provider and a consent approach

---

## Launch checklist

- [ ] `npm run build` and `npm run lint` pass
- [ ] `siteConfig` values confirmed (domain, email, socials)
- [ ] Real logo + OG image in place
- [ ] Case-study content client-approved (Gym Vibe Café status accurate)
- [ ] Contact form provider connected and tested
- [ ] Privacy policy reviewed
- [ ] Metadata/OG previewed (e.g. with a social card debugger)
- [ ] Lighthouse/accessibility spot-check on key pages
- [ ] Deploy and verify all routes + `sitemap.xml` / `robots.txt`
