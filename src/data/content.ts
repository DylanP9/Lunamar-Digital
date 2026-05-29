/**
 * Shared marketing content blocks (value strip, process, outcomes, deep dives).
 * Centralised here so copy lives in one place rather than across components.
 */

/** Trust / value strip on the homepage. */
export const valuePoints: string[] = [
  "No upfront website cost",
  "Monthly growth plans",
  "Websites, SEO and marketing",
  "Built, hosted and maintained",
  "Designed to convert",
];

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

/** Four-step delivery process. */
export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Discover",
    description:
      "We review your business, goals and current digital presence to find the fastest path to growth.",
  },
  {
    number: "02",
    title: "Build",
    description:
      "We create the website, content structure and conversion flow around how your customers actually decide.",
  },
  {
    number: "03",
    title: "Launch",
    description:
      "We connect your domain, set SEO foundations and take your live website online.",
  },
  {
    number: "04",
    title: "Grow",
    description:
      "We maintain, update and improve your digital presence over time so it keeps working for you.",
  },
];

export interface DeepDive {
  title: string;
  description: string;
}

/** Services deep-dive subsections. */
export const deepDives: DeepDive[] = [
  {
    title: "Websites that convert",
    description:
      "Fast, mobile-first websites with clear journeys that turn visitors into calls, bookings and sales.",
  },
  {
    title: "SEO that gets you found",
    description:
      "Technical, on-page and local SEO foundations so the customers already searching can find you.",
  },
  {
    title: "Social content that builds trust",
    description:
      "Consistent, professional posts and reels that keep you visible and credible between visits.",
  },
  {
    title: "Digital systems that save time",
    description:
      "Joined-up content, offers and conversion systems that work together instead of in silos.",
  },
  {
    title: "Ongoing support that keeps everything fresh",
    description:
      "Hosting, updates and optimisation included, so your digital presence never goes stale.",
  },
];

/** Outcome-driven cards (no fabricated statistics). */
export const outcomes: string[] = [
  "More enquiries",
  "Clearer customer journeys",
  "Better first impressions",
  "Stronger search visibility",
  "Easier updates",
  "Better mobile experience",
  "More trust before the sale",
];
