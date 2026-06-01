import PricingGrid from "@/components/PricingGrid";
import SectionHeader from "@/components/SectionHeader";
import Button from "@/components/Button";
import Reveal from "@/components/Reveal";

export default function PricingSection() {
  return (
    <section className="section" id="pricing">
      <div className="container-x">
        <SectionHeader
          eyebrow="Pricing"
          title="Three plans. No upfront website cost."
          description="Instead of paying thousands upfront, launch with a professional website and ongoing support through one simple monthly plan — from £149/month."
        />
        <div className="mt-14">
          <PricingGrid />
        </div>
        <Reveal className="mt-10 flex justify-center">
          <Button href="/pricing" variant="secondary">
            See full pricing &amp; comparison
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
