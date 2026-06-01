const serviceOptions = [
  "Not sure yet",
  "Core Website (£149/mo)",
  "Advanced Web & SEO (£249/mo)",
  "Grow (£399/mo)",
  "Partner (from £799/mo)",
];

const formAction = "https://formsubmit.co/Lunamardigital1@outlook.com";

const fieldClass =
  "w-full rounded-xl border border-[var(--color-line)] bg-white/[0.03] px-4 py-3 text-sm text-white placeholder:text-[var(--color-mistier)] transition-colors focus:border-[var(--color-blue)] focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-blue)]";
const labelClass = "mb-2 block text-sm font-medium text-white/90";

export default function ContactForm() {
  return (
    <form action={formAction} method="POST" className="space-y-5">
      <input
        type="hidden"
        name="_subject"
        value="New enquiry from Lunamar Digital website"
      />
      <input type="hidden" name="_template" value="table" />
      <input type="hidden" name="_captcha" value="true" />
      {/* TODO: create a thank-you page, then add a FormSubmit _next hidden field. */}
      {/* TODO: use the first test submission to confirm the FormSubmit activation email. */}

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
        className="inline-flex w-full items-center justify-center rounded-full bg-[linear-gradient(120deg,var(--color-blue-deep),var(--color-purple-deep))] px-7 py-3.5 text-base font-medium text-white shadow-[0_10px_40px_-12px_rgba(91,140,255,0.7)] transition-transform duration-300 hover:-translate-y-0.5 sm:w-auto"
      >
        Request my free preview
      </button>

      <p className="text-sm text-[var(--color-mistier)]">
        We&apos;ll only use your details to respond to your enquiry.
      </p>
    </form>
  );
}
