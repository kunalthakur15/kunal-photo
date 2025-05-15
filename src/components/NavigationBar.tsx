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
    <nav className="bg-white/90 backdrop-blur-sm py-2 sm:py-4 sticky top-0 z-30 shadow-sm">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="font-allura text-3xl sm:text-4xl font-bold text-gray-800">
              Photo Journal
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className={`font-allura text-xl ${isActive("/")} hover:text-black transition-colors duration-200`}>
              Galleries
            </Link>
            <Link to="/about" className={`font-allura text-xl ${isActive("/about")} hover:text-black transition-colors duration-200`}>
              About Me
            </Link>
            <Link to="/contact" className={`font-allura text-xl ${isActive("/contact")} hover:text-black transition-colors duration-200`}>
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-gray-900 focus:outline-none p-1"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              <Menu size={24} />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-2 scale-in">
            <div className="flex flex-col space-y-2 py-2 bg-white/95 rounded-md shadow-lg">
              <Link 
                to="/" 
                className={`font-allura text-xl text-center py-2 ${isActive("/")} hover:text-black transition-colors duration-200`}
                onClick={() => setIsMenuOpen(false)}
              >
                Galleries
              </Link>
              <Link 
                to="/about" 
                className={`font-allura text-xl text-center py-2 ${isActive("/about")} hover:text-black transition-colors duration-200`}
                onClick={() => setIsMenuOpen(false)}
              >
                About Me
              </Link>
              <Link 
                to="/contact" 
                className={`font-allura text-xl text-center py-2 ${isActive("/contact")} hover:text-black transition-colors duration-200`}
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
