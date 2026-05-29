import Link from "next/link";
import Logo from "./Logo";
import { footerNav, primaryCta } from "@/data/navigation";
import { siteConfig } from "@/data/siteConfig";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative mt-12 border-t border-[var(--color-line)]">
      <div className="container-x py-16">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <Logo />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-[var(--color-mist)]">
              {siteConfig.tagline} Digital systems that help growing businesses
              turn online attention into real customers.
            </p>
            <a
              href={`mailto:${siteConfig.email}`}
              className="mt-5 inline-block text-sm text-white underline-offset-4 hover:underline"
            >
              {siteConfig.email}
            </a>
          </div>

          <nav aria-label="Footer">
            <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-mistier)]">
              Explore
            </h2>
            <ul className="mt-4 space-y-3">
              {footerNav.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[var(--color-mist)] transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-mistier)]">
              Follow
            </h2>
            <ul className="mt-4 space-y-3">
              {siteConfig.socials.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    className="text-sm text-[var(--color-mist)] transition-colors hover:text-white"
                  >
                    {social.label}
                  </a>
                </li>
              ))}
            </ul>
            <Link
              href={primaryCta.href}
              className="mt-6 inline-flex items-center gap-2 rounded-full glass px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-white/[0.08]"
            >
              {primaryCta.label} <span aria-hidden>→</span>
            </Link>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-[var(--color-line)] pt-8 text-xs text-[var(--color-mistier)] sm:flex-row sm:items-center">
          <p>
            © {year} {siteConfig.name}. {siteConfig.tagline}
          </p>
          <p>
            <Link href="/privacy" className="transition-colors hover:text-white">
              Privacy
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
