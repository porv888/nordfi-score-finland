import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { UserPlus, BarChart3, TrendingUp, Target, ArrowRight } from "lucide-react";

const HowItWorksSection = () => {
  const steps = [
    {
      icon: UserPlus,
      title: "Rekisteröidy",
      description: "Nopea rekisteröinti sähköpostilla. Ei luottokorttia tarvita ilmaiseen arviointiin.",
      time: "2 min",
    },
    {
      icon: BarChart3,
      title: "Anna PSD2-Lupa", 
      description: "Yhdistä pankkitilisi turvallisesti avoimella pankkitoiminnalla kulutustietojen analysointia varten.",
      time: "5 min",
    },
    {
      icon: TrendingUp,
      title: "Saa Luokituksesi",
      description: "Vastaanota kattava talousanalyysi yksityiskohtaisella jaottelulla hallintapaneelissa tai PDF:nä.",
      time: "Välitön",
    },
    {
      icon: Target,
      title: "Kuukausittaiset Neuvoat",
      description: "Saa henkilökohtaiset talousneuvoat kuukausittain kulutustottumustesi perusteella.",
      time: "Jatkuva",
    },
  ];

  const sampleQuestions = [
    "Pankkitiliesi tiedot avoimella pankkitoiminnalla (PSD2)",
    "Kulutustottumuksesi ja säännölliset maksut",
    "Säästämismallit ja investoinnit",
    "Lainat ja luottositoumukset",
    "Tulojen ja menojen kehitys viimeisten kuukausien aikana",
    "Taloudellisten tavoitteidesi määrittely",
  ];

  return (
    <section id="how-it-works" className="py-20 bg-gradient-to-br from-secondary/20 to-accent/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Miten Se Toimii
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Saa henkilökohtainen talousluokituksesi vain 10 minuutissa. PSD2-pohjainen prosessimme on 
            suunniteltu olemaan yksinkertainen, turvallinen ja räätälöity suomalaisille pankeille.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <Card className="p-6 text-center hover:shadow-lg transition-all duration-300 bg-background/80 backdrop-blur-sm">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-light rounded-full flex items-center justify-center mx-auto mb-4">
                  <step.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                
                <div className="absolute -top-3 -right-3 bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                  {index + 1}
                </div>
                
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {step.title}
                </h3>
                
                <p className="text-muted-foreground text-sm mb-3">
                  {step.description}
                </p>
                
                <div className="text-xs text-primary font-medium bg-primary/10 rounded-full px-3 py-1 inline-block">
                  {step.time}
                </div>
              </Card>
              
              {/* Arrow connector */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                  <ArrowRight className="w-6 h-6 text-primary/30" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Sample Questions Preview */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-6">
              Mitä Analysoimme
            </h3>
            <p className="text-muted-foreground mb-6">
              PSD2-pohjaisella analyysillä tarkastelemme taloudellista profiiliasi avoimen pankkitoiminnan avulla. 
              Tässä esimerkkejä siitä, mitä analysoimme:
            </p>
            
            <div className="space-y-3">
              {sampleQuestions.map((question, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <span className="text-muted-foreground">{question}</span>
                </div>
              ))}
            </div>
          </div>
          
          <Card className="p-8 bg-gradient-to-br from-primary/5 to-primary-light/5">
            <h4 className="text-xl font-semibold text-foreground mb-4">
              Valmis Aloittamaan?
            </h4>
            <p className="text-muted-foreground mb-6">
              Liity tuhansien asiakkaiden joukkoon, jotka ovat jo parantaneet taloudenhoitoaan 
              NordFin PSD2-pohjaisella talousluokituksella.
            </p>
            
            <div className="space-y-3">
              <Button variant="default" className="w-full">
                Aloita Ilmainen Arviointi
              </Button>
              <Button variant="outline" className="w-full">
                Näytä Esimerkkiraportti
              </Button>
            </div>
            
            <p className="text-xs text-muted-foreground mt-4 text-center">
              Ei luottokorttia tarvita • GDPR-yhteensopiva • Pankkitason turvallisuus
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;