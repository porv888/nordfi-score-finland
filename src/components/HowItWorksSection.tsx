import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { UserPlus, BarChart3, TrendingUp, Target, ArrowRight } from "lucide-react";

const HowItWorksSection = () => {
  const steps = [
    {
      icon: UserPlus,
      title: "Sign Up",
      description: "Quick registration with email. No credit card required for your free assessment.",
      time: "2 min",
    },
    {
      icon: BarChart3,
      title: "Complete Assessment", 
      description: "Answer questions about your finances, employment, and banking relationships.",
      time: "8 min",
    },
    {
      icon: TrendingUp,
      title: "Get Your Score",
      description: "Receive comprehensive credit analysis with detailed breakdown by category.",
      time: "Instant",
    },
    {
      icon: Target,
      title: "Improve",
      description: "Follow personalized recommendations to boost your credit health and financial standing.",
      time: "Ongoing",
    },
  ];

  const sampleQuestions = [
    "Employment status (Student, Employee, Entrepreneur, Retired)",
    "Monthly income range (€2,000 - €6,000+)",
    "Housing situation (Rent, Own, Mortgage)",
    "Primary bank (Nordea, OP-ryhmä, Danske Bank, Handelsbanken)",
    "Existing loans and credit commitments",
    "Monthly expenses and savings habits",
  ];

  return (
    <section id="how-it-works" className="py-20 bg-gradient-to-br from-secondary/20 to-accent/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            How It Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get your personalized credit assessment in just 10 minutes. Our AI-powered process is designed 
            to be simple, secure, and specifically adapted for modern banking standards.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <Card className="p-6 text-center hover:shadow-lg transition-all duration-300 bg-background/80 backdrop-blur-sm">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-light rounded-full flex items-center justify-center mx-auto mb-4">
                  <step.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                
                <div className="absolute -top-3 -right-3 bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                  {index + 1}
                </div>
                
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {step.title}
                </h3>
                
                <p className="text-muted-foreground text-sm mb-3">
                  {step.description}
                </p>
                
                <div className="text-xs text-primary font-medium bg-primary/10 rounded-full px-3 py-1 inline-block">
                  {step.time}
                </div>
              </Card>
              
              {/* Arrow connector */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                  <ArrowRight className="w-6 h-6 text-primary/30" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Sample Questions Preview */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-6">
              Sample Assessment Questions
            </h3>
            <p className="text-muted-foreground mb-6">
              Our AI assessment covers all aspects of your financial profile relevant to modern banking standards. 
              Here's a preview of what we'll ask:
            </p>
            
            <div className="space-y-3">
              {sampleQuestions.map((question, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <span className="text-muted-foreground">{question}</span>
                </div>
              ))}
            </div>
          </div>
          
          <Card className="p-8 bg-gradient-to-br from-primary/5 to-primary-light/5">
            <h4 className="text-xl font-semibold text-foreground mb-4">
              Ready to Get Started?
            </h4>
            <p className="text-muted-foreground mb-6">
              Join thousands of customers who have already improved their credit understanding 
              with NordFi AI-powered credit scoring.
            </p>
            
            <div className="space-y-3">
              <Button variant="cta" className="w-full">
                Start Free Assessment
              </Button>
              <Button variant="outline" className="w-full">
                View Sample Report
              </Button>
            </div>
            
            <p className="text-xs text-muted-foreground mt-4 text-center">
              No credit card required • GDPR compliant • Bank-grade security
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;