import Reveal from "@/components/Reveal";
import Button from "@/components/Button";
import { CrescentMark } from "@/components/Logo";
import { primaryCta } from "@/data/navigation";

const principles = [
  {
    title: "You talk to the person doing the work",
    body: "Lunamar is founder-led. No account managers, no call centre, no being passed around. You deal directly with the person building your site.",
  },
  {
    title: "No big bill before you see results",
    body: "Instead of thousands upfront, your build, hosting, maintenance and updates are bundled into one predictable monthly fee from £149.",
  },
  {
    title: "Pricing you can actually read",
    body: "Every plan, minimum term and what's not included is written in plain English on the pricing page. No hidden fees, no mystery quotes.",
  },
  {
    title: "Your domain and content stay yours",
    body: "Your domain is registered in your name from day one. You always own your business name, logo, photos and content.",
  },
];

export default function FounderSection() {
  return (
    <section className="section" id="why-lunamar">
      <div className="container-x">
        <div className="glow-border overflow-hidden rounded-[2rem] border border-[var(--color-line)] bg-white/[0.02]">
          <div className="grid gap-10 p-8 sm:p-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 lg:p-16">
            <Reveal>
              <div className="flex flex-col">
                <CrescentMark className="h-10 w-10" />
                <span className="mt-7 inline-flex w-fit items-center gap-2 rounded-full border border-[var(--color-line)] bg-white/[0.03] px-3.5 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-[var(--color-mist)]">
                  Why Lunamar
                </span>
                <h2 className="mt-5 font-[family-name:var(--font-display)] text-[clamp(1.8rem,3.6vw,2.6rem)] font-semibold leading-[1.1] tracking-tight text-balance">
                  Agency-quality work, without the agency runaround.
                </h2>
                <p className="mt-5 max-w-md leading-relaxed text-[var(--color-mist)]">
                  Lunamar Digital is a small, founder-led studio. That means
                  honest advice, careful work, and a real person who actually
                  picks up the phone when you call.
                </p>
                <div className="mt-8">
                  <Button href={primaryCta.href}>{primaryCta.label}</Button>
                </div>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <dl className="grid gap-px overflow-hidden rounded-[var(--radius-card)] border border-[var(--color-line)] bg-[var(--color-line)] sm:grid-cols-2">
                {principles.map((principle) => (
                  <div key={principle.title} className="bg-[var(--color-ink)] p-6">
                    <dt className="font-[family-name:var(--font-display)] text-base font-semibold tracking-tight text-white">
                      {principle.title}
                    </dt>
                    <dd className="mt-2 text-sm leading-relaxed text-[var(--color-mist)]">
                      {principle.body}
                    </dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
