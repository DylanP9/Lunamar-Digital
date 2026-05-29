import type { Service } from "@/types/services";

export const services: Service[] = [
  {
    id: "websites",
    title: "Websites",
    summary:
      "Fast, mobile-first websites designed to turn visitors into calls, bookings, enquiries and sales.",
    detail:
      "We design and build modern, mobile-first websites with clean structure and clear customer journeys. Every page is built to load fast, look sharp on any device and guide visitors towards the action that grows your business.",
    points: [
      "Custom, mobile-first design",
      "Clear calls to action on every page",
      "Performance and Core Web Vitals focus",
      "Built on a modern, maintainable stack",
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
    icon: "share",
  },
  {
    id: "digital-marketing",
    title: "Digital Marketing",
    summary:
      "Campaigns, content and conversion systems built around real business outcomes.",
    detail:
      "We plan and run campaigns that connect to outcomes you actually care about — enquiries, bookings and sales. Content, offers and conversion systems work together so your marketing pulls in one direction.",
    points: [
      "Campaign and promo planning",
      "Content and offer strategy",
      "Conversion-focused landing pages",
      "Optional paid ad management (ad spend billed separately)",
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
    icon: "target",
  },
  {
    id: "maintenance",
    title: "Maintenance",
    summary:
      "Ongoing updates, optimisation and support so your digital presence does not go stale.",
    detail:
      "Your plan includes hosting support and small content updates, so your site stays current without surprise invoices. We keep things fast, secure and up to date while you focus on running your business.",
    points: [
      "Hosting support included",
      "Small content updates each month",
      "Performance and security upkeep",
      "Priority support on higher plans",
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
    "Ordering, bookings and checkout foundations — scoped and quoted separately when you need them.",
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
