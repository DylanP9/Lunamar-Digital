import Reveal from "@/components/Reveal";
import Button from "@/components/Button";
import { primaryCta } from "@/data/navigation";

const stages = ["Your brand", "Preview", "Launch", "Growth"];

export default function FreePreviewSection() {
  return (
    <section className="section">
      <div className="container-x">
        <div className="glow-border relative overflow-hidden rounded-[2rem] border border-[var(--color-line)] bg-white/[0.02] p-8 sm:p-12 lg:p-16">
          <div
            aria-hidden="true"
            className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(124,58,237,0.3),transparent_70%)] blur-2xl"
          />
          <div className="relative grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-center">
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-[var(--color-line)] bg-white/[0.03] px-3.5 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-[var(--color-mist)]">
                Build before you buy
              </span>
              <h2 className="mt-5 font-[family-name:var(--font-display)] text-3xl font-semibold leading-tight tracking-tight text-balance sm:text-4xl">
                See the idea before you commit.
              </h2>
              <p className="mt-5 max-w-lg text-base leading-relaxed text-[var(--color-mist)]">
                For selected businesses, we create a preview concept first — so
                you can see what your website could look like before moving
                forward. No big upfront cost, no guesswork.
              </p>
              <div className="mt-8">
                <Button href={primaryCta.href}>{primaryCta.label}</Button>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <ol className="relative space-y-3">
                {stages.map((stage, i) => (
                  <li
                    key={stage}
                    className="flex items-center gap-4 rounded-2xl border border-[var(--color-line)] bg-white/[0.02] px-5 py-4"
                    style={{ marginLeft: `${i * 1.25}rem` }}
                  >
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[linear-gradient(120deg,var(--color-blue-deep),var(--color-purple-deep))] text-xs font-semibold text-white">
                      {i + 1}
                    </span>
                    <span className="font-[family-name:var(--font-display)] text-sm font-medium tracking-tight">
                      {stage}
                    </span>
                    {i < stages.length - 1 ? (
                      <span aria-hidden className="ml-auto text-[var(--color-mistier)]">
                        ↓
                      </span>
                    ) : null}
                  </li>
                ))}
              </ol>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
