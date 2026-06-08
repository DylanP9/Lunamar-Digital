import type { CaseStudyMockup } from "@/types/caseStudy";
import Image from "next/image";

type MockupCardVariant = "standard" | "large" | "hero";

const imageClassByVariant: Record<MockupCardVariant, string> = {
  standard: "aspect-[16/10]",
  large: "aspect-[16/9]",
  hero: "aspect-[16/9] lg:aspect-[16/8.5]",
};

const cardClassByVariant: Record<MockupCardVariant, string> = {
  standard: "p-4",
  large: "p-4 sm:p-5",
  hero: "p-4 sm:p-5 lg:p-6",
};

/**
 * Screenshot card for case-study screens. Falls back to a lightweight
 * placeholder if an approved image has not been added yet.
 */
export default function MockupCard({
  mockup,
  variant = "standard",
}: {
  mockup: CaseStudyMockup;
  variant?: MockupCardVariant;
}) {
  return (
    <div
      className={`glow-border group relative overflow-hidden rounded-2xl border border-[var(--color-line)] bg-white/[0.02] transition-transform duration-300 hover:-translate-y-1 ${cardClassByVariant[variant]}`}
    >
      <div className="mb-3 flex items-center gap-1.5 sm:mb-4">
        <span className="h-2 w-2 rounded-full bg-white/20" />
        <span className="h-2 w-2 rounded-full bg-white/20" />
        <span className="h-2 w-2 rounded-full bg-white/20" />
      </div>
      <div
        className={`relative overflow-hidden rounded-xl bg-[linear-gradient(135deg,rgba(127,163,255,0.18),rgba(246,243,236,0.08))] ${imageClassByVariant[variant]}`}
      >
        {mockup.image ? (
          <Image
            src={mockup.image}
            alt={`${mockup.label} screenshot`}
            fill
            sizes={
              variant === "hero"
                ? "(min-width: 1024px) 70vw, 100vw"
                : "(min-width: 1024px) 34vw, 100vw"
            }
            className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <>
            <div className="absolute inset-x-3 top-3 h-2.5 w-1/2 rounded-full bg-white/25" />
            <div className="absolute inset-x-3 top-7 h-2 w-2/3 rounded-full bg-white/12" />
            <div className="absolute bottom-3 left-3 h-6 w-20 rounded-full bg-white/15" />
          </>
        )}
      </div>
      <h3 className="mt-4 text-sm font-semibold tracking-tight sm:text-base">
        {mockup.label}
      </h3>
      <p className="mt-1 text-xs leading-relaxed text-[var(--color-mist)] sm:text-sm">
        {mockup.caption}
      </p>
    </div>
  );
}
