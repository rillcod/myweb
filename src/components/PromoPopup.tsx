import React, { useState, useEffect } from 'react';
import { X, Rocket, CheckCircle } from 'lucide-react';
import { HashLink } from 'react-router-hash-link';

const PromoPopup: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      const hasSeenPopup = localStorage.getItem('hasSeenJSS3Promo');
      if (!hasSeenPopup) {
        setIsOpen(true);
      }
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    localStorage.setItem('hasSeenJSS3Promo', 'true');
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4 animate-fade-in">
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={handleClose}></div>
      
      <div className="relative bg-white rounded-2xl shadow-2xl p-8 max-w-lg w-full animate-scale">
        <button 
          onClick={handleClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-colors"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="text-center mb-6">
          <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce-slow">
            <Rocket className="w-8 h-8 text-indigo-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Special Program Alert! 🚀</h2>
          <p className="text-indigo-600 font-semibold">For JSS3 Graduates</p>
        </div>

        <div className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white p-6 rounded-xl mb-6">
          <h3 className="text-xl font-bold mb-4">12-Week Tech Academy</h3>
          <ul className="space-y-3">
            {[
              'Digital Skills Mastery',
              'Programming Fundamentals',
              'Career Development',
              'Hands-on Projects'
            ].map((item, index) => (
              <li key={index} className="flex items-center">
                <CheckCircle className="w-5 h-5 mr-2 flex-shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="text-center">
          <p className="text-gray-600 mb-6">
            Limited spots available! Secure your child's tech future today.
          </p>
          <div className="space-y-3">
            <HashLink 
              to="/student-registration#student-registration-top"
              onClick={handleClose}
              className="block w-full px-6 py-3 bg-indigo-600 text-white font-bold rounded-full hover:bg-indigo-700 transform transition-all duration-300 hover:scale-105"
            >
              Register Now
            </HashLink>
            <HashLink
              to="/programs/jss3-tech-academy#program-details-top"
              onClick={handleClose}
              className="block w-full px-6 py-3 bg-gray-100 text-gray-700 font-bold rounded-full hover:bg-gray-200 transform transition-all duration-300 hover:scale-105"
            >
              Learn More
            </HashLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromoPopup;