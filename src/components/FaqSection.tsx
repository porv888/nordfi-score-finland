import { useState } from "react";
import { ChevronDown } from "lucide-react";

const FaqSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

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

  const toggleFaq = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Usein kysytyt kysymykset
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Vastauksia yleisimpiin kysymyksiin
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-border rounded-lg overflow-hidden">
              <button
                className="w-full px-6 py-4 text-left flex items-center justify-between bg-background hover:bg-accent transition-colors"
                onClick={() => toggleFaq(index)}
              >
                <span className="text-lg font-semibold text-foreground">
                  {faq.question}
                </span>
                <ChevronDown 
                  className={`w-5 h-5 text-muted-foreground transition-transform ${
                    activeIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              
              {activeIndex === index && (
                <div className="px-6 pb-4">
                  <p className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;