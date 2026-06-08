"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Icon from "@/components/Icon";
import SectionHeader from "@/components/SectionHeader";
import Reveal from "@/components/Reveal";
import { journeySteps } from "@/data/content";
import { usePrefersReducedMotion } from "@/lib/scroll";

export default function ScrollStory() {
  const reduced = usePrefersReducedMotion();
  const [active, setActive] = useState(0);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (reduced) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = Number((entry.target as HTMLElement).dataset.index);
            setActive(idx);
          }
        });
      },
      // Trigger when a step crosses the vertical middle of the viewport.
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
    );
    stepRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, [reduced]);

  return (
    <section className="section" id="what-we-do">
      <div className="container-x">
        <SectionHeader
          align="left"
          eyebrow="What we do"
          title="Four jobs, done properly."
          description="It all comes down to one thing: making it easy for someone to choose you. Take what you need; the rest stays off your invoice."
        />

        <div className="mt-14 grid gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Sticky visual that reflects the active step (desktop only). */}
          <div className="hidden lg:block">
            <div className="sticky top-24 h-[26rem]">
              <div className="glow-border relative h-full overflow-hidden rounded-[var(--radius-card)] border border-[var(--color-line)] bg-white/[0.02] p-10">
                <div
                  aria-hidden
                  className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-[radial-gradient(circle,rgba(91,140,255,0.18),transparent_70%)] blur-2xl"
                />
                {journeySteps.map((step, i) => (
                  <div
                    key={step.key}
                    className="absolute inset-0 flex flex-col justify-between p-10 transition-opacity duration-500"
                    style={{ opacity: active === i ? 1 : 0 }}
                    aria-hidden={active === i ? undefined : true}
                  >
                    <div className="flex items-center justify-between">
                      <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-[var(--color-line)] bg-white/[0.03] text-[var(--color-blue)]">
                        <Icon name={step.icon} className="h-7 w-7" />
                      </span>
                      <span className="font-[family-name:var(--font-display)] text-5xl font-semibold text-transparent [-webkit-text-stroke:1px_rgba(111,155,255,0.5)]">
                        0{i + 1}
                      </span>
                    </div>
                    <div>
                      <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-blue)]">
                        {step.label}
                      </span>
                      <p className="mt-3 font-[family-name:var(--font-display)] text-3xl font-semibold leading-[1.12] tracking-tight text-balance">
                        {step.outcome}
                      </p>
                    </div>
                  </div>
                ))}

                {/* Progress rail */}
                <div className="absolute bottom-10 right-10 flex gap-1.5">
                  {journeySteps.map((step, i) => (
                    <span
                      key={step.key}
                      className={`h-1 rounded-full transition-all duration-500 ${
                        active === i
                          ? "w-7 bg-[var(--color-blue)]"
                          : "w-3 bg-white/15"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Steps */}
          <div className="lg:py-[12vh]">
            {journeySteps.map((step, i) => (
              <div
                key={step.key}
                data-index={i}
                ref={(el) => {
                  stepRefs.current[i] = el;
                }}
                className="lg:min-h-[60vh] lg:flex lg:flex-col lg:justify-center"
              >
                <Reveal>
                  <Link
                    href={step.href}
                    aria-current={active === i ? "true" : undefined}
                    className={`group block rounded-[var(--radius-card)] border border-[var(--color-line)] bg-white/[0.02] p-7 transition-all duration-500 sm:p-8 lg:border-transparent lg:bg-transparent lg:p-0 lg:transition-opacity ${
                      reduced || active === i ? "lg:opacity-100" : "lg:opacity-40"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-[var(--color-line)] bg-white/[0.03] text-[var(--color-blue)] lg:hidden">
                        <Icon name={step.icon} className="h-5 w-5" />
                      </span>
                      <h3 className="font-[family-name:var(--font-display)] text-2xl font-semibold tracking-tight sm:text-3xl">
                        <span className="text-[var(--color-blue)]">0{i + 1}.</span>{" "}
                        {step.label}
                      </h3>
                    </div>
                    <p className="mt-4 text-base leading-relaxed text-[var(--color-mist)]">
                      <span className="font-medium text-white">
                        {step.outcome}{" "}
                      </span>
                      {step.blurb}
                    </p>
                    <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-[var(--color-blue)]">
                      Learn more
                      <span
                        aria-hidden
                        className="transition-transform duration-300 group-hover:translate-x-1"
                      >
                        →
                      </span>
                    </span>
                  </Link>
                </Reveal>
                {/* spacing between mobile cards */}
                <div className="h-5 lg:hidden" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
