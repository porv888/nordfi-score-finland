import { TrendingUp, Mail, MapPin, Shield } from "lucide-react";

const Footer = () => {
  const footerSections = [
    {
      title: "Tuote",
      links: [
        { name: "Miten Se Toimii", href: "#how-it-works" },
        { name: "Ominaisuudet", href: "#features" },
        { name: "Hinnoittelu", href: "#pricing" },
        { name: "Esimerkkiraportti", href: "#sample" }
      ]
    },
    {
      title: "Yritys",
      links: [
        { name: "Tietoa Meistä", href: "#about" },
        { name: "Yhteystiedot", href: "#contact" },
        { name: "Ura", href: "#careers" },
        { name: "Blogi", href: "#blog" }
      ]
    },
    {
      title: "Tuki",
      links: [
        { name: "Tukikeskus", href: "#help" },
        { name: "UKK", href: "#faq" },
        { name: "Ota Yhteyttä", href: "#contact" },
        { name: "Järjestelmän Tila", href: "#status" }
      ]
    },
    {
      title: "Juridiikka",
      links: [
        { name: "Tietosuojakäytäntö", href: "#privacy" },
        { name: "Käyttöehdot", href: "#terms" },
        { name: "GDPR-Yhteensopivuus", href: "#gdpr" },
        { name: "Evästekäytäntö", href: "#cookies" }
      ]
    }
  ];

  const compliance = [
    "GDPR-Yhteensopiva",
    "ISO 27001 Sertifioitu", 
    "Suomen Rahoitussäädökset",
    "Pankkitason Turvallisuus"
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-5 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-primary-foreground/20 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold">NordFi</span>
            </div>
            <p className="text-primary-foreground/80 text-sm mb-6">
              Taloustietojen demokratisointi suomalaisille kuluttajille kattavalla, 
              turvallisella ja paikallisesti sovitetulla talousluokituksella.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-sm">
                <MapPin className="w-4 h-4" />
                <span>Helsinki, Suomi</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <Mail className="w-4 h-4" />
                <span>support@nordfi.fi</span>
              </div>
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section, index) => (
            <div key={index}>
              <h4 className="font-semibold mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a 
                      href={link.href}
                      className="text-primary-foreground/80 hover:text-primary-foreground text-sm transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Compliance Section */}
        <div className="border-t border-primary-foreground/20 mt-12 pt-8">
          <div className="flex items-center justify-center mb-6">
            <Shield className="w-5 h-5 mr-2" />
            <span className="font-medium">Turvallinen ja Yhteensopiva</span>
          </div>
          
          <div className="grid md:grid-cols-4 gap-4 text-center mb-8">
            {compliance.map((item, index) => (
              <div key={index} className="text-sm text-primary-foreground/80">
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-primary-foreground/80">
              © 2024 NordFi Luokitusalusta. Kaikki oikeudet pidätetään.
            </div>
            
            <div className="flex space-x-6 text-sm text-primary-foreground/80">
              <span>Tehty ❤️:lla Suomessa</span>
              <span>•</span>
              <span>Suomalaisen Pankkitoiminnan Asiantuntijat</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;