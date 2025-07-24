import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Quote, Star } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Jukka Virtanen",
      location: "Helsinki",
      occupation: "Software Engineer",
      testimonial: "NordFi helped me understand my credit before applying for a mortgage. The insights about Finnish banking requirements were exactly what I needed. Got approved at Nordea with a great rate!",
      rating: 5,
      initials: "JV"
    },
    {
      name: "Aino Koskinen",
      location: "Tampere", 
      occupation: "Marketing Manager",
      testimonial: "As someone who moved to Finland from abroad, I had no idea how credit worked here. NordFi made it crystal clear and helped me build my credit profile. Highly recommend!",
      rating: 5,
      initials: "AK"
    },
    {
      name: "Mikael Laaksonen",
      location: "Turku",
      occupation: "Entrepreneur",
      testimonial: "Being self-employed, I was worried about my credit standing. NordFi gave me clarity on my financial position and actionable steps to improve. Perfect for entrepreneurs!",
      rating: 5,
      initials: "ML"
    }
  ];

  const stats = [
    { value: "1,000+", label: "Happy Customers" },
    { value: "4.9/5", label: "Average Rating" },
    { value: "750+", label: "Average Score Improvement" },
    { value: "98%", label: "Would Recommend" }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Trusted by Finnish Consumers
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join thousands of satisfied customers who have improved their financial understanding 
            and achieved their goals with NordFi Scoring.
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