import { CrescentMark } from "./Logo";

/**
 * Lightweight, image-free browser mockups used in the hero transformation.
 * `messy` = a dated/cluttered site; `clean` = a Lunamar-built one. Both are
 * pure CSS/markup so the hero stays fast and crisp at any size.
 */
export default function SiteMockup({
  variant,
  className = "",
}: {
  variant: "messy" | "clean";
  className?: string;
}) {
  return (
    <div
      className={`overflow-hidden rounded-2xl border ${
        variant === "clean"
          ? "border-[var(--color-line-strong)] bg-[#0c1020]"
          : "border-white/10 bg-[#15161a]"
      } shadow-[0_40px_90px_-40px_rgba(0,0,0,0.85)] ${className}`}
      aria-hidden="true"
    >
      {/* Browser chrome */}
      <div className="flex items-center gap-2 border-b border-white/[0.06] px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
        <span
          className={`ml-3 h-5 flex-1 rounded-md ${
            variant === "clean" ? "bg-white/[0.06]" : "bg-white/[0.04]"
          }`}
        />
      </div>

      {variant === "messy" ? <MessyBody /> : <CleanBody />}
    </div>
  );
}

/** Dated, cluttered, low-contrast — the "before". */
function MessyBody() {
  return (
    <div className="space-y-3 p-5 [filter:grayscale(0.55)_contrast(0.92)]">
      <div className="flex items-center justify-between">
        <div className="h-4 w-24 rounded bg-white/15" />
        <div className="flex gap-2">
          <div className="h-3 w-8 rounded bg-white/10" />
          <div className="h-3 w-10 rounded bg-white/10" />
          <div className="h-3 w-6 rounded bg-white/10" />
        </div>
      </div>

      {/* Broken hero image */}
      <div className="flex h-24 items-center justify-center rounded border border-dashed border-white/15 bg-white/[0.03]">
        <svg
          viewBox="0 0 24 24"
          className="h-8 w-8 text-white/20"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.5}
        >
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <path d="m3 16 5-5 4 4 3-3 6 6" />
          <path d="m2 2 20 20" strokeWidth={1} />
        </svg>
      </div>

      {/* Cramped, uneven text */}
      <div className="space-y-1.5">
        <div className="h-2.5 w-5/6 rounded bg-white/12" />
        <div className="h-2.5 w-full rounded bg-white/10" />
        <div className="h-2.5 w-2/3 rounded bg-white/10" />
        <div className="h-2.5 w-3/4 rounded bg-white/10" />
      </div>

      {/* Clashing button */}
      <div className="inline-flex rounded bg-[#9aa0a6] px-3 py-1.5">
        <div className="h-2.5 w-16 rounded bg-black/30" />
      </div>
    </div>
  );
}

/** Organised, on-brand, balanced — the Lunamar "after". */
function CleanBody() {
  return (
    <div className="space-y-4 p-5">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <CrescentMark className="h-4 w-4" />
          <div className="h-3 w-20 rounded bg-white/70" />
        </div>
        <div className="flex items-center gap-2">
          <div className="h-2.5 w-8 rounded bg-white/20" />
          <div className="h-2.5 w-8 rounded bg-white/20" />
          <div className="h-5 w-14 rounded-full bg-[linear-gradient(120deg,var(--color-blue-deep),var(--color-purple-deep))]" />
        </div>
      </div>

      {/* Clean hero */}
      <div className="space-y-2 pt-1">
        <div className="h-3.5 w-4/5 rounded bg-white/80" />
        <div className="h-3.5 w-3/5 rounded bg-white/45" />
        <div className="mt-2 flex gap-2">
          <div className="h-6 w-24 rounded-full bg-[linear-gradient(120deg,var(--color-blue-deep),var(--color-purple-deep))]" />
          <div className="h-6 w-20 rounded-full border border-white/20" />
        </div>
      </div>

      {/* Tidy service row */}
      <div className="grid grid-cols-3 gap-2 pt-1">
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className="space-y-1.5 rounded-lg border border-white/[0.08] bg-white/[0.03] p-2.5"
          >
            <div className="h-4 w-4 rounded bg-[var(--color-blue)]/70" />
            <div className="h-1.5 w-full rounded bg-white/25" />
            <div className="h-1.5 w-2/3 rounded bg-white/15" />
          </div>
        ))}
      </div>
    </div>
  );
}
