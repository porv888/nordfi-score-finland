import { Card } from "@/components/ui/card";
import { Target, Lightbulb, Building2, MapPin } from "lucide-react";

const BenefitsSection = () => {
  const benefits = [
    {
      icon: Target,
      title: "Understand Your Creditworthiness",
      description: "Get a comprehensive view of your financial health with detailed analysis tailored to Finnish banking standards.",
      color: "text-primary",
    },
    {
      icon: Lightbulb,
      title: "Get Personalized Improvement Tips",
      description: "Receive actionable recommendations to boost your credit score and financial standing in the Finnish market.",
      color: "text-warning",
    },
    {
      icon: Building2,
      title: "Prepare for Loan Applications",
      description: "Know exactly where you stand before applying for mortgages, personal loans, or business financing.",
      color: "text-success",
    },
    {
      icon: MapPin,
      title: "Designed for Finnish Banking System",
      description: "Built specifically for Finnish consumers, banks, and financial regulations. Not a generic international solution.",
      color: "text-info",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Why Choose NordFi Scoring?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Get insights that matter for your financial future in Finland. Our platform provides 
            comprehensive credit analysis designed specifically for the Finnish market.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <Card 
              key={index} 
              className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-gradient-to-br from-background to-secondary/30"
            >
              <div className="space-y-4">
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br from-${benefit.color.split('-')[1]}/10 to-${benefit.color.split('-')[1]}/20 flex items-center justify-center`}>
                  <benefit.icon className={`w-6 h-6 ${benefit.color}`} />
                </div>
                
                <h3 className="text-lg font-semibold text-foreground">
                  {benefit.title}
                </h3>
                
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 bg-gradient-to-r from-primary/5 to-primary-light/5 rounded-2xl p-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">50+</div>
              <div className="text-muted-foreground">Financial Factors Analyzed</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">10 min</div>
              <div className="text-muted-foreground">Quick Assessment</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">5+</div>
              <div className="text-muted-foreground">Finnish Banks Integrated</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;