import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { siteConfig } from "@/data/siteConfig";

export const metadata: Metadata = {
  title: "Privacy",
  description: `How ${siteConfig.name} handles the limited information you share with us.`,
  alternates: { canonical: "/privacy" },
};

const sections = [
  {
    heading: "Overview",
    body: "This is a simple, plain-English summary of how Lunamar Digital handles information. It is intended to be clear and editable, and it is not legal advice. We recommend confirming a final privacy policy with a suitable professional before launch.",
  },
  {
    heading: "Contact information",
    body: "If you contact us through the website, you do so via your own email application. The current contact form prepares an email for you to send — it does not store your details on this website or send them to a third-party service. Any information you choose to email us is used only to respond to your enquiry.",
  },
  {
    heading: "Analytics",
    body: "This website does not currently use analytics or tracking cookies. If analytics are added in future, this page will be updated to explain what is collected and how consent is handled.",
  },
  {
    heading: "How we use your information",
    body: "We use the details you share only to understand your enquiry and respond to you. We do not sell your data, and we do not share it with third parties for marketing.",
  },
  {
    heading: "Your choices",
    body: "You can ask us to update or delete any information you have shared with us by email at any time.",
  },
];

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Privacy"
        title="Privacy."
        description="A short, honest summary of how we handle the limited information you share with us."
      />

      <section className="section pt-4">
        <div className="container-x mx-auto max-w-3xl space-y-8">
          {sections.map((section) => (
            <div
              key={section.heading}
              className="rounded-[var(--radius-card)] border border-[var(--color-line)] bg-white/[0.02] p-7"
            >
              <h2 className="font-[family-name:var(--font-display)] text-xl font-semibold tracking-tight">
                {section.heading}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-[var(--color-mist)]">
                {section.body}
              </p>
            </div>
          ))}

          <p className="text-sm text-[var(--color-mist)]">
            Questions about privacy? Email us at{" "}
            <a
              href={`mailto:${siteConfig.email}`}
              className="text-white underline-offset-4 hover:underline"
            >
              {siteConfig.email}
            </a>
            .
          </p>
        </div>
      </section>
    </>
  );
}
