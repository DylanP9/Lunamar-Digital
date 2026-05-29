import Link from "next/link";
import Reveal from "@/components/Reveal";
import SectionHeader from "@/components/SectionHeader";
import Button from "@/components/Button";
import MockupCard from "@/components/MockupCard";
import { featuredCaseStudies } from "@/data/caseStudies";

export default function CaseStudyPreview() {
  const study = featuredCaseStudies[0];
  if (!study) return null;

  return (
    <section className="section" id="work">
      <div className="container-x">
        <SectionHeader
          eyebrow="Selected work"
          title={study.tagline}
          description={study.summary}
        />

        <div className="mt-14 grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-center">
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
            <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
              {study.stack.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2.5 text-sm text-white/85"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-purple)]" />
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
            <div className="grid grid-cols-2 gap-4">
              {study.mockups.slice(0, 4).map((mockup) => (
                <MockupCard key={mockup.label} mockup={mockup} />
              ))}
            </div>
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
