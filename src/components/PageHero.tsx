import type { ReactNode } from "react";

interface PageHeroProps {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  children?: ReactNode;
}

/** Consistent hero band for inner pages. Renders the single page H1. */
export default function PageHero({
  eyebrow,
  title,
  description,
  children,
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden pt-36 pb-16 sm:pt-40 sm:pb-20">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-80 w-[44rem] max-w-full -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(124,58,237,0.22),rgba(52,97,255,0.1)_45%,transparent_70%)] blur-2xl"
      />
      <div className="container-x relative text-center">
        {eyebrow ? (
          <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-[var(--color-line)] bg-white/[0.03] px-3.5 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-[var(--color-mist)]">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-blue)] animate-pulse-glow" />
            {eyebrow}
          </span>
        ) : null}
        <h1 className="mx-auto max-w-3xl font-[family-name:var(--font-display)] text-4xl font-semibold leading-[1.08] tracking-tight text-balance sm:text-5xl md:text-6xl">
          {title}
        </h1>
        {description ? (
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-[var(--color-mist)] sm:text-lg text-pretty">
            {description}
          </p>
        ) : null}
        {children ? <div className="mt-9">{children}</div> : null}
      </div>
    </section>
  );
}
