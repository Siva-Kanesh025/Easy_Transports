import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram } from "lucide-react";
import Logo from "../assets/Etransport.png";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background animate-fade-in">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo + Trustpilot + Description */}
          <div className="space-y-4">

            {/* Logo */}
            <div className="flex items-center space-x-2 group cursor-pointer">
              <img
                src={Logo}
                alt="Easy Transporter"
                className="h-20 w-auto object-contain group-hover:scale-110 transition-transform duration-300"
              />
              <span className="text-lg font-bold">Easy Transports</span>
            </div>

            {/* Trustpilot Widget */}
            <div className="mt-1">
              <div
                className="trustpilot-widget"
                data-locale="en-US"
                data-template-id="56278e9abfbbba0bdcd568bc"
                data-businessunit-id="6925862152ba9172aced553b"
                data-style-height="52px"
                data-style-width="100%"
                data-token="529e9470-e464-4ae1-a345-d9207bd110d2"
              >
                <a
                  href="https://www.trustpilot.com/review/easytransports.co.uk"
                  target="_blank"
                  rel="noopener"
                >
                  Trustpilot
                </a>
              </div>
            </div>

            {/* Description */}
            <p className="text-sm text-background/80">
              Reliable vehicle services across London. House moving, pallet removals, skip removals, and man & van services.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm text-background/80 hover:text-background transition-all duration-300 hover:translate-x-1 inline-block">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/quote" className="text-sm text-background/80 hover:text-background transition-all duration-300 hover:translate-x-1 inline-block">
                  Get a Quote
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm text-background/80 hover:text-background transition-all duration-300 hover:translate-x-1 inline-block">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-background/80 hover:text-background transition-all duration-300 hover:translate-x-1 inline-block">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          {/*<div>
            <h3 className="font-semibold text-lg mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li className="text-sm text-background/80">House Moving</li>
              <li className="text-sm text-background/80">Pallet Removals</li>
              <li className="text-sm text-background/80">Skip Removals</li>
              <li className="text-sm text-background/80">Man & Van</li>
            </ul>
          </div>*/}

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2 text-sm text-background/80">
                <Phone className="h-4 w-4" />
                <span>07577574435</span>
              </li>
              <li className="flex items-center space-x-2 text-sm text-background/80">
                <Mail className="h-4 w-4" />
                <span>info@easytransports.co.uk</span>
              </li>
              <li className="flex items-center space-x-2 text-sm text-background/80">
                <MapPin className="h-4 w-4" />
                <span>London, UK</span>
              </li>
            </ul>
            
            {/* Social Links */}
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-background/80 hover:text-background transition-all duration-300 hover:scale-125 inline-block">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-background/80 hover:text-background transition-all duration-300 hover:scale-125 inline-block">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-background/80 hover:text-background transition-all duration-300 hover:scale-125 inline-block">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/20 mt-8 pt-8 text-center">
          <p className="text-sm text-background/80">
            © {new Date().getFullYear()} Global Tamil Technologies Limited. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;