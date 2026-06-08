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
  tagline: "Websites that make you look the part.",
  description:
    "Lunamar Digital builds websites, local SEO and social content for small service businesses: cafés, gyms, salons, trades and local shops. When someone looks you up, you look like a business worth choosing.",

  /**
   * Canonical site URL — must match where the site is actually served, since it
   * drives canonical tags, OG image URLs, the sitemap and robots.
   * TODO: switch to "https://lunamardigital.com" once that custom domain is
   * connected to this Vercel project.
   */
  url: "https://lunamar-digital.vercel.app",

  /** Contact email. Confirm the final domain-based address before launch. */
  email: "info@lunamardigital.com",
  domain: "lunamardigital.com",

  /** Headline sales hook reused across the site. */
  hook: "Websites, SEO and social for local businesses. From £149 a month, with no big bill upfront.",

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
