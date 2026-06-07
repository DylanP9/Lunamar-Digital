import Button from "@/components/Button";
import MorphingHeadline from "@/components/MorphingHeadline";
import FloatingDeviceStack from "@/components/FloatingDeviceStack";
import { primaryCta } from "@/data/navigation";
import { siteConfig } from "@/data/siteConfig";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 sm:pb-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 bg-cover bg-center opacity-20"
        style={{
          backgroundImage:
            "url('/images/brand/lunamar-abstract-background.jpg')",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 bg-[linear-gradient(90deg,var(--color-ink)_0%,transparent_45%,var(--color-ink)_100%)]"
      />
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-20 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full border border-white/[0.06]"
      />

      <div className="container-x relative z-10">
        <div className="grid gap-12 lg:grid-cols-[0.96fr_1.04fr] lg:items-center">
          <div>
            <div
              data-reveal
              className="is-visible mb-7 inline-flex items-center gap-2 rounded-full border border-[var(--color-line)] bg-white/[0.035] px-4 py-1.5 text-xs font-medium text-[var(--color-mist)]"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-blue)]" />
              {siteConfig.hook}
            </div>

            <MorphingHeadline className="max-w-4xl font-[family-name:var(--font-display)] text-[clamp(2.7rem,6vw,5.35rem)] font-semibold leading-[0.98] tracking-[-0.035em] text-balance" />

            <p className="mt-7 max-w-2xl text-base leading-8 text-[var(--color-mist)] sm:text-lg">
              Lunamar Digital builds and maintains websites, SEO foundations and
              social content for cafés, gyms, trades, salons, restaurants and
              service businesses.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button href={primaryCta.href} size="lg" className="w-full sm:w-auto">
                {primaryCta.label}
              </Button>
              <Button
                href="/pricing"
                variant="secondary"
                size="lg"
                className="w-full sm:w-auto"
              >
                View monthly plans
              </Button>
            </div>

            <div className="mt-8 grid gap-3 text-sm text-[var(--color-mist)] sm:grid-cols-3">
              <p className="border-l border-[var(--color-line-strong)] pl-4">
                No upfront website cost
              </p>
              <p className="border-l border-[var(--color-line-strong)] pl-4">
                Plans from <span className="tabular text-white">£149</span>/month
              </p>
              <p className="border-l border-[var(--color-line-strong)] pl-4">
                Built, hosted and maintained
              </p>
            </div>
          </div>

          <FloatingDeviceStack />
        </div>
      </div>
    </section>
  );
}
