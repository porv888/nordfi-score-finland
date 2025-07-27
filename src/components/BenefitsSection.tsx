import { Card } from "@/components/ui/card";
import { TrendingUp, Lightbulb, CreditCard, BarChart3, Sparkles } from "lucide-react";

const BenefitsSection = () => {
  const benefits = [
    {
      icon: TrendingUp,
      title: "Henkilökohtainen Talousluokitus",
      description: "Saa kattava näkemys taloudellisesta tilanteestasi PSD2-pohjaisella analyysillä kulutustottumuksistasi.",
      color: "primary",
      gradient: "from-primary/10 to-primary/20",
    },
    {
      icon: Lightbulb,
      title: "Kuukausittaiset Talousneuvoat", 
      description: "Saa henkilökohtaiset talousneuvoat kuukausittain kulutustottumustesi perusteella parempia taloudellisia päätöksiä varten.",
      color: "warning",
      gradient: "from-warning/10 to-warning/20",
    },
    {
      icon: CreditCard,
      title: "Hallintapaneeli ja PDF-Raportti",
      description: "Tarkastele tuloksiasi verkossa hallintapaneelissa tai lataa yksityiskohtainen PDF-raportti.",
      color: "success",
      gradient: "from-success/10 to-success/20",
    },
    {
      icon: BarChart3,
      title: "Avoin Pankkitoiminta",
      description: "Turvallinen PSD2-yhteensopiva analyysi, joka käyttää avoimia pankkitietoja tarkkojen tulosten saamiseksi.",
      color: "info",
      gradient: "from-info/10 to-info/20",
    },
  ];

  return (
    <section className="py-32 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-32 right-10 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-60 h-60 bg-success/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            Miksi Valita NordFi
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold text-foreground mb-6 tracking-tight">
            Rakennettu Sinun{" "}
            <span className="gradient-text">Taloudellista Menestystä</span>
          </h2>
          <p className="text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto text-balance leading-relaxed">
            Saa merkityksellisiä näkemyksiä taloudellisesta tulevaisuudestasi. PSD2-pohjainen alustamme 
            tarjoaa kattavan talousanalyysin, joka auttaa tekemään älykkäämpiä taloudellisia päätöksiä.
          </p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8 mb-20">
          {benefits.map((benefit, index) => (
            <Card 
              key={index} 
              className="card-dashboard group p-8 hover:shadow-2xl transition-all duration-300"
            >
              <div className="space-y-6">
                <div className={`w-16 h-16 rounded-lg bg-${benefit.color} flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300`}>
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {benefit.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </Card>
          ))}
        </div>

        {/* Enhanced Stats Section */}
        <Card className="bg-gradient-to-r from-primary/5 via-primary-glow/5 to-primary/5 rounded-3xl p-12 border-0 shadow-xl backdrop-blur-sm">
          <div className="grid md:grid-cols-3 gap-12 text-center">
            <div className="space-y-3">
              <div className="text-5xl font-bold gradient-text">50+</div>
              <div className="text-muted-foreground font-medium">Taloudellista Tekijää Analysoitu</div>
              <div className="text-sm text-muted-foreground">Kattava arviointi</div>
            </div>
            <div className="space-y-3">
              <div className="text-5xl font-bold gradient-text">10 min</div>
              <div className="text-muted-foreground font-medium">Nopea Arviointi</div>
              <div className="text-sm text-muted-foreground">Nopea ja tehokas</div>
            </div>
            <div className="space-y-3">
              <div className="text-5xl font-bold gradient-text">5+</div>
              <div className="text-muted-foreground font-medium">Suurinta Pankkia Integroitu</div>
              <div className="text-sm text-muted-foreground">Johtavat rahoituslaitokset</div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default BenefitsSection;