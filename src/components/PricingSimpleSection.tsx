import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const PricingSimpleSection = () => {
  const plans = [
    {
      name: "Ilmainen",
      price: "0",
      features: [
        "Perus talousanalyysi",
        "Xscore-pisteet", 
        "Kuukausittaiset raportit",
        "Sähköpostituki"
      ],
      cta: "Aloita ilmaiseksi",
      popular: false
    },
    {
      name: "Pro",
      price: "9",
      features: [
        "Kaikki ilmaisessa",
        "AI-valmentaja",
        "Viikoittaiset tehtävät", 
        "Personoidut suositukset",
        "Prioriteettituki",
        "Kehittyneet analytiikka"
      ],
      cta: "Aloita Pro-kokeilusi",
      popular: true
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Hinnoittelu
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Aloita ilmaiseksi. Päivitä kun olet valmis.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`card-dashboard relative ${plan.popular ? 'ring-2 ring-primary shadow-2xl' : ''}`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
                    Suosituin
                  </span>
                </div>
              )}
              
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  {plan.name}
                </h3>
                
                <div className="flex items-baseline justify-center mb-8">
                  <span className="text-5xl font-bold text-foreground">€{plan.price}</span>
                  <span className="text-muted-foreground ml-2">/kk</span>
                </div>
                
                <ul className="space-y-4 mb-8 text-left">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <Check className="w-5 h-5 text-success" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className="w-full" 
                  variant={plan.popular ? "default" : "outline"}
                >
                  {plan.cta}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSimpleSection;