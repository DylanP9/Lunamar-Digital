import type { PricingPlan } from "@/types/pricing";

export const pricingPlans: PricingPlan[] = [
  {
    id: "starter",
    name: "Website Starter",
    price: "£97",
    cadence: "/month",
    badge: "Entry",
    bestFor: "A simple online presence for early-stage businesses.",
    features: [
      "One-page website",
      "Mobile-friendly design",
      "Basic SEO setup",
      "Hosting support",
      "Contact buttons",
      "Maps / social links where relevant",
      "Hours, services or menu section",
      "1 small update request per month",
    ],
    term: "12-month minimum term",
  },
  {
    id: "standard",
    name: "Website Standard",
    price: "£127",
    cadence: "/month",
    badge: "Most Popular",
    bestFor: "The best starting point for most businesses.",
    features: [
      "Everything in Starter",
      "More polished custom design",
      "Multiple sections / pages",
      "Services or menu page",
      "FAQ section",
      "Better SEO setup",
      "Performance optimisation",
      "Up to 2 small updates per month",
    ],
    term: "12-month minimum term",
    featured: true,
  },
  {
    id: "plus",
    name: "Website Plus",
    price: "£197",
    cadence: "/month",
    badge: "Stronger Website",
    bestFor: "Businesses that want a stronger website and ongoing support.",
    features: [
      "Everything in Standard",
      "More pages",
      "More advanced SEO",
      "Monthly website check",
      "Conversion improvements",
      "Priority support",
      "Basic monthly performance summary",
    ],
    term: "12-month minimum term",
  },
  {
    id: "social-growth",
    name: "Website + Social Growth",
    price: "£249",
    cadence: "/month",
    badge: "Website + Social",
    bestFor: "Website and social presence managed together.",
    features: [
      "Website Standard included",
      "8 social posts per month",
      "Basic captions & hashtags",
      "Instagram / Facebook scheduling",
      "Story reposts from supplied content",
      "Monthly offer / service highlight",
      "Simple monthly summary",
    ],
    term: "Website 12-month min · Social 3-month min",
  },
  {
    id: "social-plus",
    name: "Website + Social Plus",
    price: "£399",
    cadence: "/month",
    badge: "Best for visibility",
    bestFor: "A stronger ongoing digital presence.",
    features: [
      "Everything in Social Growth",
      "12 posts per month",
      "4 short reels from supplied clips",
      "Weekly story content",
      "Monthly campaign / promo post",
      "Google Business consistency check",
      "Monthly analytics summary",
    ],
    term: "Website 12-month min · Social 3-month min",
  },
  {
    id: "premium",
    name: "Premium Growth Partner",
    price: "From £599",
    cadence: "/month",
    badge: "Full growth partner",
    bestFor: "Businesses that want a more complete growth partner.",
    features: [
      "Website, SEO & social media",
      "Campaign & content strategy",
      "More reels & posts",
      "Conversion optimisation",
      "Priority updates",
      "Monthly reports",
      "Optional ad management*",
    ],
    term: "Custom term · ad spend billed separately",
  },
];

/** Plan comparison rows for the pricing page table. */
export const comparisonFeatures: { label: string; plans: Record<string, string> }[] = [
  {
    label: "Monthly price",
    plans: {
      starter: "£97",
      standard: "£127",
      plus: "£197",
      "social-growth": "£249",
      "social-plus": "£399",
      premium: "From £599",
    },
  },
  {
    label: "Website pages",
    plans: {
      starter: "One page",
      standard: "Multiple",
      plus: "More pages",
      "social-growth": "Multiple",
      "social-plus": "Multiple",
      premium: "Tailored",
    },
  },
  {
    label: "SEO setup",
    plans: {
      starter: "Basic",
      standard: "Better",
      plus: "Advanced",
      "social-growth": "Better",
      "social-plus": "Better",
      premium: "Advanced+",
    },
  },
  {
    label: "Social posts / month",
    plans: {
      starter: "—",
      standard: "—",
      plus: "—",
      "social-growth": "8",
      "social-plus": "12",
      premium: "12+",
    },
  },
  {
    label: "Reels / month",
    plans: {
      starter: "—",
      standard: "—",
      plus: "—",
      "social-growth": "—",
      "social-plus": "4",
      premium: "4+",
    },
  },
  {
    label: "Monthly updates",
    plans: {
      starter: "1",
      standard: "2",
      plus: "2 + check",
      "social-growth": "2",
      "social-plus": "2",
      premium: "Priority",
    },
  },
  {
    label: "Reporting",
    plans: {
      starter: "—",
      standard: "—",
      plus: "Basic summary",
      "social-growth": "Simple summary",
      "social-plus": "Analytics summary",
      premium: "Full reports",
    },
  },
];

/** Things explicitly included across plans. */
export const included = [
  "Professional website design and build",
  "Hosting support",
  "Small content updates (text, images, prices, hours, links)",
  "Basic SEO foundations",
  "Mobile-first, responsive layouts",
];

/** Things explicitly NOT included — kept honest and visible. */
export const notIncluded = [
  "Paid ad spend (always billed separately by the client)",
  "Large redesigns and rebrands (quoted separately)",
  "Ordering, booking and payment systems (scoped separately)",
  "Custom integrations and bespoke features (quoted separately)",
];

/** Plain-language terms. */
export const terms = [
  "Website plans are based on a 12-month minimum term.",
  "Social media add-ons use a 3-month minimum term.",
  "Paid ads are not included in package prices, and ad spend is paid separately.",
  "Custom features, ordering systems, bookings and full redesigns are quoted separately.",
  "Small updates include menu edits, text edits, price changes, opening-hour changes, photo swaps, social-link updates and small promo updates.",
];
