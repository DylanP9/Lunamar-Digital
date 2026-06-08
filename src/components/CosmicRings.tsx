"use client";

interface CosmicRingsProps {
  pulseKey: number;
}

export default function CosmicRings({ pulseKey }: CosmicRingsProps) {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden"
      style={{ marginTop: "-8rem" }}
    >
      {/* Anchor point — everything centers on this */}
      <div className="relative" style={{ width: 0, height: 0 }}>

        {/* Deep background glow */}
        <div className="absolute h-[38rem] w-[38rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(54,93,255,0.18),transparent_65%)] blur-3xl" />

        {/* Eclipse */}
        <div className="absolute h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle_at_32%_30%,#1a2236,#070b12_72%)] shadow-[0_0_80px_-8px_rgba(111,155,255,0.55)] sm:h-40 sm:w-40">
          <div className="absolute inset-0 rounded-full [mask:radial-gradient(circle_at_72%_50%,transparent_60%,#000_63%)] bg-[linear-gradient(130deg,#e8eeff,#7fa3ff_55%,transparent)]" />
          {/* Inner glow ring on eclipse */}
          <div className="absolute inset-[-2px] rounded-full border border-[var(--color-blue)] opacity-20" />
        </div>

        {/* Ring 1 — inner, fast */}
        <div className="absolute h-[20rem] w-[20rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.1] animate-spin-slow sm:h-[24rem] sm:w-[24rem]">
          <span className="absolute left-1/2 top-0 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--color-blue)] shadow-[0_0_14px_4px_rgba(127,163,255,0.9)]" />
        </div>

        {/* Ring 2 — middle, reverse */}
        <div className="absolute h-[34rem] w-[34rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.06] animate-spin-reverse sm:h-[40rem] sm:w-[40rem]">
          <span className="absolute left-1/2 top-0 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--color-blue)] opacity-75 shadow-[0_0_10px_3px_rgba(127,163,255,0.7)]" />
          <span className="absolute left-0 top-1/2 h-1 w-1 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white opacity-25" />
        </div>

        {/* Ring 3 — outer, very slow */}
        <div
          className="absolute h-[52rem] w-[52rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.035] animate-spin-slow sm:h-[62rem] sm:w-[62rem]"
          style={{ animationDuration: "90s" }}
        >
          <span className="absolute left-1/2 top-0 h-1 w-1 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white opacity-30" />
          <span className="absolute right-0 top-1/2 h-0.5 w-0.5 translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--color-blue)] opacity-40" />
        </div>

        {/* Pulse ripple — re-mounts on each word change to replay animation */}
        <div
          key={pulseKey}
          className="absolute h-[20rem] w-[20rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[var(--color-blue)] sm:h-[24rem] sm:w-[24rem] animate-ring-pulse"
        />
      </div>
    </div>
  );
}
