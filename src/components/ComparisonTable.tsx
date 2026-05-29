import { pricingPlans, comparisonFeatures } from "@/data/pricing";

/** Horizontally scrollable plan comparison table. */
export default function ComparisonTable() {
  return (
    <div className="overflow-x-auto rounded-[var(--radius-card)] border border-[var(--color-line)] bg-white/[0.02]">
      <table className="w-full min-w-[48rem] border-collapse text-left text-sm">
        <caption className="sr-only">
          Comparison of Lunamar Digital monthly plans
        </caption>
        <thead>
          <tr className="border-b border-[var(--color-line)]">
            <th
              scope="col"
              className="sticky left-0 z-10 bg-[var(--color-ink)] px-5 py-4 font-medium text-[var(--color-mistier)]"
            >
              Feature
            </th>
            {pricingPlans.map((plan) => (
              <th
                key={plan.id}
                scope="col"
                className="px-4 py-4 text-center font-[family-name:var(--font-display)] font-semibold"
              >
                {plan.name.replace("Website ", "").replace("Website + ", "+ ")}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {comparisonFeatures.map((row) => (
            <tr
              key={row.label}
              className="border-b border-[var(--color-line)] last:border-0"
            >
              <th
                scope="row"
                className="sticky left-0 z-10 bg-[var(--color-ink)] px-5 py-4 font-medium text-white/90"
              >
                {row.label}
              </th>
              {pricingPlans.map((plan) => (
                <td
                  key={plan.id}
                  className="px-4 py-4 text-center text-[var(--color-mist)]"
                >
                  {row.plans[plan.id] ?? "—"}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
