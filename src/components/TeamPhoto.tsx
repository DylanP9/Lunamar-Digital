import Image from "next/image";
import type { TeamMember } from "@/data/team";

/**
 * Landscape-framed co-founder photo with a monogram fallback (shown if the
 * image file is missing). Reused by the homepage teaser and the /team page.
 */
export default function TeamPhoto({
  member,
  className = "aspect-[4/3]",
  sizes = "(min-width: 1024px) 32rem, (min-width: 640px) 80vw, 92vw",
}: {
  member: TeamMember;
  className?: string;
  sizes?: string;
}) {
  return (
    <div className={`relative overflow-hidden rounded-xl ${className}`}>
      <div className="absolute inset-0 flex items-center justify-center bg-[linear-gradient(135deg,rgba(127,163,255,0.20),rgba(54,93,255,0.08))]">
        <span className="font-[family-name:var(--font-display)] text-7xl font-semibold text-white/15">
          {member.name.charAt(0)}
        </span>
      </div>
      <Image
        src={member.image}
        alt={`${member.name}, ${member.role} at Lunamar Digital`}
        fill
        sizes={sizes}
        style={{ objectPosition: member.focus ?? "center" }}
        className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-[var(--color-ink)]/55 to-transparent"
      />
    </div>
  );
}
