import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Instagram, Facebook } from "lucide-react";
import logo from "@/assets/logo.webp";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <img src={logo} alt="Kalpavya Ayurveda" className="h-10 w-auto brightness-0 invert" />
              {/* <div className="flex flex-col">
                <span className="font-display text-xl font-semibold tracking-wide">
                  Kalpavya
                </span>
                <span className="text-[10px] tracking-[0.2em] uppercase opacity-80 -mt-1">
                  Ayurveda
                </span>
              </div> */}
            </Link>
            <p className="font-sans text-sm opacity-80 leading-relaxed">
              Bringing ancient Ayurvedic wisdom to modern wellness seekers through authentic,
              time-tested herbal formulations.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2 font-sans text-sm">
              <li>
                <Link to="/" className="opacity-80 hover:opacity-100 transition-opacity">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/products" className="opacity-80 hover:opacity-100 transition-opacity">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/about" className="opacity-80 hover:opacity-100 transition-opacity">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="opacity-80 hover:opacity-100 transition-opacity">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-display text-lg mb-4">Categories</h4>
            <ul className="space-y-2 font-sans text-sm">
              <li className="opacity-80">Immunity</li>
              <li className="opacity-80">Digestive Health</li>
              <li className="opacity-80">Mind & Memory</li>
              <li className="opacity-80">Women's Health</li>
              <li className="opacity-80">Joint Health</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-lg mb-4">Contact Us</h4>
            <ul className="space-y-3 font-sans text-sm">
              <li className="flex items-center gap-3 opacity-80">
                <MapPin className="h-4 w-4 flex-shrink-0" />
                <span>123 Wellness Lane, Rishikesh, Uttarakhand 249201</span>
              </li>
              <li className="flex items-center gap-3 opacity-80">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <span>+91-9211895324</span>
              </li>
              <li className="flex items-center gap-3 opacity-80">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <span>support@kalpavyaayurveda.com</span></li>
              <li className="flex items-center gap-4 mt-2">
                <a
                  href="https://www.instagram.com/kalpavyaayurveda/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="opacity-80 hover:opacity-100 transition-opacity"
                  aria-label="Instagram"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a
                  href="https://www.facebook.com/profile.php?id=61585310939756"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="opacity-80 hover:opacity-100 transition-opacity"
                  aria-label="Facebook"
                >
                  <Facebook className="h-5 w-5" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-12 pt-8 text-center">
          <p className="font-sans text-sm opacity-60">
            © {new Date().getFullYear()} Kalpavya Ayurveda. All rights reserved. |
            Built by the folks at <a href="https://returnzero.space" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">returnzero.space</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;