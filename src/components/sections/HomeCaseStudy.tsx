import Reveal from "@/components/Reveal";
import SectionHeader from "@/components/SectionHeader";
import Button from "@/components/Button";
import MockupCard from "@/components/MockupCard";
import { featuredCaseStudies } from "@/data/caseStudies";

export default function HomeCaseStudy() {
  const study = featuredCaseStudies[0];
  if (!study) return null;

  const panels = [
    { label: "Before", title: "Where they started", body: study.overview },
    { label: "Problem", title: "What was holding them back", body: study.problem },
    { label: "Solution", title: "What we built", body: study.solution },
  ];

  const [featuredMockup, ...supportingMockups] = study.mockups;

  return (
    <section className="section" id="work">
      <div className="container-x">
        <SectionHeader
          align="left"
          eyebrow="Recent work"
          title={study.tagline}
          description={study.summary}
        />

        <div className="mt-6">
          <span className="inline-flex items-center gap-2 rounded-full border border-[var(--color-line)] bg-white/[0.03] px-3.5 py-1.5 text-xs font-medium text-[var(--color-blue)]">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-blue)] animate-pulse-glow" />
            {study.status} · {study.sector}
          </span>
        </div>

        {/* Before → Problem → Solution */}
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {panels.map((panel, i) => (
            <Reveal key={panel.label} delay={i * 110} className="h-full">
              <div className="glow-border relative flex h-full flex-col rounded-[var(--radius-card)] border border-[var(--color-line)] bg-white/[0.02] p-7">
                <div className="flex items-center gap-2">
                  <span className="font-[family-name:var(--font-display)] text-sm font-semibold text-[var(--color-blue)]">
                    0{i + 1}
                  </span>
                  <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-mistier)]">
                    {panel.label}
                  </span>
                </div>
                <h3 className="mt-4 font-[family-name:var(--font-display)] text-lg font-semibold tracking-tight text-white">
                  {panel.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[var(--color-mist)]">
                  {panel.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Screens */}
        {featuredMockup ? (
          <Reveal className="mt-10">
            <div className="space-y-5">
              <MockupCard mockup={featuredMockup} variant="hero" />
              <div className="grid gap-5 sm:grid-cols-3">
                {supportingMockups.slice(0, 3).map((mockup) => (
                  <MockupCard key={mockup.label} mockup={mockup} variant="large" />
                ))}
              </div>
            </div>
          </Reveal>
        ) : null}

        <Reveal className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
          <Button href={`/case-studies/${study.slug}`}>Read the case study</Button>
          <Button href="/work" variant="ghost">
            All work →
          </Button>
        </Reveal>

        <Reveal>
          <p className="mt-6 max-w-3xl text-xs leading-relaxed text-[var(--color-mistier)]">
            {study.currentStatus}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
