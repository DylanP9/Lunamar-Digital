import Link from "next/link";
import type { PricingPlan } from "@/types/pricing";
import { primaryCta } from "@/data/navigation";

export default function PricingCard({ plan }: { plan: PricingPlan }) {
  return (
    <div
      className={`glow-border group relative flex h-full flex-col rounded-[var(--radius-card)] border p-6 transition-transform duration-300 hover:-translate-y-1 sm:p-7 ${
        plan.featured
          ? "border-[var(--color-line-strong)] bg-white/[0.05] shadow-[0_24px_70px_-30px_rgba(124,58,237,0.65)] lg:-translate-y-2 lg:hover:-translate-y-3"
          : "border-[var(--color-line)] bg-white/[0.02]"
      }`}
    >
      <div className="flex items-center justify-between gap-3">
        <span
          className={`inline-flex rounded-full px-3 py-1 text-[0.7rem] font-medium uppercase tracking-[0.12em] ${
            plan.featured
              ? "bg-[linear-gradient(120deg,var(--color-blue-deep),var(--color-purple-deep))] text-white"
              : "border border-[var(--color-line)] text-[var(--color-mist)]"
          }`}
        >
          {plan.badge}
        </span>
      </div>

      <h3 className="mt-5 font-[family-name:var(--font-display)] text-xl font-semibold tracking-tight">
        {plan.name}
      </h3>

      <div className="mt-3 flex items-baseline gap-1">
        <span className="font-[family-name:var(--font-display)] text-4xl font-semibold tracking-tight">
          {plan.price}
        </span>
        <span className="text-sm text-[var(--color-mist)]">{plan.cadence}</span>
      </div>

      <p className="mt-3 text-sm leading-relaxed text-[var(--color-mist)]">
        {plan.bestFor}
      </p>

      <ul className="mt-6 flex-1 space-y-2.5">
        {plan.features.map((feature) => (
          <li key={feature} className="flex items-start gap-2.5 text-sm">
            <svg
              className="mt-0.5 h-4 w-4 shrink-0 text-[var(--color-blue)]"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M20 6 9 17l-5-5" />
            </svg>
            <span className="text-white/85">{feature}</span>
          </li>
        ))}
      </ul>

      <p className="mt-6 text-xs text-[var(--color-mistier)]">{plan.term}</p>

      <Link
        href={primaryCta.href}
        className={`mt-5 inline-flex w-full items-center justify-center rounded-full px-5 py-3 text-sm font-medium transition-all duration-300 ${
          plan.featured
            ? "bg-[linear-gradient(120deg,var(--color-blue-deep),var(--color-purple-deep))] text-white hover:-translate-y-0.5 shadow-[0_10px_40px_-12px_rgba(91,140,255,0.7)]"
            : "glass text-white hover:bg-white/[0.08]"
        }`}
      >
        {primaryCta.label}
      </Link>
    </div>
  );
}
