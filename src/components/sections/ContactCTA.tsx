import Reveal from "@/components/Reveal";
import Button from "@/components/Button";
import { primaryCta } from "@/data/navigation";

interface ContactCTAProps {
  title?: string;
  description?: string;
}

export default function ContactCTA({
  title = "Ready to build a stronger digital presence?",
  description = "Start with a preview. We will show you what your business could look like online before you commit.",
}: ContactCTAProps) {
  return (
    <section className="section">
      <div className="container-x">
        <Reveal>
          <div className="glow-border relative overflow-hidden rounded-[2rem] border border-[var(--color-line-strong)] bg-white/[0.03] px-6 py-16 text-center sm:px-12 sm:py-20">
            <div
              aria-hidden
              className="absolute left-1/2 top-1/2 h-[28rem] w-[28rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(124,58,237,0.28),rgba(52,97,255,0.12)_45%,transparent_70%)] blur-2xl animate-pulse-glow"
            />
            <h2 className="relative mx-auto max-w-2xl font-[family-name:var(--font-display)] text-3xl font-semibold leading-tight tracking-tight text-balance sm:text-5xl">
              {title}
            </h2>
            <p className="relative mx-auto mt-5 max-w-xl text-base leading-relaxed text-[var(--color-mist)] sm:text-lg">
              {description}
            </p>
            <div className="relative mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button href={primaryCta.href} size="lg" className="w-full sm:w-auto">
                {primaryCta.label}
              </Button>
              <Button
                href="/pricing"
                variant="secondary"
                size="lg"
                className="w-full sm:w-auto"
              >
                View pricing
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
