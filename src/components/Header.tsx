import { Button } from "@/components/ui/button";
import { Menu, X, TrendingUp } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: "Toiminta", href: "#how-it-works" },
    { name: "Ominaisuudet", href: "#features" },
    { name: "Hinnoittelu", href: "#pricing" },
    { name: "Tietoa Meistä", href: "#about" },
    { name: "Yhteystiedot", href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-blue-600 text-white shadow-lg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
              <TrendingUp className="w-5 h-5 text-white" />
            </div>
            <span className="text-2xl font-bold text-white">NordFi</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-white/80 hover:text-white transition-colors relative group"
              >
                {item.name}
                <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-white scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="text-white/80 hover:text-white hover:bg-white/10">
              Kirjaudu
            </Button>
            <Button variant="default" size="sm" className="bg-white text-blue-600 hover:bg-white/90 font-semibold">
              Aloita Nyt
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-white hover:bg-white/10 p-2 rounded-md"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-white/20 bg-blue-600">
            <div className="px-4 py-6 space-y-4">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block text-sm font-medium text-white/80 hover:text-white transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="pt-4 space-y-3">
                <Button variant="ghost" size="sm" className="w-full justify-start text-white/80 hover:text-white hover:bg-white/10">
                  Kirjaudu
                </Button>
                <Button variant="default" size="sm" className="w-full bg-white text-blue-600 hover:bg-white/90 font-semibold">
                  Aloita Nyt
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;