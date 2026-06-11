"use client";

import { useEffect, useRef } from "react";

/**
 * A soft blue glow that smoothly trails the cursor — a premium, agency-style
 * touch. Renders nothing on touch devices or when reduced motion is preferred.
 *
 * Implementation notes:
 * - Uses a single fixed, pointer-events-none element so it never blocks clicks.
 * - Lerps toward the pointer each frame for a fluid, slightly-laggy follow.
 * - Fades out when the cursor leaves the window.
 */
export default function CursorGlow() {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only run on devices with a real pointer, and respect reduced motion.
    const canHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!canHover || reduceMotion) return;

    const el = glowRef.current;
    if (!el) return;

    // Current (rendered) and target (pointer) positions.
    let curX = window.innerWidth / 2;
    let curY = window.innerHeight / 2;
    let tgtX = curX;
    let tgtY = curY;
    let frame = 0;

    const onMove = (e: MouseEvent) => {
      tgtX = e.clientX;
      tgtY = e.clientY;
      el.style.opacity = "1";
    };
    const onLeave = () => {
      el.style.opacity = "0";
    };

    const render = () => {
      // Ease toward the pointer (0.12 = smooth, slightly trailing).
      curX += (tgtX - curX) * 0.12;
      curY += (tgtY - curY) * 0.12;
      el.style.transform = `translate3d(${curX}px, ${curY}px, 0) translate(-50%, -50%)`;
      frame = requestAnimationFrame(render);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    document.addEventListener("mouseleave", onLeave);
    frame = requestAnimationFrame(render);

    return () => {
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div
      ref={glowRef}
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[1] h-[500px] w-[500px] rounded-full opacity-0 transition-opacity duration-500 mix-blend-screen"
      style={{
        background:
          "radial-gradient(circle, rgba(91,140,255,0.10) 0%, rgba(91,140,255,0.05) 35%, transparent 70%)",
        willChange: "transform, opacity",
      }}
    />
  );
}
