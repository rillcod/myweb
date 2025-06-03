import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.style.overflow = !isMenuOpen ? 'hidden' : 'auto';
  };

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <HashLink to="/#" className="flex items-center space-x-2">
            <img 
              src="https://res.cloudinary.com/dpigtwit0/image/upload/v1747032682/PhotoRoom-20250512_074926_zgudyt.png"
              alt="Rillcod Academy"
              className="h-10 w-auto md:h-12"
            />
            <span className={`text-lg md:text-2xl font-bold ${isScrolled ? 'text-[#FF914D]' : 'text-white'}`}>
              RILLCOD ACADEMY
            </span>
          </HashLink>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <HashLink 
              to="/#about" 
              className={`font-medium text-base hover:text-[#FF914D] ${isScrolled ? 'text-gray-700' : 'text-white'}`}
            >
              About
            </HashLink>
            <HashLink 
              to="/#programs" 
              className={`font-medium text-base hover:text-[#FF914D] ${isScrolled ? 'text-gray-700' : 'text-white'}`}
            >
              Programs
            </HashLink>
            <HashLink 
              to="/#contact" 
              className={`font-medium text-base hover:text-[#FF914D] ${isScrolled ? 'text-gray-700' : 'text-white'}`}
            >
              Contact
            </HashLink>
            <HashLink 
              to="/school-registration#school-registration-top" 
              className="font-medium text-base px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors duration-300"
            >
              School Registration
            </HashLink>
            <HashLink 
              to="/student-registration#student-registration-top" 
              className="font-medium text-base px-4 py-2 bg-green-500 text-white rounded-full hover:bg-green-600 transition-colors duration-300"
            >
              Student Registration
            </HashLink>
          </nav>

          {/* Mobile menu button */}
          <button 
            className="md:hidden p-2"
            onClick={handleMenuClick}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className={`h-6 w-6 ${isScrolled ? 'text-gray-700' : 'text-white'}`} />
            ) : (
              <Menu className={`h-6 w-6 ${isScrolled ? 'text-gray-700' : 'text-white'}`} />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="fixed inset-0 top-[60px] bg-white z-40 md:hidden">
            <nav className="flex flex-col p-4 space-y-4">
              <HashLink 
                to="/#about" 
                className="text-gray-700 hover:text-[#FF914D] font-medium text-lg"
                onClick={handleMenuClick}
              >
                About
              </HashLink>
              <HashLink 
                to="/#programs" 
                className="text-gray-700 hover:text-[#FF914D] font-medium text-lg"
                onClick={handleMenuClick}
              >
                Programs
              </HashLink>
              <HashLink 
                to="/#contact" 
                className="text-gray-700 hover:text-[#FF914D] font-medium text-lg"
                onClick={handleMenuClick}
              >
                Contact
              </HashLink>
              <HashLink 
                to="/school-registration#school-registration-top" 
                className="font-medium text-lg px-4 py-3 bg-blue-500 text-white rounded-full hover:bg-blue-600 text-center" 
                onClick={handleMenuClick}
              >
                School Registration
              </HashLink>
              <HashLink 
                to="/student-registration#student-registration-top" 
                className="font-medium text-lg px-4 py-3 bg-green-500 text-white rounded-full hover:bg-green-600 text-center" 
                onClick={handleMenuClick}
              >
                Student Registration
              </HashLink>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;