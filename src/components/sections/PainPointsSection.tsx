import Reveal from "@/components/Reveal";
import SectionHeader from "@/components/SectionHeader";
import { painPoints } from "@/data/content";

export default function PainPointsSection() {
  return (
    <section className="section" id="sound-familiar">
      <div className="container-x">
        <SectionHeader
          align="left"
          eyebrow="Does this sound familiar?"
          title="A good business can still look quiet online."
          description="Most of the businesses we work with are already good at what they do. The gap is online, where new customers form an impression before they ever get in touch."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {painPoints.map((point, i) => (
            <Reveal key={point.problem} delay={i * 60} className="h-full">
              <div className="glow-border flex h-full flex-col gap-3 rounded-[var(--radius-card)] border border-[var(--color-line)] bg-white/[0.02] p-7">
                <span className="font-[family-name:var(--font-display)] text-sm font-semibold text-[var(--color-blue)]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-[family-name:var(--font-display)] text-lg font-semibold leading-snug tracking-tight text-white">
                  {point.problem}
                </h3>
                <p className="text-sm leading-relaxed text-[var(--color-mist)]">
                  {point.detail}
                </p>
              </div>
            </Reveal>
          ))}

          {/* Closing tile lands the point. */}
          <Reveal delay={painPoints.length * 60} className="h-full">
            <div className="glow-border flex h-full flex-col justify-center gap-3 rounded-[var(--radius-card)] border border-[var(--color-line-strong)] bg-white/[0.04] p-7">
              <p className="font-[family-name:var(--font-display)] text-lg font-semibold leading-snug text-white">
                If any of these sound like you, that&apos;s exactly what we fix.
              </p>
              <p className="text-sm leading-relaxed text-[var(--color-mist)]">
                Usually for less than the cost of one lost customer a month.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
