"use client";

import { useRef, type ReactNode } from "react";

interface MagneticProps {
  children: ReactNode;
  /** How far the element drifts toward the cursor (px at the edge). */
  strength?: number;
  className?: string;
}

/**
 * Wraps an interactive element so it subtly pulls toward the cursor on hover —
 * the classic "magnetic button" effect seen on high-end agency sites.
 *
 * Disabled automatically on touch devices and when reduced motion is preferred
 * (the transform simply never fires, so it degrades to a normal element).
 */
export default function Magnetic({
  children,
  strength = 18,
  className,
}: MagneticProps) {
  const ref = useRef<HTMLSpanElement>(null);

  const allowed = () =>
    typeof window !== "undefined" &&
    window.matchMedia("(hover: hover) and (pointer: fine)").matches &&
    !window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const handleMove = (e: React.MouseEvent<HTMLSpanElement>) => {
    if (!allowed()) return;
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    // Offset of cursor from the element's centre, normalised to [-1, 1].
    const relX = (e.clientX - rect.left) / rect.width - 0.5;
    const relY = (e.clientY - rect.top) / rect.height - 0.5;
    el.style.transform = `translate(${relX * strength * 2}px, ${relY * strength * 2}px)`;
  };

  const handleLeave = () => {
    const el = ref.current;
    if (el) el.style.transform = "translate(0, 0)";
  };

  return (
    <span
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className={className}
      style={{
        display: "inline-block",
        transition: "transform 0.35s cubic-bezier(0.22, 1, 0.36, 1)",
        willChange: "transform",
      }}
    >
      {children}
    </span>
  );
}
