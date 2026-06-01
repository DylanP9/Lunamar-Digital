import Reveal from "@/components/Reveal";
import SectionHeader from "@/components/SectionHeader";
import { outcomes } from "@/data/content";

export default function OutcomesSection() {
  return (
    <section className="section">
      <div className="container-x">
        <SectionHeader
          eyebrow="Outcomes"
          title="What good digital actually delivers"
          description="We focus on the outcomes that move a business forward — not vanity metrics or invented statistics."
        />

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {outcomes.map((outcome, i) => (
            <Reveal key={outcome} delay={i * 50}>
              <div className="glow-border flex items-center gap-3 rounded-2xl border border-[var(--color-line)] bg-white/[0.02] px-5 py-5">
                <span
                  aria-hidden
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[var(--color-line)] text-[var(--color-blue)]"
                >
                  <svg
                    className="h-4 w-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M7 17 17 7M9 7h8v8" />
                  </svg>
                </span>
                <span className="text-sm font-medium text-white/90">
                  {outcome}
                </span>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <p className="mx-auto mt-10 max-w-2xl text-center text-sm leading-relaxed text-[var(--color-mistier)]">
            We can&apos;t promise overnight results — no honest agency can. What
            we can do is build the systems that make it easier for customers to
            find you, trust you and take action.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
