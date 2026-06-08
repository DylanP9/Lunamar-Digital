/**
 * Shared marketing content blocks for the homepage.
 * Centralised here so copy lives in one place rather than across components.
 */

/** Short trust signals shown under the hero. */
export const valuePoints: string[] = [
  "No big upfront bill",
  "From £149 a month",
  "Founder-led, not outsourced",
  "Live in a few weeks",
];

export interface PainPoint {
  problem: string;
  detail: string;
}

/** The "does this sound like you?" section: concrete, recognisable problems. */
export const painPoints: PainPoint[] = [
  {
    problem: "Your Instagram gets attention, but there's nowhere to send people.",
    detail:
      "The followers and the word-of-mouth are there. What's missing is a website that turns that interest into a call, a booking or an order.",
  },
  {
    problem: "Customers can't find your services, prices or opening hours.",
    detail:
      "People should be able to see what you do, what it costs and how to reach you without scrolling through months of old posts.",
  },
  {
    problem: "Your current site is slow, dated or awkward on a phone.",
    detail:
      "Most of your customers are looking on their phone. A site that loads slowly or feels old makes a good business look like a gamble.",
  },
  {
    problem: "You don't show up on Google when people search nearby.",
    detail:
      "Someone searches for what you offer in your area and a competitor comes up first, simply because their basics are set up and yours aren't.",
  },
  {
    problem: "Your posting is on and off, never consistent.",
    detail:
      "You know you should post more, but it slips. Those gaps make an established business look quieter than it actually is.",
  },
];

export interface HomeService {
  title: string;
  summary: string;
  points: string[];
  icon: string;
  href: string;
}

/** Four core services, outcome-led, for the homepage. */
export const homeServices: HomeService[] = [
  {
    title: "Websites",
    summary:
      "A fast, phone-first website that puts your services, prices, location and contact details where people expect to find them. It makes you look like a proper business from the first tap.",
    points: ["Phone-first design", "Clear services & pricing", "Easy contact & booking buttons"],
    icon: "globe",
    href: "/services#websites",
  },
  {
    title: "SEO & Google visibility",
    summary:
      "Local SEO and a properly set-up Google Business Profile, so the people already searching nearby find you instead of the place down the road.",
    points: ["Local keyword mapping", "Google Business Profile", "Schema & technical basics"],
    icon: "search",
    href: "/services#seo",
  },
  {
    title: "Social content",
    summary:
      "Posts and reels planned and scheduled for you, so a business that's busy in person looks just as busy online between visits.",
    points: ["Planned monthly posts", "Captions & scheduling", "Reels from your clips"],
    icon: "share",
    href: "/services#social-media",
  },
  {
    title: "Maintenance & support",
    summary:
      "We handle hosting, updates and small changes for you. Prices, hours, photos and offers stay current, with no surprise invoice for a quick edit.",
    points: ["Hosting included", "Small updates each month", "Fast, founder-led support"],
    icon: "shield",
    href: "/services#maintenance",
  },
];

export interface JourneyStep {
  key: string;
  label: string;
  /** One short outcome revealed for this step. */
  outcome: string;
  blurb: string;
  icon: string;
  href: string;
}

/** The four-part "what we do" scroll story: Website → SEO → Social → Support. */
export const journeySteps: JourneyStep[] = [
  {
    key: "website",
    label: "Website",
    outcome: "Turns visitors into calls, bookings and orders.",
    blurb:
      "Built for phones first, with the things people actually look for: what you do, what it costs and where you are. No more sending people to a dead-end profile.",
    icon: "globe",
    href: "/services#websites",
  },
  {
    key: "seo",
    label: "SEO",
    outcome: "Found first when locals search for what you do.",
    blurb:
      "Local SEO and Google Business Profile setup, so the people searching nearby right now land on you and not the competitor down the road.",
    icon: "search",
    href: "/services#seo",
  },
  {
    key: "social",
    label: "Social",
    outcome: "Consistent posts that keep you front of mind.",
    blurb:
      "Posts and reels planned and scheduled for you, so a busy business actually looks busy online between visits.",
    icon: "share",
    href: "/services#social-media",
  },
  {
    key: "support",
    label: "Support",
    outcome: "Kept up to date, not left to drift.",
    blurb:
      "We handle hosting, updates and small changes. Prices, hours, photos and offers stay current, with no surprise invoice for a quick edit.",
    icon: "shield",
    href: "/services#maintenance",
  },
];

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

/** Five-step path from first conversation to ongoing support. */
export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Audit",
    description:
      "We look over your current website, Google presence and social, then tell you straight what's working and what's holding you back.",
  },
  {
    number: "02",
    title: "Free preview",
    description:
      "If we're a good fit, we design a preview of your new homepage before you commit to anything, so you can see where it's heading first.",
  },
  {
    number: "03",
    title: "Build",
    description:
      "We build the full site around how your customers actually decide: clear services, prices, location and contact, with SEO sorted from the start.",
  },
  {
    number: "04",
    title: "Launch",
    description:
      "We connect your domain, set up your Google Business Profile and take you live. The domain stays in your name from day one.",
  },
  {
    number: "05",
    title: "Ongoing support",
    description:
      "We host it, keep it maintained and keep improving it. On social plans we keep your content going too, so the site keeps earning its keep long after launch.",
  },
];

export interface DeepDive {
  title: string;
  description: string;
}

/** Services deep-dive subsections (used on the services page intro). */
export const deepDives: DeepDive[] = [
  {
    title: "Websites that convert",
    description:
      "Fast, phone-first websites with clear journeys that turn visitors into calls, bookings and orders.",
  },
  {
    title: "SEO that gets you found",
    description:
      "Technical, on-page and local SEO so the customers already searching can actually find you.",
  },
  {
    title: "Social content that builds trust",
    description:
      "Consistent, professional posts and reels that keep you visible and credible between visits.",
  },
];
