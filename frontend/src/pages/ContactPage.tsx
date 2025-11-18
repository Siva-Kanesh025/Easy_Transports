import { useState } from "react";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Textarea } from "../components/ui/textarea";
import { Phone, Mail, MapPin, Clock, MessageSquare } from "lucide-react";
import { useToast } from "../hooks/use-toast";

const ContactPage = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }

    console.log("Contact form submitted:", formData);
    
    toast({
      title: "Message Sent!",
      description: "We'll get back to you as soon as possible.",
    });

    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      detail: "07577574435",
      link: "tel:07577574435",
    },
    {
      icon: Mail,
      title: "Email",
      detail: "info@easytransports.co.uk",
      link: "mailto:info@easytransports.co.uk",
    },
    {
      icon: MapPin,
      title: "Location",
      detail: "London, United Kingdom",
      link: null,
    },
    {
      icon: Clock,
      title: "Hours",
      detail: "24/7 Available",
      link: null,
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 to-accent/5 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Get in touch with us for any questions or to discuss your requirements
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 -mt-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <Card 
                key={index} 
                className="border-border text-center hover:shadow-xl hover:-translate-y-2 transition-all duration-500 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms`, opacity: 0 }}
              >
                <CardContent className="pt-6">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-4 hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110">
                    <info.icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-semibold mb-2">{info.title}</h3>
                  {info.link ? (
                    <a
                      href={info.link}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {info.detail}
                    </a>
                  ) : (
                    <p className="text-muted-foreground">{info.detail}</p>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map Section */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <div className="mb-8">
                <h2 className="text-3xl font-bold mb-4">Send Us a Message</h2>
                <p className="text-muted-foreground">
                  Fill out the form below and we'll get back to you within 24 hours
                </p>
              </div>

              <Card className="border-border">
                <CardContent className="pt-6">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        placeholder="John Smith"
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="email">Email *</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="john@example.com"
                          value={formData.email}
                          onChange={(e) => handleInputChange("email", e.target.value)}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone</Label>
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="07123 456789"
                          value={formData.phone}
                          onChange={(e) => handleInputChange("phone", e.target.value)}
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject</Label>
                      <Input
                        id="subject"
                        placeholder="How can we help?"
                        value={formData.subject}
                        onChange={(e) => handleInputChange("subject", e.target.value)}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        placeholder="Tell us more about what you need..."
                        rows={6}
                        value={formData.message}
                        onChange={(e) => handleInputChange("message", e.target.value)}
                      />
                    </div>

                    <Button type="submit" variant="hero" className="w-full">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Map & Additional Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-4">Our Service Area</h2>
                <p className="text-muted-foreground mb-6">
                  We operate across all of Greater London, providing reliable vehicle services to every borough.
                </p>
              </div>

              {/* Map Placeholder */}
              <Card className="border-border overflow-hidden">
                <div className="h-80 bg-secondary/30 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="h-16 w-16 text-primary mx-auto mb-4" />
                    <p className="text-muted-foreground">Service Coverage Map</p>
                    <p className="text-sm text-muted-foreground mt-2">All Greater London Areas</p>
                  </div>
                </div>
              </Card>

              {/* Quick Contact Options */}
              <Card className="border-border">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-4">Prefer to Talk?</h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3 p-3 bg-secondary/30 rounded-lg">
                      <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                      <div>
                        <p className="font-medium">Call Us</p>
                        <a href="tel:07577574435" className="text-sm text-muted-foreground hover:text-primary">
                          07577574435
                        </a>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3 p-3 bg-secondary/30 rounded-lg">
                      <MessageSquare className="h-5 w-5 text-accent flex-shrink-0" />
                      <div>
                        <p className="font-medium">WhatsApp</p>
                        <a href="https://wa.me/447577574435" className="text-sm text-muted-foreground hover:text-primary">
                          Message us on WhatsApp
                        </a>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3 p-3 bg-secondary/30 rounded-lg">
                      <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                      <div>
                        <p className="font-medium">Email</p>
                        <a href="mailto:info@easytransports.co.uk" className="text-sm text-muted-foreground hover:text-primary">
                          info@easytransporter.com
                        </a>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;