import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Star } from "lucide-react";

const PricingSection = () => {
  const plans = [
    {
      name: "Free Assessment",
      price: "€0",
      period: "one-time",
      description: "Perfect for getting started with your credit journey",
      features: [
        "Basic credit score",
        "Score overview",
        "Finnish market comparison",
        "Basic recommendations",
        "GDPR compliant"
      ],
      buttonText: "Get Free Score",
      buttonVariant: "outline" as const,
      popular: false
    },
    {
      name: "Premium Report",
      price: "€9.99",
      period: "one-time",
      description: "Comprehensive analysis with detailed improvement plan",
      features: [
        "Detailed credit analysis",
        "50+ factor assessment",
        "Personalized improvement plan",
        "Finnish bank compatibility",
        "Asset evaluation",
        "Risk factor identification",
        "Loan readiness score",
        "PDF report download"
      ],
      buttonText: "Get Premium Report",
      buttonVariant: "default" as const,
      popular: true
    },
    {
      name: "Monitoring Service",
      price: "€4.99",
      period: "per month",
      description: "Ongoing credit monitoring and alerts",
      features: [
        "Monthly score updates",
        "Change notifications",
        "Historical tracking",
        "Improvement progress",
        "Market trends",
        "New opportunities alerts",
        "Priority email support",
        "Cancel anytime"
      ],
      buttonText: "Start Monitoring",
      buttonVariant: "outline" as const,
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-gradient-to-br from-secondary/20 to-accent/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Choose Your Plan
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Start with our free assessment and upgrade when you need more detailed insights. 
            All plans are designed specifically for Finnish consumers.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`relative p-8 ${
                plan.popular 
                  ? 'ring-2 ring-primary bg-gradient-to-br from-background to-primary/5 shadow-xl' 
                  : 'bg-background hover:shadow-lg'
              } transition-all duration-300`}
            >
              {plan.popular && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground">
                  <Star className="w-3 h-3 mr-1" />
                  Most Popular
                </Badge>
              )}
              
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-foreground mb-2">{plan.name}</h3>
                <div className="mb-2">
                  <span className="text-3xl font-bold text-primary">{plan.price}</span>
                  <span className="text-muted-foreground ml-1">/{plan.period}</span>
                </div>
                <p className="text-sm text-muted-foreground">{plan.description}</p>
              </div>

              <div className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center space-x-3">
                    <CheckCircle className="w-4 h-4 text-success flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>

              <Button 
                variant={plan.buttonVariant} 
                className="w-full"
                size="lg"
              >
                {plan.buttonText}
              </Button>
            </Card>
          ))}
        </div>

        {/* Money Back Guarantee */}
        <div className="text-center mt-12">
          <Card className="inline-block p-6 bg-success/5 border-success/20">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-success/10 rounded-full flex items-center justify-center">
                <CheckCircle className="w-5 h-5 text-success" />
              </div>
              <div>
                <div className="font-semibold text-foreground">30-Day Money Back Guarantee</div>
                <div className="text-sm text-muted-foreground">Not satisfied? Get a full refund, no questions asked.</div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;