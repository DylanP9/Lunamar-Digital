import Reveal from "@/components/Reveal";
import SectionHeader from "@/components/SectionHeader";
import { faqs } from "@/data/faqs";

export default function FAQSection() {
  return (
    <section className="section" id="faq">
      <div className="container-x">
        <SectionHeader
          eyebrow="FAQ"
          title="Answers before you ask"
          description="The questions we hear most, answered clearly and commercially."
        />

        <div className="mx-auto mt-14 max-w-3xl divide-y divide-[var(--color-line)] overflow-hidden rounded-[var(--radius-card)] border border-[var(--color-line)] bg-white/[0.02]">
          {faqs.map((faq, i) => (
            <Reveal key={faq.question} delay={i * 30}>
              <details className="group">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-5 text-left font-medium text-white transition-colors hover:bg-white/[0.03] [&::-webkit-details-marker]:hidden">
                  <span>{faq.question}</span>
                  <span
                    aria-hidden
                    className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-[var(--color-line)] text-[var(--color-mist)] transition-transform duration-300 group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>
                <p className="px-6 pb-5 text-sm leading-relaxed text-[var(--color-mist)]">
                  {faq.answer}
                </p>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
