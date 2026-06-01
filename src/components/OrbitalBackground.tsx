/**
 * Signature eclipse + a single calm orbital ring. Purely decorative
 * (aria-hidden), CSS-animated, and disabled by prefers-reduced-motion.
 * Deliberately restrained — one focal mark, not a busy light show.
 */
export default function OrbitalBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
    >
      {/* Soft focal glow behind the eclipse */}
      <div className="absolute left-1/2 top-[8%] h-[26rem] w-[26rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(63,107,255,0.22),transparent_68%)] blur-2xl" />

      {/* The eclipse: dark sphere with a thin illuminated rim */}
      <div className="absolute left-1/2 top-[13%] h-36 w-36 -translate-x-1/2 sm:h-44 sm:w-44">
        <div className="relative h-full w-full rounded-full bg-[radial-gradient(circle_at_32%_30%,#1a2236,#0b0e1a_70%)] shadow-[0_0_90px_-10px_rgba(111,155,255,0.5)]">
          {/* crescent highlight */}
          <div className="absolute inset-0 rounded-full [mask:radial-gradient(circle_at_72%_50%,transparent_62%,#000_64%)] bg-[linear-gradient(130deg,#dfe7ff,#6f9bff_60%,transparent)]" />
        </div>
      </div>

      {/* A single, slow orbital ring */}
      <div className="absolute left-1/2 top-[13%] h-[34rem] w-[34rem] -translate-x-1/2 -translate-y-[20%] rounded-full border border-white/[0.07] animate-spin-slow sm:h-[44rem] sm:w-[44rem]">
        <span className="absolute left-1/2 top-0 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--color-blue)] shadow-[0_0_10px_2px_rgba(111,155,255,0.7)]" />
      </div>
    </div>
  );
}
