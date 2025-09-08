import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import TargetAudienceSection from "@/components/TargetAudienceSection";
import PricingSimpleSection from "@/components/PricingSimpleSection";
import FaqSection from "@/components/FaqSection";
import CtaBarSection from "@/components/CtaBarSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <HowItWorksSection />
      <TargetAudienceSection />
      <PricingSimpleSection />
      <FaqSection />
      <CtaBarSection />
      <Footer />
    </div>
  );
};

export default Index;