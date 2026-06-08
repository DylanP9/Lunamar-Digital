"use client";

import { useState } from "react";
import Link from "next/link";
import Button from "@/components/Button";
import StarField from "@/components/StarField";
import CosmicRings from "@/components/CosmicRings";
import MorphingHeadline from "@/components/MorphingHeadline";
import { siteConfig } from "@/data/siteConfig";

const pageLinks = [
  { href: "/services", label: "Services", desc: "Websites, SEO & social" },
  { href: "/pricing", label: "Pricing", desc: "From £149/month" },
  { href: "/work", label: "Our Work", desc: "Real client projects" },
  { href: "/contact", label: "Free Preview", desc: "See your site first" },
];

export default function HeroSection() {
  const [pulseKey, setPulseKey] = useState(0);

  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden pb-24 pt-28">

      {/* Starfield */}
      <StarField />

      {/* Subtle background image overlay */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 bg-cover bg-center opacity-10"
        style={{ backgroundImage: "url('/images/brand/lunamar-abstract-background.jpg')" }}
      />

      {/* Cosmic rings — centered, slightly above midpoint */}
      <CosmicRings pulseKey={pulseKey} />

      {/* Main content */}
      <div className="container-x relative z-10 flex flex-col items-center text-center">

        {/* Badge */}
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-[var(--color-line)] bg-white/[0.04] px-4 py-1.5 text-xs font-medium text-[var(--color-mist)] backdrop-blur-sm">
          <span className="h-1.5 w-1.5 animate-pulse-glow rounded-full bg-[var(--color-blue)]" />
          {siteConfig.hook}
        </div>

        {/* Morphing headline */}
        <MorphingHeadline
          className="mx-auto max-w-5xl font-[family-name:var(--font-display)] text-[clamp(3rem,7.5vw,7rem)] font-semibold leading-[0.94] tracking-[-0.04em] text-balance"
          onWordChange={() => setPulseKey((k) => k + 1)}
        />

        {/* Subheading */}
        <p className="mt-8 max-w-xl text-base leading-8 text-[var(--color-mist)] sm:text-lg">
          Lunamar Digital builds and maintains websites, SEO and social content
          for serious small businesses — no large upfront cost.
        </p>

        {/* CTAs */}
        <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row">
          <Button href="/contact" size="lg">
            Apply for a free website preview
          </Button>
          <Button href="/pricing" variant="secondary" size="lg">
            View monthly plans
          </Button>
        </div>

        {/* Trust stats */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-[var(--color-mist)]">
          <span className="flex items-center gap-2">
            <span className="h-px w-4 bg-[var(--color-line-strong)]" />
            No upfront website cost
          </span>
          <span className="flex items-center gap-2">
            <span className="h-px w-4 bg-[var(--color-line-strong)]" />
            Plans from <span className="font-medium text-white">£149</span>/month
          </span>
          <span className="flex items-center gap-2">
            <span className="h-px w-4 bg-[var(--color-line-strong)]" />
            Built, hosted and maintained
          </span>
        </div>

        {/* Page links */}
        <div className="mt-14 flex flex-wrap items-center justify-center gap-3">
          {pageLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="group flex items-center gap-3 rounded-2xl border border-[var(--color-line)] bg-white/[0.03] px-5 py-3 backdrop-blur-sm transition-all duration-300 hover:border-[var(--color-line-strong)] hover:bg-white/[0.06]"
            >
              <span className="text-left">
                <span className="block text-sm font-medium text-white/90 group-hover:text-white">
                  {link.label}
                </span>
                <span className="block text-xs text-[var(--color-mistier)]">
                  {link.desc}
                </span>
              </span>
              <span className="ml-1 text-[var(--color-blue)] opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                &rarr;
              </span>
            </Link>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        aria-hidden="true"
        className="absolute bottom-8 left-1/2 flex flex-col items-center gap-1.5"
        style={{ animation: "scroll-bounce 2s ease-in-out infinite", transform: "translateX(-50%)" }}
      >
        <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-[var(--color-mistier)]">
          Scroll
        </span>
        <svg
          className="h-4 w-4 text-[var(--color-mistier)]"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 5v14M5 12l7 7 7-7" />
        </svg>
      </div>
    </section>
  );
}
