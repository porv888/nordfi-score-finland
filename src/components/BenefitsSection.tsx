import { Card } from "@/components/ui/card";
import { Target, Lightbulb, Building2, MapPin, Sparkles } from "lucide-react";

const BenefitsSection = () => {
  const benefits = [
    {
      icon: Target,
      title: "Understand Your Creditworthiness",
      description: "Get a comprehensive view of your financial health with detailed analysis powered by advanced AI algorithms.",
      color: "primary",
      gradient: "from-primary/10 to-primary/20",
    },
    {
      icon: Lightbulb,
      title: "Get Personalized Improvement Tips", 
      description: "Receive actionable recommendations to boost your credit score and financial standing with AI-driven insights.",
      color: "warning",
      gradient: "from-warning/10 to-warning/20",
    },
    {
      icon: Building2,
      title: "Prepare for Loan Applications",
      description: "Know exactly where you stand before applying for mortgages, personal loans, or business financing.",
      color: "success",
      gradient: "from-success/10 to-success/20",
    },
    {
      icon: MapPin,
      title: "Smart Credit Analysis",
      description: "Built with advanced AI technology to provide accurate, comprehensive credit analysis tailored to your profile.",
      color: "info",
      gradient: "from-info/10 to-info/20",
    },
  ];

  return (
    <section className="py-32 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-32 right-10 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-60 h-60 bg-success/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            Why Choose NordFi
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold text-foreground mb-6 tracking-tight">
            Built for Your{" "}
            <span className="gradient-text">Financial Success</span>
          </h2>
          <p className="text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto text-balance leading-relaxed">
            Get insights that matter for your financial future. Our AI-powered platform provides 
            comprehensive credit analysis designed to help you make smarter financial decisions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8 mb-20">
          {benefits.map((benefit, index) => (
            <Card 
              key={index} 
              className="group p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-gradient-to-br from-background to-secondary/30 border-0 shadow-lg relative overflow-hidden"
            >
              {/* Hover glow effect */}
              <div className={`absolute inset-0 bg-gradient-to-r ${benefit.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <div className="relative space-y-6">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${benefit.gradient} flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110`}>
                  <benefit.icon className={`w-8 h-8 text-${benefit.color}`} />
                </div>
                
                <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {benefit.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </Card>
          ))}
        </div>

        {/* Enhanced Stats Section */}
        <Card className="bg-gradient-to-r from-primary/5 via-primary-glow/5 to-primary/5 rounded-3xl p-12 border-0 shadow-xl backdrop-blur-sm">
          <div className="grid md:grid-cols-3 gap-12 text-center">
            <div className="space-y-3">
              <div className="text-5xl font-bold gradient-text">50+</div>
              <div className="text-muted-foreground font-medium">Financial Factors Analyzed</div>
              <div className="text-sm text-muted-foreground">Comprehensive assessment</div>
            </div>
            <div className="space-y-3">
              <div className="text-5xl font-bold gradient-text">10 min</div>
              <div className="text-muted-foreground font-medium">Quick Assessment</div>
              <div className="text-sm text-muted-foreground">Fast and efficient</div>
            </div>
            <div className="space-y-3">
              <div className="text-5xl font-bold gradient-text">5+</div>
              <div className="text-muted-foreground font-medium">Major Banks Integrated</div>
              <div className="text-sm text-muted-foreground">Leading financial institutions</div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default BenefitsSection;