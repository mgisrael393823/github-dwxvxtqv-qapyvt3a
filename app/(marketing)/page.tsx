import ClientSection from "@/components/landing/client-section";
import CallToActionSection from "@/components/landing/cta-section";
import HeroSection from "@/components/landing/hero-section";
import HowItWorks from "@/components/landing/how-it-works";
import ServicesSection from "@/components/landing/services-section";
import { CreatorDiscovery } from "@/components/creators/creator-discovery";
import PricingSection from "@/components/landing/pricing-section";
import Particles from "@/components/magicui/particles";
import { SphereMask } from "@/components/magicui/sphere-mask";

export default async function Page() {
  return (
    <div className="relative flex flex-col w-full">
      <HeroSection />
      <CreatorDiscovery />
      <HowItWorks />
      <ServicesSection />
      <SphereMask />
      <PricingSection />
      <CallToActionSection />
      <Particles
        className="fixed inset-0 -z-10 pointer-events-none"
        quantity={50}
        ease={70}
        size={0.05}
        staticity={40}
        color={"#ffffff"}
      />
    </div>
  );
}
