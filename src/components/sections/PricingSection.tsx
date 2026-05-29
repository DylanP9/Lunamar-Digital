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
          title="Growth plans from £97/month"
          description="Transparent monthly plans for every stage — from a simple first website to a complete growth partner."
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
