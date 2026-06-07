import Reveal from "@/components/Reveal";
import SectionHeader from "@/components/SectionHeader";

const businesses = [
  {
    title: "Cafés & restaurants",
    body: "Menus, locations, opening hours and calls to book should be easy to find in seconds.",
  },
  {
    title: "Gyms & fitness brands",
    body: "Turn social attention into memberships, class enquiries, meal-prep orders and local search visibility.",
  },
  {
    title: "Trades & local services",
    body: "Show the work, explain the service area and make it obvious why customers can trust you.",
  },
  {
    title: "Salons & appointment-led businesses",
    body: "Help customers check services, prices, location and contact details before they message.",
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
            <Reveal key={business.title} delay={i * 60}>
              <article className="min-h-full bg-[var(--color-ink-soft)] p-7">
                <p className="text-xs font-medium uppercase tracking-[0.18em] text-[var(--color-blue)]">
                  0{i + 1}
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
