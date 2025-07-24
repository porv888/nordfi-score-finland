import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MessageCircle, HelpCircle, Shield } from "lucide-react";

const ContactSection = () => {
  const contactMethods = [
    {
      icon: Mail,
      title: "Email Support",
      description: "Get help from our Finnish customer success team",
      contact: "support@nordfi.fi",
      responseTime: "Within 24 hours"
    },
    {
      icon: MessageCircle,
      title: "Live Chat",
      description: "Chat with us in Finnish or English",
      contact: "Available 9-17 EET",
      responseTime: "Instant response"
    },
    {
      icon: HelpCircle,
      title: "FAQ",
      description: "Find answers to common questions",
      contact: "50+ Articles",
      responseTime: "Immediate"
    }
  ];

  const faqs = [
    {
      question: "How is NordFi different from international credit services?",
      answer: "NordFi is built specifically for the Finnish market, understanding local banks, employment types, and regulations."
    },
    {
      question: "Is my data safe and GDPR compliant?",
      answer: "Yes, we follow strict GDPR guidelines and use bank-grade security to protect your information."
    },
    {
      question: "Which Finnish banks do you work with?",
      answer: "We have integrations with Nordea, OP-ryhmä, Danske Bank, Handelsbanken, and other major Finnish financial institutions."
    },
    {
      question: "How long does the assessment take?",
      answer: "Our comprehensive assessment takes about 10 minutes to complete, and you get your results instantly."
    }
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Get in Touch
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Have questions about your credit score or need help with our platform? 
            Our Finnish customer success team is here to help.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Form */}
          <Card className="p-8">
            <h3 className="text-xl font-semibold text-foreground mb-6">
              Send us a Message
            </h3>
            
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    First Name
                  </label>
                  <Input placeholder="Jukka" />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Last Name
                  </label>
                  <Input placeholder="Virtanen" />
                </div>
              </div>
              
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Email
                </label>
                <Input type="email" placeholder="jukka@example.fi" />
              </div>
              
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Subject
                </label>
                <Input placeholder="Question about my credit score" />
              </div>
              
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Message
                </label>
                <Textarea 
                  placeholder="How can we help you with your credit journey?"
                  rows={4}
                />
              </div>
              
              <Button variant="cta" className="w-full">
                Send Message
              </Button>
            </form>
          </Card>

          {/* Contact Methods */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-foreground mb-6">
              Other Ways to Reach Us
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
                  <h4 className="font-semibold text-foreground mb-1">Privacy Protected</h4>
                  <p className="text-sm text-muted-foreground">
                    All communications are encrypted and GDPR compliant. We never share 
                    your personal information with third parties.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* FAQ Section */}
        <div>
          <h3 className="text-2xl font-bold text-foreground text-center mb-8">
            Frequently Asked Questions
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