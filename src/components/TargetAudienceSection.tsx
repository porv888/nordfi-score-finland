import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Users, Briefcase } from "lucide-react";

const TargetAudienceSection = () => {
  const audiences = [
    {
      icon: GraduationCap,
      title: "Opiskelijat ja ensiasunnon säästäjät",
      description: "Luo kulukatot ja rakenna puskurirahasto",
      color: "text-primary"
    },
    {
      icon: Users,
      title: "Perhe",
      description: "Hallitse kuukausibudjettia ja optimoi toistuvat kulut",
      color: "text-success"
    },
    {
      icon: Briefcase,
      title: "Yrittäjät ja freelancerit",
      description: "Tasapainota tulojen vaihtelut ja laskutusrytmi",
      color: "text-warning"
    }
  ];

  return (
    <section id="target-audience" className="py-12 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Kenelle Xscore sopii
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {audiences.map((audience, index) => (
            <Card key={index} className="card-dashboard h-full">
              <CardContent className="p-8 text-center">
                <div className="space-y-6">
                  <div className="w-16 h-16 mx-auto bg-gradient-to-br from-background to-secondary rounded-2xl flex items-center justify-center shadow-lg">
                    <audience.icon className={`w-8 h-8 ${audience.color}`} />
                  </div>
                  
                  <h3 className="text-xl font-bold text-foreground">
                    {audience.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {audience.description}
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

export default TargetAudienceSection;