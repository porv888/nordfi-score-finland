import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FaqSection = () => {
  const faqs = [
    {
      question: "Miten pankkiyhteys toimii?",
      answer: "Xscore käyttää PSD2-rajapintoja. Valtuutus tehdään pankkisi sivulla. Voit perua luvan koska vain."
    },
    {
      question: "Näettekö tilitietoni?",
      answer: "Tietoja käsitellään automaattisesti analyysiä varten. Emme jaa niitä kolmansille osapuolille ilman suostumustasi."
    },
    {
      question: "Vaikuttaako tämä luottotietoihini?",
      answer: "Ei. Xscore ei tee kovia luottokyselyitä. Tarkoitus on parantaa talouden perusmittareita."
    },
    {
      question: "Mitä mittareita seuraatte?",
      answer: "Tulot, menot, säästöaste, kulujen vaihtelu, velkakuorma, pelikulujen osuus jne."
    },
    {
      question: "Voinko käyttää useita pankkeja?",
      answer: "Kyllä, voit lisätä useampia tilejä ja kortteja."
    },
    {
      question: "Voinko irtisanoa milloin vain?",
      answer: "Kyllä. Pro-tilaus on ilman sitoutumista."
    }
  ];

  return (
    <section id="faq" className="py-12 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Usein kysytyt kysymykset
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Vastauksia yleisimpiin kysymyksiin
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-6">
                <AccordionTrigger className="text-left text-lg font-semibold text-foreground hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;