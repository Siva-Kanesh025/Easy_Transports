import { Card, CardContent } from "../components/ui/card";
import { Target, Users, MapPin, Award } from "lucide-react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import aboutTeam from "../assets/about-team.jpg";

const AboutPage = () => {
  const whoWeAreSection = useScrollAnimation({ threshold: 0.1 });
  const valuesSection = useScrollAnimation({ threshold: 0.1 });
  //const coverageSection = useScrollAnimation({ threshold: 0.1 });
  const statsSection = useScrollAnimation({ threshold: 0.1 });

  const values = [
    {
      icon: Target,
      title: "Our Mission",
      description: "To provide reliable, professional vehicle services that make moving and transportation stress-free for everyone in London.",
    },
    {
      icon: Users,
      title: "Our Team",
      description: "Experienced professionals who are trained, insured, and committed to delivering exceptional service with a smile.",
    },
    {
      icon: MapPin,
      title: "Service Coverage",
      description: "Operating across all Greater London boroughs, from Central London to outer zones, we're always nearby when you need us.",
    },
    {
      icon: Award,
      title: "Quality Commitment",
      description: "We take pride in every job, treating your belongings with care and ensuring 100% customer satisfaction.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 to-accent/5 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Us</h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Your trusted partner for all vehicle services in London
            </p>
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-20" ref={whoWeAreSection.ref}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className={`transition-all duration-700 ${
              whoWeAreSection.isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}>
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-accent/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <img
                  src={aboutTeam}
                  alt="Our Team"
                  className="relative rounded-2xl shadow-lg w-full h-auto hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
            <div className={`space-y-6 transition-all duration-700 ${
              whoWeAreSection.isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
            style={{ transitionDelay: "200ms" }}
            >
              <h2 className="text-3xl md:text-4xl font-bold">Who We Are</h2>
              <p className="text-lg text-muted-foreground">
                London Vehicle Services has been serving the Greater London community for over a decade. We started with a single van and a commitment to excellent customer service, and we've grown into one of London's most trusted vehicle service providers.
              </p>
              <p className="text-lg text-muted-foreground">
                Our team consists of experienced professionals who understand the unique challenges of moving and transportation in a busy city like London. Whether you're moving house, transporting pallets, or need a man and van for a quick job, we're here to help.
              </p>
              <p className="text-lg text-muted-foreground">
                We believe in honest pricing, reliable service, and treating every customer like family. That's why over 90% of our business comes from repeat customers and referrals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Grid */}
      <section className="py-20 bg-secondary/30" ref={valuesSection.ref}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-12 transition-all duration-700 ${
            valuesSection.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Values</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              What drives us to deliver exceptional service every day
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <Card 
                key={index} 
                className={`border-border hover:shadow-xl hover:-translate-y-1 transition-all duration-500 ${
                  valuesSection.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <CardContent className="pt-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110">
                        <value.icon className="h-6 w-6 text-primary hover:text-primary-foreground transition-colors" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                      <p className="text-muted-foreground">{value.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Coverage Map Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Service Coverage</h2>
              <p className="text-lg text-muted-foreground">
                We proudly serve all areas of Greater London
              </p>
            </div>

            <Card className="border-border">
              <CardContent className="pt-6">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-center">
                  {[
                    "Central London",
                    "North London",
                    "South London",
                    "East London",
                    "West London",
                    "Greater London",
                  ].map((area, index) => (
                    <div key={index} className="p-4 bg-secondary/30 rounded-lg">
                      <MapPin className="h-6 w-6 text-primary mx-auto mb-2" />
                      <p className="font-medium">{area}</p>
                    </div>
                  ))}
                </div>
                <p className="text-sm text-muted-foreground text-center mt-6">
                  Not sure if we cover your area? Get in touch and we'll confirm!
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground relative overflow-hidden" ref={statsSection.ref}>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(255,255,255,0.1),transparent)]"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "10+", label: "Years Experience" },
              { value: "500+", label: "Happy Clients" },
              { value: "15", label: "Professional Team" },
              { value: "24/7", label: "Available" }
            ].map((stat, index) => (
              <div 
                key={index}
                className={`transition-all duration-700 hover:scale-110 ${
                  statsSection.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="text-4xl md:text-5xl font-bold mb-2 animate-pulse">{stat.value}</div>
                <p className="text-primary-foreground/90">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;