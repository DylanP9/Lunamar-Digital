"use client";

import { useEffect, useRef, useState } from "react";
import Button from "@/components/Button";
import SiteMockup from "@/components/SiteMockup";
import { CrescentMark } from "@/components/Logo";
import { primaryCta } from "@/data/navigation";
import {
  usePrefersReducedMotion,
  useScrollProgress,
  mapRange,
} from "@/lib/scroll";

const trustPoints = ["No big upfront bill", "From £149 a month", "Founder-led"];

export default function ScrollHero() {
  const sectionRef = useRef<HTMLElement>(null);
  const reduced = usePrefersReducedMotion();

  // Only pin/scroll-drive on wider screens — on phones it would feel cramped
  // and janky, so there we render a clean static hero with simple reveals.
  const [isWide, setIsWide] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const update = () => setIsWide(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  const animated = isWide && !reduced;
  const progress = useScrollProgress(sectionRef, animated);

  // Derived scroll transforms (only meaningful while `animated`).
  const wordmarkScale = mapRange(progress, 0, 0.5, 1, 0.62);
  const wordmarkY = mapRange(progress, 0, 0.5, 0, -46);
  const contentOpacity = animated ? mapRange(progress, 0.28, 0.62, 0, 1) : 1;
  const contentY = animated ? mapRange(progress, 0.28, 0.62, 30, 0) : 0;
  const mockupOpacity = animated ? mapRange(progress, 0.12, 0.42, 0, 1) : 1;
  const mockupScale = animated ? mapRange(progress, 0.12, 0.5, 0.94, 1) : 1;
  const mockupTilt = animated ? mapRange(progress, 0.42, 0.8, -6, 0) : 0;
  const cleanOpacity = animated ? mapRange(progress, 0.42, 0.74, 0, 1) : 1;
  const messyOpacity = animated ? 1 - cleanOpacity : 0;
  const cueOpacity = animated ? mapRange(progress, 0, 0.18, 1, 0) : 0;

  return (
    <section
      ref={sectionRef}
      className="relative"
      style={{ height: animated ? "240vh" : undefined }}
    >
      <div
        className={`${
          animated ? "sticky top-0 h-screen" : ""
        } flex items-center overflow-hidden pt-28 pb-16 sm:pt-32`}
      >
        <div className="container-x w-full">
          {/* Settling wordmark */}
          <div
            className="flex items-center justify-center gap-3 sm:gap-4"
            style={{
              transform: `translateY(${wordmarkY}px) scale(${wordmarkScale})`,
              transformOrigin: "center top",
              willChange: animated ? "transform" : undefined,
            }}
          >
            <CrescentMark className="h-8 w-8 sm:h-11 sm:w-11" />
            <span className="font-[family-name:var(--font-display)] text-2xl font-medium leading-none sm:text-4xl">
              <span className="tracking-[0.22em] text-white">LUNAMAR</span>
              <span className="ml-2 align-middle text-base tracking-[0.3em] text-[var(--color-blue)] sm:text-xl">
                DIGITAL
              </span>
            </span>
          </div>

          {/* Headline + mockup */}
          <div
            className="mt-10 grid items-center gap-10 lg:mt-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14"
            style={{
              opacity: contentOpacity,
              transform: `translateY(${contentY}px)`,
              willChange: animated ? "opacity, transform" : undefined,
            }}
          >
            <div className="text-center lg:text-left">
              <h1 className="font-[family-name:var(--font-display)] text-[clamp(2.3rem,5.4vw,4rem)] font-semibold leading-[1.04] tracking-[-0.02em] text-balance">
                Look <span className="text-gradient">trusted online</span> before
                a customer ever calls.
              </h1>
              <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-[var(--color-mist)] sm:text-lg lg:mx-0 text-pretty">
                Websites, local SEO and social content for small service
                businesses. We help cafés, gyms, salons and trades look like the
                safe choice when someone&apos;s deciding who to call.
              </p>

              <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start">
                <Button href={primaryCta.href} size="lg" className="w-full sm:w-auto">
                  {primaryCta.label}
                </Button>
                <Button
                  href="/pricing"
                  variant="secondary"
                  size="lg"
                  className="w-full sm:w-auto"
                >
                  View packages
                </Button>
              </div>

              <ul className="mt-7 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-[var(--color-mistier)] lg:justify-start">
                {trustPoints.map((point) => (
                  <li key={point} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-blue)]" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>

            {/* Floating mockup: messy → clean */}
            <div
              className="relative mx-auto w-full max-w-md"
              style={{
                opacity: mockupOpacity,
                transform: `scale(${mockupScale}) rotate(${mockupTilt}deg)`,
                willChange: animated ? "opacity, transform" : undefined,
              }}
            >
              <div className={reduced ? "" : "animate-float"}>
                {/* Clean sits in flow (sets the height); messy fades over it. */}
                <div className="relative">
                  <SiteMockup variant="clean" />
                  {messyOpacity > 0.01 ? (
                    <div
                      className="absolute inset-0"
                      style={{ opacity: messyOpacity }}
                      aria-hidden="true"
                    >
                      <SiteMockup variant="messy" className="h-full" />
                    </div>
                  ) : null}
                </div>
              </div>

              {animated ? (
                <div
                  className="pointer-events-none absolute -top-3 left-1/2 -translate-x-1/2 rounded-full border border-[var(--color-line)] bg-[var(--color-ink)]/80 px-3 py-1 text-[0.65rem] font-medium uppercase tracking-[0.16em] text-[var(--color-mist)] backdrop-blur"
                  style={{ opacity: messyOpacity > 0.5 ? messyOpacity : cleanOpacity }}
                >
                  {messyOpacity > 0.5 ? "Before" : "Lunamar-built"}
                </div>
              ) : null}
            </div>
          </div>
        </div>

        {/* Scroll cue */}
        {animated ? (
          <div
            aria-hidden="true"
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
            style={{ opacity: cueOpacity }}
          >
            <span className="flex h-9 w-5 items-start justify-center rounded-full border border-[var(--color-line-strong)] p-1.5">
              <span className="h-1.5 w-1 rounded-full bg-[var(--color-mist)] animate-float" />
            </span>
          </div>
        ) : null}
      </div>
    </section>
  );
}
