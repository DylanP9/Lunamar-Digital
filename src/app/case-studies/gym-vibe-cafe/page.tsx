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
  const [featuredMockup, ...supportingMockups] = study.mockups;
  const whatChanged = [
    {
      title: "Social attention has a destination",
      body: "Instead of sending people through scattered posts and DMs, the café now has a clear website concept for menu, location and meal-prep interest.",
    },
    {
      title: "Local details are easier to trust",
      body: "Customers can quickly check the address, opening hours, food offer and contact route before deciding to visit or call.",
    },
    {
      title: "Ordering can be scoped properly",
      body: "Square checkout foundations are acknowledged as preparation, not oversold as a live ordering system.",
    },
  ];

  return (
    <>
      <PageHero
        eyebrow={`${study.status} · ${study.sector}`}
        title={study.tagline}
        description="A practical website preview for a real Glasgow café and meal-prep business, designed to move customers from social discovery to menu, location and ordering intent."
      />

      <section className="section pt-4">
        <div className="container-x">
          {featuredMockup ? (
            <Reveal>
              <div className="space-y-8">
                <MockupCard mockup={featuredMockup} variant="hero" />
              </div>
            </Reveal>
          ) : null}
          <Reveal>
            <p className="mt-6 text-center text-xs text-[var(--color-mistier)]">
              Screens shown are design concepts and prototypes, not final
              published pages.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section pt-0">
        <div className="container-x">
          <div className="grid gap-px overflow-hidden rounded-[var(--radius-card)] border border-[var(--color-line)] bg-[var(--color-line)] lg:grid-cols-3">
            {whatChanged.map((item, i) => (
              <Reveal key={item.title} delay={i * 70}>
                <article className="h-full bg-[var(--color-ink-soft)] p-7">
                  <p className="text-xs font-medium uppercase tracking-[0.18em] text-[var(--color-blue)]">
                    Change 0{i + 1}
                  </p>
                  <h2 className="mt-4 font-[family-name:var(--font-display)] text-xl font-semibold tracking-tight">
                    {item.title}
                  </h2>
                  <p className="mt-3 text-sm leading-7 text-[var(--color-mist)]">
                    {item.body}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {supportingMockups.length ? (
        <section className="section pt-0">
          <div className="container-x">
            <div className="grid gap-6 md:grid-cols-3">
              {supportingMockups.map((mockup, i) => (
                <Reveal key={mockup.label} delay={i * 70}>
                  <MockupCard mockup={mockup} variant="large" />
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      ) : null}

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
                      <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-blue)]" />
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
              <div className="rounded-[var(--radius-card)] border border-[var(--color-line-strong)] bg-white/[0.04] p-6">
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
        description="Apply for a free website preview and we'll show you a focused concept before you commit."
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
