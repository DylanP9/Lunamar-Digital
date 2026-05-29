"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { mainNav, primaryCta } from "@/data/navigation";

/** Accessible slide-down mobile navigation with focus management. */
export default function MobileNav() {
  const [open, setOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  // Close on Escape and lock body scroll while open.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        triggerRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    // Move focus into the panel so keyboard users land on the nav.
    panelRef.current?.querySelector<HTMLElement>("a")?.focus();
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <div className="md:hidden">
      <button
        ref={triggerRef}
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls="mobile-nav-panel"
        aria-label={open ? "Close menu" : "Open menu"}
        className="inline-flex h-10 w-10 items-center justify-center rounded-full glass text-white"
      >
        <span className="relative block h-3.5 w-5">
          <span
            className={`absolute left-0 top-0 h-0.5 w-5 bg-white transition-all duration-300 ${
              open ? "translate-y-[6px] rotate-45" : ""
            }`}
          />
          <span
            className={`absolute left-0 top-1.5 h-0.5 w-5 bg-white transition-all duration-300 ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`absolute left-0 top-3 h-0.5 w-5 bg-white transition-all duration-300 ${
              open ? "-translate-y-[6px] -rotate-45" : ""
            }`}
          />
        </span>
      </button>

      {open ? (
        <div
          className="fixed inset-0 top-[var(--header-h,64px)] z-40 bg-[var(--color-ink)]/80 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        >
          <div
            id="mobile-nav-panel"
            ref={panelRef}
            onClick={(e) => e.stopPropagation()}
            className="mx-4 mt-3 rounded-2xl glass p-4"
          >
            <nav aria-label="Mobile">
              <ul className="flex flex-col">
                {mainNav.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="flex items-center justify-between rounded-xl px-4 py-3.5 text-lg font-medium text-white/90 transition-colors hover:bg-white/[0.06]"
                    >
                      {link.label}
                      <span aria-hidden className="text-[var(--color-mistier)]">
                        →
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <Link
              href={primaryCta.href}
              onClick={() => setOpen(false)}
              className="mt-3 flex w-full items-center justify-center rounded-full bg-[linear-gradient(120deg,var(--color-blue-deep),var(--color-purple-deep))] px-6 py-3.5 text-base font-medium text-white"
            >
              {primaryCta.label}
            </Link>
          </div>
        </div>
      ) : null}
    </div>
  );
}
