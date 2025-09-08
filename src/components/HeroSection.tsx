import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Play, ShieldCheck, Lock, Database, Building2, BarChart3 } from "lucide-react";

const HeroSection = () => {
  const trustIndicators = [
    { icon: ShieldCheck, text: "PSD2-yhteensopiva", color: "text-success" },
    { icon: Lock, text: "GDPR-turvallinen", color: "text-primary" },
    { icon: Database, text: "Kotimainen", color: "text-warning" },
    { icon: Building2, text: "Avoin pankkitoiminta", color: "text-info" },
  ];

  return (
    <section className="py-24 bg-gradient-mesh min-h-[600px] relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight text-foreground">
              Henkilökohtainen talousluokitus ja AI-valmentaja
            </h1>
            
            <p className="text-xl lg:text-2xl text-muted-foreground leading-relaxed">
              PSD2-pohjainen analyysi kulutustottumuksistasi. Saat pisteet (300–1000), räätälöidyn suunnitelman ja viikoittaiset tehtävät parempaan talouteen.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" className="text-lg px-8 py-6 group">
                Aloita ilmaiseksi
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                <Play className="w-5 h-5" />
                Katso esittely
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 pt-8">
              {trustIndicators.map((indicator, index) => (
                <div key={index} className="flex items-center space-x-2 text-sm font-medium">
                  <indicator.icon className={`w-5 h-5 ${indicator.color}`} />
                  <span>{indicator.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Visual Content */}
          <div className="relative flex justify-center lg:justify-end">
            <Card className="card-dashboard p-4 max-w-md w-full">
              <div className="flex flex-col items-center justify-center bg-gradient-hero rounded-lg p-8 min-h-[200px]">
                <BarChart3 className="w-16 h-16 text-primary mb-4" />
                <p className="text-lg font-semibold text-foreground">Dashboard Preview</p>
              </div>
            </Card>

            {/* Floating Cards */}
            <Card className="card-dashboard absolute top-8 -left-4 lg:left-8 p-4 floating">
              <div className="text-center">
                <p className="text-sm text-muted-foreground">Tarkkuus</p>
                <p className="text-2xl font-bold text-primary">94%</p>
              </div>
            </Card>

            <Card className="card-dashboard absolute bottom-8 -right-4 lg:right-8 p-4 floating">
              <div className="text-center">
                <p className="text-sm text-muted-foreground">Suunnitelma</p>
                <p className="text-2xl font-bold text-primary">7d</p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;