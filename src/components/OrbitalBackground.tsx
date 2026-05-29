/**
 * Decorative orbital rings + glowing eclipse. Purely visual (aria-hidden) and
 * CSS-animated, so it costs nothing on the main thread and is disabled by
 * prefers-reduced-motion.
 */
export default function OrbitalBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
    >
      {/* Eclipse glow */}
      <div className="absolute left-1/2 top-[6%] h-[34rem] w-[34rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(124,58,237,0.35),rgba(52,97,255,0.12)_45%,transparent_70%)] blur-2xl animate-pulse-glow" />

      {/* The moon / eclipse body */}
      <div className="absolute left-1/2 top-[12%] h-40 w-40 -translate-x-1/2 sm:h-52 sm:w-52">
        <div className="relative h-full w-full rounded-full bg-[radial-gradient(circle_at_30%_30%,#cdd9ff,#6d8bff_45%,#3461ff_75%)] shadow-[0_0_120px_30px_rgba(91,140,255,0.45)]">
          <div className="absolute -right-3 -top-3 h-full w-full rounded-full bg-[var(--color-ink)] shadow-[inset_8px_8px_30px_rgba(0,0,0,0.6)]" />
        </div>
      </div>

      {/* Orbital rings */}
      <div className="absolute left-1/2 top-[16%] h-[28rem] w-[28rem] -translate-x-1/2 -translate-y-[18%] rounded-full border border-white/10 animate-spin-slow sm:h-[36rem] sm:w-[36rem]">
        <span className="absolute left-1/2 top-0 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--color-blue)] shadow-[0_0_12px_3px_rgba(91,140,255,0.8)]" />
      </div>
      <div className="absolute left-1/2 top-[16%] h-[40rem] w-[40rem] -translate-x-1/2 -translate-y-[24%] rounded-full border border-white/[0.06] animate-spin-reverse sm:h-[50rem] sm:w-[50rem]">
        <span className="absolute right-0 top-1/2 h-1.5 w-1.5 -translate-y-1/2 translate-x-1/2 rounded-full bg-[var(--color-purple)] shadow-[0_0_12px_3px_rgba(164,114,255,0.8)]" />
      </div>
    </div>
  );
}
