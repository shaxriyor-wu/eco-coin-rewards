import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import ImpactSection from "@/components/ImpactSection";
import TechnologySection from "@/components/TechnologySection";
import EcoCoinSection from "@/components/EcoCoinSection";
import EcosystemSection from "@/components/EcosystemSection";
import PartnersSection from "@/components/PartnersSection";
import CouriersSection from "@/components/CouriersSection";
import BenefitsSection from "@/components/BenefitsSection";
import StatsSection from "@/components/StatsSection";
import RoadmapSection from "@/components/RoadmapSection";
import TeamSection from "@/components/TeamSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <HowItWorksSection />
      <ImpactSection />
      <TechnologySection />
      <EcoCoinSection />
      <EcosystemSection />
      <PartnersSection />
      <CouriersSection />
      <BenefitsSection />
      <StatsSection />
      <RoadmapSection />
      <TeamSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
