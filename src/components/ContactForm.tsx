"use client";

import { useState } from "react";
import { siteConfig } from "@/data/siteConfig";

const packageOptions = [
  "Not sure yet",
  "Website Starter (£97/mo)",
  "Website Standard (£127/mo)",
  "Website Plus (£197/mo)",
  "Website + Social Growth (£249/mo)",
  "Website + Social Plus (£399/mo)",
  "Premium Growth Partner (from £599/mo)",
];

const fieldClass =
  "w-full rounded-xl border border-[var(--color-line)] bg-white/[0.03] px-4 py-3 text-sm text-white placeholder:text-[var(--color-mistier)] transition-colors focus:border-[var(--color-blue)] focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-blue)]";
const labelClass = "mb-2 block text-sm font-medium text-white/90";

/**
 * Contact form with a mailto fallback.
 *
 * TODO (business): wire up a real form provider (e.g. Formspree, Resend,
 * Web3Forms or a serverless route) and replace the mailto handler below.
 * Until then, submitting opens the visitor's email client with a prefilled
 * message — no data is stored or sent anywhere by this site.
 */
export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const get = (k: string) => (data.get(k) as string)?.trim() ?? "";

    const body = [
      `Name: ${get("name")}`,
      `Business: ${get("business")}`,
      `Email: ${get("email")}`,
      `Phone: ${get("phone") || "—"}`,
      `Website / social: ${get("link") || "—"}`,
      `Package interest: ${get("package")}`,
      "",
      "What they need help with:",
      get("help"),
      "",
      "Message:",
      get("message"),
    ].join("\n");

    const subject = `Free preview request — ${get("business") || get("name")}`;
    window.location.href = `mailto:${siteConfig.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    setSubmitted(true);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelClass}>
            Name
          </label>
          <input id="name" name="name" required className={fieldClass} autoComplete="name" />
        </div>
        <div>
          <label htmlFor="business" className={labelClass}>
            Business name
          </label>
          <input id="business" name="business" required className={fieldClass} autoComplete="organization" />
        </div>
        <div>
          <label htmlFor="email" className={labelClass}>
            Email
          </label>
          <input id="email" name="email" type="email" required className={fieldClass} autoComplete="email" />
        </div>
        <div>
          <label htmlFor="phone" className={labelClass}>
            Phone <span className="text-[var(--color-mistier)]">(optional)</span>
          </label>
          <input id="phone" name="phone" type="tel" className={fieldClass} autoComplete="tel" />
        </div>
      </div>

      <div>
        <label htmlFor="link" className={labelClass}>
          Website or social link <span className="text-[var(--color-mistier)]">(optional)</span>
        </label>
        <input id="link" name="link" className={fieldClass} placeholder="https://" />
      </div>

      <div>
        <label htmlFor="help" className={labelClass}>
          What do you need help with?
        </label>
        <input
          id="help"
          name="help"
          required
          className={fieldClass}
          placeholder="A new website, SEO, social media…"
        />
      </div>

      <div>
        <label htmlFor="package" className={labelClass}>
          Package interest <span className="text-[var(--color-mistier)]">(optional)</span>
        </label>
        <select id="package" name="package" defaultValue={packageOptions[0]} className={fieldClass}>
          {packageOptions.map((opt) => (
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
        <textarea id="message" name="message" rows={5} className={`${fieldClass} resize-y`} />
      </div>

      <button
        type="submit"
        className="inline-flex w-full items-center justify-center rounded-full bg-[linear-gradient(120deg,var(--color-blue-deep),var(--color-purple-deep))] px-7 py-3.5 text-base font-medium text-white shadow-[0_10px_40px_-12px_rgba(91,140,255,0.7)] transition-transform duration-300 hover:-translate-y-0.5 sm:w-auto"
      >
        Request my free preview
      </button>

      <p
        role="status"
        aria-live="polite"
        className={`text-sm ${submitted ? "text-[var(--color-blue)]" : "text-[var(--color-mistier)]"}`}
      >
        {submitted
          ? "Your email app should have opened with your message ready to send. If it didn't, email us directly at " +
            siteConfig.email +
            "."
          : "This opens your email app with the details prefilled — nothing is stored on this site."}
      </p>
    </form>
  );
}
