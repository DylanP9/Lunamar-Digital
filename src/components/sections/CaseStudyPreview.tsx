import Link from "next/link";
import Reveal from "@/components/Reveal";
import SectionHeader from "@/components/SectionHeader";
import Button from "@/components/Button";
import MockupCard from "@/components/MockupCard";
import { featuredCaseStudies } from "@/data/caseStudies";

export default function CaseStudyPreview() {
  const study = featuredCaseStudies[0];
  if (!study) return null;
  const [featuredMockup, ...supportingMockups] = study.mockups;
  const changes = [
    "Instagram interest now has a website destination",
    "Menu, location and meal-prep details sit in one place",
    "Ordering foundations are ready to scope honestly",
  ];

  return (
    <section className="section" id="work">
      <div className="container-x">
        <SectionHeader
          eyebrow="Selected work"
          title={study.tagline}
          description="A real project preview for a Glasgow café and meal-prep business, shown with prototype status clearly explained."
        />

        <div className="mt-14 grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
          <Reveal className="order-2 lg:order-1">
            <span className="inline-flex items-center gap-2 rounded-full border border-[var(--color-line)] bg-white/[0.03] px-3.5 py-1.5 text-xs font-medium text-[var(--color-blue)]">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-blue)] animate-pulse-glow" />
              {study.status} · {study.sector}
            </span>
            <h3 className="mt-5 font-[family-name:var(--font-display)] text-2xl font-semibold tracking-tight">
              {study.name}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-[var(--color-mist)]">
              {study.overview}
            </p>

            <div className=”mt-7 rounded-[var(--radius-card)] border border-[var(--color-line)] bg-white/[0.025] p-5”>
              <p className=”text-xs font-medium uppercase tracking-[0.18em] text-[var(--color-blue)]”>
                What changed
              </p>
              <ul className="mt-4 space-y-3">
                {changes.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-white/86">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-blue)]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
              {study.stack.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2.5 text-sm text-white/85"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-blue)]" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href={`/case-studies/${study.slug}`}>
                Read the case study
              </Button>
              <Button href="/work" variant="ghost">
                All work →
              </Button>
            </div>
          </Reveal>

          <Reveal delay={120} className="order-1 lg:order-2">
            {featuredMockup ? (
              <div className="space-y-5">
                <MockupCard mockup={featuredMockup} variant="hero" />
                <div className="grid gap-5 sm:grid-cols-3">
                  {supportingMockups.slice(0, 3).map((mockup) => (
                    <MockupCard key={mockup.label} mockup={mockup} variant="large" />
                  ))}
                </div>
              </div>
            ) : null}
          </Reveal>
        </div>

        <Reveal>
          <p className="mt-8 text-center text-xs text-[var(--color-mistier)]">
            {study.currentStatus}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
