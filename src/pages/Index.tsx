import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import WhatYouGetSection from "@/components/WhatYouGetSection";
import ResultsBenefitsSection from "@/components/ResultsBenefitsSection";
import PrivacyPsd2Section from "@/components/PrivacyPsd2Section";
import TargetAudienceSection from "@/components/TargetAudienceSection";
import PricingSimpleSection from "@/components/PricingSimpleSection";
import FaqSection from "@/components/FaqSection";
import CtaBarSection from "@/components/CtaBarSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="bg-background border-b">
        <HeroSection />
      </div>
      <div className="bg-muted/30 border-b">
        <HowItWorksSection />
      </div>
      <div className="bg-background border-b">
        <WhatYouGetSection />
      </div>
      <div className="bg-muted/30 border-b">
        <ResultsBenefitsSection />
      </div>
      <div className="bg-background border-b">
        <PrivacyPsd2Section />
      </div>
      <div className="bg-muted/30 border-b">
        <TargetAudienceSection />
      </div>
      <div className="bg-background border-b">
        <PricingSimpleSection />
      </div>
      <div className="bg-muted/30 border-b">
        <TestimonialsSection />
      </div>
      <div className="bg-background border-b">
        <FaqSection />
      </div>
      <div className="bg-muted/30 border-b">
        <CtaBarSection />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
