import HeroSection from "@/components/sections/HeroSection";
import MarqueeStrip from "@/components/MarqueeStrip";
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
