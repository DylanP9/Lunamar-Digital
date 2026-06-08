import type { Service } from "@/types/services";

export const services: Service[] = [
  {
    id: "websites",
    title: "Websites",
    summary:
      "Fast, phone-first websites that turn visitors into calls, bookings and enquiries.",
    detail:
      "We design and build phone-first websites with clean structure and clear customer journeys. Every page loads fast, looks sharp on any device and points visitors towards the action that grows your business.",
    points: [
      "Custom, mobile-first design",
      "Clear calls to action on every page",
      "Performance and Core Web Vitals focus",
      "Built on a modern, maintainable stack",
    ],
    whyItMatters:
      "Most people size up your business on their phone in a few seconds. A clean, fast site makes that first impression a good one.",
    notIncluded: [
      "Online ordering, booking or payments (scoped separately)",
      "Photography or video shoots (quoted separately)",
    ],
    icon: "globe",
  },
  {
    id: "seo",
    title: "SEO",
    summary:
      "Search-focused foundations that help businesses get found by the customers already looking for them.",
    detail:
      "We set strong technical and on-page SEO foundations so search engines understand your site and the right customers can find it. From metadata and structure to local visibility, we build search in from the start.",
    points: [
      "Technical and on-page SEO setup",
      "Local SEO foundations where relevant",
      "Structured metadata and clean markup",
      "Content structure built around real search intent",
    ],
    whyItMatters:
      "When someone searches for what you do nearby, you want to be the business they find, not the competitor whose basics are set up while yours aren't.",
    notIncluded: [
      "Guaranteed #1 rankings (no honest agency can promise those)",
      "Paid Google Ads management (available separately; ad spend is always separate)",
    ],
    icon: "search",
  },
  {
    id: "social-media",
    title: "Social Media",
    summary:
      "Consistent, professional content that builds trust and keeps your business visible.",
    detail:
      "We keep your social presence active and on-brand with planned posts, captions and scheduling. Consistent, professional content keeps you visible and builds trust with the customers deciding whether to choose you.",
    points: [
      "Planned monthly content",
      "Captions, hashtags and scheduling",
      "Story content from your supplied media",
      "Monthly offer and service highlights",
    ],
    whyItMatters:
      "Post consistently and a busy business looks busy online too, which keeps you front of mind between visits.",
    notIncluded: [
      "Photography or video shoots (quoted separately)",
      "Replying to comments and DMs / community management",
    ],
    icon: "share",
  },
  {
    id: "digital-marketing",
    title: "Digital Marketing",
    summary:
      "Campaigns, content and conversion work built around results you can actually measure.",
    detail:
      "We plan and run campaigns around the outcomes you actually care about: enquiries, bookings and sales. Content, offers and conversion all pull in the same direction instead of working in silos.",
    points: [
      "Campaign and promo planning",
      "Content and offer strategy",
      "Conversion-focused landing pages",
      "Optional paid ad management (ad spend billed separately)",
    ],
    whyItMatters:
      "Marketing only counts if it brings in enquiries, bookings and sales. That's what we plan around, not likes and impressions.",
    notIncluded: [
      "Ad spend (always paid directly by you, never marked up)",
      "Available on the Partner plan or as a separately scoped project",
    ],
    icon: "rocket",
  },
  {
    id: "conversion-systems",
    title: "Conversion Systems",
    summary:
      "Clear customer journeys that guide visitors from attention to action.",
    detail:
      "A good website is more than a brochure. We map the path from first click to enquiry and remove the friction in between, so more of your existing traffic turns into real customers.",
    points: [
      "Customer journey mapping",
      "Clear, repeated calls to action",
      "Trust-building page structure",
      "Ongoing conversion improvements",
    ],
    whyItMatters:
      "You don't always need more visitors. Often you just need more of the ones you already get to actually call, book or buy.",
    notIncluded: [
      "Custom CRM or complex automation builds (scoped separately)",
    ],
    icon: "target",
  },
  {
    id: "maintenance",
    title: "Maintenance",
    summary:
      "Ongoing updates, fixes and support so your site stays current instead of slowly going out of date.",
    detail:
      "Your plan includes hosting support and small content updates, so your site stays current without surprise invoices. We keep things fast, secure and up to date while you focus on running your business.",
    points: [
      "Hosting support included",
      "Small content updates each month",
      "Performance and security upkeep",
      "Priority support on higher plans",
    ],
    whyItMatters:
      "A website is never really finished. Prices change, hours change, offers come and go. We keep yours up to date so it never looks neglected.",
    notIncluded: [
      "Unlimited updates or full redesigns",
      "New pages and custom features (quoted separately)",
    ],
    icon: "shield",
  },
];

/**
 * Optional, separately-scoped capability. Kept distinct from the core services
 * so we never imply payments/ordering are included in standard plans.
 */
export const optionalService: Service = {
  id: "ecommerce-payments",
  title: "Ecommerce & Payments",
  summary:
    "Ordering, bookings and checkout foundations, scoped and quoted separately for when you're ready.",
  detail:
    "When your business is ready for online ordering, bookings or payments, we can scope and build it on top of your site. These features are quoted separately from monthly plans so pricing stays honest and clear.",
  points: [
    "Online ordering and checkout foundations",
    "Booking and enquiry systems",
    "Third-party payment integrations (e.g. Square, Stripe)",
    "Scoped and quoted separately from monthly plans",
  ],
  icon: "card",
};
