export interface NavLink {
  label: string;
  href: string;
}

/** Primary navigation, shared between the header and footer. */
export const mainNav: NavLink[] = [
  { label: "Services", href: "/services" },
  { label: "Pricing", href: "/pricing" },
  { label: "Work", href: "/work" },
  { label: "Free Preview", href: "/contact" },
];

export const footerNav: NavLink[] = [
  { label: "Services", href: "/services" },
  { label: "Pricing", href: "/pricing" },
  { label: "Work", href: "/work" },
  { label: "Free Preview", href: "/contact" },
  { label: "Privacy", href: "/privacy" },
];

/** Shared call-to-action used across the site. */
export const primaryCta = {
  label: "Apply for a free website preview",
  href: "/contact",
} as const;

export const secondaryCta = {
  label: "View our work",
  href: "/work",
} as const;
