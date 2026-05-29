import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";
import Reveal from "@/components/Reveal";
import { siteConfig } from "@/data/siteConfig";
import { valuePoints } from "@/data/content";

export const metadata: Metadata = {
  title: "Contact — Request a Free Website Preview",
  description:
    "Request a free website preview from Lunamar Digital. Tell us about your business and we'll show you what your website could look like before you commit.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Free preview"
        title="Request a free preview."
        description="Tell us about your business. For selected businesses we create a preview concept first, so you can see what your website could look like before moving forward."
      />

      <section className="section pt-4">
        <div className="container-x grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:items-start">
          <Reveal>
            <div className="rounded-[2rem] border border-[var(--color-line)] bg-white/[0.02] p-6 sm:p-9">
              <ContactForm />
            </div>
          </Reveal>

          <Reveal delay={100} className="lg:sticky lg:top-24">
            <div className="space-y-6">
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
                  {valuePoints.map((point) => (
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
