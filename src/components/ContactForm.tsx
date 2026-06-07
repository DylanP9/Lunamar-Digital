"use client";

import { useEffect, useRef } from "react";
import { siteConfig } from "@/data/siteConfig";

const serviceOptions = [
  "Not sure yet",
  "Core Website (£149/mo)",
  "Advanced Web & SEO (£249/mo)",
  "Grow (£399/mo)",
  "Partner (from £799/mo)",
];

// FormSubmit posts to the destination email (centralised in siteConfig).
const formAction = `https://formsubmit.co/${siteConfig.email}`;

const fieldClass =
  "w-full rounded-xl border border-[var(--color-line)] bg-white/[0.03] px-4 py-3 text-sm text-white placeholder:text-[var(--color-mistier)] transition-colors focus:border-[var(--color-blue)] focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-blue)]";
const labelClass = "mb-2 block text-sm font-medium text-white/90";

export default function ContactForm() {
  const nextRef = useRef<HTMLInputElement>(null);

  // Redirect back to the SAME origin the visitor is on (localhost, a Vercel
  // preview URL, or the live domain) so the thank-you page always resolves.
  // Falls back to siteConfig.url for no-JS submissions.
  useEffect(() => {
    if (nextRef.current) {
      nextRef.current.value = `${window.location.origin}/thank-you`;
    }
  }, []);

  return (
    <form action={formAction} method="POST" className="space-y-5">
      <input
        type="hidden"
        name="_subject"
        value="New enquiry from Lunamar Digital website"
      />
      <input type="hidden" name="_template" value="table" />
      <input type="hidden" name="_captcha" value="true" />
      <input
        ref={nextRef}
        type="hidden"
        name="_next"
        defaultValue={`${siteConfig.url}/thank-you`}
      />
      {/* Honeypot — bots fill this; real users never see it. */}
      <input
        type="text"
        name="_honey"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="hidden"
      />
      {/* NOTE: submit the form once after deploy to confirm FormSubmit activation. */}

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelClass}>
            Name
          </label>
          <input
            id="name"
            name="name"
            required
            className={fieldClass}
            autoComplete="name"
          />
        </div>
        <div>
          <label htmlFor="business" className={labelClass}>
            Business name <span className="text-[var(--color-mistier)]">(optional)</span>
          </label>
          <input
            id="business"
            name="business"
            className={fieldClass}
            autoComplete="organization"
          />
        </div>
        <div>
          <label htmlFor="email" className={labelClass}>
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className={fieldClass}
            autoComplete="email"
          />
        </div>
        <div>
          <label htmlFor="phone" className={labelClass}>
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            className={fieldClass}
            autoComplete="tel"
          />
        </div>
      </div>

      <div>
        <label htmlFor="link" className={labelClass}>
          Website or social link <span className="text-[var(--color-mistier)]">(optional)</span>
        </label>
        <input
          id="link"
          name="website_or_social"
          type="url"
          className={fieldClass}
          placeholder="https://"
        />
      </div>

      <div>
        <label htmlFor="service" className={labelClass}>
          Service interest
        </label>
        <select
          id="service"
          name="service"
          required
          defaultValue=""
          className={fieldClass}
        >
          <option value="" disabled className="bg-[var(--color-ink)]">
            Select a service
          </option>
          {serviceOptions.map((opt) => (
            <option key={opt} value={opt} className="bg-[var(--color-ink)]">
              {opt}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className={labelClass}>
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className={`${fieldClass} resize-y`}
        />
      </div>

      <button
        type="submit"
        className="inline-flex w-full items-center justify-center rounded-full bg-[var(--color-blue-deep)] px-7 py-3.5 text-base font-medium text-white shadow-[0_10px_40px_-12px_rgba(91,140,255,0.7)] transition-transform duration-300 hover:-translate-y-0.5 sm:w-auto"
      >
        Apply for my free website preview
      </button>

      <p className="text-sm text-[var(--color-mistier)]">
        We&apos;ll only use your details to respond to your enquiry.
      </p>
    </form>
  );
}
