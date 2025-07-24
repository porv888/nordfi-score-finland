import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Target, Users, Shield, Zap } from "lucide-react";

const AboutSection = () => {
  const values = [
    {
      icon: Target,
      title: "Finnish Focus",
      description: "Built specifically for the Finnish market, not a generic international solution"
    },
    {
      icon: Users,
      title: "Customer First",
      description: "We put Finnish consumers first, providing transparent and actionable insights"
    },
    {
      icon: Shield,
      title: "Trust & Security",
      description: "Bank-grade security with full GDPR compliance and data protection"
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "Using modern technology to democratize credit information in Finland"
    }
  ];

  const team = [
    "Finnish fintech experts",
    "Former banking professionals", 
    "Data scientists",
    "Regulatory compliance specialists",
    "Customer success managers"
  ];

  const compliance = [
    "GDPR Compliant",
    "Finnish Financial Regulations",
    "Bank-Grade Security",
    "ISO 27001 Certified",
    "PCI DSS Compliant"
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-secondary/20 to-accent/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            About NordFi
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We're on a mission to democratize credit information for Finnish consumers. 
            Our platform provides the insights you need to make informed financial decisions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-6">
              Our Mission
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              "Democratizing credit information for Finnish consumers" - We believe every Finnish 
              consumer should have access to clear, actionable insights about their credit health. 
              Unlike generic international services, we understand the unique aspects of the Finnish 
              financial system.
            </p>
            
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-foreground mb-2">Why We're Different</h4>
                <p className="text-muted-foreground text-sm">
                  We're not just another credit scoring service. We're Finnish fintech experts who 
                  understand local banking, employment patterns, and regulatory requirements. Our 
                  insights are tailored specifically for your success in the Finnish market.
                </p>
              </div>
            </div>
          </div>

          <Card className="p-8 bg-gradient-to-br from-primary/5 to-primary-light/5">
            <h4 className="text-xl font-semibold text-foreground mb-6">Our Values</h4>
            <div className="space-y-4">
              {values.map((value, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <value.icon className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <div className="font-medium text-foreground">{value.title}</div>
                    <div className="text-sm text-muted-foreground">{value.description}</div>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Team & Technology */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Card className="p-8">
            <h4 className="text-xl font-semibold text-foreground mb-4">Our Team</h4>
            <p className="text-muted-foreground mb-6">
              We're a team of Finnish fintech experts, former banking professionals, and 
              technology specialists who understand both the technical and regulatory 
              aspects of credit scoring in Finland.
            </p>
            <div className="space-y-2">
              {team.map((member, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <span className="text-sm text-muted-foreground">{member}</span>
                </div>
              ))}
            </div>
          </Card>

          <Card className="p-8">
            <h4 className="text-xl font-semibold text-foreground mb-4">Technology & Security</h4>
            <p className="text-muted-foreground mb-6">
              Built with modern, secure technology stack including cloud infrastructure, 
              advanced analytics, and bank-grade security measures.
            </p>
            <div className="grid grid-cols-2 gap-2">
              {compliance.map((item, index) => (
                <Badge key={index} variant="outline" className="text-xs justify-center py-1">
                  {item}
                </Badge>
              ))}
            </div>
          </Card>
        </div>

        {/* Key Stats */}
        <Card className="p-8 bg-gradient-to-r from-primary/5 to-primary-light/5 text-center">
          <h4 className="text-xl font-semibold text-foreground mb-6">
            Trusted Platform
          </h4>
          <div className="grid md:grid-cols-4 gap-6">
            <div>
              <div className="text-2xl font-bold text-primary mb-1">2023</div>
              <div className="text-sm text-muted-foreground">Founded</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary mb-1">1,000+</div>
              <div className="text-sm text-muted-foreground">Customers Served</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary mb-1">5+</div>
              <div className="text-sm text-muted-foreground">Finnish Banks</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary mb-1">99.9%</div>
              <div className="text-sm text-muted-foreground">Uptime</div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default AboutSection;