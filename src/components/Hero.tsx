import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Cpu, School, Users } from 'lucide-react';

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const createFloatingElement = () => {
      if (!containerRef.current) return;
      
      const element = document.createElement('div');
      element.className = 'absolute w-4 h-4 bg-white rounded-full opacity-50';
      
      // Random starting position
      element.style.left = `${Math.random() * 100}%`;
      element.style.top = `${Math.random() * 100}%`;
      
      // Random animation duration between 10-20s
      const duration = 10 + Math.random() * 10;
      element.style.animation = `float ${duration}s linear infinite`;
      
      containerRef.current.appendChild(element);
      
      // Remove element after animation
      setTimeout(() => element.remove(), duration * 1000);
    };

    // Create new elements periodically
    const interval = setInterval(createFloatingElement, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#FF914D] via-blue-400 to-indigo-600 z-0"></div>
      
      <div ref={containerRef} className="absolute inset-0 z-1 overflow-hidden">
        {/* Animation elements will be added dynamically */}
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="w-full md:w-1/2 mb-12 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4 leading-tight animate-fade-in">
              Inspiring Young Minds Through Technology
            </h1>
            
            <p className="text-xl md:text-2xl text-white opacity-90 mb-8 animate-slide-up">
              Where Learning Meets Fun! Start your coding adventure today.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Link
                to="/school-registration"
                className="inline-flex items-center justify-center px-6 py-4 bg-blue-500 text-white text-xl font-bold rounded-full shadow-lg hover:bg-blue-600 transform transition-all duration-300 hover:scale-105 hover:shadow-xl animate-bounce-in"
              >
                <School className="w-6 h-6 mr-2" />
                Register My School
              </Link>
              
              <Link
                to="/student-registration"
                className="inline-flex items-center justify-center px-6 py-4 bg-green-500 text-white text-xl font-bold rounded-full shadow-lg hover:bg-green-600 transform transition-all duration-300 hover:scale-105 hover:shadow-xl animate-bounce-in"
              >
                <Users className="w-6 h-6 mr-2" />
                Enroll Now
              </Link>
            </div>
            
            <div className="bg-white bg-opacity-20 backdrop-filter backdrop-blur-sm rounded-2xl p-4 border border-white border-opacity-40">
              <div className="flex items-center mb-2">
                <Cpu className="w-6 h-6 text-yellow-300 mr-2" />
                <p className="text-white font-bold">Learning Progress:</p>
              </div>
              <div className="w-full bg-white bg-opacity-30 rounded-full h-6 overflow-hidden">
                <div 
                  className="bg-gradient-to-r from-yellow-300 via-green-400 to-blue-500 h-full rounded-full animate-progress"
                  style={{ width: '100%' }}
                ></div>
              </div>
              <p className="text-right text-white font-bold mt-1">100%</p>
            </div>
          </div>
          
          <div className="w-full md:w-1/2 flex justify-center md:justify-end relative">
            <div className="relative w-full max-w-md">
              <div className="absolute top-[-60px] right-[20px] bg-white rounded-2xl px-4 py-2 shadow-lg transform rotate-[-5deg] z-10 animate-float">
                <p className="text-xl font-bold text-[#FF914D]">I Love Coding!</p>
              </div>
              <img 
                src="https://images.pexels.com/photos/8535230/pexels-photo-8535230.jpeg"
                alt="African Child Learning STEM"
                className="w-full h-auto rounded-lg shadow-2xl transform hover:scale-105 transition-transform duration-300 animate-fade-in"
              />
            </div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        
        @keyframes progress {
          0% {
            width: 0%;
          }
          100% {
            width: 100%;
          }
        }
        
        .animate-progress {
          animation: progress 2s ease-out forwards;
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .animate-fade-in {
          animation: fadeIn 1s ease-out forwards;
        }
        
        .animate-slide-up {
          animation: slideUp 1s ease-out forwards;
        }
        
        .animate-bounce-in {
          animation: bounceIn 1s cubic-bezier(0.36, 0, 0.66, -0.56) forwards;
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        
        @keyframes slideUp {
          from {
            transform: translateY(20px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        
        @keyframes bounceIn {
          0% {
            transform: scale(0.3);
            opacity: 0;
          }
          50% {
            transform: scale(1.05);
            opacity: 0.8;
          }
          70% {
            transform: scale(0.9);
            opacity: 0.9;
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;