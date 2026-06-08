import type { PricingPlan } from "@/types/pricing";

/**
 * Public pricing: three tiers — Core, Grow and Partner.
 *
 * NOTE (internal): a £97/month "founding client rate" may be offered privately
 * to the first few clients only (12-month minimum term). It is NOT the public
 * baseline offer and should not be published as a standard package. See
 * README and docs/client-templates for details.
 */
export const pricingPlans: PricingPlan[] = [
  {
    id: "core",
    name: "Core Website",
    price: "£149",
    cadence: "/month",
    badge: "Foundation",
    bestFor:
      "Businesses that need a clean, mobile-friendly website and a solid online presence.",
    features: [
      "1–3 page website",
      "Mobile-friendly design",
      "Basic SEO setup",
      "Hosting support",
      "Contact buttons",
      "Services / menu / pricing section where relevant",
      "Social links",
      "Basic performance setup",
      "Small updates included (fair-use)",
    ],
    term: "12-month minimum term",
  },
  {
    id: "web-seo",
    name: "Advanced Web & SEO",
    price: "£249",
    cadence: "/month",
    badge: "Web-Only",
    bestFor:
      "Businesses that want a bigger website and serious local SEO, without social media. You focus the budget on Google and skip the channels you don't use.",
    features: [
      "Up to 10 pages",
      "Custom layouts (FAQs, Team, Portfolio)",
      "Deep local SEO (keyword mapping + schema)",
      "Google Business Profile optimisation",
      "Speed & performance optimisation",
      "Ongoing technical maintenance",
      "No social media, just Google-focused growth",
    ],
    term: "12-month minimum term",
  },
  {
    id: "grow",
    name: "Grow",
    price: "£399",
    cadence: "/month",
    badge: "Most Popular",
    bestFor:
      "Businesses that want a proper website and a consistent social presence.",
    features: [
      "Everything in Advanced Web & SEO, plus:",
      "Up to 4 social posts per month",
      "Captions and hashtags",
      "Instagram / Facebook scheduling",
      "Monthly offer / service / menu highlight",
      "Basic monthly performance summary",
      "Client-supplied content (shoots quoted separately)",
    ],
    term: "Website 12-month min · Social 3-month min",
    featured: true,
  },
  {
    id: "partner",
    name: "Partner",
    price: "From £799",
    cadence: "/month",
    badge: "Growth Partner",
    bestFor:
      "Businesses that want website, SEO, social media and ongoing growth support.",
    features: [
      "Everything in Grow, plus:",
      "8+ social posts per month",
      "Short-form video / reels from supplied clips",
      "Campaign planning",
      "Conversion improvements",
      "Monthly reporting",
      "Priority support",
      "Optional paid ad management (ad spend billed separately)",
    ],
    term: "12-month minimum · custom features quoted separately",
  },
];

/** Plan comparison rows for the pricing page table. */
export const comparisonFeatures: { label: string; plans: Record<string, string> }[] = [
  {
    label: "Monthly price",
    plans: { core: "£149", "web-seo": "£249", grow: "£399", partner: "From £799" },
  },
  {
    label: "Website",
    plans: {
      core: "1–3 pages",
      "web-seo": "Up to 10 pages",
      grow: "Up to 10 pages",
      partner: "Up to 10 pages +",
    },
  },
  {
    label: "Custom layouts (FAQ / Team / Portfolio)",
    plans: { core: "—", "web-seo": "Included", grow: "Included", partner: "Included" },
  },
  {
    label: "SEO setup",
    plans: {
      core: "Basic",
      "web-seo": "Deep local SEO",
      grow: "Deep local SEO",
      partner: "Advanced + ongoing",
    },
  },
  {
    label: "Schema & Google Business optimisation",
    plans: { core: "—", "web-seo": "Included", grow: "Included", partner: "Included" },
  },
  {
    label: "Website maintenance",
    plans: {
      core: "Small updates",
      "web-seo": "Technical + updates",
      grow: "Included",
      partner: "Priority",
    },
  },
  {
    label: "Social posts / month",
    plans: { core: "—", "web-seo": "—", grow: "Up to 4", partner: "8+" },
  },
  {
    label: "Short-form video / reels",
    plans: { core: "—", "web-seo": "—", grow: "—", partner: "From supplied clips" },
  },
  {
    label: "Campaign planning",
    plans: { core: "—", "web-seo": "—", grow: "—", partner: "Included" },
  },
  {
    label: "Monthly reporting",
    plans: { core: "—", "web-seo": "—", grow: "Basic summary", partner: "Full reporting" },
  },
  {
    label: "Optional paid ads",
    plans: { core: "—", "web-seo": "—", grow: "—", partner: "Spend billed separately" },
  },
  {
    label: "Minimum term",
    plans: {
      core: "12 months",
      "web-seo": "12 months",
      grow: "Site 12m · Social 3m",
      partner: "12 months",
    },
  },
];

/** Things explicitly included across plans. */
export const included = [
  "Professional website design and build",
  "Hosting support",
  "Website maintenance and small content updates (fair-use)",
  "SEO foundations",
  "Mobile-first, responsive layouts",
];

/** Things explicitly NOT included — kept honest and visible. */
export const notIncluded = [
  "Paid ad spend (always billed separately by the client)",
  "Unlimited updates or unlimited redesigns",
  "Content shoots / photography days (quoted separately)",
  "Ordering, booking and payment systems (scoped separately)",
  "Major redesigns, new pages and custom integrations (quoted separately)",
];

/** Plain-language terms shown publicly on the pricing page. */
export const terms = [
  "Website plans are based on a 12-month minimum term. Social media add-ons use a 3-month minimum term.",
  "Billing begins 30 days after onboarding, even if content or assets are delayed.",
  "You own your domain, logo, photos and business content. Lunamar Digital owns the website design and code until the minimum term is completed or a buyout fee is paid.",
  "Small updates cover reasonable content changes (text, images, prices, hours, services, links, small promos) and are limited to around 2 hours per month unless your plan states otherwise.",
  "Paid ads, content shoots, ordering / booking / payment systems and custom features are quoted separately. Ad spend is always paid separately.",
  "Social posts are created from supplied content and approved in batches; if no edits are requested within 72 hours, posts may be scheduled as prepared.",
  "We don't guarantee specific sales, rankings, enquiries, followers or revenue. We build the things that make those results more likely.",
];

/**
 * Optional, invitation-only note for the pricing page. Kept out of the main
 * card grid so £149 remains the public entry point.
 */
export const foundingRateNote =
  "A limited founding-client rate may be available by invitation for our first few clients. It isn't a public package, so ask us if you'd like to be considered.";
