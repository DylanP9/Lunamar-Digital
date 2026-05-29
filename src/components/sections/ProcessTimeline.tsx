import Reveal from "@/components/Reveal";
import SectionHeader from "@/components/SectionHeader";
import { processSteps } from "@/data/content";

export default function ProcessTimeline() {
  return (
    <section className="section">
      <div className="container-x">
        <SectionHeader
          eyebrow="How it works"
          title="A clear path from idea to growth"
          description="A simple, four-step process that takes you from first conversation to a website that keeps improving."
        />

        <div className="relative mt-14">
          {/* Vertical glowing line (hidden on small screens) */}
          <div
            aria-hidden="true"
            className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-[linear-gradient(to_bottom,transparent,rgba(91,140,255,0.5),rgba(164,114,255,0.5),transparent)] lg:block"
          />

          <ol className="space-y-5 lg:space-y-0">
            {processSteps.map((step, i) => (
              <li key={step.number} className="lg:grid lg:grid-cols-2 lg:gap-12">
                <Reveal
                  delay={i * 80}
                  className={
                    i % 2 === 0
                      ? "lg:col-start-1 lg:text-right"
                      : "lg:col-start-2"
                  }
                >
                  <div className="glow-border relative rounded-[var(--radius-card)] border border-[var(--color-line)] bg-white/[0.02] p-7 lg:my-6">
                    <span className="font-[family-name:var(--font-display)] text-3xl font-semibold text-transparent [-webkit-text-stroke:1px_rgba(91,140,255,0.6)]">
                      {step.number}
                    </span>
                    <h3 className="mt-3 font-[family-name:var(--font-display)] text-xl font-semibold tracking-tight">
                      {step.title}
                    </h3>
                    <p className="mt-2.5 text-sm leading-relaxed text-[var(--color-mist)]">
                      {step.description}
                    </p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
