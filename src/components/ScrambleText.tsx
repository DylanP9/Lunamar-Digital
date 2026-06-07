"use client";

import { useEffect, useRef, useState } from "react";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%&";

interface ScrambleTextProps {
  text: string;
  className?: string;
  /** ms before the scramble starts */
  delay?: number;
  /** total duration of the scramble animation in ms */
  duration?: number;
}

export default function ScrambleText({
  text,
  className,
  delay = 200,
  duration = 1400,
}: ScrambleTextProps) {
  const [displayed, setDisplayed] = useState("");
  const frameRef = useRef<number | null>(null);
  const startRef = useRef<number | null>(null);

  useEffect(() => {
    // Respect reduced motion — just show the text immediately
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setDisplayed(text);
      return;
    }

    const timeout = setTimeout(() => {
      const animate = (timestamp: number) => {
        if (!startRef.current) startRef.current = timestamp;
        const progress = (timestamp - startRef.current) / duration;

        if (progress >= 1) {
          setDisplayed(text);
          return;
        }

        // Characters lock in from left to right as progress increases
        const lockedCount = Math.floor(
          Math.pow(progress, 0.6) * text.length
        );

        const scrambled = text
          .split("")
          .map((char, i) => {
            if (char === " ") return " ";
            if (char === "\n") return "\n";
            if (i < lockedCount) return char;
            // Still scrambling — pick a random char at a slowing rate
            return CHARS[Math.floor(Math.random() * CHARS.length)];
          })
          .join("");

        setDisplayed(scrambled);
        frameRef.current = requestAnimationFrame(animate);
      };

      frameRef.current = requestAnimationFrame(animate);
    }, delay);

    return () => {
      clearTimeout(timeout);
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, [text, delay, duration]);

  return (
    <span className={className} aria-label={text}>
      {displayed || <span className="opacity-0">{text}</span>}
    </span>
  );
}
