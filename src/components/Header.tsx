import React, { useState, useEffect } from 'react';
import { Menu, X, Code } from 'lucide-react';
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
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/90 backdrop-blur-sm shadow-lg py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <HashLink 
            to="/#" 
            className="flex items-center space-x-2 group"
          >
            <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
              isScrolled ? 'bg-orange-100' : 'bg-white/20'
            }`}>
              <Code className={`w-6 h-6 transition-all duration-300 transform group-hover:rotate-12 ${
                isScrolled ? 'text-[#FF914D]' : 'text-white'
              }`} />
            </div>
            <span className={`text-xl md:text-2xl font-bold transition-all duration-300 ${
              isScrolled ? 'text-[#FF914D]' : 'text-white'
            }`}>
              RILLCOD ACADEMY
            </span>
          </HashLink>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {[
              { to: '/#about', label: 'About' },
              { to: '/#programs', label: 'Programs' },
              { to: '/#contact', label: 'Contact' }
            ].map((item) => (
              <HashLink 
                key={item.label}
                to={item.to} 
                className={`font-medium text-base transition-all duration-300 hover:scale-105 ${
                  isScrolled 
                    ? 'text-gray-700 hover:text-[#FF914D]' 
                    : 'text-white/90 hover:text-white'
                }`}
              >
                {item.label}
              </HashLink>
            ))}
            
            <div className="flex items-center space-x-4">
              <HashLink 
                to="/school-registration#school-registration-top" 
                className={`font-medium text-base px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg ${
                  isScrolled
                    ? 'bg-blue-500 text-white hover:bg-blue-600'
                    : 'bg-blue-500/90 text-white hover:bg-blue-500'
                }`}
              >
                School Registration
              </HashLink>
              
              <HashLink 
                to="/student-registration#student-registration-top" 
                className={`font-medium text-base px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg ${
                  isScrolled
                    ? 'bg-green-500 text-white hover:bg-green-600'
                    : 'bg-green-500/90 text-white hover:bg-green-500'
                }`}
              >
                Student Registration
              </HashLink>
            </div>
          </nav>

          {/* Mobile menu button */}
          <button 
            className="md:hidden p-2 rounded-lg transition-all duration-300 hover:bg-white/10"
            onClick={handleMenuClick}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className={`h-6 w-6 transition-all duration-300 ${isScrolled ? 'text-gray-700' : 'text-white'}`} />
            ) : (
              <Menu className={`h-6 w-6 transition-all duration-300 ${isScrolled ? 'text-gray-700' : 'text-white'}`} />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="fixed inset-0 top-[60px] bg-white/95 backdrop-blur-sm z-40 md:hidden animate-fade-in">
            <nav className="flex flex-col p-6 space-y-6">
              {[
                { to: '/#about', label: 'About' },
                { to: '/#programs', label: 'Programs' },
                { to: '/#contact', label: 'Contact' }
              ].map((item, index) => (
                <HashLink 
                  key={item.label}
                  to={item.to} 
                  className="text-gray-700 hover:text-[#FF914D] font-medium text-lg transition-all duration-300 transform hover:translate-x-2"
                  onClick={handleMenuClick}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {item.label}
                </HashLink>
              ))}
              
              <HashLink 
                to="/school-registration#school-registration-top" 
                className="font-medium text-lg px-6 py-4 bg-blue-500 text-white rounded-full hover:bg-blue-600 text-center transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                onClick={handleMenuClick}
              >
                School Registration
              </HashLink>
              
              <HashLink 
                to="/student-registration#student-registration-top" 
                className="font-medium text-lg px-6 py-4 bg-green-500 text-white rounded-full hover:bg-green-600 text-center transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                onClick={handleMenuClick}
              >
                Student Registration
              </HashLink>
            </nav>
          </div>
        )}
      </div>

      <style jsx>{`
        .animate-fade-in {
          animation: fadeIn 0.3s ease-out forwards;
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>
    </header>
  );
};

export default Header;