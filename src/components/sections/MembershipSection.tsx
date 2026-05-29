import Reveal from "@/components/Reveal";
import SectionHeader from "@/components/SectionHeader";

const pillars = [
  {
    title: "One simple monthly fee",
    body: "Your website, hosting, maintenance and small updates are bundled into a single predictable monthly plan.",
  },
  {
    title: "No large upfront build cost",
    body: "Launch a professional website without paying thousands before you see results.",
  },
  {
    title: "It keeps improving",
    body: "We maintain and refine your site over time, so your digital presence never goes stale.",
  },
];

export default function MembershipSection() {
  return (
    <section className="section" id="membership">
      <div className="container-x">
        <SectionHeader
          eyebrow="The membership model"
          title="No upfront website cost. Just one monthly growth plan."
          description="Instead of paying thousands upfront, businesses can launch with a professional website and ongoing support through a simple monthly membership."
        />

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {pillars.map((pillar, i) => (
            <Reveal key={pillar.title} delay={i * 80} className="h-full">
              <div className="glow-border relative flex h-full flex-col rounded-[var(--radius-card)] border border-[var(--color-line)] bg-white/[0.02] p-7">
                <span className="font-[family-name:var(--font-display)] text-sm font-semibold text-[var(--color-blue)]">
                  0{i + 1}
                </span>
                <h3 className="mt-3 font-[family-name:var(--font-display)] text-lg font-semibold tracking-tight">
                  {pillar.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-[var(--color-mist)]">
                  {pillar.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
