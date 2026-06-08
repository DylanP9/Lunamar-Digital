import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import PricingGrid from "@/components/PricingGrid";
import ComparisonTable from "@/components/ComparisonTable";
import SectionHeader from "@/components/SectionHeader";
import Reveal from "@/components/Reveal";
import ContactCTA from "@/components/sections/ContactCTA";
import { included, notIncluded, terms, foundingRateNote, optionalExtras } from "@/data/pricing";
import { faqs } from "@/data/faqs";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Transparent no-upfront website plans from £149/month. Compare Core, Advanced Web & SEO, Grow and Partner from Lunamar Digital.",
  alternates: { canonical: "/pricing" },
};

export default function PricingPage() {
  return (
    <>
      <PageHero
        eyebrow="Pricing"
        title="Clear monthly plans. No upfront website cost."
        description="Choose the level of support you need now. Every plan is built around a real business outcome: a better first impression, clearer visibility and easier customer action."
      />

      <section className="section pt-0">
        <div className="container-x">
          <PricingGrid />
          <Reveal className="mt-8 flex justify-center">
            <p className="max-w-2xl rounded-full border border-[var(--color-line)] bg-white/[0.02] px-5 py-3 text-center text-xs text-[var(--color-mistier)]">
              {foundingRateNote}
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section pt-0">
        <div className="container-x">
          <SectionHeader
            eyebrow="Compare"
            title="Every plan, side by side"
            description="Compare what's included across Core, Advanced Web & SEO, Grow and Partner before you enquire."
          />
          <Reveal className="mt-12">
            <ComparisonTable />
          </Reveal>
        </div>
      </section>

      <section className="section pt-0">
        <div className="container-x grid gap-6 md:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-[var(--radius-card)] border border-[var(--color-line)] bg-white/[0.02] p-7">
              <h2 className="font-[family-name:var(--font-display)] text-xl font-semibold tracking-tight">
                What&apos;s included
              </h2>
              <ul className="mt-5 space-y-3">
                {included.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm">
                    <svg
                      className="mt-0.5 h-4 w-4 shrink-0 text-[var(--color-blue)]"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden
                    >
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                    <span className="text-white/85">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <div className="h-full rounded-[var(--radius-card)] border border-[var(--color-line)] bg-white/[0.02] p-7">
              <h2 className="font-[family-name:var(--font-display)] text-xl font-semibold tracking-tight">
                What&apos;s not included
              </h2>
              <ul className="mt-5 space-y-3">
                {notIncluded.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm">
                    <svg
                      className="mt-0.5 h-4 w-4 shrink-0 text-[var(--color-mistier)]"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden
                    >
                      <path d="M18 6 6 18M6 6l12 12" />
                    </svg>
                    <span className="text-[var(--color-mist)]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section pt-0">
        <div className="container-x">
          <SectionHeader
            eyebrow="Add-ons"
            title="Optional extras"
            description="Everything below is scoped and quoted separately before any work begins. Nothing is added to your plan without your approval."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {optionalExtras.map((group, i) => (
              <Reveal key={group.category} delay={i * 40}>
                <div className="h-full rounded-[var(--radius-card)] border border-[var(--color-line)] bg-white/[0.02] p-6">
                  <p className="text-xs font-medium uppercase tracking-[0.18em] text-[var(--color-blue)]">
                    {group.category}
                  </p>
                  <ul className="mt-4 space-y-3">
                    {group.items.map((item) => (
                      <li key={item.label} className="flex items-start justify-between gap-4 text-sm">
                        <span className="text-[var(--color-mist)]">{item.label}</span>
                        <span className="shrink-0 tabular-nums text-white/80">{item.price}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal>
            <p className="mt-6 text-center text-xs text-[var(--color-mistier)]">
              All add-on prices are indicative. Final scope and cost are confirmed in writing before work starts.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section pt-0">
        <div className="container-x">
          <Reveal>
            <div className="rounded-[var(--radius-card)] border border-[var(--color-line)] bg-white/[0.02] p-7 sm:p-9">
              <h2 className="font-[family-name:var(--font-display)] text-xl font-semibold tracking-tight">
                Terms in plain language
              </h2>
              <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                {terms.map((term) => (
                  <li
                    key={term}
                    className="flex items-start gap-2.5 text-sm text-[var(--color-mist)]"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-blue)]" />
                    {term}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section pt-0">
        <div className="container-x">
          <SectionHeader eyebrow="Pricing FAQ" title="Common pricing questions" />
          <div className="mx-auto mt-12 max-w-3xl divide-y divide-[var(--color-line)] overflow-hidden rounded-[var(--radius-card)] border border-[var(--color-line)] bg-white/[0.02]">
            {faqs
              .filter((f) =>
                /upfront|minimum|updates|paid ads|ordering|domain/i.test(
                  f.question
                )
              )
              .map((faq) => (
                <details key={faq.question} className="group">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-5 text-left font-medium text-white transition-colors hover:bg-white/[0.03] [&::-webkit-details-marker]:hidden">
                    <span>{faq.question}</span>
                    <span
                      aria-hidden
                      className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-[var(--color-line)] text-[var(--color-mist)] transition-transform duration-300 group-open:rotate-45"
                    >
                      +
                    </span>
                  </summary>
                  <p className="px-6 pb-5 text-sm leading-relaxed text-[var(--color-mist)]">
                    {faq.answer}
                  </p>
                </details>
              ))}
          </div>
        </div>
      </section>

      <ContactCTA
        title="Not sure which plan fits?"
        description="Apply for a free website preview and we'll recommend the right plan for where your business is now."
      />
    </>
  );
}
