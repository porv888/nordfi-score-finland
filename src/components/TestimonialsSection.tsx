import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Quote, Star } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Jukka Virtanen",
      location: "Helsinki",
      occupation: "Software Engineer",
      testimonial: "Xscoren PSD2-analyysi auttoi minua ymmärtämään taloudellista tilannettani ennen asuntolainahakemusta. Henkilökohtaiset näkemykset ja suositukset olivat juuri sitä mitä tarvitsin. Sain hyväksynnän loistavalla korolla!",
      rating: 5,
      initials: "JV"
    },
    {
      name: "Aino Koskinen",
      location: "Tampere", 
      occupation: "Markkinointipäällikkö",
      testimonial: "PSD2-pohjainen talousanalyysi on uskomattoman yksityiskohtainen ja helppo ymmärtää. Xscore teki kristallinselväksi mitä minun piti parantaa ja auttoi rakentamaan vahvemman taloudellisen profiilin.",
      rating: 5,
      initials: "AK"
    },
    {
      name: "Mikael Laaksonen",
      location: "Turku",
      occupation: "Yrittäjä",
      testimonial: "Yrittäjänä olin huolissani taloudellisesta asemastani. Xscoren PSD2-analyysi antoi minulle selkeyttä taloudelliseen tilanteeseeni konkreettisilla parannusehdotuksilla. Täydellinen yrittäjille!",
      rating: 5,
      initials: "ML"
    }
  ];

  const stats = [
    { value: "1,000+", label: "tyytyväistä asiakasta" },
    { value: "4,9/5", label: "keskiarvoarvosana" },
    { value: "750+", label: "keskimääräinen pisteparannus" },
    { value: "98%", label: "suosittelisi eteenpäin" }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Älykkäiden kuluttajien luottamus
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Liity tuhansien tyytyväisten asiakkaiden joukkoon, jotka ovat parantaneet taloudellista ymmärrystään 
            ja saavuttaneet tavoitteensa Xscoren PSD2-pohjaisen analyysin avulla.
          </p>
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow relative">
              <Quote className="absolute top-4 right-4 w-6 h-6 text-primary/20" />
              
              <div className="flex items-center space-x-3 mb-4">
                <Avatar>
                  <AvatarFallback className="bg-primary text-primary-foreground">
                    {testimonial.initials}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-semibold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.occupation} • {testimonial.location}
                  </div>
                </div>
              </div>

              <div className="flex space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-warning text-warning" />
                ))}
              </div>

              <p className="text-muted-foreground text-sm leading-relaxed">
                "{testimonial.testimonial}"
              </p>
            </Card>
          ))}
        </div>

        {/* Stats */}
        <div className="bg-gradient-to-r from-primary/5 to-primary-light/5 rounded-2xl p-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index}>
                <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;