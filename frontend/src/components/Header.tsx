import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Menu, X,} from "lucide-react";
import Logo from "../assets/Etransport.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Scroll handler for Services
  const handleScrollToServices = () => {
    navigate("/"); // go to homepage

    setTimeout(() => {
      const section = document.getElementById("services");
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }, 200);
  };

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "services" },
    { name: "Quote", path: "/quote" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 animate-fade-in">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <img 
              src={Logo} 
              alt="Easy Transports" 
              className="h-20 w-20 group-hover:scale-110 transition-transform duration-300 object-contain"
            />
            
            <span className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
              Easy Transports
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) =>
              link.path === "services" ? (
                <button
                  key={link.name}
                  onClick={handleScrollToServices}
                  className="text-sm font-medium text-muted-foreground hover:text-primary transition-all duration-300 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
                >
                  {link.name}
                </button>
              ) : (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-sm font-medium text-muted-foreground hover:text-primary transition-all duration-300 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
                >
                  {link.name}
                </Link>
              )
            )}
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden md:flex">
            <Button asChild variant="hero" size="lg">
              <Link to="/quote">Get a Quote</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-3 border-t">
            {navLinks.map((link) =>
              link.path === "services" ? (
                <button
                  key={link.name}
                  onClick={() => {
                    setIsMenuOpen(false);
                    handleScrollToServices();
                  }}
                  className="block py-2 text-sm font-medium text-muted-foreground hover:text-primary"
                >
                  {link.name}
                </button>
              ) : (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className="block py-2 text-sm font-medium text-muted-foreground hover:text-primary"
                >
                  {link.name}
                </Link>
              )
            )}

            <Button asChild variant="hero" size="lg" className="w-full">
              <Link to="/quote" onClick={() => setIsMenuOpen(false)}>
                Get a Quote
              </Link>
            </Button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;