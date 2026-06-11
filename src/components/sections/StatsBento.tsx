"use client";

import { useEffect, useRef, useState } from "react";
import Reveal from "@/components/Reveal";

/**
 * Counts from 0 up to `target` once the element scrolls into view.
 * Returns plain integers; the parent handles prefix/suffix formatting.
 */
function useCountUp(target: number, durationMs = 1400) {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Respect reduced motion — show the final value immediately.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setValue(target);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !started.current) {
          started.current = true;
          const start = performance.now();
          const tick = (now: number) => {
            const p = Math.min((now - start) / durationMs, 1);
            // easeOutExpo for a punchy, decelerating count.
            const eased = p === 1 ? 1 : 1 - Math.pow(2, -10 * p);
            setValue(Math.round(eased * target));
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [target, durationMs]);

  return { value, ref };
}

function StatNumber({
  target,
  prefix = "",
  suffix = "",
}: {
  target: number;
  prefix?: string;
  suffix?: string;
}) {
  const { value, ref } = useCountUp(target);
  return (
    <span ref={ref} className="tabular">
      {prefix}
      {value}
      {suffix}
    </span>
  );
}

const cardBase =
  "group relative overflow-hidden rounded-[var(--radius-card)] border border-[var(--color-line)] bg-white/[0.025] p-7 transition-colors duration-300 hover:border-[var(--color-line-strong)]";

export default function StatsBento() {
  return (
    <section className="section">
      <div className="container-x">
        <Reveal>
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-[var(--color-blue)]">
            By the numbers
          </p>
          <h2 className="mt-4 max-w-2xl font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
            A fairer way to get your business online.
          </h2>
        </Reveal>

        <div className="mt-12 grid grid-cols-2 gap-4 lg:grid-cols-6">

          {/* £0 upfront — wide feature */}
          <Reveal className="col-span-2 lg:col-span-3">
            <div className={cardBase}>
              <div
                aria-hidden
                className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[radial-gradient(circle,rgba(54,93,255,0.18),transparent_70%)] blur-2xl"
              />
              <div className="relative">
                <span className="font-[family-name:var(--font-display)] text-5xl font-semibold tracking-tight text-white sm:text-6xl">
                  £0
                </span>
                <p className="mt-3 text-sm font-medium text-white/90">
                  Upfront website cost
                </p>
                <p className="mt-1 text-sm leading-6 text-[var(--color-mist)]">
                  No large build fee. We earn your business month to month, not
                  with a big invoice on day one.
                </p>
              </div>
            </div>
          </Reveal>

          {/* £149 plans — wide feature with count-up */}
          <Reveal className="col-span-2 lg:col-span-3" delay={60}>
            <div className={cardBase}>
              <div
                aria-hidden
                className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[radial-gradient(circle,rgba(54,93,255,0.18),transparent_70%)] blur-2xl"
              />
              <div className="relative">
                <span className="font-[family-name:var(--font-display)] text-5xl font-semibold tracking-tight text-white sm:text-6xl">
                  <StatNumber target={149} prefix="£" />
                </span>
                <p className="mt-3 text-sm font-medium text-white/90">
                  Plans start here, per month
                </p>
                <p className="mt-1 text-sm leading-6 text-[var(--color-mist)]">
                  Built, hosted and maintained on a clear monthly plan — with
                  higher tiers as you grow.
                </p>
              </div>
            </div>
          </Reveal>

          {/* 100% UK-based */}
          <Reveal className="col-span-2 lg:col-span-2" delay={120}>
            <div className={`${cardBase} h-full`}>
              <span className="font-[family-name:var(--font-display)] text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                <StatNumber target={100} suffix="%" />
              </span>
              <p className="mt-3 text-sm font-medium text-white/90">
                UK-based &amp; founder-led
              </p>
              <p className="mt-1 text-sm leading-6 text-[var(--color-mist)]">
                Someone you can actually speak to.
              </p>
            </div>
          </Reveal>

          {/* 5–7 days turnaround */}
          <Reveal className="col-span-1 lg:col-span-2" delay={180}>
            <div className={`${cardBase} h-full`}>
              <span className="font-[family-name:var(--font-display)] text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                5&ndash;7
              </span>
              <p className="mt-3 text-sm font-medium text-white/90">
                Working days to your preview
              </p>
              <p className="mt-1 text-sm leading-6 text-[var(--color-mist)]">
                See the direction before you commit.
              </p>
            </div>
          </Reveal>

          {/* Cancel anytime */}
          <Reveal className="col-span-1 lg:col-span-2" delay={240}>
            <div className={`${cardBase} flex h-full flex-col justify-center`}>
              <span className="font-[family-name:var(--font-display)] text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                Cancel anytime
              </span>
              <p className="mt-2 text-sm leading-6 text-[var(--color-mist)]">
                No long lock-in contracts. Stay because it works.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
