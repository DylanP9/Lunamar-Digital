import PricingGrid from "@/components/PricingGrid";
import SectionHeader from "@/components/SectionHeader";
import Button from "@/components/Button";
import Reveal from "@/components/Reveal";

export default function PricingSection() {
  return (
    <section className="section" id="pricing">
      <div className="container-x">
        <SectionHeader
          eyebrow="Packages"
          title="One monthly fee. No upfront build cost."
          description="Pick the plan that fits where your business is now. Each one rolls the build, hosting, maintenance and support into one monthly price, starting at £149."
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
