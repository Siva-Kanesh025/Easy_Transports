import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import {Zap, Shield, MapPin, ArrowRight, Clock, DollarSign, ThumbsUp } from "lucide-react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import heroVan from "../assets/hero-van.jpg";
import houseMovingIcon from "../assets/house-moving-icon.jpg";
import palletIcon from "../assets/pallet-icon.jpg";
import skipIcon from "../assets/skip-icon.jpg";
import manVanIcon from "../assets/man-van-icon.jpg";

const HomePage = () => {
  const servicesSection = useScrollAnimation({ threshold: 0.1 });
  const featuresSection = useScrollAnimation({ threshold: 0.1 });
  const testimonialsSection = useScrollAnimation({ threshold: 0.1 });
  const ctaSection = useScrollAnimation({ threshold: 0.1 });

  const services = [
    {
      title: "House Moving",
      description: "Complete house relocation services with experienced professionals",
      icon: houseMovingIcon,
      link: "/quote",
    },
    {
      title: "Pallet Removals",
      description: "Efficient pallet transportation for businesses across London",
      icon: palletIcon,
      link: "/quote",
    },
    {
      title: "Skip Removals",
      description: "Fast and reliable skip waste removal services",
      icon: skipIcon,
      link: "/quote",
    },
    {
      title: "Man & Van",
      description: "Flexible man and van hire for all your moving needs",
      icon: manVanIcon,
      link: "/quote",
    },
  ];

  const features = [
    {
      icon: Zap,
      title: "Fast & Efficient",
      description: "Quick turnaround times without compromising quality",
    },
    {
      icon: DollarSign,
      title: "Affordable Pricing",
      description: "Competitive rates with transparent pricing",
    },
    {
      icon: Shield,
      title: "Trusted Service",
      description: "Fully insured and licensed professionals",
    },
    {
      icon: MapPin,
      title: "London-Wide",
      description: "Covering all areas across Greater London",
    },
  ];

  const testimonials = [
    {
      name: "Sarah Thompson",
      location: "Camden",
      rating: 5,
      text: "Excellent service! The team was professional and careful with all our belongings. Highly recommend.",
    },
    {
      name: "Michael Chen",
      location: "Shoreditch",
      rating: 5,
      text: "Used them for pallet removal. Fast, efficient, and great value for money. Will use again!",
    },
    {
      name: "Emma Wilson",
      location: "Wimbledon",
      rating: 5,
      text: "The man and van service was perfect for my needs. Friendly driver and very punctual.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/5 to-accent/5 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Reliable Vehicle Services in{" "}
                <span className="text-primary">London</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground">
                Professional house moving, pallet removals, skip removals, and man & van services across Greater London
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild variant="hero" size="lg" className="group hover:scale-105 transition-all duration-300">
                  <Link to="/quote">
                    Get a Quote
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="hover:scale-105 transition-all duration-300">
                  <Link to="/contact">Contact Us</Link>
                </Button>
              </div>
              <div className="flex items-center space-x-6 text-sm text-muted-foreground pt-4">
                <div className="flex items-center space-x-2 animate-fade-in" style={{ animationDelay: "0.2s", opacity: 0 }}>
                  <Clock className="h-5 w-5 text-accent" />
                  <span>24/7 Available</span>
                </div>
                <div className="flex items-center space-x-2 animate-fade-in" style={{ animationDelay: "0.4s", opacity: 0 }}>
                  <ThumbsUp className="h-5 w-5 text-accent" />
                  <span>500+ Happy Clients</span>
                </div>
              </div>
            </div>
            <div className="relative animate-fade-in-right" style={{ animationDelay: "0.3s", opacity: 0 }}>
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-accent/20 rounded-3xl blur-2xl animate-pulse"></div>
              <img
                src={heroVan}
                alt="London Vehicle Services Van"
                className="relative rounded-2xl shadow-2xl w-full h-auto hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-background" ref={servicesSection.ref}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-12 transition-all duration-700 ${
            servicesSection.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Professional vehicle services tailored to your needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className={`card-hover border-border group transition-all duration-500 ${
                  servicesSection.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <div className="w-full h-40 mb-4 rounded-lg overflow-hidden">
                    <img
                      src={service.icon}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Link
                    to={service.link}
                    className="inline-flex items-center text-primary hover:text-primary/80 transition-colors text-sm font-medium group"
                  >
                    Learn More <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-2 transition-transform" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-secondary/30" ref={featuresSection.ref}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-12 transition-all duration-700 ${
            featuresSection.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Us</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              What makes us London's trusted vehicle service provider
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className={`text-center space-y-4 transition-all duration-700 ${
                  featuresSection.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110 cursor-pointer">
                  <feature.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-background" ref={testimonialsSection.ref}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-12 transition-all duration-700 ${
            testimonialsSection.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Real feedback from satisfied customers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={index} 
                className={`border-border hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 ${
                  testimonialsSection.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <CardContent className="pt-6">
                  <div className="flex mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-5 h-5 text-accent fill-current animate-scale-in"
                        style={{ animationDelay: `${testimonialsSection.isVisible ? (index * 150 + i * 50) : 0}ms` }}
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4">"{testimonial.text}"</p>
                  <div className="border-t pt-4">
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
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
            Ready to Book Your Move?
          </h2>
          <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Get a free quote today and experience hassle-free vehicle services in London
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

export default HomePage;