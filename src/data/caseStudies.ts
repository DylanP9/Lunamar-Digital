import type { CaseStudy } from "@/types/caseStudy";

export const caseStudies: CaseStudy[] = [
  {
    slug: "gym-vibe-cafe",
    name: "Gym Vibe Café",
    status: "Active project",
    sector: "Café & meal prep",
    tagline:
      "From an Instagram presence to a complete, ordering-ready website.",
    summary:
      "A mobile-first website concept with interactive menu browsing, local SEO foundations, location pages, meal-prep promotion and Square checkout foundations.",
    overview:
      "Gym Vibe Café is a café and meal-prep business that built an audience on social media but had no central website to turn that attention into orders. Lunamar Digital is building a mobile-first website concept that brings the menu, locations and meal-prep offering together in one fast, conversion-focused experience.",
    problem:
      "Customers discovered Gym Vibe Café on Instagram but had nowhere to browse the full menu, find locations or place an order. Important information lived across social posts and DMs, which made it harder to convert interest into repeat custom.",
    solution:
      "We designed a mobile-first website concept built around how customers actually decide where to eat: browse the menu, check the nearest location, see the meal-prep offer, then act. Local SEO foundations and Square checkout preparation set the business up to be found and to take orders as it grows.",
    delivered: [
      "Mobile-first website concept and design",
      "Interactive menu browsing experience",
      "Location pages with local SEO foundations",
      "Meal-prep promotion section",
      "Square checkout foundations (preparation, not live payments)",
      "Conversion-focused customer actions throughout",
    ],
    stack: [
      "Next.js website",
      "Interactive menu",
      "Local SEO foundations",
      "Mobile-first UX",
      "Square checkout preparation",
    ],
    outcomes: [
      "A single, professional home for the brand online",
      "Clearer path from discovery to order",
      "Stronger local search foundations",
      "A consistent mobile experience for customers",
      "Groundwork in place for online ordering",
    ],
    currentStatus:
      "Gym Vibe Café is an active project and launch details are subject to client approval. Screens shown are design concepts and prototypes, not final published pages.",
    nextSteps: [
      "Finalise content and imagery with the client",
      "Confirm locations and opening hours",
      "Complete and test Square checkout integration",
      "Agree launch timing and go live",
    ],
    mockups: [
      { label: "Homepage", caption: "Brand-led landing with clear ordering actions" },
      { label: "Menu", caption: "Interactive, mobile-first menu browsing" },
      { label: "Location", caption: "Location pages with local SEO foundations" },
      { label: "Meal Prep", caption: "Dedicated meal-prep promotion" },
      { label: "Checkout foundations", caption: "Square checkout preparation" },
      { label: "Mobile view", caption: "Designed mobile-first from the start" },
    ],
    featured: true,
  },
];

export const featuredCaseStudies = caseStudies.filter((c) => c.featured);

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((c) => c.slug === slug);
}
