import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  MapPin, 
  Euro, 
  Building2, 
  Shield, 
  Users, 
  TrendingUp, 
  BarChart3, 
  Clock, 
  Target,
  CheckCircle 
} from "lucide-react";

const FeaturesSection = () => {
  const finnishFeatures = [
    {
      icon: Euro,
      title: "EUR Currency Formatting",
      description: "All financial data displayed in euros with Finnish formatting standards"
    },
    {
      icon: Building2,
      title: "Finnish Banks Integration",
      description: "Connected with Nordea, OP-ryhmä, Danske Bank, and Handelsbanken"
    },
    {
      icon: Users,
      title: "Finnish Employment Types",
      description: "Understands permanent employment, entrepreneurs, students, and retirees"
    },
    {
      icon: Shield,
      title: "Local Regulatory Compliance",
      description: "Fully compliant with Finnish financial regulations and GDPR"
    }
  ];

  const analysisFeatures = [
    {
      icon: TrendingUp,
      title: "Income Stability Assessment",
      description: "Evaluates employment history and income consistency over time"
    },
    {
      icon: BarChart3,
      title: "Debt-to-Income Ratio Analysis",
      description: "Comprehensive analysis of your debt obligations vs income"
    },
    {
      icon: Target,
      title: "Asset Evaluation",
      description: "Assessment of savings, investments, and property ownership"
    },
    {
      icon: CheckCircle,
      title: "Risk Factor Identification",
      description: "Identifies potential red flags and areas for improvement"
    }
  ];

  const dashboardFeatures = [
    "Real-time credit score updates",
    "Detailed breakdown by category", 
    "Historical tracking and trends",
    "Action items for improvement",
    "Finnish bank compatibility score",
    "Loan readiness assessment"
  ];

  return (
    <section id="features" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Built for the Finnish Market
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Unlike generic international services, NordFi is specifically designed for Finnish consumers, 
            banks, and financial regulations. Get insights that actually matter for your situation.
          </p>
        </div>

        {/* Finnish Market Adaptation */}
        <div className="mb-20">
          <div className="flex items-center justify-center mb-8">
            <Badge variant="outline" className="text-primary border-primary px-4 py-2">
              <MapPin className="w-4 h-4 mr-2" />
              Finnish Market Adaptation
            </Badge>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {finnishFeatures.map((feature, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* Comprehensive Analysis */}
        <div className="mb-20">
          <div className="flex items-center justify-center mb-8">
            <Badge variant="outline" className="text-success border-success px-4 py-2">
              <BarChart3 className="w-4 h-4 mr-2" />
              Comprehensive Analysis
            </Badge>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {analysisFeatures.map((feature, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-success/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-6 h-6 text-success" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* Professional Dashboard */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center mb-6">
              <Badge variant="outline" className="text-info border-info px-4 py-2">
                <Clock className="w-4 h-4 mr-2" />
                Professional Dashboard
              </Badge>
            </div>
            
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Everything You Need in One Place
            </h3>
            
            <p className="text-muted-foreground mb-6">
              Our professional dashboard gives you complete visibility into your credit health 
              with tools designed specifically for the Finnish financial landscape.
            </p>
            
            <div className="space-y-3">
              {dashboardFeatures.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-success flex-shrink-0" />
                  <span className="text-muted-foreground">{feature}</span>
                </div>
              ))}
            </div>
          </div>
          
          <Card className="p-8 bg-gradient-to-br from-primary/5 to-primary-light/5">
            <div className="space-y-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">750</div>
                <div className="text-muted-foreground">Your Credit Score</div>
                <div className="w-full bg-secondary rounded-full h-2 mt-3">
                  <div className="bg-gradient-to-r from-success to-primary h-2 rounded-full" style={{width: '75%'}}></div>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-3 bg-background/50 rounded-lg">
                  <div className="text-lg font-semibold text-success">Excellent</div>
                  <div className="text-xs text-muted-foreground">Payment History</div>
                </div>
                <div className="text-center p-3 bg-background/50 rounded-lg">
                  <div className="text-lg font-semibold text-primary">Good</div>
                  <div className="text-xs text-muted-foreground">Credit Utilization</div>
                </div>
              </div>
              
              <div className="text-center">
                <p className="text-sm text-muted-foreground">
                  Ready for mortgage applications at major Finnish banks
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;