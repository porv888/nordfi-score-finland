import { Card, CardContent } from "@/components/ui/card";
import { Shield, Lock, Eye, FileCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

const PrivacyPsd2Section = () => {
  const securityFeatures = [
    {
      icon: Lock,
      title: "Salaus levossa ja siirrossa",
      description: "Kaikki tiedot suojataan pankkitason salauksella"
    },
    {
      icon: Eye,
      title: "Minimitietojen periaate",
      description: "Käsittelemme vain tarpeelliset tiedot"
    },
    {
      icon: Shield,
      title: "Läpinäkyvä lokitus",
      description: "Näet kaikki tietojen käyttötapahtumat"
    },
    {
      icon: FileCheck,
      title: "Oikeuksien hallinta",
      description: "Voit hallita ja poistaa tietosi milloin vain"
    }
  ];

  return (
    <section id="privacy" className="py-24 bg-secondary/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Tietosuoja ja PSD2
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Tietoturva ja yksityisyys ensin
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-12">
          <Card className="card-dashboard">
            <CardContent className="p-8">
              <div className="prose prose-lg max-w-none text-muted-foreground">
                <p className="text-lg leading-relaxed mb-6">
                  Käytämme <strong className="text-foreground">EU-PSD2-rajapintoja</strong> pankkiyhteyteen. 
                  Pankkitunnuksia ei jaeta palvelulle. Voit poistaa luvan milloin tahansa. 
                  Tiedot käsitellään EU-alueella ja <strong className="text-foreground">GDPR:n mukaisesti</strong>.
                </p>
              </div>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-2 gap-6">
            {securityFeatures.map((feature, index) => (
              <Card key={index} className="card-dashboard">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-background to-secondary rounded-lg flex items-center justify-center shadow-md flex-shrink-0">
                      <feature.icon className="w-5 h-5 text-primary" />
                    </div>
                    
                    <div className="space-y-2">
                      <h3 className="font-bold text-foreground">
                        {feature.title}
                      </h3>
                      
                      <p className="text-sm text-muted-foreground">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center space-x-4">
            <Button variant="outline" size="lg">
              Tietosuojaseloste
            </Button>
            <Button variant="outline" size="lg">
              Käyttöehdot
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPsd2Section;