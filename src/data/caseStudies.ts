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
      "Gym Vibe Café is a café and meal-prep business with a strong real-world brand but no central website to turn that attention into orders. Lunamar Digital built a mobile-first prototype that brings the menu, locations and meal-prep offering together in one fast, conversion-focused experience. A preview was shared with the owner, who responded positively and asked about adding online ordering and payments.",
    problem:
      "Customers discovered Gym Vibe Café on Instagram but had nowhere to browse the full menu, find locations or place an order. Important information lived across social posts and DMs, which made it harder to convert interest into repeat custom.",
    solution:
      "We designed a mobile-first website concept built around how customers actually decide where to eat: browse the menu, check the nearest location, see the meal-prep offer, then act. Local SEO foundations and Square checkout preparation set the business up to be found and to take orders as it grows.",
    delivered: [
      "Mobile-first Next.js prototype (homepage, menu, location, meal prep, privacy)",
      "Interactive menu browsing with a basket",
      "Location pages with local SEO foundations",
      "Meal-prep promotion section",
      "Square checkout foundations + checkout-success page (not yet configured or live)",
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
      "Gym Vibe Café is an active project. A preview was shared and the owner responded positively and asked about online ordering and payments; final content and assets have not yet been supplied, and Square checkout is not configured or live. Screens shown are prototypes, not final published pages, and launch details are subject to client approval.",
    nextSteps: [
      "Collect final content, branding and imagery from the owner",
      "Confirm locations, opening hours and menu details",
      "Scope and configure Square checkout if ordering is confirmed",
      "Test, agree launch timing and go live",
    ],
    mockups: [
      {
        label: "Homepage",
        caption: "Brand-led landing with clear ordering actions",
        image: "/images/case-studies/gym-vibe-cafe/homepage.png",
      },
      {
        label: "Menu system",
        caption: "Category browsing with visible items and pricing",
        image: "/images/case-studies/gym-vibe-cafe/menu-system.png",
      },
      {
        label: "Location",
        caption: "Location pages with local SEO foundations",
        image: "/images/case-studies/gym-vibe-cafe/location.png",
      },
      {
        label: "Meal Prep",
        caption: "Dedicated meal-prep promotion",
        image: "/images/case-studies/gym-vibe-cafe/meal-prep.png",
      },
    ],
    featured: true,
  },
];

export const featuredCaseStudies = caseStudies.filter((c) => c.featured);

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((c) => c.slug === slug);
}
