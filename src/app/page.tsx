import HeroSection from "@/components/sections/HeroSection";
import ValueStrip from "@/components/sections/ValueStrip";
import ServicesSection from "@/components/sections/ServicesSection";
import MembershipSection from "@/components/sections/MembershipSection";
import PricingSection from "@/components/sections/PricingSection";
import CaseStudyPreview from "@/components/sections/CaseStudyPreview";
import FreePreviewSection from "@/components/sections/FreePreviewSection";
import ProcessTimeline from "@/components/sections/ProcessTimeline";
import OutcomesSection from "@/components/sections/OutcomesSection";
import TeamSection from "@/components/sections/TeamSection";
import FAQSection from "@/components/sections/FAQSection";
import ContactCTA from "@/components/sections/ContactCTA";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ValueStrip />
      <ServicesSection />
      <MembershipSection />
      <PricingSection />
      <CaseStudyPreview />
      <FreePreviewSection />
      <ProcessTimeline />
      <OutcomesSection />
      <TeamSection />
      <FAQSection />
      <ContactCTA />
    </>
  );
}
