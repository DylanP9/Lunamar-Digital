"use client";

import { useEffect, useRef, useState, type RefObject } from "react";

/**
 * True when the user has asked for reduced motion. SSR-safe: starts `false`
 * on the server and the first client render, then syncs on mount. Every
 * scroll-driven effect in the app gates on this and falls back to a static
 * layout when it's true.
 */
export function usePrefersReducedMotion(): boolean {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  return reduced;
}

/**
 * Scroll progress (0→1) of an element travelling through the viewport.
 *
 * Progress is 0 while the element's top sits at/below the viewport top and
 * reaches 1 once the element has scrolled up by (height − viewport). Ideal for
 * a tall section that pins an inner `position: sticky` child.
 *
 * Lightweight by design: a single passive scroll listener, all reads batched
 * inside requestAnimationFrame, and it returns early (progress 0) when reduced
 * motion is requested so nothing animates.
 */
export function useScrollProgress(
  ref: RefObject<HTMLElement | null>,
  enabled = true
): number {
  const [progress, setProgress] = useState(0);
  const frame = useRef<number | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || !enabled) return;

    const compute = () => {
      frame.current = null;
      const rect = el.getBoundingClientRect();
      const travel = rect.height - window.innerHeight;
      if (travel <= 0) {
        setProgress(0);
        return;
      }
      const p = Math.min(Math.max(-rect.top / travel, 0), 1);
      setProgress(p);
    };

    const onScroll = () => {
      if (frame.current == null) frame.current = requestAnimationFrame(compute);
    };

    compute();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame.current != null) cancelAnimationFrame(frame.current);
    };
  }, [ref, enabled]);

  return progress;
}

/** Linear interpolation helper for mapping scroll progress to a value. */
export function lerp(a: number, b: number, t: number): number {
  return a + (b - a) * Math.min(Math.max(t, 0), 1);
}

/** Map x from [inMin,inMax] into [outMin,outMax], clamped. */
export function mapRange(
  x: number,
  inMin: number,
  inMax: number,
  outMin: number,
  outMax: number
): number {
  if (inMax === inMin) return outMin;
  const t = (x - inMin) / (inMax - inMin);
  return lerp(outMin, outMax, t);
}
