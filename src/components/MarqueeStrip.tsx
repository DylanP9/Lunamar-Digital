const items = [
  "Websites",
  "SEO",
  "Social Media",
  "No Upfront Cost",
  "Built to Convert",
  "Mobile-First",
  "Cafes & Restaurants",
  "Gyms & Fitness",
  "Trades & Services",
  "Salons & Beauty",
  "Clinics",
  "Local Businesses",
  "Driving Instructors",
  "Home Improvement",
];

const Dot = () => (
  <span
    aria-hidden
    className="mx-6 h-1 w-1 shrink-0 rounded-full bg-[var(--color-blue)] opacity-60"
  />
);

export default function MarqueeStrip() {
  return (
    <div
      aria-hidden
      className="relative overflow-hidden border-y border-[var(--color-line)] bg-white/[0.012] py-4"
    >
      {/* Fade edges */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-[var(--color-ink)] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-[var(--color-ink)] to-transparent" />

      <div className="flex animate-marquee whitespace-nowrap">
        {/* Render items twice for a seamless loop */}
        {[0, 1].map((copy) => (
          <div key={copy} className="flex shrink-0 items-center">
            {items.map((item, i) => (
              <span key={i} className="flex items-center">
                <span className="text-xs font-medium uppercase tracking-[0.2em] text-[var(--color-mistier)] transition-colors duration-300 hover:text-[var(--color-blue)]">
                  {item}
                </span>
                <Dot />
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
