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
    "Selected work from Lunamar Digital, including our active Gym Vibe Café project, a phone-first, ordering-ready website concept.",
  alternates: { canonical: "/work" },
};

export default function WorkPage() {
  return (
    <>
      <PageHero
        eyebrow="Work"
        title="Projects built for growth."
        description="A focused selection of our work. We show projects honestly, including the ones still in progress, rather than padding the page with invented clients."
      />

      <section className="section pt-4">
        <div className="container-x space-y-12">
          {caseStudies.map((study) => {
            const [featuredMockup, ...supportingMockups] = study.mockups;

            return (
            <Reveal key={study.slug}>
              <article className="glow-border relative overflow-hidden rounded-[2rem] border border-[var(--color-line)] bg-white/[0.02] p-7 sm:p-10">
                <div className="grid gap-10 lg:grid-cols-[0.85fr_1.35fr] lg:items-center">
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
                    <Link
                      href={`/case-studies/${study.slug}`}
                      className="mt-7 inline-flex items-center gap-2 rounded-full bg-[linear-gradient(120deg,var(--color-blue-deep),var(--color-purple-deep))] px-6 py-3 text-sm font-medium text-white transition-transform duration-300 hover:-translate-y-0.5"
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
        description="Request a free preview and see what your website could look like before you commit."
      />
    </>
  );
}
