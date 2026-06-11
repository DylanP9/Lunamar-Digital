/**
 * Central site configuration.
 *
 * Central place for core brand, URL and contact settings.
 */
export const siteConfig = {
  name: "Lunamar Digital",
  shortName: "Lunamar",
  tagline: "Websites. Marketing. Growth.",
  description:
    "Lunamar Digital builds and maintains websites, SEO foundations and social content for serious small businesses that want to look trusted online.",

  /**
   * Canonical site URL — must match where the site is actually served, since it
   * drives canonical tags, OG image URLs, the sitemap and robots.
   */
  url: "https://lunamardigital.com",

  /** Contact email. Confirm the final domain-based address before launch. */
  email: "info@lunamardigital.com",
  domain: "lunamardigital.com",

  /** Headline sales hook reused across the site. */
  hook: "No-upfront websites and monthly support plans from £149/month.",

  /** Live social profiles. Keep this list to confirmed public URLs only. */
  socials: [
    {
      label: "Instagram",
      href: "https://www.instagram.com/lunamardigital/",
      handle: "@lunamardigital",
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/dylan-polland/",
      handle: "Dylan Polland",
    },
  ],

  /** OpenGraph image lives in /public; replace with branded artwork later. */
  ogImage: "/og.svg",
} as const;

export type SiteConfig = typeof siteConfig;
