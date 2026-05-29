import type { SVGProps } from "react";

/** Minimal, consistent line-icon set used across service cards. */
const paths: Record<string, string> = {
  globe:
    "M12 21a9 9 0 100-18 9 9 0 000 18zM3.6 9h16.8M3.6 15h16.8M12 3a13 13 0 010 18 13 13 0 010-18z",
  search: "M11 19a8 8 0 100-16 8 8 0 000 16zM21 21l-4.3-4.3",
  share:
    "M18 8a3 3 0 100-6 3 3 0 000 6zM6 15a3 3 0 100-6 3 3 0 000 6zM18 22a3 3 0 100-6 3 3 0 000 6zM8.6 13.5l6.8 4M15.4 6.5l-6.8 4",
  rocket:
    "M5 15c-1 1-1.5 4-1.5 4s3-.5 4-1.5M14 4s4 0 6 2 2 6 2 6-3 3-7 4l-5-5c1-4 4-7 4-7zM9 11l-4 1m8 4l-1 4M15 9a1.5 1.5 0 100-3 1.5 1.5 0 000 3z",
  target:
    "M12 21a9 9 0 100-18 9 9 0 000 18zm0-4a5 5 0 100-10 5 5 0 000 10zm0-4a1 1 0 100-2 1 1 0 000 2z",
  shield: "M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6l8-3zM9 12l2 2 4-4",
  card: "M3 7h18v10H3zM3 10h18M7 14h4",
  spark: "M12 3v18M3 12h18M6 6l12 12M18 6L6 18",
};

interface IconProps extends SVGProps<SVGSVGElement> {
  name: string;
}

export default function Icon({ name, ...props }: IconProps) {
  const d = paths[name] ?? paths.spark;
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d={d} />
    </svg>
  );
}
