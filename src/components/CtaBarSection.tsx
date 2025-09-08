import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CtaBarSection = () => {
  return (
    <section className="py-12 bg-gradient-mesh">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-8">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
            Valmis aloittamaan?
          </h2>
          
          <p className="text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto">
            Liity yli 1 000 käyttäjän joukkoon ja aloita tänään!
          </p>
          
          <Button variant="hero" size="lg" className="text-xl px-16 py-8 group">
            Aloita ilmaiseksi
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CtaBarSection;