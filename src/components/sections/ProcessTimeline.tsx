import Reveal from "@/components/Reveal";
import SectionHeader from "@/components/SectionHeader";
import { processSteps } from "@/data/content";

export default function ProcessTimeline() {
  return (
    <section className="section" id="process">
      <div className="container-x">
        <SectionHeader
          align="left"
          eyebrow="How it works"
          title="From first look to live in a few weeks."
          description="A clear, founder-led process with no jargon and no surprise costs. You'll always know what's happening and what's next."
        />

        <ol className="mt-14 border-t border-[var(--color-line)]">
          {processSteps.map((step) => (
            <li key={step.number}>
              <Reveal>
                <div className="grid items-baseline gap-3 border-b border-[var(--color-line)] py-7 md:grid-cols-[5rem_minmax(0,15rem)_1fr] md:gap-8 md:py-9">
                  <span className="font-[family-name:var(--font-display)] text-2xl font-semibold text-transparent [-webkit-text-stroke:1px_rgba(111,155,255,0.55)]">
                    {step.number}
                  </span>
                  <h3 className="font-[family-name:var(--font-display)] text-xl font-semibold tracking-tight text-white md:text-2xl">
                    {step.title}
                  </h3>
                  <p className="max-w-xl text-sm leading-relaxed text-[var(--color-mist)] md:text-base">
                    {step.description}
                  </p>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
