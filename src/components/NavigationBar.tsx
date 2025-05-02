
import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { Menu } from "lucide-react";

const NavigationBar: React.FC = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const isActive = (path: string) => {
    return location.pathname === path ? "text-black font-bold" : "text-gray-600";
  };

  return (
    <nav className="bg-white/90 backdrop-blur-sm py-4 sticky top-0 z-30 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="font-playfair text-2xl font-bold text-gray-800">
              Photo Journal
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className={`font-playfair ${isActive("/")} hover:text-black transition-colors duration-200`}>
              Home
            </Link>
            <Link to="/about" className={`font-playfair ${isActive("/about")} hover:text-black transition-colors duration-200`}>
              About Me
            </Link>
            <Link to="/#galleries" className="font-playfair text-gray-600 hover:text-black transition-colors duration-200">
              Galleries
            </Link>
            <Link to="/contact" className={`font-playfair ${isActive("/contact")} hover:text-black transition-colors duration-200`}>
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-gray-900 focus:outline-none"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 scale-in">
            <div className="flex flex-col space-y-4 py-3">
              <Link 
                to="/" 
                className={`font-playfair text-center py-2 ${isActive("/")} hover:text-black transition-colors duration-200`}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/about" 
                className={`font-playfair text-center py-2 ${isActive("/about")} hover:text-black transition-colors duration-200`}
                onClick={() => setIsMenuOpen(false)}
              >
                About Me
              </Link>
              <Link 
                to="/#galleries" 
                className="font-playfair text-center py-2 text-gray-600 hover:text-black transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Galleries
              </Link>
              <Link 
                to="/contact" 
                className={`font-playfair text-center py-2 ${isActive("/contact")} hover:text-black transition-colors duration-200`}
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavigationBar;
