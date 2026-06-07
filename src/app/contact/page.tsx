import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";
import Reveal from "@/components/Reveal";
import { siteConfig } from "@/data/siteConfig";

export const metadata: Metadata = {
  title: "Apply for a Free Website Preview",
  description:
    "Apply for a free website preview from Lunamar Digital. Selected businesses receive a focused homepage concept before committing to a monthly plan.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Free preview"
        title="Apply for a free website preview."
        description="Tell us what is not working online right now. For selected businesses, we create a focused homepage concept within 5–7 working days after reviewing your current website, social media, branding and business information."
      />

      <section className="section pt-4">
        <div className="container-x grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:items-start">
          <Reveal>
            <div className="rounded-[var(--radius-card)] border border-[var(--color-line)] bg-white/[0.025] p-6 sm:p-9">
              <ContactForm />
            </div>
          </Reveal>

          <Reveal delay={100} className="lg:sticky lg:top-24">
            <div className="space-y-6">
              <div className="rounded-[var(--radius-card)] border border-[var(--color-line)] bg-white/[0.02] p-6">
                <h2 className="font-[family-name:var(--font-display)] text-lg font-semibold tracking-tight">
                  What happens next
                </h2>
                <ol className="mt-4 space-y-3">
                  {[
                    "We read your enquiry and reply, usually within one business day.",
                    "If your business is a fit, we put together a focused preview concept.",
                    "If the direction makes sense, we confirm the plan, scope and monthly terms before work starts. There is no obligation to proceed.",
                  ].map((step, i) => (
                    <li key={step} className="flex items-start gap-3 text-sm">
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-[var(--color-line)] text-xs font-medium text-[var(--color-blue)]">
                        {i + 1}
                      </span>
                      <span className="text-[var(--color-mist)]">{step}</span>
                    </li>
                  ))}
                </ol>
              </div>

              <div className="rounded-[var(--radius-card)] border border-[var(--color-line)] bg-white/[0.02] p-6">
                <h2 className="font-[family-name:var(--font-display)] text-lg font-semibold tracking-tight">
                  Prefer email?
                </h2>
                <p className="mt-2 text-sm text-[var(--color-mist)]">
                  Reach us directly and we&apos;ll get back to you.
                </p>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="mt-4 inline-block text-sm font-medium text-white underline-offset-4 hover:underline"
                >
                  {siteConfig.email}
                </a>
              </div>

              <div className="rounded-[var(--radius-card)] border border-[var(--color-line)] bg-white/[0.02] p-6">
                <h2 className="font-[family-name:var(--font-display)] text-lg font-semibold tracking-tight">
                  Why Lunamar
                </h2>
                <ul className="mt-4 space-y-3">
                  {[
                    "No upfront website cost",
                    "Clear monthly plans",
                    "Transparent exclusions",
                    "Founder-led support",
                  ].map((point) => (
                    <li
                      key={point}
                      className="flex items-center gap-2.5 text-sm text-white/85"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-blue)]" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
