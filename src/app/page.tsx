import ScrollHero from "@/components/sections/ScrollHero";
import PainPointsSection from "@/components/sections/PainPointsSection";
import ScrollStory from "@/components/sections/ScrollStory";
import HomeCaseStudy from "@/components/sections/HomeCaseStudy";
import PricingSection from "@/components/sections/PricingSection";
import ProcessTimeline from "@/components/sections/ProcessTimeline";
import FounderSection from "@/components/sections/FounderSection";
import FAQSection from "@/components/sections/FAQSection";
import ContactCTA from "@/components/sections/ContactCTA";

export default function HomePage() {
  return (
    <>
      <ScrollHero />
      <PainPointsSection />
      <ScrollStory />
      <HomeCaseStudy />
      <PricingSection />
      <ProcessTimeline />
      <FounderSection />
      <FAQSection />
      <ContactCTA />
    </>
  );
}
