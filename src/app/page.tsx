import HeroSection from "@/components/sections/HeroSection";
import MarqueeStrip from "@/components/MarqueeStrip";
import FloatingDeviceStack from "@/components/FloatingDeviceStack";
import StatsBento from "@/components/sections/StatsBento";
import BusinessFitSection from "@/components/sections/BusinessFitSection";
import WebsiteProblemsSection from "@/components/sections/WebsiteProblemsSection";
import PricingSection from "@/components/sections/PricingSection";
import CaseStudyPreview from "@/components/sections/CaseStudyPreview";
import FreePreviewSection from "@/components/sections/FreePreviewSection";
import ProcessTimeline from "@/components/sections/ProcessTimeline";
import TeamSection from "@/components/sections/TeamSection";
import FAQSection from "@/components/sections/FAQSection";
import ContactCTA from "@/components/sections/ContactCTA";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <MarqueeStrip />

      {/* Device showcase — floats below the hero fold */}
      <section className="section container-x relative flex flex-col items-center">
        <p className="mb-2 text-center text-xs font-medium uppercase tracking-[0.18em] text-[var(--color-mistier)]">
          How your site looks on every device
        </p>
        <h2 className="mb-16 text-center font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight sm:text-4xl">
          Designed to convert, built to be found.
        </h2>
        <FloatingDeviceStack />
      </section>

      <StatsBento />
      <FreePreviewSection />
      <BusinessFitSection />
      <WebsiteProblemsSection />
      <PricingSection />
      <CaseStudyPreview />
      <TeamSection />
      <ProcessTimeline />
      <FAQSection />
      <ContactCTA />
    </>
  );
}
