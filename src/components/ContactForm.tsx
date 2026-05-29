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

/**
 * Web3Forms access key. Submissions are delivered to the email tied to this key
 * (currently Lunamardigital1@outlook.com). Set it in `.env.local`:
 *   NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY=your-key-here
 * Get a free key in ~30s at https://web3forms.com (enter the inbox address).
 * If the key is missing, the form falls back to opening the visitor's email app.
 */
const ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY ?? "";

const fieldClass =
  "w-full rounded-xl border border-[var(--color-line)] bg-white/[0.03] px-4 py-3 text-sm text-white placeholder:text-[var(--color-mistier)] transition-colors focus:border-[var(--color-blue)] focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-blue)]";
const labelClass = "mb-2 block text-sm font-medium text-white/90";

type Status = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  function fieldsToText(get: (k: string) => string) {
    return [
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
      get("message") || "—",
    ].join("\n");
  }

  function mailtoFallback(get: (k: string) => string) {
    const subject = `Free preview request — ${get("business") || get("name")}`;
    window.location.href = `mailto:${siteConfig.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(fieldsToText(get))}`;
    setStatus("success");
    setMessage(
      `Your email app should have opened with your message ready to send. If it didn't, email us directly at ${siteConfig.email}.`
    );
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const get = (k: string) => ((data.get(k) as string) ?? "").trim();

    // Honeypot: real users leave this empty.
    if (get("botcheck")) return;

    // No provider key configured → graceful mailto fallback.
    if (!ACCESS_KEY) {
      mailtoFallback(get);
      return;
    }

    setStatus("submitting");
    setMessage("");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: ACCESS_KEY,
          subject: `Free preview request — ${get("business") || get("name")}`,
          from_name: get("name") || "Lunamar website",
          replyto: get("email"),
          // Individual fields (also shown in the Web3Forms dashboard):
          name: get("name"),
          business: get("business"),
          email: get("email"),
          phone: get("phone") || "—",
          link: get("link") || "—",
          help: get("help"),
          package: get("package"),
          message: get("message") || "—",
        }),
      });
      const result = await res.json();

      if (res.ok && result.success) {
        form.reset();
        setStatus("success");
        setMessage(
          "Thanks — your request is in. We'll get back to you shortly, usually within one business day."
        );
      } else {
        throw new Error(result.message || "Submission failed");
      }
    } catch {
      setStatus("error");
      setMessage(
        `Something went wrong sending your request. Please email us directly at ${siteConfig.email}.`
      );
    }
  }

  const submitting = status === "submitting";

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

      {/* Honeypot field — hidden from users, catches bots. */}
      <input
        type="checkbox"
        name="botcheck"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="hidden"
      />

      <button
        type="submit"
        disabled={submitting}
        className="inline-flex w-full items-center justify-center rounded-full bg-[linear-gradient(120deg,var(--color-blue-deep),var(--color-purple-deep))] px-7 py-3.5 text-base font-medium text-white shadow-[0_10px_40px_-12px_rgba(91,140,255,0.7)] transition-transform duration-300 hover:-translate-y-0.5 disabled:opacity-60 disabled:hover:translate-y-0 sm:w-auto"
      >
        {submitting ? "Sending…" : "Request my free preview"}
      </button>

      <p
        role="status"
        aria-live="polite"
        className={`text-sm ${
          status === "success"
            ? "text-[var(--color-blue)]"
            : status === "error"
              ? "text-red-400"
              : "text-[var(--color-mistier)]"
        }`}
      >
        {message ||
          (ACCESS_KEY
            ? "We'll only use your details to respond to your enquiry."
            : "This opens your email app with the details prefilled — nothing is stored on this site.")}
      </p>
    </form>
  );
}
