import type { CaseStudyMockup } from "@/types/caseStudy";

/**
 * Placeholder visual for a case-study screen. Designed to be swapped for a real
 * screenshot (next/image) once approved assets are added to
 * /public/images/case-studies/.
 */
export default function MockupCard({ mockup }: { mockup: CaseStudyMockup }) {
  return (
    <div className="glow-border group relative overflow-hidden rounded-2xl border border-[var(--color-line)] bg-white/[0.02] p-4 transition-transform duration-300 hover:-translate-y-1">
      <div className="mb-3 flex items-center gap-1.5">
        <span className="h-2 w-2 rounded-full bg-white/20" />
        <span className="h-2 w-2 rounded-full bg-white/20" />
        <span className="h-2 w-2 rounded-full bg-white/20" />
      </div>
      <div className="relative h-32 overflow-hidden rounded-lg bg-[linear-gradient(135deg,rgba(91,140,255,0.22),rgba(164,114,255,0.16))]">
        <div className="absolute inset-x-3 top-3 h-2.5 w-1/2 rounded-full bg-white/25" />
        <div className="absolute inset-x-3 top-7 h-2 w-2/3 rounded-full bg-white/12" />
        <div className="absolute bottom-3 left-3 h-6 w-20 rounded-full bg-white/15" />
      </div>
      <h3 className="mt-4 text-sm font-semibold tracking-tight">{mockup.label}</h3>
      <p className="mt-1 text-xs leading-relaxed text-[var(--color-mist)]">
        {mockup.caption}
      </p>
    </div>
  );
}
