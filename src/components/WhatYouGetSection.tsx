import { Card, CardContent } from "@/components/ui/card";
import { Brain, BarChart3, AlertTriangle, Target, FileText, TrendingUp } from "lucide-react";

const WhatYouGetSection = () => {
  const features = [
    {
      icon: TrendingUp,
      title: "Talouspiste (300–1000)",
      description: "Selkeä kokonaiskuva tilanteestasi",
      color: "text-primary"
    },
    {
      icon: Brain,
      title: "Tekoälyvalmentajan kortit",
      description: "3–4 konkreettista tehtävää juuri sinulle",
      color: "text-success"
    },
    {
      icon: BarChart3,
      title: "Kulut ja tulot",
      description: "15+ kategoriaa, trendit ja hälytykset",
      color: "text-info"
    },
    {
      icon: AlertTriangle,
      title: "Riskit",
      description: "Pelikulut, velkakuorma, kulujen vaihtelu",
      color: "text-warning"
    },
    {
      icon: Target,
      title: "Strategia",
      description: "90 päivää, 6 kuukautta, 1 vuosi",
      color: "text-secondary"
    },
    {
      icon: FileText,
      title: "PDF-raportit",
      description: "Jaa tai arkistoi tarvittaessa",
      color: "text-muted-foreground"
    }
  ];

  return (
    <section id="what-you-get" className="py-24 bg-secondary/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Mitä saat
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Tekoälyvalmentaja ja mittarit, jotka vievät talouttasi eteenpäin
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <Card key={index} className="card-dashboard h-full">
              <CardContent className="p-8">
                <div className="space-y-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-background to-secondary rounded-xl flex items-center justify-center shadow-md">
                    <feature.icon className={`w-6 h-6 ${feature.color}`} />
                  </div>
                  
                  <h3 className="text-xl font-bold text-foreground">
                    {feature.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatYouGetSection;