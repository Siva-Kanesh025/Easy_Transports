import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Package, Shield, Clock, Users, Truck, ArrowRight, CheckCircle2 } from "lucide-react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { useParallax } from "../hooks/useParallax";
import courierIcon from "../assets/courier_service.jpg";

const CourierServices = () => {
  const heroSection = useScrollAnimation({ threshold: 0.1 });
  const featuresSection = useScrollAnimation({ threshold: 0.1 });
  const processSection = useScrollAnimation({ threshold: 0.1 });
  const benefitsSection = useScrollAnimation({ threshold: 0.1 });
  const ctaSection = useScrollAnimation({ threshold: 0.1 });
  const heroParallax = useParallax({ speed: 0.3 });

  const features = [
    {
      icon: Truck,
      title: "Same Day Delivery",
      description: "Fast and reliable same-day courier services across London",
    },
    {
      icon: Shield,
      title: "Fully Insured",
      description: "Your parcels are protected with full insurance coverage",
    },
    {
      icon: Clock,
      title: "24/7 Availability",
      description: "We are available anytime, day or night",
    },
    {
      icon: Users,
      title: "Professional Drivers",
      description: "Trained and trusted delivery drivers",
    },
  ];

  const process = [
    { step: "1", title: "Book Online", description: "Book your delivery in seconds" },
    { step: "2", title: "Pickup", description: "We collect your parcel from your location" },
    { step: "3", title: "In Transit", description: "Safe and fast transport" },
    { step: "4", title: "Delivered", description: "Delivered on time to the destination" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/5 to-accent/5 overflow-hidden">
        <div 
          className="absolute inset-0 opacity-10"
          style={{ transform: `translateY(${heroParallax.offset}px)` }}
        >
          <div className="absolute inset-0 bg-gradient-radial from-primary/20 via-transparent to-transparent"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-14 relative" ref={heroParallax.ref}>
          <div className="grid md:grid-cols-2 gap-12 items-center">

            <div className="space-y-6 animate-fade-in-left" ref={heroSection.ref}>
              <div className="inline-flex items-center space-x-2 bg-primary/10 px-4 py-2 rounded-full text-primary font-medium animate-scale-in">
                <Package className="h-5 w-5" />
                <span>Courier Service</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Fast & Reliable{" "}
                <span className="text-primary">Courier Services</span>{" "}
                in London
              </h1>

              <p className="text-lg md:text-xl text-muted-foreground">
                From documents to large parcels, our trusted couriers ensure safe, on-time delivery across London.
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
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-accent/20 rounded-3xl blur-2xl animate-pulse"></div>
              <img
                src={courierIcon}
                alt="Courier Service"
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Our Courier Service</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Reliable deliveries with speed and security
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
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110 cursor-pointer">
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

      {/* Process Section */}
      <section className="py-20 bg-secondary/30" ref={processSection.ref}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">

          <div className={`text-center mb-12 transition-all duration-700 ${
            processSection.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Simple & fast parcel delivery process
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((item, index) => (
              <div 
                key={index}
                className={`text-center space-y-4 transition-all duration-700 ${
                  processSection.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary text-primary-foreground text-2xl font-bold hover:scale-110 transition-transform duration-300">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>

                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-1/2 w-full h-0.5 bg-primary/20"></div>
                )}
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-background" ref={benefitsSection.ref}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid md:grid-cols-2 gap-12 items-center">

            <div className={`space-y-6 transition-all duration-700 ${
              benefitsSection.isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}>
              <h2 className="text-3xl md:text-4xl font-bold">
                What's Included
              </h2>

              <div className="space-y-4">
                {[
                  "Free online booking",
                  "Same-day & next-day delivery",
                  "Real-time tracking",
                  "Careful handling of parcels",
                  "Fully insured service",
                  "Affordable pricing",
                  "Clean & secured vehicles",
                  "Friendly drivers",
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle2 className="h-6 w-6 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-lg">{item}</span>
                  </div>
                ))}
              </div>

            </div>

            <div className={`relative transition-all duration-700 ${
              benefitsSection.isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}>
              <div className="absolute -inset-4 bg-gradient-to-r from-accent/20 to-primary/20 rounded-3xl blur-2xl"></div>

              <Card className="relative border-border hover:shadow-2xl transition-shadow duration-500">
                <CardContent className="p-8">
                  <Truck className="h-16 w-16 text-primary mb-6" />
                  <h3 className="text-2xl font-bold mb-4">Need a Courier Right Now?</h3>
                  <p className="text-muted-foreground mb-6">
                    Get an instant quote and schedule your delivery in minutes.
                  </p>

                  <Button asChild variant="hero" size="lg" className="w-full group">
                    <Link to="/quote">
                      Get Quote Now
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>

                </CardContent>
              </Card>

            </div>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary/80 relative overflow-hidden" ref={ctaSection.ref}>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent)]"></div>

        <div className={`container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 transition-all duration-700 ${
          ctaSection.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}>
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Book Your Courier Today
          </h2>
          <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Fast, affordable and reliable courier services across London
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

export default CourierServices;