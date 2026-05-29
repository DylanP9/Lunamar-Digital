import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import MockupCard from "@/components/MockupCard";
import ContactCTA from "@/components/sections/ContactCTA";
import { getCaseStudy } from "@/data/caseStudies";

const study = getCaseStudy("gym-vibe-cafe");

export const metadata: Metadata = {
  title: study ? `${study.name} Case Study` : "Case Study",
  description: study?.summary,
  alternates: { canonical: "/case-studies/gym-vibe-cafe" },
};

export default function GymVibeCafeCaseStudy() {
  if (!study) notFound();

  return (
    <>
      <PageHero
        eyebrow={`${study.status} · ${study.sector}`}
        title={study.tagline}
        description={study.summary}
      />

      <section className="section pt-4">
        <div className="container-x">
          <Reveal>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
              {study.mockups.map((mockup) => (
                <MockupCard key={mockup.label} mockup={mockup} />
              ))}
            </div>
          </Reveal>
          <Reveal>
            <p className="mt-6 text-center text-xs text-[var(--color-mistier)]">
              Screens shown are design concepts and prototypes, not final
              published pages.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section pt-0">
        <div className="container-x grid gap-10 lg:grid-cols-[1.5fr_1fr]">
          <div className="space-y-10">
            <Block title="Overview" body={study.overview} />
            <Block title="The problem" body={study.problem} />
            <Block title="Our solution" body={study.solution} />

            <Reveal>
              <div>
                <h2 className="font-[family-name:var(--font-display)] text-xl font-semibold tracking-tight">
                  Features delivered
                </h2>
                <ul className="mt-5 grid gap-2.5 sm:grid-cols-2">
                  {study.delivered.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 text-sm text-white/85"
                    >
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
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal>
              <div>
                <h2 className="font-[family-name:var(--font-display)] text-xl font-semibold tracking-tight">
                  Next steps
                </h2>
                <ol className="mt-5 space-y-3">
                  {study.nextSteps.map((item, i) => (
                    <li key={item} className="flex items-start gap-3 text-sm">
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-[var(--color-line)] text-xs font-medium text-[var(--color-blue)]">
                        {i + 1}
                      </span>
                      <span className="text-[var(--color-mist)]">{item}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </Reveal>
          </div>

          <aside className="space-y-5 lg:sticky lg:top-24 lg:self-start">
            <Reveal>
              <div className="rounded-[var(--radius-card)] border border-[var(--color-line)] bg-white/[0.02] p-6">
                <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-mistier)]">
                  Approach
                </h2>
                <ul className="mt-4 space-y-2.5">
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
              </div>
            </Reveal>

            <Reveal delay={60}>
              <div className="rounded-[var(--radius-card)] border border-[var(--color-line)] bg-white/[0.02] p-6">
                <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-mistier)]">
                  Outcomes
                </h2>
                <ul className="mt-4 space-y-2.5">
                  {study.outcomes.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 text-sm text-white/85"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-blue)]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <div className="glow-border rounded-[var(--radius-card)] border border-[var(--color-line)] bg-white/[0.03] p-6">
                <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-mistier)]">
                  Current status
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-[var(--color-mist)]">
                  {study.currentStatus}
                </p>
              </div>
            </Reveal>
          </aside>
        </div>
      </section>

      <ContactCTA
        title="Want a website like this for your business?"
        description="Request a free preview and we'll show you a concept before you commit."
      />
    </>
  );
}

function Block({ title, body }: { title: string; body: string }) {
  return (
    <Reveal>
      <div>
        <h2 className="font-[family-name:var(--font-display)] text-xl font-semibold tracking-tight">
          {title}
        </h2>
        <p className="mt-3 text-base leading-relaxed text-[var(--color-mist)]">
          {body}
        </p>
      </div>
    </Reveal>
  );
}
