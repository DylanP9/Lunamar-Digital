import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost";
type Size = "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-medium tracking-tight transition-all duration-300 active:translate-y-0 active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-blue)] disabled:opacity-50 disabled:pointer-events-none";

const sizes: Record<Size, string> = {
  md: "px-5 py-2.5 text-sm",
  lg: "px-7 py-3.5 text-base",
};

const variants: Record<Variant, string> = {
  primary:
    "text-white bg-[linear-gradient(120deg,var(--color-blue-deep),var(--color-purple-deep))] shadow-[0_10px_40px_-12px_rgba(91,140,255,0.7)] hover:shadow-[0_16px_50px_-10px_rgba(124,58,237,0.85)] hover:-translate-y-0.5",
  secondary:
    "text-white glass hover:bg-white/[0.08] hover:-translate-y-0.5",
  ghost: "text-[var(--color-mist)] hover:text-white",
};

interface ButtonProps {
  href?: string;
  variant?: Variant;
  size?: Size;
  children: ReactNode;
  className?: string;
}

/** Polished button that renders as a Link when href is provided. */
export default function Button({
  href,
  variant = "primary",
  size = "lg",
  children,
  className = "",
  ...rest
}: ButtonProps & Partial<ComponentProps<"button">>) {
  const classes = `${base} ${sizes[size]} ${variants[variant]} ${className}`;

  if (href) {
    const external = href.startsWith("http") || href.startsWith("mailto:");
    if (external) {
      return (
        <a href={href} className={classes}>
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
}
