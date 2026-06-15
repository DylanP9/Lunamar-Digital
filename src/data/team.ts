export interface TeamMember {
  name: string;
  role: string;
  /** Portrait photo in /public/images/team (e.g. /images/team/dylan.jpg). */
  image: string;
  /** Short bio. Placeholder for now — replace with the real About Us copy. */
  bio: string;
  /** Object-position for the photo crop, so faces stay in frame. */
  focus?: string;
  socials?: { label: string; href: string }[];
}

/**
 * Co-founders shown in the "Meet the team" section.
 * TODO (copy): bios below are placeholders — swap in the finished About Us text.
 */
export const team: TeamMember[] = [
  {
    name: "Dylan",
    role: "Co-Founder",
    image: "/images/team/dylan.jpg",
    focus: "50% 30%",
    bio: "Dylan leads the build side — websites, SEO and the technical work — drawing on a background in software development and digital marketing. He's usually the person you'll speak to when you need something changed.",
    socials: [
      { label: "LinkedIn", href: "https://www.linkedin.com/in/dylan-polland/" },
    ],
  },
  {
    name: "Sasha",
    role: "Co-Founder",
    image: "/images/team/sasha.jpg",
    focus: "50% 30%",
    bio: "Sasha looks after design, content and client care — making sure every site feels on-brand and every client feels properly looked after from first preview to launch and beyond.",
  },
];
