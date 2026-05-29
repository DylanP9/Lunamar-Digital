import Reveal from "@/components/Reveal";

export default function TeamSection() {
  return (
    <section className="section">
      <div className="container-x">
        <Reveal>
          <div className="glow-border relative overflow-hidden rounded-[2rem] border border-[var(--color-line)] bg-white/[0.02] p-8 text-center sm:p-14">
            <div
              aria-hidden
              className="absolute left-1/2 top-0 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(91,140,255,0.4),transparent_70%)] blur-2xl"
            />
            <span className="relative inline-flex items-center gap-2 rounded-full border border-[var(--color-line)] bg-white/[0.03] px-3.5 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-[var(--color-mist)]">
              The team
            </span>
            <h2 className="relative mx-auto mt-5 max-w-2xl font-[family-name:var(--font-display)] text-2xl font-semibold leading-tight tracking-tight text-balance sm:text-3xl">
              A small, focused team building better digital for growing
              businesses.
            </h2>
            <p className="relative mx-auto mt-5 max-w-xl text-base leading-relaxed text-[var(--color-mist)]">
              Lunamar Digital is built by a small, focused team helping
              businesses modernise their digital presence through design,
              technology and marketing.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
