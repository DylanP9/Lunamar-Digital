import Icon from "@/components/Icon";
import Reveal from "@/components/Reveal";
import SectionHeader from "@/components/SectionHeader";
import Button from "@/components/Button";
import { services } from "@/data/services";

export default function ServicesSection() {
  return (
    <section className="section" id="what-we-do">
      <div className="container-x">
        <SectionHeader
          eyebrow="What we do"
          title="Practical support for the parts customers actually check"
          description="Websites, search foundations, social content and maintenance shaped around how people decide whether to trust a local business."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <Reveal key={service.id} delay={i * 60} className="h-full">
              <article className="glow-border group relative flex h-full flex-col rounded-[var(--radius-card)] border border-[var(--color-line)] bg-white/[0.02] p-7 transition-transform duration-300 hover:-translate-y-1">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-[var(--color-line)] bg-white/[0.03] text-[var(--color-blue)] transition-colors duration-300 group-hover:text-white">
                  <Icon name={service.icon} className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-[family-name:var(--font-display)] text-lg font-semibold tracking-tight">
                  {service.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-[var(--color-mist)]">
                  {service.summary}
                </p>
                <ul className="mt-5 space-y-2 border-t border-[var(--color-line)] pt-5">
                  {service.points.slice(0, 3).map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-2.5 text-xs text-[var(--color-mistier)]"
                    >
                      <span className="mt-1 h-1 w-1 shrink-0 rounded-full bg-[var(--color-blue)]" />
                      {point}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10 flex justify-center">
          <Button href="/services" variant="secondary">
            Explore all services
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
