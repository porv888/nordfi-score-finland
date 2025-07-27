import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { TrendingUp, BarChart3, Shield, CreditCard, ArrowRight, Zap } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const HeroSection = () => {
  const trustIndicators = [
    { icon: TrendingUp, text: "PSD2-Pohjainen Analyysi", color: "text-primary" },
    { icon: Shield, text: "GDPR-Yhteensopiva", color: "text-success" },
    { icon: CreditCard, text: "Pankkitason Turvallisuus", color: "text-warning" },
    { icon: BarChart3, text: "Avoin Pankkitoiminta", color: "text-info" },
  ];

  return (
    <section className="relative min-h-[90vh] flex items-center bg-gradient-mesh overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary-glow/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-r from-primary/5 to-transparent rounded-full blur-3xl" />
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-10 animate-fade-in-up">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
                <Zap className="w-4 h-4" />
                PSD2-Pohjainen Talousluokitus
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold text-foreground leading-[1.1] tracking-tight">
                Henkilökohtainen{" "}
                <span className="gradient-text">
                  Talousluokitus
                </span>
                <br />
                <span className="text-4xl lg:text-5xl font-normal text-muted-foreground">
                  Avoimella Pankkitoiminnalla
                </span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-muted-foreground leading-relaxed max-w-xl text-balance">
                Saa henkilökohtainen talousluokitus kulutustottumuksistasi. Tarkastele tulokset 
                hallintapaneelissa tai lataa PDF. Kuukausittaiset talousneuvoat juuri sinulle.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-6">
              <Button variant="hero" size="lg" className="text-lg px-10 py-6 group">
                Tarkista Luokituksesi
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg" className="px-10 py-6 border-primary text-primary hover:bg-primary hover:text-white">
                Näytä Esimerkkiraportti
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="pt-6">
              <p className="text-sm font-semibold text-muted-foreground mb-6 uppercase tracking-wider">
                Luotettu suomalaisten keskuudessa
              </p>
              <div className="grid grid-cols-2 gap-6">
                {trustIndicators.map((indicator, index) => (
                  <div key={index} className="flex items-center space-x-3 group">
                    <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-background to-secondary flex items-center justify-center shadow-md group-hover:shadow-lg transition-all">
                      <indicator.icon className={`w-4 h-4 ${indicator.color}`} />
                    </div>
                    <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                      {indicator.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative lg:scale-110 animate-scale-in">
            <div className="relative floating">
              <Card className="card-dashboard overflow-hidden shadow-2xl">
                <div className="relative">
                  <img
                    src={heroImage}
                    alt="Credit score dashboard showing financial analysis and scoring metrics"
                    className="w-full h-auto object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>
              </Card>
            </div>
            
            {/* Floating Stats - Dashboard Style */}
            <Card className="absolute -bottom-8 -left-8 p-6 card-dashboard animate-slide-up">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-1">750+</div>
                <div className="text-sm text-muted-foreground font-medium">Keskiarvo</div>
              </div>
            </Card>
            
            <Card className="absolute -top-8 -right-8 p-6 card-dashboard animate-slide-up delay-200">
              <div className="text-center">
                <div className="text-3xl font-bold text-success mb-1">98%</div>
                <div className="text-sm text-muted-foreground font-medium">Tarkkuus</div>
              </div>
            </Card>

            <Card className="absolute top-1/2 -left-4 p-4 card-dashboard animate-slide-up delay-500">
              <div className="text-center">
                <div className="text-2xl font-bold text-warning mb-1">10min</div>
                <div className="text-xs text-muted-foreground font-medium">Arviointi</div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;