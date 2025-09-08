import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const PricingSimpleSection = () => {
  const plans = [
    {
      name: "Ilmainen",
      price: "0€",
      period: "ikuisesti",
      features: [
        "Talouspiste",
        "Perusnäkymä", 
        "Viikkopäivitys"
      ],
      cta: "Aloita ilmaiseksi",
      variant: "outline" as const,
      popular: false
    },
    {
      name: "Pro",
      price: "6,90€",
      period: "/kk",
      features: [
        "AI-valmentajan kortit",
        "Tavoitteet ja hälytykset",
        "PDF-raportit",
        "Kaikki ilmaiset ominaisuudet"
      ],
      cta: "Aloita ilmaiseksi",
      variant: "hero" as const,
      popular: true
    }
  ];

  return (
    <section id="pricing" className="py-24 bg-secondary/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Hinnat
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Yksinkertainen hinnoittelu ilman yllätyksiä
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan, index) => (
            <Card key={index} className={`card-dashboard relative ${plan.popular ? 'ring-2 ring-primary' : ''}`}>
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-primary text-white px-4 py-2 rounded-full text-sm font-medium">
                    Suosituin
                  </span>
                </div>
              )}
              
              <CardHeader className="text-center p-8">
                <CardTitle className="text-2xl font-bold text-foreground mb-4">
                  {plan.name}
                </CardTitle>
                
                <div className="space-y-2">
                  <div className="text-4xl font-bold text-foreground">
                    {plan.price}
                  </div>
                  <div className="text-muted-foreground">
                    {plan.period}
                  </div>
                </div>
              </CardHeader>

              <CardContent className="p-8 pt-0">
                <div className="space-y-6">
                  <ul className="space-y-4">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-3">
                        <Check className="w-5 h-5 text-success" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    variant={plan.variant} 
                    size="lg" 
                    className="w-full text-lg py-6"
                  >
                    {plan.cta}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-8">
          <p className="text-muted-foreground">
            <strong className="text-foreground">Ei korttia alussa.</strong> Pro-tilaus ilman sitoutumista.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingSimpleSection;