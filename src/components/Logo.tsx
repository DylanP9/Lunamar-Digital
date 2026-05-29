import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";

/**
 * Brand wordmark with an eclipse/crescent mark.
 *
 * NOTE: This is a CSS/SVG placeholder mark. When the real logo asset is added
 * to /public/images/logo/, swap the <span> mark below for a next/image.
 */
export default function Logo({ className = "" }: { className?: string }) {
  return (
    <Link
      href="/"
      className={`group inline-flex items-center gap-2.5 ${className}`}
      aria-label={`${siteConfig.name} — home`}
    >
      <span className="relative inline-flex h-7 w-7 items-center justify-center">
        <svg viewBox="0 0 32 32" className="h-7 w-7" aria-hidden="true">
          <defs>
            <linearGradient id="lm-moon" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#5b8cff" />
              <stop offset="100%" stopColor="#a472ff" />
            </linearGradient>
          </defs>
          <circle cx="16" cy="16" r="11" fill="url(#lm-moon)" />
          <circle cx="20.5" cy="14" r="9.5" fill="var(--color-ink)" />
          <circle
            cx="16"
            cy="16"
            r="14"
            fill="none"
            stroke="url(#lm-moon)"
            strokeOpacity="0.4"
            strokeWidth="0.75"
          />
        </svg>
        <span className="absolute inset-0 -z-10 rounded-full bg-[var(--color-blue)]/40 blur-md opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      </span>
      <span className="font-[family-name:var(--font-display)] text-[0.95rem] font-semibold uppercase tracking-[0.2em] text-white">
        Lunamar
        <span className="text-[var(--color-mist)]"> Digital</span>
      </span>
    </Link>
  );
}
