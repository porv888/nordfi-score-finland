import { TrendingUp, MapPin, Mail } from "lucide-react";

const Footer = () => {
  const footerSections = [
    {
      title: "Tuote",
      links: [
        { label: "Miten toimii", href: "#how-it-works" },
        { label: "Kenelle", href: "#target-audience" },
        { label: "Hinnoittelu", href: "#pricing" },
        { label: "UKK", href: "#faq" }
      ]
    },
    {
      title: "Yritys", 
      links: [
        { label: "Tietoa meistä", href: "#about" },
        { label: "Ota yhteyttä", href: "#contact" },
        { label: "Blogi", href: "#blog" },
        { label: "Ura", href: "#careers" }
      ]
    },
    {
      title: "Tuki",
      links: [
        { label: "Ohjeet", href: "#help" },
        { label: "Tuki", href: "#contact" },
        { label: "Palvelun tila", href: "#status" },
        { label: "API", href: "#api" }
      ]
    },
    {
      title: "Juridiikka",
      links: [
        { label: "Tietosuoja", href: "#privacy" },
        { label: "Käyttöehdot", href: "#terms" },
        { label: "Evästeet", href: "#cookies" },
        { label: "Vaatimustenmukaisuus", href: "#compliance" }
      ]
    }
  ];

  const complianceBadges = ["PSD2", "GDPR", "ISO 27001", "SOC 2"];

  return (
    <footer className="bg-gradient-primary text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-primary-foreground/20 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold">Xscore</span>
            </div>
            <p className="text-primary-foreground/80 text-sm mb-6">
              Taloustietojen demokratisointi suomalaisille kuluttajille kattavalla, 
              automaattisella ja henkilökohtaisella palvelulla.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-sm">
                <MapPin className="w-4 h-4" />
                <span>Helsinki, Suomi</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <Mail className="w-4 h-4" />
                <span>support@xscore.fi</span>
              </div>
            </div>
          </div>

          {/* Links Sections */}
          <div className="lg:col-span-2 grid grid-cols-2 md:grid-cols-4 gap-8">
            {footerSections.map((section, index) => (
              <div key={index}>
                <h4 className="font-semibold mb-4">{section.title}</h4>
                <ul className="space-y-2">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a
                        href={link.href}
                        className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Compliance Section */}
          <div className="lg:col-span-1">
            <h4 className="font-semibold mb-4">Turvallisuus ja vaatimustenmukaisuus</h4>
            <div className="flex flex-wrap gap-2">
              {complianceBadges.map((badge, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-primary-foreground/20 rounded-full text-xs font-medium"
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 pt-8 mt-12">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-primary-foreground/80">
              © 2024 Xscore Luokitusalusta. Kaikki oikeudet pidätetään.
            </div>
            
            <div className="flex space-x-6 text-sm text-primary-foreground/80">
              <a href="#privacy" className="hover:text-primary-foreground transition-colors">
                Tietosuoja
              </a>
              <a href="#terms" className="hover:text-primary-foreground transition-colors">
                Käyttöehdot
              </a>
              <a href="#cookies" className="hover:text-primary-foreground transition-colors">
                Evästeet
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;