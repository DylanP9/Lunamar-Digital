export interface CaseStudyMockup {
  /** Label shown on the mockup card, e.g. "Homepage". */
  label: string;
  /** Short description of what the screen shows. */
  caption: string;
}

export interface CaseStudy {
  /** URL slug under /case-studies. */
  slug: string;
  name: string;
  /** Short status label, e.g. "Active project". */
  status: string;
  /** Industry / type, e.g. "Café & meal prep". */
  sector: string;
  /** Card + hero tagline. */
  tagline: string;
  /** Card summary paragraph. */
  summary: string;
  overview: string;
  problem: string;
  solution: string;
  /** Concrete things built / delivered. */
  delivered: string[];
  /** Tech and approach tags. */
  stack: string[];
  /** Honest, non-inflated outcomes (no fake numbers). */
  outcomes: string[];
  currentStatus: string;
  nextSteps: string[];
  /** Mockup screens to display as placeholders. */
  mockups: CaseStudyMockup[];
  /** Whether to feature on listing pages. */
  featured: boolean;
}
