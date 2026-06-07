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
          title="Monthly plans without the upfront website bill."
          description="Start with the level of support your business actually needs: a clean website, stronger SEO, consistent social content or a closer growth partnership."
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
