"use client";

import { useEffect, useRef, useState } from "react";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

const STATIC_START = "Websites that make ";
const STATIC_END = " look trusted before the customer ever calls.";

const industries = [
  "small businesses",
  "cafes",
  "gyms",
  "trades",
  "salons",
  "clinics",
  "local shops",
  "restaurants",
  "driving instructors",
];

const INITIAL_DELAY = 400;
const INITIAL_DURATION = 2800;
const HOLD_DURATION = 2600;
const MORPH_DURATION = 750;

type Phase = "initial" | "idle" | "morphing";

function scramble(text: string, progress: number): string {
  const lockedCount = Math.floor(Math.pow(progress, 0.6) * text.length);
  return text
    .split("")
    .map((char, i) => {
      if (char === " ") return " ";
      if (i < lockedCount) return char;
      return CHARS[Math.floor(Math.random() * CHARS.length)];
    })
    .join("");
}

interface MorphingHeadlineProps {
  className?: string;
}

export default function MorphingHeadline({ className }: MorphingHeadlineProps) {
  const fullText = STATIC_START + industries[0] + STATIC_END;

  const [phase, setPhase] = useState<Phase>("initial");
  const [displayedFull, setDisplayedFull] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [morphWord, setMorphWord] = useState(industries[0]);

  const frameRef = useRef<number | null>(null);
  const startRef = useRef<number | null>(null);
  const reducedMotion = useRef(false);

  // ── Phase 1: initial full-text scramble ──────────────────────────────────
  useEffect(() => {
    reducedMotion.current = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reducedMotion.current) {
      setDisplayedFull(fullText);
      setPhase("idle");
      return;
    }

    const timeout = setTimeout(() => {
      const animate = (timestamp: number) => {
        if (!startRef.current) startRef.current = timestamp;
        const progress = (timestamp - startRef.current) / INITIAL_DURATION;

        if (progress >= 1) {
          setDisplayedFull(fullText);
          setPhase("idle");
          return;
        }

        setDisplayedFull(scramble(fullText, progress));
        frameRef.current = requestAnimationFrame(animate);
      };
      frameRef.current = requestAnimationFrame(animate);
    }, INITIAL_DELAY);

    return () => {
      clearTimeout(timeout);
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // ── Phase 2: hold then trigger morph ─────────────────────────────────────
  useEffect(() => {
    if (phase !== "idle" || reducedMotion.current) return;
    const hold = setTimeout(() => setPhase("morphing"), HOLD_DURATION);
    return () => clearTimeout(hold);
  }, [phase, currentIndex]);

  // ── Phase 3: morph the industry word ─────────────────────────────────────
  useEffect(() => {
    if (phase !== "morphing") return;

    const nextIndex = (currentIndex + 1) % industries.length;
    const currentWord = industries[currentIndex];
    const nextWord = industries[nextIndex];
    startRef.current = null;

    const animate = (timestamp: number) => {
      if (!startRef.current) startRef.current = timestamp;
      const progress = (timestamp - startRef.current) / MORPH_DURATION;

      if (progress >= 1) {
        setMorphWord(nextWord);
        setCurrentIndex(nextIndex);
        setPhase("idle");
        return;
      }

      let displayed: string;

      if (progress < 0.45) {
        // Scramble OUT the current word (right to left erasure)
        const p = progress / 0.45;
        const keepCount = Math.floor((1 - p) * currentWord.length);
        displayed = currentWord
          .split("")
          .map((char, i) => {
            if (char === " ") return " ";
            if (i < keepCount) return char;
            return CHARS[Math.floor(Math.random() * CHARS.length)];
          })
          .join("");
      } else {
        // Scramble IN the next word (left to right reveal)
        const p = (progress - 0.45) / 0.55;
        displayed = scramble(nextWord, p);
      }

      setMorphWord(displayed);
      frameRef.current = requestAnimationFrame(animate);
    };

    frameRef.current = requestAnimationFrame(animate);
    return () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, [phase, currentIndex]);

  const ariaLabel =
    STATIC_START + industries[currentIndex] + STATIC_END;

  return (
    <h1 className={className} aria-label={ariaLabel}>
      {phase === "initial" ? (
        displayedFull || <span className="opacity-0">{fullText}</span>
      ) : (
        <>
          {STATIC_START}
          <span className="text-[var(--color-blue)]">{morphWord}</span>
          {STATIC_END}
        </>
      )}
    </h1>
  );
}
