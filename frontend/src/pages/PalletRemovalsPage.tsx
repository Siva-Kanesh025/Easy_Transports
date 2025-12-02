import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Package, Clock, DollarSign, Shield, Zap, ArrowRight, CheckCircle2 } from "lucide-react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { useParallax } from "../hooks/useParallax";
import palletIcon from "../assets/pallet_removals.jpg";

const PalletRemovalsPage = () => {
  const heroSection = useScrollAnimation({ threshold: 0.1 });
  const featuresSection = useScrollAnimation({ threshold: 0.1 });
  const benefitsSection = useScrollAnimation({ threshold: 0.1 });
  const statsSection = useScrollAnimation({ threshold: 0.1 });
  const ctaSection = useScrollAnimation({ threshold: 0.1 });
  const heroParallax = useParallax({ speed: 0.3 });

  const features = [
    {
      icon: Zap,
      title: "Fast Collection",
      description: "Same-day and next-day pallet collection available",
    },
    {
      icon: DollarSign,
      title: "Competitive Rates",
      description: "Best prices for business pallet transportation",
    },
    {
      icon: Shield,
      title: "Secure Transport",
      description: "Your goods transported safely and securely",
    },
    {
      icon: Clock,
      title: "Flexible Scheduling",
      description: "Book collection at your convenience",
    },
  ];

  const services = [
    "Single or multiple pallet collection",
    "Business-to-business deliveries",
    "Warehouse to customer transport",
    "Cross-London pallet delivery",
    "Scheduled regular collections",
    "Loading and unloading assistance",
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
                <Package className="h-5 w-5" />
                <span>Pallet Removal Service</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Efficient{" "}
                <span className="text-accent">Pallet Removals</span>{" "}
                Across London
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground">
                Reliable pallet transportation for businesses. Fast, affordable, and professional service for all your commercial needs.
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
                src={palletIcon}
                alt="Pallet Removal Service"
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Businesses Choose Us</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Trusted by London businesses for reliable pallet transportation
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

      {/* Benefits Section */}
      <section className="py-20 bg-secondary/30" ref={benefitsSection.ref}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className={`order-2 md:order-1 relative animate-fade-in-left transition-all duration-700 ${
              benefitsSection.isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}>
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-accent/20 rounded-3xl blur-2xl"></div>
              <Card className="relative border-border hover:shadow-2xl transition-shadow duration-500">
                <CardContent className="p-8">
                  <Package className="h-16 w-16 text-accent mb-6" />
                  <h3 className="text-2xl font-bold mb-4">Business Solutions</h3>
                  <p className="text-muted-foreground mb-6">
                    We understand business needs. Our pallet removal service is designed for efficiency, reliability, and value.
                  </p>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-center space-x-2">
                      <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0" />
                      <span>Volume discounts available</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0" />
                      <span>Regular contract options</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0" />
                      <span>Priority booking for businesses</span>
                    </li>
                  </ul>
                  <Button asChild variant="hero" size="lg" className="w-full group">
                    <Link to="/quote">
                      Get Business Quote
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
            <div className={`order-1 md:order-2 space-y-6 transition-all duration-700 ${
              benefitsSection.isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}>
              <h2 className="text-3xl md:text-4xl font-bold">
                Our Pallet Services Include
              </h2>
              <div className="space-y-4">
                {services.map((service, index) => (
                  <div 
                    key={index} 
                    className="flex items-start space-x-3"
                  >
                    <CheckCircle2 className="h-6 w-6 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-lg">{service}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-background" ref={statsSection.ref}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {[
              { number: "1000+", label: "Pallets Moved Monthly" },
              { number: "200+", label: "Business Clients" },
              { number: "98%", label: "On-Time Delivery" },
            ].map((stat, index) => (
              <div 
                key={index}
                className={`space-y-2 transition-all duration-700 ${
                  statsSection.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="text-4xl md:text-5xl font-bold text-primary">{stat.number}</div>
                <div className="text-lg text-muted-foreground">{stat.label}</div>
              </div>
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
            Need Pallet Collection Today?
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Get an instant quote for your pallet removal needs. Fast service across all of London.
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

export default PalletRemovalsPage;