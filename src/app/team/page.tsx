import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import TeamPhoto from "@/components/TeamPhoto";
import ContactCTA from "@/components/sections/ContactCTA";
import { team } from "@/data/team";

export const metadata: Metadata = {
  title: "Meet the Team",
  description:
    "Meet the founders behind Lunamar Digital — a small, founder-led studio building and maintaining websites, SEO and social content for small businesses.",
  alternates: { canonical: "/team" },
};

export default function TeamPage() {
  return (
    <>
      <PageHero
        eyebrow="Meet the team"
        title="The people behind Lunamar"
        description="Lunamar Digital is a small, founder-led studio. You deal directly with the two people who design, build and look after your site — no account managers, no being passed around."
      />

      <section className="section pt-4">
        <div className="container-x space-y-16 lg:space-y-28">
          {team.map((member, i) => {
            const reversed = i % 2 === 1;
            return (
              <Reveal key={member.name}>
                <div className="group grid items-center gap-8 lg:grid-cols-2 lg:gap-16">
                  <div className={reversed ? "lg:order-2" : ""}>
                    <TeamPhoto
                      member={member}
                      className="aspect-[4/3]"
                      sizes="(min-width: 1024px) 36rem, 92vw"
                    />
                  </div>

                  <div className={reversed ? "lg:order-1" : ""}>
                    <p className="text-xs font-medium uppercase tracking-[0.2em] text-[var(--color-blue)]">
                      {member.role}
                    </p>
                    <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight sm:text-4xl">
                      {member.name}
                    </h2>
                    <p className="mt-5 max-w-xl text-base leading-8 text-[var(--color-mist)]">
                      {member.bio}
                    </p>
                    {member.socials?.length ? (
                      <div className="mt-6 flex flex-wrap gap-2">
                        {member.socials.map((social) => (
                          <a
                            key={social.label}
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="rounded-full border border-[var(--color-line)] bg-white/[0.03] px-4 py-2 text-sm font-medium text-white/85 transition-colors hover:border-[var(--color-line-strong)] hover:text-white"
                          >
                            {social.label}
                          </a>
                        ))}
                      </div>
                    ) : null}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      <ContactCTA
        title="Work directly with the founders."
        description="Apply for a free website preview and you'll deal with the people who actually build and run your site."
      />
    </>
  );
}
