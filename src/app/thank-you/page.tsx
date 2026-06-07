import type { Metadata } from "next";
import Button from "@/components/Button";

export const metadata: Metadata = {
  title: "Thank you",
  description: "Your enquiry has been received by Lunamar Digital.",
  robots: { index: false, follow: true },
  alternates: { canonical: "/thank-you" },
};

export default function ThankYouPage() {
  return (
    <section className="flex min-h-[70vh] items-center">
      <div className="container-x text-center">
        <div
          aria-hidden="true"
          className="mx-auto mb-7 flex h-16 w-16 items-center justify-center rounded-full border border-[var(--color-line)] bg-white/[0.03] text-[var(--color-blue)]"
        >
          <svg
            className="h-8 w-8"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.75}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M20 6 9 17l-5-5" />
          </svg>
        </div>
        <h1 className="font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
          Thanks — your request is in.
        </h1>
        <p className="mx-auto mt-5 max-w-md text-base leading-relaxed text-[var(--color-mist)]">
          We&apos;ve received your enquiry and will get back to you, usually
          within one business day. For selected businesses, we&apos;ll put
          together a focused homepage concept so you can see the direction
          before committing to a monthly plan.
        </p>
        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button href="/">Back to home</Button>
          <Button href="/work" variant="secondary">
            See our work
          </Button>
        </div>
      </div>
    </section>
  );
}
