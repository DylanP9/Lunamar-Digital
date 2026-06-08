"use client";

import { useEffect, useState } from "react";

const STATIC_START = "Websites that make ";
const STATIC_END = " look trusted before the customer ever calls.";

const industries = [
  "cafes",
  "gyms",
  "trades",
  "salons",
  "clinics",
  "local shops",
  "restaurants",
  "driving instructors",
];

const HOLD_MS = 1800;
const FADE_MS = 300;

interface MorphingHeadlineProps {
  className?: string;
  onWordChange?: () => void;
}

export default function MorphingHeadline({ className, onWordChange }: MorphingHeadlineProps) {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const cycle = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setIndex((i) => (i + 1) % industries.length);
        setVisible(true);
        onWordChange?.();
      }, FADE_MS);
    }, HOLD_MS + FADE_MS);

    return () => clearInterval(cycle);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <h1
      className={className}
      aria-label={STATIC_START + industries[index] + STATIC_END}
    >
      {STATIC_START}
      <span
        className="text-[var(--color-blue)]"
        style={{
          opacity: visible ? 1 : 0,
          transition: `opacity ${FADE_MS}ms ease-in-out`,
          display: "inline-block",
        }}
      >
        {industries[index]}
      </span>
      {STATIC_END}
    </h1>
  );
}
