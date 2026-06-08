import Reveal from "@/components/Reveal";

export default function TeamSection() {
  return (
    <section className="section">
      <div className="container-x">
        <Reveal>
          <div className="grid gap-px overflow-hidden rounded-[var(--radius-card)] border border-[var(--color-line)] bg-[var(--color-line)] lg:grid-cols-[0.78fr_1.22fr]">
            <div className="bg-[var(--color-panel)] p-8 sm:p-10">
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-[var(--color-blue)]">
                Founder-led
              </p>
              <h2 className="mt-5 font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight">
                A more hands-on approach to digital growth
              </h2>
              <p className="mt-4 text-sm font-medium text-white/80">
                Dylan Polland — Founder, Lunamar Digital
              </p>
              <p className="mt-6 text-sm leading-7 text-[var(--color-mist)]">
                I started Lunamar Digital because I kept seeing good businesses
                held back by websites that were outdated, hard to use, or simply
                not doing enough for them. Too often, business owners are asked
                to pay a large upfront fee for a site and then left on their own
                once it goes live.
              </p>
            </div>
            <div className="bg-[var(--color-ink-soft)] p-8 sm:p-10">
              <h3 className="font-[family-name:var(--font-display)] text-2xl font-semibold leading-tight tracking-tight text-balance">
                A modern digital partner for serious small businesses.
              </h3>
              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                {[
                  "No inflated upfront build fee",
                  "Clear monthly support",
                  "Honest scope and exclusions",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-xl border border-[var(--color-line)] bg-white/[0.025] p-4 text-sm leading-6 text-white/86"
                  >
                    {item}
                  </div>
                ))}
              </div>
              <p className="mt-6 text-sm leading-7 text-[var(--color-mist)]">
                My approach is different. I want to build websites and digital
                systems that are clear, useful, and easy to keep up to date,
                while giving clients someone they can actually speak to when
                they need support. I bring together my background in software
                development, website design, digital marketing, SEO, and
                business operations to help businesses improve how they look
                online and make it easier for customers to take action.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
