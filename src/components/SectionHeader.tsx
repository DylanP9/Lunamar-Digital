import type { ReactNode } from "react";
import Reveal from "./Reveal";

interface SectionHeaderProps {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  /** Heading level for correct document outline. Defaults to h2. */
  as?: "h1" | "h2" | "h3";
}

export default function SectionHeader({
  eyebrow,
  title,
  description,
  align = "center",
  as: Heading = "h2",
}: SectionHeaderProps) {
  const alignment =
    align === "center" ? "items-center text-center mx-auto" : "items-start text-left";

  return (
    <Reveal className={`flex max-w-2xl flex-col ${alignment}`}>
      {eyebrow ? (
        <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-[var(--color-line)] bg-white/[0.03] px-3.5 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-[var(--color-mist)]">
          <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-blue)] animate-pulse-glow" />
          {eyebrow}
        </span>
      ) : null}
      <Heading className="font-[family-name:var(--font-display)] text-3xl font-semibold leading-[1.1] tracking-tight text-balance sm:text-4xl md:text-5xl">
        {title}
      </Heading>
      {description ? (
        <p className="mt-5 text-base leading-relaxed text-[var(--color-mist)] sm:text-lg text-pretty">
          {description}
        </p>
      ) : null}
    </Reveal>
  );
}
