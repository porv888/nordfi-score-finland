import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Brain, 
  Zap, 
  Shield, 
  Users, 
  TrendingUp, 
  BarChart3, 
  Clock, 
  Target,
  CheckCircle,
  Sparkles
} from "lucide-react";

const FeaturesSection = () => {
  const aiFeatures = [
    {
      icon: Brain,
      title: "AI-Powered Analysis",
      description: "Advanced machine learning algorithms analyze your financial profile"
    },
    {
      icon: Zap,
      title: "Instant Processing",
      description: "Get your credit score and insights in real-time with our AI engine"
    },
    {
      icon: Users,
      title: "Personalized Insights",
      description: "Tailored recommendations based on your unique financial situation"
    },
    {
      icon: Shield,
      title: "Secure & Private",
      description: "Bank-grade security with full GDPR compliance and data protection"
    }
  ];

  const analysisFeatures = [
    {
      icon: TrendingUp,
      title: "Income Stability Assessment",
      description: "AI evaluates employment history and income consistency over time"
    },
    {
      icon: BarChart3,
      title: "Debt-to-Income Analysis", 
      description: "Smart analysis of your debt obligations versus income patterns"
    },
    {
      icon: Target,
      title: "Asset Evaluation",
      description: "Comprehensive assessment of savings, investments, and property"
    },
    {
      icon: CheckCircle,
      title: "Risk Factor Identification",
      description: "AI identifies potential red flags and improvement opportunities"
    }
  ];

  const dashboardFeatures = [
    "Real-time credit score updates",
    "AI-generated improvement recommendations", 
    "Historical tracking and trends",
    "Personalized action items",
    "Bank compatibility scoring",
    "Loan readiness assessment"
  ];

  return (
    <section id="features" className="py-32 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-60 h-60 bg-success/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            AI-Powered Features
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold text-foreground mb-6 tracking-tight">
            Smart Credit{" "}
            <span className="gradient-text">Intelligence</span>
          </h2>
          <p className="text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto text-balance leading-relaxed">
            Experience the future of credit scoring with advanced AI that understands your unique 
            financial profile and provides personalized insights for better financial decisions.
          </p>
        </div>

        {/* AI Features */}
        <div className="mb-20">
          <div className="flex items-center justify-center mb-12">
            <Badge variant="outline" className="text-primary border-primary px-6 py-3 text-base">
              <Brain className="w-5 h-5 mr-2" />
              Artificial Intelligence
            </Badge>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {aiFeatures.map((feature, index) => (
              <Card key={index} className="group p-8 text-center hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-gradient-to-br from-background to-secondary/30 border-0 shadow-lg relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-primary/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                    <feature.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Analysis Features */}
        <div className="mb-20">
          <div className="flex items-center justify-center mb-12">
            <Badge variant="outline" className="text-success border-success px-6 py-3 text-base">
              <BarChart3 className="w-5 h-5 mr-2" />
              Smart Analysis
            </Badge>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {analysisFeatures.map((feature, index) => (
              <Card key={index} className="group p-8 text-center hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-gradient-to-br from-background to-secondary/30 border-0 shadow-lg relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-success/10 to-success/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative">
                  <div className="w-16 h-16 bg-gradient-to-br from-success/10 to-success/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                    <feature.icon className="w-8 h-8 text-success" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-success transition-colors">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Dashboard Preview */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="flex items-center mb-6">
              <Badge variant="outline" className="text-info border-info px-6 py-3 text-base">
                <Clock className="w-5 h-5 mr-2" />
                Smart Dashboard
              </Badge>
            </div>
            
            <h3 className="text-3xl font-bold text-foreground">
              Everything You Need in One Place
            </h3>
            
            <p className="text-xl text-muted-foreground leading-relaxed">
              Our AI-powered dashboard gives you complete visibility into your credit health 
              with intelligent insights and personalized recommendations.
            </p>
            
            <div className="space-y-4">
              {dashboardFeatures.map((feature, index) => (
                <div key={index} className="flex items-center space-x-4 group">
                  <div className="w-6 h-6 rounded-lg bg-success/10 flex items-center justify-center group-hover:bg-success/20 transition-colors">
                    <CheckCircle className="w-4 h-4 text-success" />
                  </div>
                  <span className="text-muted-foreground group-hover:text-foreground transition-colors font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </div>
          
          <Card className="p-10 bg-gradient-to-br from-primary/5 to-primary-glow/5 border-0 shadow-2xl">
            <div className="space-y-8">
              <div className="text-center">
                <div className="text-5xl font-bold gradient-text mb-3">750</div>
                <div className="text-muted-foreground font-medium">Your Credit Score</div>
                <div className="w-full bg-secondary rounded-full h-3 mt-4">
                  <div className="bg-gradient-to-r from-success to-primary h-3 rounded-full shadow-lg" style={{width: '75%'}}></div>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-background/60 rounded-xl border border-success/20">
                  <div className="text-xl font-bold text-success mb-1">Excellent</div>
                  <div className="text-sm text-muted-foreground">Payment History</div>
                </div>
                <div className="text-center p-4 bg-background/60 rounded-xl border border-primary/20">
                  <div className="text-xl font-bold text-primary mb-1">Good</div>
                  <div className="text-sm text-muted-foreground">Credit Utilization</div>
                </div>
              </div>
              
              <div className="text-center p-4 bg-gradient-to-r from-primary/10 to-primary-glow/10 rounded-xl">
                <p className="text-sm font-medium text-foreground">
                  🎉 Ready for premium loan applications
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