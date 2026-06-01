# Lunamar Digital

Premium marketing website for **Lunamar Digital** — a digital agency offering
websites, SEO and marketing through simple monthly membership plans.

> **Tagline:** Websites. Marketing. Growth.
> **Sales hook:** No-upfront websites and digital growth plans from £149/month.

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

### Pricing model

Public pricing is **four tiers** (all monthly, no upfront website cost):

| Plan | Price | For |
| --- | --- | --- |
| **Core Website** | £149/month | Clean, mobile-friendly website + basic presence |
| **Advanced Web & SEO** (Web-Only) | £249/month | Larger premium website + deep SEO, **no social media** |
| **Grow** (recommended) | £399/month | Advanced Web & SEO + up to 4 social posts/month |
| **Partner** | from £799/month | Grow + 8+ social posts, reels, campaigns, reporting |

> **Web-Only positioning:** Advanced Web & SEO (£249) is the bridge tier for
> prospects who reject social media marketing. Frame it as *"pay only for the
> high-intent Google traffic you actually want, without paying for social
> channels you don't use."*

Key terms: 12-month minimum on website plans (3-month minimum on social add-ons);
billing starts 30 days after onboarding; client owns domain/logo/content while
Lunamar owns the site code until the term completes or a buyout fee is paid;
small updates are fair-use (~2 hrs/month); paid ad spend, content shoots and
ordering/payment systems are quoted separately. No guarantees of sales,
rankings or followers.

**Founding client rate (internal only):** £97/month may be offered **privately**
to the first few clients, with a 12-month minimum term. It is **not** the public
baseline offer and must not be published as a standard package. A subtle
"by invitation" note appears on the pricing page via `foundingRateNote`.

### Update pricing

Edit the `pricingPlans` array in `src/data/pricing.ts`. The same data powers the
homepage pricing section, the pricing page cards and the comparison table (update
`comparisonFeatures` too if you add/rename a plan). `included`, `notIncluded`,
`terms` and `foundingRateNote` drive the pricing-page detail blocks. Plan labels
also appear in the contact form's package dropdown (`src/components/ContactForm.tsx`).

> The previous 6-tier structure (Starter/Standard/Plus/Social Growth/Social
> Plus/Premium) has been retired from public pages. If you need it for reference,
> recover it from git history — it is intentionally no longer in the data files.

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

## Contact form

The contact form (`src/components/ContactForm.tsx`) submits via **FormSubmit** —
a no-backend service that emails submissions to your inbox. **No API key, server,
database or env var is required**, so it works on static hosting / Vercel. The
destination address comes from `siteConfig.email`
(currently **Lunamardigital1@outlook.com**).

**To activate it (one-time):**

1. Deploy the site (or run it) and submit the form once.
2. FormSubmit emails that address a confirmation/activation link — click it once.
3. From then on, submissions are delivered to the inbox.

Details:
- Spam protection via FormSubmit's captcha (`_captcha`) plus a `_honey` honeypot.
- After submitting, users are redirected to `/thank-you` (`_next` hidden field,
  built from `siteConfig.url` — make sure that matches the live domain).
- To change the destination, update `siteConfig.email`; the form action is built
  from it.

> To swap providers (Formspree, Resend, a route handler), change the `formAction`
> in `ContactForm.tsx`.

---

## Client templates & first-client process

Reusable business templates live in **`docs/client-templates/`**:

| File | Purpose |
| --- | --- |
| `client-proposal-template.md` | Per-client proposal (summary, goals, recommended package, pricing, next steps) |
| `client-agreement-template.md` | Draft service agreement — **review with a legal professional before use** |
| `onboarding-checklist.md` | Details to capture once a client signs |
| `asset-request-checklist.md` | Everything to collect from the client to build/launch |
| `project-scope-template.md` | Agreed scope: pages, features, exclusions, milestones |
| `gym-vibe-cafe-first-client-checklist.md` | Live checklist for our first active client |

These are **draft business documents, not legal advice**, and are not
solicitor-approved.

### How to create a client proposal
1. Copy `client-proposal-template.md`, rename it for the client.
2. Fill in the bracketed fields; recommend Core, Grow or Partner.
3. List included pages/features and what's quoted separately.
4. Send it as the offer (the signed agreement governs the engagement).

### How to onboard a client
1. Client confirms package + monthly price.
2. Complete and **sign the client agreement** (clauses reviewed beforehand).
3. Set up payment; record the billing start date (Start Date + 30 days).
4. Send the asset request checklist and work through `onboarding-checklist.md`.

### What must be signed before work starts
- Signed `client-agreement-template.md`
- Confirmed package and monthly price
- Payment method set up

### What must be collected before launch
- All items in `asset-request-checklist.md` (logo, photos, content, prices,
  hours, domain/DNS access)
- Approvals at each milestone in `project-scope-template.md`

### Launch checklist
Domain connected → SEO foundations in place → performance check → forms/contact
tested → analytics connected (if agreed) → client sign-off → go live.

> **Legal review:** the agreement template is a starting point only. Have a
> qualified professional review it before using it with real clients.

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
- [ ] **Confirm the three public prices** (Core £149 / Grow £399 / Partner from £799) before publishing
- [ ] Decide who, if anyone, gets the private **founding rate** (£97/mo, by invitation)
- [ ] Finalise legal/business structure & **privacy policy** wording
- [ ] **Legal review** of `docs/client-templates/client-agreement-template.md` before any client signs
- [ ] Finalise package wording & contract terms
- [ ] Add **real logo** assets and a **1200×630 OG image**
- [ ] Add **real case-study screenshots** (and team photos if wanted)
- [ ] **Activate FormSubmit** — submit the form once and click the confirmation email (see "Contact form")
- [ ] Add **analytics** only after choosing a provider and a consent approach

---

## Launch checklist

- [ ] `npm run build` and `npm run lint` pass
- [ ] Public pricing confirmed (Core / Grow / Partner) — founding rate kept private
- [ ] Client agreement template legally reviewed
- [ ] `siteConfig` values confirmed (domain, email, socials)
- [ ] Real logo + OG image in place
- [ ] Case-study content client-approved (Gym Vibe Café status accurate)
- [ ] Contact form provider connected and tested
- [ ] Privacy policy reviewed
- [ ] Metadata/OG previewed (e.g. with a social card debugger)
- [ ] Lighthouse/accessibility spot-check on key pages
- [ ] Deploy and verify all routes + `sitemap.xml` / `robots.txt`
