import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.webp";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/products", label: "All Products" },
    { path: "/products?category=Combos", label: "Combos" },
    { path: "/products?category=Kidney%20Care", label: "Kidney Care" },
    { path: "/products?category=Digestive", label: "Digestion" },
    { path: "/about", label: "About Us" },
    { path: "/contact", label: "Contact" },
  ];

  const isActive = (path: string) => {
    if (path.includes('?')) {
      return location.pathname + location.search === path;
    }
    return location.pathname === path && location.search === '';
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] bg-white shadow-md border-b border-gray-200 h-20">
      <div className="container mx-auto px-4 h-full">
        <div className="flex items-center h-full">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 mr-8">
            <img src={logo} alt="Kalpavya" className="h-12 w-auto" />
            <span className="font-display text-xl font-bold text-black tracking-wide hidden sm:block">
              Kalpavya
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-primary ${isActive(link.path) ? "text-primary font-bold" : "text-black"
                  }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block ml-auto">
            <Button asChild className="bg-primary hover:bg-primary/90 text-white">
              <Link to="/contact">Inquire Now</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden ml-auto p-2 text-black"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation Dropdown */}
        {isOpen && (
          <div className="md:hidden absolute top-20 left-0 right-0 bg-white border-b border-gray-200 shadow-lg p-4 flex flex-col gap-4 animate-in slide-in-from-top-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`px-4 py-2 text-lg font-medium rounded-md hover:bg-gray-50 ${isActive(link.path) ? "text-primary bg-primary/5" : "text-black"
                  }`}
              >
                {link.label}
              </Link>
            ))}
            <Button asChild className="w-full bg-primary text-white mt-2">
              <Link to="/contact" onClick={() => setIsOpen(false)}>Inquire Now</Link>
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;