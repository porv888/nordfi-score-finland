import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MessageCircle, HelpCircle, Shield } from "lucide-react";

const ContactSection = () => {
  const contactMethods = [
    {
      icon: Mail,
      title: "Sähköpostituki",
      description: "Saa apua suomalaiselta asiakasmenestystiimiltämme",
      contact: "support@nordfi.fi",
      responseTime: "24 tunnin sisällä"
    },
    {
      icon: MessageCircle,
      title: "Live Chat",
      description: "Keskustele kanssamme suomeksi tai englanniksi",
      contact: "Saatavilla 9-17 EET",
      responseTime: "Välitön vastaus"
    },
    {
      icon: HelpCircle,
      title: "UKK",
      description: "Löydä vastauksia yleisiin kysymyksiin",
      contact: "50+ Artikkelia",
      responseTime: "Välitön"
    }
  ];

  const faqs = [
    {
      question: "Miten NordFi eroaa kansainvälisistä talouspalveluista?",
      answer: "NordFi on rakennettu erityisesti Suomen markkinoille, ymmärtäen paikalliset pankit, työllisyystyypit ja säädökset."
    },
    {
      question: "Ovatko tietoni turvassa ja GDPR-yhteensopivia?",
      answer: "Kyllä, noudatamme tiukkoja GDPR-ohjeita ja käytämme pankkitason turvallisuutta tietojesi suojaamiseen."
    },
    {
      question: "Minkä suomalaisten pankkien kanssa teette yhteistyötä?",
      answer: "Meillä on integraatiot Nordean, OP-ryhmän, Danske Bankin, Handelsbankenin ja muiden suurten suomalaisten rahoituslaitosten kanssa."
    },
    {
      question: "Kuinka kauan arviointi kestää?",
      answer: "Kattava arviointimme kestää noin 10 minuuttia, ja saat tuloksesi välittömästi."
    }
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Ota Yhteyttä
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Onko sinulla kysymyksiä talousluokituksestasi tai tarvitsetko apua alustamme kanssa? 
            Suomalainen asiakasmenestystiimimme on täällä auttamassa.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Form */}
          <Card className="p-8">
            <h3 className="text-xl font-semibold text-foreground mb-6">
              Lähetä Meille Viesti
            </h3>
            
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Etunimi
                  </label>
                  <Input placeholder="Jukka" />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Sukunimi
                  </label>
                  <Input placeholder="Virtanen" />
                </div>
              </div>
              
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Sähköposti
                </label>
                <Input type="email" placeholder="jukka@example.fi" />
              </div>
              
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Aihe
                </label>
                <Input placeholder="Kysymys talousluokituksestani" />
              </div>
              
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Viesti
                </label>
                <Textarea 
                  placeholder="Miten voimme auttaa taloudellisessa matkassasi?"
                  rows={4}
                />
              </div>
              
              <Button variant="default" className="w-full">
                Lähetä Viesti
              </Button>
            </form>
          </Card>

          {/* Contact Methods */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-foreground mb-6">
              Muut Tavat Tavoittaa Meidät
            </h3>
            
            {contactMethods.map((method, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <method.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">{method.title}</h4>
                    <p className="text-sm text-muted-foreground mb-2">{method.description}</p>
                    <div className="text-sm font-medium text-primary">{method.contact}</div>
                    <div className="text-xs text-muted-foreground">{method.responseTime}</div>
                  </div>
                </div>
              </Card>
            ))}
            
            {/* Privacy Notice */}
            <Card className="p-6 bg-success/5 border-success/20">
              <div className="flex items-start space-x-3">
                <Shield className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Yksityisyys Suojattu</h4>
                  <p className="text-sm text-muted-foreground">
                    Kaikki viestintä on salattua ja GDPR-yhteensopivaa. Emme koskaan jaa 
                    henkilökohtaisia tietojasi kolmansille osapuolille.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* FAQ Section */}
        <div>
          <h3 className="text-2xl font-bold text-foreground text-center mb-8">
            Usein Kysytyt Kysymykset
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {faqs.map((faq, index) => (
              <Card key={index} className="p-6">
                <h4 className="font-semibold text-foreground mb-3">{faq.question}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{faq.answer}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;