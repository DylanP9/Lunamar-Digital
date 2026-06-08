import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import MockupCard from "@/components/MockupCard";
import ContactCTA from "@/components/sections/ContactCTA";
import { caseStudies } from "@/data/caseStudies";

export const metadata: Metadata = {
  title: "Work & Case Studies",
  description:
    "Selected work from Lunamar Digital, including our active Gym Vibe Café project — a mobile-first, ordering-ready website concept.",
  alternates: { canonical: "/work" },
};

export default function WorkPage() {
  return (
    <>
      <PageHero
        eyebrow="Work"
        title="Real previews, shown honestly."
        description="We feature work only when there is a real business, real context and a clear status. Gym Vibe Café is an active prototype, not a made-up portfolio filler."
      />

      <section className="section pt-4">
        <div className="container-x space-y-12">
          {caseStudies.map((study) => {
            const [featuredMockup, ...supportingMockups] = study.mockups;

            return (
            <Reveal key={study.slug}>
              <article className="relative overflow-hidden rounded-[var(--radius-card)] border border-[var(--color-line)] bg-white/[0.025] p-7 sm:p-10">
                <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
                  <div>
                    <span className="inline-flex items-center gap-2 rounded-full border border-[var(--color-line)] bg-white/[0.03] px-3.5 py-1.5 text-xs font-medium text-[var(--color-blue)]">
                      <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-blue)] animate-pulse-glow" />
                      {study.status} · {study.sector}
                    </span>
                    <h2 className="mt-5 font-[family-name:var(--font-display)] text-2xl font-semibold tracking-tight sm:text-3xl">
                      {study.name}
                    </h2>
                    <p className="mt-2 text-base text-white/90">{study.tagline}</p>
                    <p className="mt-4 text-sm leading-relaxed text-[var(--color-mist)]">
                      {study.summary}
                    </p>
                    <ul className="mt-6 space-y-3">
                      {study.outcomes.slice(0, 3).map((outcome) => (
                        <li
                          key={outcome}
                          className="flex items-start gap-3 text-sm text-white/86"
                        >
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-blue)]" />
                          {outcome}
                        </li>
                      ))}
                    </ul>
                  <Link
                    href={`/case-studies/${study.slug}`}
                    className="mt-7 inline-flex items-center gap-2 rounded-full bg-[var(--color-blue-deep)] px-6 py-3 text-sm font-medium text-white transition-transform duration-300 hover:-translate-y-0.5"
                  >
                      Read the case study <span aria-hidden>→</span>
                    </Link>
                  </div>

                  {featuredMockup ? (
                    <div className="space-y-5">
                      <MockupCard mockup={featuredMockup} variant="hero" />
                      <div className="grid gap-5 sm:grid-cols-3">
                        {supportingMockups.slice(0, 3).map((mockup) => (
                          <MockupCard
                            key={mockup.label}
                            mockup={mockup}
                            variant="large"
                          />
                        ))}
                      </div>
                    </div>
                  ) : null}
                </div>
              </article>
            </Reveal>
            );
          })}

          <Reveal>
            <p className="text-center text-sm text-[var(--color-mistier)]">
              More projects coming soon. We add work to this page only when it&apos;s
              real and approved by the client.
            </p>
          </Reveal>
        </div>
      </section>

      <ContactCTA
        title="Could your business be next?"
        description="Apply for a free website preview and see the direction before you commit."
      />
    </>
  );
}
