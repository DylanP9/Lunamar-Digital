import Link from "next/link";
import Reveal from "@/components/Reveal";
import TeamPhoto from "@/components/TeamPhoto";
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
                <TeamPhoto
                  member={member}
                  className="aspect-[4/3]"
                  sizes="(min-width: 640px) 22rem, 90vw"
                />

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
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10 text-center">
          <Link
            href="/team"
            className="inline-flex items-center gap-2 text-sm font-medium text-[var(--color-blue)] transition-colors hover:text-white"
          >
            Meet the team
            <span aria-hidden>&rarr;</span>
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
