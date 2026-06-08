import Reveal from "@/components/Reveal";
import Button from "@/components/Button";
import { primaryCta } from "@/data/navigation";

const receives = [
  "A tailored homepage concept",
  "A clearer visual direction",
  "Suggested improvements to layout, messaging and customer actions",
  "A short explanation of the recommended next steps",
];

export default function FreePreviewSection() {
  return (
    <section className="section">
      <div className="container-x">
        <div className="relative overflow-hidden rounded-[var(--radius-card)] border border-[var(--color-line)] bg-white/[0.025] p-8 sm:p-12 lg:p-16">
          <div
            aria-hidden="true"
            className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(127,163,255,0.18),transparent_70%)] blur-2xl"
          />
          <div className="relative grid gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:items-start">
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-[var(--color-line)] bg-white/[0.03] px-3.5 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-[var(--color-mist)]">
                Free preview
              </span>
              <h2 className="mt-5 font-[family-name:var(--font-display)] text-3xl font-semibold leading-tight tracking-tight text-balance sm:text-4xl">
                See the direction before you commit.
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-8 text-[var(--color-mist)]">
                For selected businesses, Lunamar Digital creates a free website
                preview to show how your online presence could be improved
                before you commit to a monthly plan.
              </p>
              <div className="mt-6 space-y-4 text-sm leading-7 text-[var(--color-mist)]">
                <p>
                  The preview is a focused homepage concept, not a full finished
                  website. It may include a proposed layout, refreshed visual
                  direction, clearer calls to action, and ideas for improving how
                  customers find, trust and contact your business.
                </p>
                <p>
                  Most previews are prepared within 5–7 working days once we
                  have reviewed your current website, social media, branding and
                  business information.
                </p>
                <p>
                  Because each preview is created specifically for the business,
                  availability is limited. We only take on preview requests where
                  we believe there is a strong fit and a clear opportunity to
                  improve the business&apos;s online presence.
                </p>
              </div>
              <div className="mt-8">
                <Button href={primaryCta.href}>{primaryCta.label}</Button>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <div className="rounded-[var(--radius-card)] border border-[var(--color-line)] bg-[var(--color-ink-soft)] p-6">
                <h3 className="font-[family-name:var(--font-display)] text-xl font-semibold tracking-tight">
                  What you receive
                </h3>
                <ul className="mt-5 space-y-3">
                  {receives.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-white/86">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-blue)]" />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-7 border-t border-[var(--color-line)] pt-6">
                  <h3 className="font-[family-name:var(--font-display)] text-xl font-semibold tracking-tight">
                    What happens next
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-[var(--color-mist)]">
                    If you like the direction, we can refine the preview into a
                    full website through one of our monthly plans. There is no
                    obligation to proceed.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
