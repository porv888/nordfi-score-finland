import { Card, CardContent } from "@/components/ui/card";
import { TrendingDown, PiggyBank, Shield, BarChart } from "lucide-react";

const ResultsBenefitsSection = () => {
  const benefits = [
    {
      icon: TrendingDown,
      title: "Velan vähennys suunnitelmallisesti",
      description: "Priorisoi maksut AI-järjestyksessä",
      color: "text-success"
    },
    {
      icon: PiggyBank,
      title: "Parempi puskurirahasto", 
      description: "Tavoite ja automaattinen seuranta",
      color: "text-primary"
    },
    {
      icon: Shield,
      title: "Vähemmän yllätyksiä",
      description: "Hälytys, kun kulut nousevat yli rajan",
      color: "text-warning"
    },
    {
      icon: BarChart,
      title: "Selkeä eteneminen",
      description: "Viikkopalautteet ja trendit",
      color: "text-info"
    }
  ];

  return (
    <section id="results" className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Tulokset & hyödyt
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Konkreettiset parannukset taloudessa
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
          {benefits.map((benefit, index) => (
            <Card key={index} className="card-dashboard">
              <CardContent className="p-8">
                <div className="flex items-start space-x-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-background to-secondary rounded-xl flex items-center justify-center shadow-md flex-shrink-0">
                    <benefit.icon className={`w-6 h-6 ${benefit.color}`} />
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-foreground">
                      {benefit.title}
                    </h3>
                    
                    <p className="text-muted-foreground leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-secondary/20 rounded-2xl p-8 max-w-3xl mx-auto text-center">
          <p className="text-lg text-muted-foreground">
            <strong className="text-foreground">Pieni huomio:</strong> NordFi ei ole luotonantaja. 
            Autamme sinua parantamaan taloutesi perustaa.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ResultsBenefitsSection;