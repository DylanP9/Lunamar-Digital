import Reveal from "@/components/Reveal";
import HighlightText from "@/components/HighlightText";

const problems = [
  {
    before: "Your Instagram gets attention, but there is nowhere clear to send people.",
    after:
      "Customers land on a proper website with menus, services, prices, locations and contact routes in one place.",
  },
  {
    before:
      "Your website looks old, loads slowly, or does not explain why people should trust you.",
    after:
      "The first impression feels current, credible and built around the action you want customers to take.",
  },
  {
    before:
      "Important details live across posts, DMs, old links and screenshots.",
    after:
      "Customers can check what you offer in seconds, then call, book, visit or enquire without friction.",
  },
];

export default function WebsiteProblemsSection() {
  return (
    <section className="section pt-0">
      <div className="container-x">
        <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
          <Reveal>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-[var(--color-blue)]">
              Before / after
            </p>
            <h2 className="mt-4 font-[family-name:var(--font-display)] text-3xl font-semibold leading-tight tracking-tight text-balance sm:text-4xl">
              The website should make trust easier, not make customers work for
              it.
            </h2>
            <HighlightText
              text="Most small businesses do not need a complicated digital overhaul. They need a clear place for customers to understand the offer, check the details and take the next step."
              className="mt-5 text-base leading-8"
              fillAt={0.68}
            />
          </Reveal>

          <div className="space-y-4">
            {problems.map((item, i) => (
              <Reveal key={item.before} delay={i * 80}>
                <article className="grid gap-4 rounded-[var(--radius-card)] border border-[var(--color-line)] bg-white/[0.025] p-5 sm:grid-cols-2 sm:p-6">
                  <div>
                    <p className="text-xs font-medium uppercase tracking-[0.18em] text-[var(--color-mistier)]">
                      Before
                    </p>
                    <p className="mt-3 text-sm leading-7 text-[var(--color-mist)]">
                      {item.before}
                    </p>
                  </div>
                  <div className="rounded-xl border border-[var(--color-line)] bg-white/[0.035] p-4">
                    <p className="text-xs font-medium uppercase tracking-[0.18em] text-[var(--color-blue)]">
                      After Lunamar
                    </p>
                    <p className="mt-3 text-sm leading-7 text-white/88">
                      {item.after}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
