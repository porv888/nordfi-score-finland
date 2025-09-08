import { Shield, TrendingUp, Target } from "lucide-react";

const HowItWorksSection = () => {
  const steps = [
    {
      number: "1",
      title: "Yhdistä pankki turvallisesti",
      description: "Valtuutat pankkisi (PSD2). Emme näe salasanoja; luvan voi perua milloin vain.",
      icon: Shield,
      color: "text-primary"
    },
    {
      number: "2", 
      title: "Saat pisteet ja suunnitelman",
      description: "NordFi laskee talouspisteesi (300–1000) ja näyttää vahvuudet, riskit ja nopeat voitot.",
      icon: TrendingUp,
      color: "text-success"
    },
    {
      number: "3",
      title: "Seuraa ja paranna viikoittain", 
      description: "Tekoälyvalmentaja päivittää tavoitteet: maksut, kulukaton, säästöt ja puskurin.",
      icon: Target,
      color: "text-warning"
    }
  ];

  return (
    <section id="how-it-works" className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Miten NordFi toimii
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Kolme yksinkertaista askelta parempaan talouteen
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="text-center space-y-6">
              <div className="relative">
                <div className="w-20 h-20 mx-auto bg-gradient-to-br from-background to-secondary rounded-2xl flex items-center justify-center shadow-lg mb-6">
                  <step.icon className={`w-10 h-10 ${step.color}`} />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold text-sm">
                  {step.number}
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-foreground mb-4">
                {step.title}
              </h3>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;