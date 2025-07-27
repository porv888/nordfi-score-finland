import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Star } from "lucide-react";

const PricingSection = () => {
  const plans = [
    {
      name: "Ilmainen Arviointi",
      price: "€0",
      period: "kertamaksu",
      description: "Täydellinen taloudellisen matkan aloittamiseen",
      features: [
        "Perustasn talousluokitus",
        "Luokituksen yleiskatsaus",
        "Suomen markkinavertailu",
        "Perussuositukset",
        "GDPR-yhteensopiva"
      ],
      buttonText: "Hanki Ilmainen Luokitus",
      buttonVariant: "outline" as const,
      popular: false
    },
    {
      name: "Premium-Raportti",
      price: "€9.99",
      period: "kertamaksu",
      description: "Kattava analyysi yksityiskohtaisella parannussuunnitelmalla",
      features: [
        "Yksityiskohtainen talousanalyysi",
        "50+ tekijän arviointi",
        "Henkilökohtainen parannussuunnitelma",
        "Suomalaisten pankkien yhteensopivuus",
        "Omaisuuden arviointi",
        "Riskitekijöiden tunnistaminen",
        "Lainakelpoisuuspisteytys",
        "PDF-raportin lataus"
      ],
      buttonText: "Hanki Premium-Raportti",
      buttonVariant: "default" as const,
      popular: true
    },
    {
      name: "Seurantapalvelu",
      price: "€4.99",
      period: "per kuukausi",
      description: "Jatkuva talousluokituksen seuranta ja hälytykset",
      features: [
        "Kuukausittaiset pisteytykset",
        "Muutosilmoitukset",
        "Historiallinen seuranta",
        "Parannusten edistyminen",
        "Markkinatrendit",
        "Uusien mahdollisuuksien hälytykset",
        "Prioriteettisähköpostituki",
        "Peruuta milloin tahansa"
      ],
      buttonText: "Aloita Seuranta",
      buttonVariant: "outline" as const,
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-gradient-to-br from-secondary/20 to-accent/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Valitse Suunnitelmasi
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Aloita ilmaisella arvioinnillamme ja päivitä kun tarvitset yksityiskohtaisempia näkemyksiä. 
            Kaikki suunnitelmat on suunniteltu erityisesti suomalaisille kuluttajille.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`relative p-8 ${
                plan.popular 
                  ? 'ring-2 ring-primary bg-gradient-to-br from-background to-primary/5 shadow-xl' 
                  : 'bg-background hover:shadow-lg'
              } transition-all duration-300`}
            >
              {plan.popular && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground">
                  <Star className="w-3 h-3 mr-1" />
                  Suosituin
                </Badge>
              )}
              
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-foreground mb-2">{plan.name}</h3>
                <div className="mb-2">
                  <span className="text-3xl font-bold text-primary">{plan.price}</span>
                  <span className="text-muted-foreground ml-1">/{plan.period}</span>
                </div>
                <p className="text-sm text-muted-foreground">{plan.description}</p>
              </div>

              <div className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center space-x-3">
                    <CheckCircle className="w-4 h-4 text-success flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>

              <Button 
                variant={plan.buttonVariant} 
                className="w-full"
                size="lg"
              >
                {plan.buttonText}
              </Button>
            </Card>
          ))}
        </div>

        {/* Money Back Guarantee */}
        <div className="text-center mt-12">
          <Card className="inline-block p-6 bg-success/5 border-success/20">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-success/10 rounded-full flex items-center justify-center">
                <CheckCircle className="w-5 h-5 text-success" />
              </div>
              <div>
                <div className="font-semibold text-foreground">30 Päivän Rahat Takaisin -Takuu</div>
                <div className="text-sm text-muted-foreground">Etkö ole tyytyväinen? Saat täyden hyvityksen, ei kysymyksiä.</div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;