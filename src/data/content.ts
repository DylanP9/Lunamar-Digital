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

