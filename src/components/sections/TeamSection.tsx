import Image from "next/image";
import Reveal from "@/components/Reveal";
import { team } from "@/data/team";

export default function TeamSection() {
  return (
    <section className="section" id="team">
      <div className="container-x">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-[var(--color-blue)]">
            Meet the team
          </p>
          <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight sm:text-4xl">
            The people behind Lunamar
          </h2>
          <p className="mt-4 text-base leading-8 text-[var(--color-mist)]">
            Lunamar Digital is a small, founder-led studio. You deal directly
            with the two people who design, build and look after your site —
            no account managers, no being passed around.
          </p>
        </Reveal>

        <div className="mx-auto mt-14 grid max-w-4xl gap-6 sm:grid-cols-2">
          {team.map((member, i) => (
            <Reveal key={member.name} delay={i * 90}>
              <article className="glow-border group h-full overflow-hidden rounded-[var(--radius-card)] border border-[var(--color-line)] bg-white/[0.02] p-4 transition-transform duration-300 hover:-translate-y-1">
                <div className="relative aspect-[4/5] overflow-hidden rounded-xl">
                  {/* Fallback monogram shows until the photo file is added */}
                  <div className="absolute inset-0 flex items-center justify-center bg-[linear-gradient(135deg,rgba(127,163,255,0.20),rgba(54,93,255,0.08))]">
                    <span className="font-[family-name:var(--font-display)] text-7xl font-semibold text-white/15">
                      {member.name.charAt(0)}
                    </span>
                  </div>
                  <Image
                    src={member.image}
                    alt={`${member.name}, ${member.role} at Lunamar Digital`}
                    fill
                    sizes="(min-width: 640px) 22rem, 90vw"
                    style={{ objectPosition: member.focus ?? "center" }}
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                  <div
                    aria-hidden="true"
                    className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[var(--color-ink)]/70 to-transparent"
                  />
                </div>

                <div className="p-3 pt-5">
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="font-[family-name:var(--font-display)] text-xl font-semibold tracking-tight">
                      {member.name}
                    </h3>
                    <span className="inline-flex shrink-0 rounded-full border border-[var(--color-line)] px-3 py-1 text-[0.7rem] font-medium uppercase tracking-[0.12em] text-[var(--color-blue)]">
                      {member.role}
                    </span>
                  </div>
                  <p className="mt-3 text-sm leading-7 text-[var(--color-mist)]">
                    {member.bio}
                  </p>
                  {member.socials?.length ? (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {member.socials.map((social) => (
                        <a
                          key={social.label}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="rounded-full border border-[var(--color-line)] bg-white/[0.03] px-3 py-1.5 text-xs font-medium text-white/85 transition-colors hover:border-[var(--color-line-strong)] hover:text-white"
                        >
                          {social.label}
                        </a>
                      ))}
                    </div>
                  ) : null}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
