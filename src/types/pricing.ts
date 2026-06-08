export interface PricingPlan {
  /** Stable id used for keys and anchors. */
  id: string;
  name: string;
  /** Display price, e.g. "£97" or "From £599". */
  price: string;
  /** Billing cadence shown next to the price. */
  cadence: string;
  /** Short label/badge, e.g. "Most Popular". */
  badge: string;
  /** One-line positioning statement. */
  bestFor: string;
  /** Business outcome shown before feature details. */
  outcome: string;
  /** Outcome bullets under "Designed to help you". */
  helpsWith: string[];
  /** Plain-English inclusion summary shown below the bullets. */
  includedSummary: string;
  /** Key inclusions shown on the card. */
  features: string[];
  /** Minimum term wording. */
  term: string;
  /** Marks the visually highlighted plan. */
  featured?: boolean;
}
