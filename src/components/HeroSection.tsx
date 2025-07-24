import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Shield, Users, Lock, MapPin } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const HeroSection = () => {
  const trustIndicators = [
    { icon: MapPin, text: "Adapted for Finnish Market" },
    { icon: Shield, text: "GDPR Compliant" },
    { icon: Lock, text: "Bank-Grade Security" },
    { icon: Users, text: "1000+ Finnish Customers Served" },
  ];

  return (
    <section className="relative bg-gradient-to-br from-background via-secondary/20 to-accent/30 py-20 lg:py-32 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                Know Your{" "}
                <span className="bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
                  Credit Score
                </span>
                <br />
                Built for Finland
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
                Get your personalized credit assessment adapted for Finnish banking standards. 
                Understand your creditworthiness and improve your financial health.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" className="text-lg px-8 py-6">
                Check Your Score Now
              </Button>
              <Button variant="outline" size="lg" className="px-8 py-6">
                View Sample Report
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="pt-8">
              <p className="text-sm font-medium text-muted-foreground mb-4">
                Trusted by Finnish consumers
              </p>
              <div className="grid grid-cols-2 gap-4">
                {trustIndicators.map((indicator, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <indicator.icon className="w-4 h-4 text-primary" />
                    <span className="text-sm text-muted-foreground">
                      {indicator.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <Card className="overflow-hidden shadow-2xl transform rotate-1 hover:rotate-0 transition-transform duration-500">
              <img
                src={heroImage}
                alt="Professional Finnish person reviewing credit dashboard"
                className="w-full h-auto object-cover"
              />
            </Card>
            
            {/* Floating Stats */}
            <Card className="absolute -bottom-6 -left-6 p-4 shadow-lg bg-background/95 backdrop-blur-sm">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">750+</div>
                <div className="text-sm text-muted-foreground">Avg. Score</div>
              </div>
            </Card>
            
            <Card className="absolute -top-6 -right-6 p-4 shadow-lg bg-background/95 backdrop-blur-sm">
              <div className="text-center">
                <div className="text-2xl font-bold text-success">98%</div>
                <div className="text-sm text-muted-foreground">Accuracy</div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;