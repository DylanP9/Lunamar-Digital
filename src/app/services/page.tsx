import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Icon from "@/components/Icon";
import Reveal from "@/components/Reveal";
import Button from "@/components/Button";
import ContactCTA from "@/components/sections/ContactCTA";
import { services, optionalService } from "@/data/services";
import { primaryCta } from "@/data/navigation";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Website design, SEO, local SEO, social media management, digital marketing, conversion optimisation and maintenance — delivered through simple monthly plans.",
  alternates: { canonical: "/services" },
};

const allServices = [...services, optionalService];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Websites, visibility and marketing — joined up."
        description="Everything you need to launch sharper and grow smarter, delivered as one connected system rather than disconnected one-off projects."
      >
        <Button href={primaryCta.href}>{primaryCta.label}</Button>
      </PageHero>

      <section className="section pt-4">
        <div className="container-x space-y-5">
          {allServices.map((service, i) => (
            <Reveal key={service.id} delay={i * 40}>
              <article
                id={service.id}
                className="glow-border relative grid gap-6 rounded-[var(--radius-card)] border border-[var(--color-line)] bg-white/[0.02] p-7 sm:p-9 md:grid-cols-[auto_1fr] md:gap-10"
              >
                <div className="flex md:flex-col md:items-start">
                  <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-[var(--color-line)] bg-white/[0.03] text-[var(--color-blue)]">
                    <Icon name={service.icon} className="h-7 w-7" />
                  </span>
                </div>
                <div>
                  <h2 className="font-[family-name:var(--font-display)] text-2xl font-semibold tracking-tight">
                    {service.title}
                    {service.id === "ecommerce-payments" ? (
                      <span className="ml-3 align-middle text-xs font-medium uppercase tracking-[0.14em] text-[var(--color-purple)]">
                        Optional add-on
                      </span>
                    ) : null}
                  </h2>
                  <p className="mt-3 max-w-2xl text-base leading-relaxed text-[var(--color-mist)]">
                    {service.detail}
                  </p>
                  <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
                    {service.points.map((point) => (
                      <li
                        key={point}
                        className="flex items-start gap-2.5 text-sm text-white/85"
                      >
                        <svg
                          className="mt-0.5 h-4 w-4 shrink-0 text-[var(--color-blue)]"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          aria-hidden
                        >
                          <path d="M20 6 9 17l-5-5" />
                        </svg>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <ContactCTA
        title="Let's map the right mix for your business."
        description="Request a free preview and we'll show you what your website and marketing could look like."
      />
    </>
  );
}
