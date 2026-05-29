"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Logo from "./Logo";
import MobileNav from "./MobileNav";
import { mainNav, primaryCta } from "@/data/navigation";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "border-b border-[var(--color-line)] bg-[var(--color-ink)]/70 backdrop-blur-xl" : ""
      }`}
      style={{ ["--header-h" as string]: "64px" }}
    >
      <div className="container-x flex h-16 items-center justify-between">
        <Logo />

        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center gap-1">
            {mainNav.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="rounded-full px-4 py-2 text-sm font-medium text-[var(--color-mist)] transition-colors hover:text-white"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden md:block">
          <Link
            href={primaryCta.href}
            className="inline-flex items-center gap-2 rounded-full bg-[linear-gradient(120deg,var(--color-blue-deep),var(--color-purple-deep))] px-5 py-2.5 text-sm font-medium text-white shadow-[0_10px_40px_-12px_rgba(91,140,255,0.7)] transition-transform duration-300 hover:-translate-y-0.5"
          >
            {primaryCta.label}
          </Link>
        </div>

        <MobileNav />
      </div>
    </header>
  );
}
