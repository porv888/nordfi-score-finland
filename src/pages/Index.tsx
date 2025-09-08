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
      <HeroSection />
      <HowItWorksSection />
      <WhatYouGetSection />
      <ResultsBenefitsSection />
      <PrivacyPsd2Section />
      <TargetAudienceSection />
      <PricingSimpleSection />
      <TestimonialsSection />
      <FaqSection />
      <CtaBarSection />
      <Footer />
    </div>
  );
};

export default Index;
