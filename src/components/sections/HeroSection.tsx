import Button from "@/components/Button";
import OrbitalBackground from "@/components/OrbitalBackground";
import { primaryCta } from "@/data/navigation";
import { siteConfig } from "@/data/siteConfig";

export default function HeroSection() {
  return (
    <section className="relative flex min-h-[100svh] items-center overflow-hidden pt-32 pb-24">
      <OrbitalBackground />

      <div className="container-x relative z-10">
        <div className="mx-auto max-w-3xl text-center">
          <div
            data-reveal
            className="is-visible mb-7 inline-flex items-center gap-2 rounded-full border border-[var(--color-line)] bg-white/[0.03] px-4 py-1.5 text-xs font-medium text-[var(--color-mist)]"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-blue)]" />
            {siteConfig.hook}
          </div>

          <h1 className="font-[family-name:var(--font-display)] text-[clamp(2.6rem,7vw,4.75rem)] font-semibold leading-[1.03] tracking-[-0.03em] text-balance">
            <span className="text-gradient">Digital systems</span> built for
            growth.
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-[var(--color-mist)] sm:text-lg text-pretty">
            Lunamar Digital builds websites, SEO systems and marketing
            strategies that help businesses turn online attention into real
            customers.
          </p>

          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
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

          <p className="mt-6 text-sm text-[var(--color-mistier)]">
            No upfront website cost · Plans from{" "}
            <span className="tabular text-white/80">£149</span>/month
          </p>
        </div>
      </div>

      {/* Scroll cue */}
      <div
        aria-hidden="true"
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 sm:block"
      >
        <span className="flex h-9 w-5 items-start justify-center rounded-full border border-[var(--color-line-strong)] p-1.5">
          <span className="h-1.5 w-1 rounded-full bg-[var(--color-mist)] animate-float" />
        </span>
      </div>
    </section>
  );
}
