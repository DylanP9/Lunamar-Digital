import Button from "@/components/Button";
import OrbitalBackground from "@/components/OrbitalBackground";
import { primaryCta, secondaryCta } from "@/data/navigation";
import { siteConfig } from "@/data/siteConfig";

export default function HeroSection() {
  return (
    <section className="relative flex min-h-[92vh] items-center overflow-hidden pt-28 pb-20">
      <OrbitalBackground />

      <div className="container-x relative z-10">
        <div className="mx-auto max-w-3xl text-center">
          <div
            data-reveal
            className="is-visible mb-6 inline-flex items-center gap-2 rounded-full border border-[var(--color-line)] bg-white/[0.03] px-4 py-1.5 text-xs font-medium text-[var(--color-mist)]"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-blue)] animate-pulse-glow" />
            {siteConfig.hook}
          </div>

          <h1 className="font-[family-name:var(--font-display)] text-4xl font-semibold leading-[1.05] tracking-tight text-balance sm:text-6xl md:text-7xl">
            <span className="text-gradient">Digital systems</span>
            <br />
            built for growth.
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-[var(--color-mist)] sm:text-lg text-pretty">
            Lunamar Digital creates websites, SEO systems and marketing
            strategies that help businesses turn online attention into real
            customers.
          </p>

          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button href={primaryCta.href} size="lg" className="w-full sm:w-auto">
              {primaryCta.label}
            </Button>
            <Button
              href={secondaryCta.href}
              variant="secondary"
              size="lg"
              className="w-full sm:w-auto"
            >
              {secondaryCta.label}
            </Button>
          </div>
        </div>

        {/* Floating website mockup cards */}
        <div
          aria-hidden="true"
          className="pointer-events-none relative mx-auto mt-20 hidden max-w-5xl md:block"
        >
          <div className="absolute -left-2 top-6 w-56 rotate-[-6deg] animate-float [animation-delay:-2s]">
            <MockupGlass label="Homepage" />
          </div>
          <div className="absolute -right-2 top-0 w-56 rotate-[6deg] animate-float [animation-delay:-4s]">
            <MockupGlass label="Analytics" tint="purple" />
          </div>
          <div className="mx-auto w-80 animate-float">
            <MockupGlass label="Your website" feature />
          </div>
        </div>
      </div>
    </section>
  );
}

function MockupGlass({
  label,
  feature,
  tint = "blue",
}: {
  label: string;
  feature?: boolean;
  tint?: "blue" | "purple";
}) {
  return (
    <div
      className={`glass rounded-2xl p-3 ${
        feature ? "shadow-[var(--shadow-glow)]" : ""
      }`}
    >
      <div className="mb-3 flex items-center gap-1.5">
        <span className="h-2 w-2 rounded-full bg-white/20" />
        <span className="h-2 w-2 rounded-full bg-white/20" />
        <span className="h-2 w-2 rounded-full bg-white/20" />
      </div>
      <div
        className={`h-20 rounded-lg bg-[linear-gradient(120deg,rgba(91,140,255,0.25),rgba(164,114,255,0.18))] ${
          tint === "purple" ? "opacity-80" : ""
        }`}
      />
      <div className="mt-3 h-2 w-2/3 rounded-full bg-white/15" />
      <div className="mt-2 h-2 w-1/2 rounded-full bg-white/10" />
      <p className="mt-3 text-[0.7rem] font-medium uppercase tracking-[0.12em] text-[var(--color-mistier)]">
        {label}
      </p>
    </div>
  );
}
