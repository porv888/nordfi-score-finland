import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Target, Users, Shield, Zap } from "lucide-react";

const AboutSection = () => {
  const values = [
    {
      icon: Target,
      title: "Suomalainen Keskittyminen",
      description: "Rakennettu erityisesti Suomen markkinoille, ei yleinen kansainvälinen ratkaisu"
    },
    {
      icon: Users,
      title: "Asiakas Edellä",
      description: "Asetamme suomalaiset kuluttajat etusijalle tarjoten läpinäkyviä ja toimivia näkemyksiä"
    },
    {
      icon: Shield,
      title: "Luottamus ja Turvallisuus",
      description: "Pankkitason turvallisuus täydellä GDPR-yhteensopivuudella ja tietosuojalla"
    },
    {
      icon: Zap,
      title: "Innovaatio",
      description: "Modernin teknologian käyttö taloustietojen demokratisoimiseen Suomessa"
    }
  ];

  const team = [
    "Suomalaiset fintech-asiantuntijat",
    "Entiset pankkialan ammattilaiset", 
    "Datatieteilijät",
    "Säännösten noudattamisen asiantuntijat",
    "Asiakasmenestyksen johtajat"
  ];

  const compliance = [
    "GDPR-Yhteensopiva",
    "Suomen Rahoitussäädökset",
    "Pankkitason Turvallisuus",
    "ISO 27001 Sertifioitu",
    "PCI DSS Yhteensopiva"
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-secondary/20 to-accent/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Tietoa Xscoresta
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Olemme missiossa demokratisoida taloustietoja suomalaisille kuluttajille. 
            Alustamme tarjoaa näkemyksiä, joita tarvitset tietoisien taloudellisten päätösten tekemiseen.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-6">
              Meidän Missiomme
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              "Taloustietojen demokratisointi suomalaisille kuluttajille" - Uskomme, että jokaisella suomalaisella 
              kuluttajalla tulisi olla pääsy selkeisiin, toimiviin näkemyksiin taloudellisesta terveydestään. 
              Toisin kuin yleiset kansainväliset palvelut, ymmärrämme suomalaisen rahoitusjärjestelmän ainutlaatuiset piirteet.
            </p>
            
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-foreground mb-2">Miksi Olemme Erilaisia</h4>
                <p className="text-muted-foreground text-sm">
                  Emme ole vain yksi talousluokituspalvelu lisää. Olemme suomalaisia fintech-asiantuntijoita, jotka 
                  ymmärtävät paikalliset pankkitoiminnan, työllisyyden mallit ja säädösvaatimukset. Näkemyksemme 
                  on räätälöity erityisesti menestykseesi Suomen markkinoilla.
                </p>
              </div>
            </div>
          </div>

          <Card className="p-8 bg-gradient-to-br from-primary/5 to-primary-light/5">
            <h4 className="text-xl font-semibold text-foreground mb-6">Meidän Arvomme</h4>
            <div className="space-y-4">
              {values.map((value, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <value.icon className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <div className="font-medium text-foreground">{value.title}</div>
                    <div className="text-sm text-muted-foreground">{value.description}</div>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Team & Technology */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Card className="p-8">
            <h4 className="text-xl font-semibold text-foreground mb-4">Meidän Tiimimme</h4>
            <p className="text-muted-foreground mb-6">
              Olemme suomalaisten fintech-asiantuntijoiden, entisten pankkialan ammattilaisten ja 
              teknologia-asiantuntijoiden tiimi, joka ymmärtää sekä tekniset että säädölliset 
              näkökohdat talousluokituksessa Suomessa.
            </p>
            <div className="space-y-2">
              {team.map((member, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <span className="text-sm text-muted-foreground">{member}</span>
                </div>
              ))}
            </div>
          </Card>

          <Card className="p-8">
            <h4 className="text-xl font-semibold text-foreground mb-4">Teknologia ja Turvallisuus</h4>
            <p className="text-muted-foreground mb-6">
              Rakennettu modernilla, turvallisella teknologiapinolla, joka sisältää pilvi-infrastruktuurin, 
              edistyneen analytiikan ja pankkitason turvallisuustoimenpiteet.
            </p>
            <div className="grid grid-cols-2 gap-2">
              {compliance.map((item, index) => (
                <Badge key={index} variant="outline" className="text-xs justify-center py-1">
                  {item}
                </Badge>
              ))}
            </div>
          </Card>
        </div>

        {/* Key Stats */}
        <Card className="p-8 bg-gradient-to-r from-primary/5 to-primary-light/5 text-center">
          <h4 className="text-xl font-semibold text-foreground mb-6">
            Luotettu Alusta
          </h4>
          <div className="grid md:grid-cols-4 gap-6">
            <div>
              <div className="text-2xl font-bold text-primary mb-1">2023</div>
              <div className="text-sm text-muted-foreground">Perustettu</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary mb-1">1,000+</div>
              <div className="text-sm text-muted-foreground">Palveltua Asiakasta</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary mb-1">5+</div>
              <div className="text-sm text-muted-foreground">Suomalaista Pankkia</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary mb-1">99.9%</div>
              <div className="text-sm text-muted-foreground">Käytettävyys</div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default AboutSection;