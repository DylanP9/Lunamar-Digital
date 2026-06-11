"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function FloatingDeviceStack() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    // Parallax only applies in the floating (sm+) layout. On small screens the
    // devices are in normal flow, so we skip the scroll transform entirely.
    const desktop = window.matchMedia("(min-width: 640px)");
    if (!desktop.matches) return;
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative flex w-full select-none flex-col items-center gap-6 sm:block sm:h-[480px] sm:gap-0 lg:h-[560px]">

      {/* Ambient glow underneath */}
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-8 left-[10%] hidden h-28 w-[60%] rounded-full bg-[var(--color-blue-deep)] opacity-20 blur-3xl sm:block"
      />

      {/* Desktop browser mockup — back layer, drifts down slowly on scroll */}
      <div
        className="relative w-full max-w-[440px] sm:absolute sm:left-0 sm:top-0 sm:w-[76%] sm:max-w-none"
        style={{
          transform: `translateY(${scrollY * 0.07}px)`,
          animation: "float-y 8s cubic-bezier(0.22,1,0.36,1) infinite",
        }}
      >
        <div className="overflow-hidden rounded-xl border border-[var(--color-line-strong)] bg-[var(--color-ink-soft)] shadow-[0_24px_80px_-24px_rgba(0,0,0,0.8)]">
          {/* Browser chrome bar */}
          <div className="flex items-center gap-1.5 border-b border-[var(--color-line)] bg-white/[0.04] px-4 py-2.5">
            <span className="h-2 w-2 rounded-full bg-white/[0.15]" />
            <span className="h-2 w-2 rounded-full bg-white/[0.15]" />
            <span className="h-2 w-2 rounded-full bg-white/[0.15]" />
            <div className="ml-3 flex-1 rounded-md bg-white/[0.06] px-3 py-1 text-[10px] text-white/25">
              gymvibecafe.com
            </div>
          </div>
          {/* Fixed aspect ratio viewport — shows a natural above-fold browser crop */}
          <div className="aspect-[16/10] w-full overflow-hidden">
            <Image
              src="/images/case-studies/gym-vibe-cafe/homepage.png"
              alt="Gym Vibe Cafe website on desktop"
              width={1440}
              height={900}
              sizes="(max-width: 640px) 90vw, 40vw"
              quality={90}
              priority
              className="h-full w-full object-cover object-top"
            />
          </div>
        </div>
      </div>

      {/* Phone mockup — front layer, drifts up faster on scroll */}
      <div
        className="relative -mt-16 w-2/5 max-w-[150px] sm:absolute sm:bottom-0 sm:right-0 sm:mt-0 sm:w-[30%] sm:max-w-none"
        style={{
          transform: `translateY(${scrollY * -0.11}px)`,
          animation: "float-y 5.5s cubic-bezier(0.22,1,0.36,1) infinite",
          animationDelay: "-2s",
        }}
      >
        <div className="overflow-hidden rounded-[2rem] border-2 border-[var(--color-line-strong)] bg-[var(--color-ink-soft)] shadow-[0_24px_80px_-20px_rgba(0,0,0,0.9)]">
          {/* Phone notch */}
          <div className="flex justify-center bg-[var(--color-ink)] py-2">
            <div className="h-1.5 w-10 rounded-full bg-white/[0.15]" />
          </div>
          {/* Phone viewport — natural portrait crop */}
          <div className="aspect-[390/844] w-full overflow-hidden">
            <Image
              src="/images/case-studies/gym-vibe-cafe/mobile-homepage.png"
              alt="Gym Vibe Cafe website on mobile"
              width={390}
              height={844}
              sizes="(max-width: 640px) 35vw, 15vw"
              quality={90}
              priority
              className="h-full w-full object-cover object-top"
            />
          </div>
          {/* Phone home bar */}
          <div className="flex justify-center bg-[var(--color-ink)] py-2">
            <div className="h-1 w-8 rounded-full bg-white/[0.2]" />
          </div>
        </div>
      </div>

      {/* Badge */}
      <div className="relative w-full max-w-[440px] rounded-xl border border-[var(--color-line)] bg-[var(--color-ink)]/90 px-5 py-4 shadow-2xl backdrop-blur sm:absolute sm:-bottom-5 sm:left-4 sm:right-[33%] sm:w-auto sm:max-w-none">
        <p className="text-xs font-medium uppercase tracking-[0.18em] text-[var(--color-blue)]">
          Live client preview
        </p>
        <p className="mt-1 text-sm text-[var(--color-mist)]">
          A real project screen beats another generic agency promise.
        </p>
      </div>
    </div>
  );
}
