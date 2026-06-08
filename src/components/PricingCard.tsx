import Link from "next/link";
import type { PricingPlan } from "@/types/pricing";
import { primaryCta } from "@/data/navigation";

export default function PricingCard({ plan }: { plan: PricingPlan }) {
  return (
    <div
      className={`group relative flex h-full flex-col rounded-[var(--radius-card)] border p-6 transition-transform duration-300 hover:-translate-y-1 sm:p-7 ${
        plan.featured
          ? "border-[var(--color-line-strong)] bg-white/[0.06] shadow-[0_24px_70px_-36px_rgba(127,163,255,0.55)] lg:-translate-y-2 lg:hover:-translate-y-3"
          : "border-[var(--color-line)] bg-white/[0.025]"
      }`}
    >
      <div className="flex items-center justify-between gap-3">
        <span
          className={`inline-flex rounded-full px-3 py-1 text-[0.7rem] font-medium uppercase tracking-[0.12em] ${
            plan.featured
              ? "bg-[var(--color-blue-deep)] text-white"
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
        <span className="tabular font-[family-name:var(--font-display)] text-4xl font-semibold tracking-tight">
          {plan.price}
        </span>
        <span className="text-sm text-[var(--color-mist)]">{plan.cadence}</span>
      </div>

      <p className="mt-4 text-base leading-7 text-white/90">
        {plan.outcome}
      </p>

      <div className="mt-6 border-t border-[var(--color-line)] pt-5">
        <p className="text-xs font-medium uppercase tracking-[0.16em] text-[var(--color-blue)]">
          Best for
        </p>
        <p className="mt-2 text-sm leading-6 text-[var(--color-mist)]">
          {plan.bestFor}
        </p>
      </div>

      <div className="mt-5">
        <p className="text-xs font-medium uppercase tracking-[0.16em] text-[var(--color-blue)]">
          Designed to help you
        </p>
        <ul className="mt-3 flex-1 space-y-2.5">
          {plan.helpsWith.map((feature) => (
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
      </div>

      <div className="mt-5 flex-1">
        <p className="text-xs font-medium uppercase tracking-[0.16em] text-[var(--color-blue)]">
          What&apos;s included
        </p>
        <p className="mt-2 text-sm leading-6 text-[var(--color-mist)]">
          {plan.includedSummary}
        </p>
      </div>

      <details className="mt-5 rounded-xl border border-[var(--color-line)] bg-white/[0.02]">
        <summary className="cursor-pointer list-none px-4 py-3 text-sm font-medium text-white/90 [&::-webkit-details-marker]:hidden">
          View feature details
        </summary>
        <ul className="space-y-2.5 px-4 pb-4">
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
      </details>

      <p className="mt-6 text-xs text-[var(--color-mistier)]">{plan.term}</p>

      <Link
        href={primaryCta.href}
        className={`mt-5 inline-flex w-full items-center justify-center rounded-full px-5 py-3 text-sm font-medium transition-all duration-300 ${
          plan.featured
            ? "bg-[var(--color-blue-deep)] text-white hover:-translate-y-0.5 shadow-[0_10px_40px_-12px_rgba(91,140,255,0.7)]"
            : "glass text-white hover:bg-white/[0.08]"
        }`}
      >
        {primaryCta.label}
      </Link>
    </div>
  );
}
