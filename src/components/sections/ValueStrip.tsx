import Reveal from "@/components/Reveal";
import { valuePoints } from "@/data/content";

export default function ValueStrip() {
  return (
    <section className="border-y border-[var(--color-line)] bg-white/[0.015]">
      <div className="container-x py-6">
        <Reveal>
          <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-[var(--color-mist)]">
            {valuePoints.map((point) => (
              <li key={point} className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-blue)]" />
                {point}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
