import PricingCard from "./PricingCard";
import Reveal from "./Reveal";
import { pricingPlans } from "@/data/pricing";

/** Responsive grid of all pricing plans. Reused on home and pricing pages. */
export default function PricingGrid() {
  return (
    <>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {pricingPlans.map((plan, i) => (
          <Reveal key={plan.id} delay={i * 60} className="h-full">
            <PricingCard plan={plan} />
          </Reveal>
        ))}
      </div>
      <p className="mt-8 text-center text-sm text-[var(--color-mistier)]">
        * Paid ads and ad spend are not included in package prices. Ad spend is
        always billed separately.
      </p>
    </>
  );
}
