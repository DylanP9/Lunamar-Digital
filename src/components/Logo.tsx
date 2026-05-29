import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";

/**
 * Brand wordmark: a glowing crescent moon + "LUNAMAR DIGITAL" lettering,
 * matching the supplied brand logo (white crescent, blue underglow, "DIGITAL"
 * in blue).
 *
 * NOTE: This is a faithful CSS/SVG rendition. To use the exact raster logo,
 * drop the file into /public/images/logo/ and replace the <span> mark (and/or
 * the wordmark text) with a next/image. Keeping it as SVG + text keeps the
 * header crisp at any size and fully accessible.
 */
export default function Logo({ className = "" }: { className?: string }) {
  return (
    <Link
      href="/"
      className={`group inline-flex items-center gap-3 ${className}`}
      aria-label={`${siteConfig.name} — home`}
    >
      <CrescentMark className="h-7 w-7 shrink-0 transition-transform duration-500 group-hover:rotate-[8deg]" />
      <span className="font-[family-name:var(--font-display)] text-[0.95rem] font-medium leading-none">
        <span className="tracking-[0.28em] text-white">LUNAMAR</span>
        <span className="ml-2 align-middle text-[0.72rem] tracking-[0.34em] text-[var(--color-blue)]">
          DIGITAL
        </span>
      </span>
    </Link>
  );
}

/** Reusable crescent-moon mark. */
export function CrescentMark({ className = "" }: { className?: string }) {
  return (
    <span className={`relative inline-flex items-center justify-center ${className}`}>
      <svg viewBox="0 0 64 64" className="h-full w-full" aria-hidden="true">
        <defs>
          <radialGradient id="lm-sphere" cx="40%" cy="32%" r="75%">
            <stop offset="0%" stopColor="#26324d" />
            <stop offset="55%" stopColor="#0a0f1c" />
            <stop offset="100%" stopColor="#05070d" />
          </radialGradient>
          <linearGradient id="lm-crescent" x1="0" y1="0.1" x2="0.9" y2="1">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="50%" stopColor="#dfe6ff" />
            <stop offset="100%" stopColor="#5b8cff" />
          </linearGradient>
          <mask id="lm-cres-mask">
            <rect width="64" height="64" fill="black" />
            <circle cx="32" cy="32" r="22" fill="white" />
            <circle cx="41" cy="27" r="20" fill="black" />
          </mask>
        </defs>
        {/* dark moon sphere */}
        <circle cx="32" cy="32" r="22" fill="url(#lm-sphere)" />
        {/* bright crescent rim */}
        <g mask="url(#lm-cres-mask)">
          <circle cx="32" cy="32" r="22" fill="url(#lm-crescent)" />
        </g>
      </svg>
      {/* blue underglow */}
      <span className="absolute inset-0 -z-10 rounded-full bg-[radial-gradient(circle_at_30%_70%,rgba(91,140,255,0.65),transparent_65%)] blur-md opacity-70 transition-opacity duration-500 group-hover:opacity-100" />
    </span>
  );
}
