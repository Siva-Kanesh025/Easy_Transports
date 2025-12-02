import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Truck, Clock, DollarSign, Users, Shield, Zap, ArrowRight, CheckCircle2 } from "lucide-react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { useParallax } from "../hooks/useParallax";
import manVanIcon from "../assets/man_van.jpg";

const ManVanPage = () => {
  const heroSection = useScrollAnimation({ threshold: 0.1 });
  const featuresSection = useScrollAnimation({ threshold: 0.1 });
  const useCasesSection = useScrollAnimation({ threshold: 0.1 });
  const pricingSection = useScrollAnimation({ threshold: 0.1 });
  const ctaSection = useScrollAnimation({ threshold: 0.1 });
  const heroParallax = useParallax({ speed: 0.3 });

  const features = [
    {
      icon: Zap,
      title: "Instant Availability",
      description: "Book a man and van service within hours",
    },
    {
      icon: DollarSign,
      title: "Affordable Rates",
      description: "Pay only for the time you need - no hidden costs",
    },
    {
      icon: Users,
      title: "Experienced Drivers",
      description: "Professional, friendly drivers who care",
    },
    {
      icon: Shield,
      title: "Fully Insured",
      description: "Your items protected throughout the journey",
    },
  ];

  const useCases = [
    "Small flat moves and relocations",
    "Single item deliveries",
    "Student accommodation moves",
    "Furniture collection and delivery",
    "eBay and marketplace pickups",
    "Office equipment transport",
    "Store to home deliveries",
    "Emergency same-day moves",
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/5 to-accent/5 overflow-hidden">
        <div 
          className="absolute inset-0 opacity-10"
          style={{ transform: `translateY(${heroParallax.offset}px)` }}
        >
          <div className="absolute inset-0 bg-gradient-radial from-accent/20 via-transparent to-transparent"></div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-14 relative" ref={heroParallax.ref}>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in-left" ref={heroSection.ref}>
              <div className="inline-flex items-center space-x-2 bg-accent/10 px-4 py-2 rounded-full text-accent font-medium animate-scale-in">
                <Truck className="h-5 w-5" />
                <span>Man & Van Service</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Flexible{" "}
                <span className="text-accent">Man & Van</span>{" "}
                Hire in London
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground">
                Professional man and van service for all your moving needs. Quick, affordable, and reliable transportation across London.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button asChild variant="hero" size="lg" className="group hover:scale-105 transition-all duration-300 animate-glow">
                  <Link to="/quote">
                    Get a Free Quote
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="hover:scale-105 transition-all duration-300">
                  <Link to="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>
            <div className="relative animate-fade-in-right" style={{ animationDelay: "0.3s" }}>
              <div className="absolute -inset-4 bg-gradient-to-r from-accent/20 to-primary/20 rounded-3xl blur-2xl animate-pulse"></div>
              <img
                src={manVanIcon}
                alt="Man and Van Service"
                className="relative rounded-2xl shadow-2xl w-full max-h-[480px] object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background" ref={featuresSection.ref}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-12 transition-all duration-700 ${
            featuresSection.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Our Service</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Fast, flexible, and affordable man and van hire
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card 
                key={index}
                className={`border-border hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 ${
                  featuresSection.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <CardContent className="pt-6 text-center space-y-4">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 text-accent hover:bg-accent hover:text-accent-foreground transition-all duration-300 hover:scale-110 cursor-pointer">
                    <feature.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-semibold">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-secondary/30" ref={useCasesSection.ref}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className={`order-2 md:order-1 relative transition-all duration-700 ${
              useCasesSection.isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}>
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-accent/20 rounded-3xl blur-2xl"></div>
              <Card className="relative border-border hover:shadow-2xl transition-shadow duration-500">
                <CardContent className="p-8">
                  <Clock className="h-16 w-16 text-accent mb-6" />
                  <h3 className="text-2xl font-bold mb-4">Same-Day Service</h3>
                  <p className="text-muted-foreground mb-6">
                    Need a van urgently? We offer same-day man and van service across London. Perfect for last-minute moves and deliveries.
                  </p>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-center space-x-2">
                      <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0" />
                      <span>Available 7 days a week</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0" />
                      <span>Hourly or fixed-price options</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0" />
                      <span>No minimum booking required</span>
                    </li>
                  </ul>
                  <Button asChild variant="hero" size="lg" className="w-full group">
                    <Link to="/quote">
                      Book Now
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
            <div className={`order-1 md:order-2 space-y-6 transition-all duration-700 ${
              useCasesSection.isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}>
              <h2 className="text-3xl md:text-4xl font-bold">
                Perfect For
              </h2>
              <p className="text-lg text-muted-foreground">
                Our man and van service is ideal for a wide range of transportation needs.
              </p>
              <div className="space-y-4">
                {useCases.map((useCase, index) => (
                  <div 
                    key={index} 
                    className="flex items-start space-x-3"
                  >
                    <CheckCircle2 className="h-6 w-6 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-lg">{useCase}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Info Section */}
      <section className="py-20 bg-background" ref={pricingSection.ref}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-12 transition-all duration-700 ${
            pricingSection.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Transparent Pricing</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              No hidden fees - you know exactly what you're paying for
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                title: "Hourly Rate", 
                description: "Flexible hourly booking from £35/hour",
                icon: Clock,
              },
              { 
                title: "Fixed Price", 
                description: "Get a fixed quote for your specific job",
                icon: DollarSign,
              },
              { 
                title: "No Hidden Costs", 
                description: "All costs included - fuel, insurance, driver",
                icon: Shield,
              },
            ].map((item, index) => (
              <Card 
                key={index}
                className={`border-border hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 ${
                  pricingSection.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <CardContent className="pt-6 text-center space-y-4">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary">
                    <item.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-accent to-accent/80 relative overflow-hidden" ref={ctaSection.ref}>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent)]"></div>
        <div className={`container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 transition-all duration-700 ${
          ctaSection.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Need a Van Today?
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Book your man and van service now. Fast quotes and instant availability across London.
          </p>
          <Button asChild size="lg" variant="secondary" className="shadow-lg hover:shadow-2xl hover:scale-110 transition-all duration-300 animate-glow">
            <Link to="/quote" className="group">
              Get Your Free Quote
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-2 transition-transform" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default ManVanPage;