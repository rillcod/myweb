import React from 'react';
import { HashLink } from 'react-router-hash-link';
import { Code, Facebook, Instagram, Twitter, Mail, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="text-2xl font-bold flex items-center mb-6">
              <Code className="h-8 w-8 text-[#FF914D] mr-2" />
              <span className="text-white">RILLCOD ACADEMY</span>
            </div>
            <p className="text-gray-300 mb-6">
              A subsidiary of Rillcod Technologies, dedicated to transforming education through technology and creative learning.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://facebook.com/rillcodacademy" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-[#FF914D] transition-all duration-300 transform hover:scale-110"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="https://instagram.com/rillcodacademy" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-[#FF914D] transition-all duration-300 transform hover:scale-110"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="https://twitter.com/rillcodacademy" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-[#FF914D] transition-all duration-300 transform hover:scale-110"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <HashLink 
                  smooth 
                  to="/#about" 
                  className="text-gray-300 hover:text-white transition-colors duration-300"
                >
                  About Us
                </HashLink>
              </li>
              <li>
                <HashLink 
                  smooth 
                  to="/#programs" 
                  className="text-gray-300 hover:text-white transition-colors duration-300"
                >
                  Programs
                </HashLink>
              </li>
              <li>
                <HashLink 
                  smooth 
                  to="/#benefits" 
                  className="text-gray-300 hover:text-white transition-colors duration-300"
                >
                  Benefits
                </HashLink>
              </li>
              <li>
                <HashLink 
                  smooth 
                  to="/#contact" 
                  className="text-gray-300 hover:text-white transition-colors duration-300"
                >
                  Contact
                </HashLink>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-6">Registration</h3>
            <ul className="space-y-3">
              <li>
                <HashLink 
                  smooth 
                  to="/school-registration#school-registration-top" 
                  className="text-gray-300 hover:text-white transition-colors duration-300"
                >
                  School Registration
                </HashLink>
              </li>
              <li>
                <HashLink 
                  smooth 
                  to="/student-registration#student-registration-top" 
                  className="text-gray-300 hover:text-white transition-colors duration-300"
                >
                  Student Registration
                </HashLink>
              </li>
              <li>
                <HashLink 
                  smooth 
                  to="/faq" 
                  className="text-gray-300 hover:text-white transition-colors duration-300"
                >
                  FAQ
                </HashLink>
              </li>
              <li>
                <HashLink 
                  smooth 
                  to="/privacy-policy" 
                  className="text-gray-300 hover:text-white transition-colors duration-300"
                >
                  Privacy Policy
                </HashLink>
              </li>
              <li>
                <HashLink 
                  smooth 
                  to="/terms" 
                  className="text-gray-300 hover:text-white transition-colors duration-300"
                >
                  Terms & Conditions
                </HashLink>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Mail className="w-5 h-5 text-[#FF914D] mr-3 mt-1 flex-shrink-0" />
                <div>
                  <a href="mailto:info@rillcod.tech" className="text-gray-300 hover:text-white">info@rillcod.tech</a>
                  <br />
                  <a href="mailto:rillcod@gmail.com" className="text-gray-300 hover:text-white">rillcod@gmail.com</a>
                </div>
              </li>
              <li className="flex items-start">
                <Phone className="w-5 h-5 text-[#FF914D] mr-3 mt-1 flex-shrink-0" />
                <div>
                  <a href="tel:+2348116600091" className="text-gray-300 hover:text-white">08116600091</a>
                  <br />
                  <a href="tel:+2347036402679" className="text-gray-300 hover:text-white">07036402679</a>
                </div>
              </li>
              <li>
                <a 
                  href="https://wa.me/2348116600091"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-all duration-300 transform hover:scale-105"
                >
                  <span className="mr-2">💬</span> WhatsApp Us
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-8 mt-8 text-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} Rillcod Academy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;