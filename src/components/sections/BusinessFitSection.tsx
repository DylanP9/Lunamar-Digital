import Reveal from "@/components/Reveal";
import SectionHeader from "@/components/SectionHeader";

const businesses = [
  {
    title: "Cafes & restaurants",
    body: "Menus, locations, opening hours and calls to book should be easy to find in seconds.",
  },
  {
    title: "Gyms & fitness brands",
    body: "Turn social attention into memberships, class enquiries, meal-prep orders and local search visibility.",
  },
  {
    title: "Trades & home improvement",
    body: "Show the work, explain the service area and make it obvious why customers can trust you.",
  },
  {
    title: "Salons & beauty businesses",
    body: "Help customers check services, prices, location and contact details before they message.",
  },
  {
    title: "Clinics & professional services",
    body: "Build credibility online before the first appointment — clear services, trust signals and easy contact.",
  },
  {
    title: "Cleaning companies",
    body: "Make it easy for customers to see your service area, request a quote and understand what sets you apart.",
  },
  {
    title: "Driving instructors",
    body: "A simple, professional website that shows availability, pricing and how to book without back-and-forth.",
  },
  {
    title: "Local shops & services",
    body: "Give customers a clear, fast way to find your hours, location, stock and contact details online.",
  },
];

export default function BusinessFitSection() {
  return (
    <section className="section">
      <div className="container-x">
        <SectionHeader
          eyebrow="Who this is for"
          title="Built for serious small businesses, not vanity brands."
          description="Lunamar is for owners who already have a real business and want the online experience to match the quality of what they do in person."
        />

        <div className="mt-14 grid gap-px overflow-hidden rounded-[var(--radius-card)] border border-[var(--color-line)] bg-[var(--color-line)] sm:grid-cols-2 lg:grid-cols-4">
          {businesses.map((business, i) => (
            <Reveal key={business.title} delay={i * 50}>
              <article className="min-h-full bg-[var(--color-ink-soft)] p-7">
                <p className="text-xs font-medium uppercase tracking-[0.18em] text-[var(--color-blue)]">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-5 font-[family-name:var(--font-display)] text-xl font-semibold tracking-tight">
                  {business.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-[var(--color-mist)]">
                  {business.body}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
