"use client";

import { useEffect, useRef, useState } from "react";

interface HighlightTextProps {
  text: string;
  className?: string;
  /** 0–1: how far through the element's scroll travel the last word lights up */
  fillAt?: number;
}

export default function HighlightText({
  text,
  className,
  fillAt = 0.72,
}: HighlightTextProps) {
  const containerRef = useRef<HTMLParagraphElement>(null);
  const [progress, setProgress] = useState(0);
  const words = text.split(" ");

  useEffect(() => {
    // Respect reduced motion — show all words lit immediately
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setProgress(1);
      return;
    }

    const handleScroll = () => {
      const el = containerRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const windowH = window.innerHeight;

      // 0 = element just entered the bottom of the viewport
      // 1 = element has fully scrolled past the top
      const raw = 1 - rect.bottom / (windowH + rect.height);
      setProgress(Math.max(0, Math.min(1, raw)));
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <p ref={containerRef} className={className}>
      {words.map((word, i) => {
        // Each word lights up when scroll progress passes its threshold
        const threshold = (i / words.length) * fillAt;
        const isLit = progress >= threshold;

        return (
          <span
            key={i}
            className="transition-colors duration-500"
            style={{ color: isLit ? "rgba(255,255,255,0.92)" : "rgba(239,244,255,0.28)" }}
          >
            {word}
            {i < words.length - 1 ? " " : ""}
          </span>
        );
      })}
    </p>
  );
}
