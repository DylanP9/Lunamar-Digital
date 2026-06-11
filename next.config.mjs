/** @type {import('next').NextConfig} */

const isDev = process.env.NODE_ENV === "development";

/**
 * HTTP Security Headers
 *
 * Applied to every route via Next.js headers() config.
 * Tested against https://securityheaders.com — targets an A rating.
 *
 * Notes:
 * - CSP allows 'unsafe-inline' for scripts because Next.js injects inline
 *   bootstrap scripts that cannot be removed without nonce complexity.
 * - 'unsafe-eval' is added ONLY in development — React's dev tooling and
 *   Turbopack HMR require eval(). It is never shipped to production.
 * - formsubmit.co is whitelisted as a form-action target (contact form).
 * - va.vercel-scripts.com is whitelisted for Vercel Web Analytics.
 * - vitals.vercel-insights.com is whitelisted for Vercel Speed Insights.
 */
const securityHeaders = [
  // Prevent clickjacking — no iframing this site from other origins.
  {
    key: "X-Frame-Options",
    value: "DENY",
  },
  // Prevent MIME-type sniffing attacks.
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  // Control referrer info sent to third parties.
  {
    key: "Referrer-Policy",
    value: "strict-origin-when-cross-origin",
  },
  // Force HTTPS for 2 years; include subdomains; eligible for preload list.
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  // Lock down browser feature APIs — this site needs none of them.
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), payment=(), usb=(), interest-cohort=()",
  },
  // Content Security Policy
  {
    key: "Content-Security-Policy",
    value: [
      // Default: only load from same origin
      "default-src 'self'",
      // Scripts: same origin + inline (Next.js bootstrap) + Vercel Analytics.
      // 'unsafe-eval' is dev-only (React Fast Refresh / Turbopack HMR).
      `script-src 'self' 'unsafe-inline'${isDev ? " 'unsafe-eval'" : ""} va.vercel-scripts.com`,
      // Styles: same origin + inline (Tailwind CSS-in-JS)
      "style-src 'self' 'unsafe-inline'",
      // Images: same origin + data URIs (inline SVGs) + blob (canvas)
      "img-src 'self' data: blob:",
      // Fonts: same origin only
      "font-src 'self'",
      // XHR / fetch: same origin + Vercel vitals
      "connect-src 'self' vitals.vercel-insights.com va.vercel-scripts.com",
      // Forms can only submit to same origin or FormSubmit
      "form-action 'self' formsubmit.co",
      // No iframing this site from anywhere
      "frame-ancestors 'none'",
      // No plugins (Flash etc.)
      "object-src 'none'",
      // Upgrade any accidental HTTP requests to HTTPS
      "upgrade-insecure-requests",
    ].join("; "),
  },
];

const nextConfig = {
  reactStrictMode: true,

  // Never expose which framework is powering the site.
  poweredByHeader: false,

  // Apply security headers to every page and API route.
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
