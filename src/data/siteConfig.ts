/**
 * Central site configuration.
 *
 * TODO (business): replace the placeholder contact details and domain below
 * with the confirmed values before launch. These are intentionally the only
 * place these values live — do not hard-code them elsewhere.
 */
export const siteConfig = {
  name: "Lunamar Digital",
  shortName: "Lunamar",
  tagline: "Websites. Marketing. Growth.",
  description:
    "Lunamar Digital creates premium websites, SEO systems and digital marketing strategies that help businesses grow online.",

  /** Canonical site URL. Update once the final domain is confirmed. */
  url: "https://lunamardigital.co.uk",

  /** Contact email. Confirm the final domain-based address before launch. */
  email: "Lunamardigital1@outlook.com",
  domain: "lunamardigital.co.uk",

  /** Headline sales hook reused across the site. */
  hook: "No-upfront websites and digital growth plans from £97/month.",

  /** Social profile placeholders. Replace href values when handles are live. */
  socials: [
    { label: "Instagram", href: "#", handle: "@lunamardigital" },
    { label: "Facebook", href: "#", handle: "Lunamar Digital" },
    { label: "LinkedIn", href: "#", handle: "Lunamar Digital" },
  ],

  /** OpenGraph image lives in /public; replace with branded artwork later. */
  ogImage: "/og.svg",
} as const;

export type SiteConfig = typeof siteConfig;
