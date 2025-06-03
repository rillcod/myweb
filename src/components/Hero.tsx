import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { Cpu, School, Users } from 'lucide-react';

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#FF914D] via-blue-400 to-indigo-600 z-0"></div>
      
      <div ref={containerRef} className="absolute inset-0 z-1 overflow-hidden">
        {/* Animation elements will be added dynamically */}
      </div>
      
      {/* Student with Computer */}
      <div className="absolute bottom-0 right-0 lg:right-20 w-1/3 max-w-xs md:max-w-sm lg:max-w-md h-auto z-2">
        <div className="relative w-full h-full">
          <div className="absolute top-[-60px] right-[20px] bg-white rounded-2xl px-4 py-2 shadow-lg transform rotate-[-5deg] z-10">
            <p className="text-xl font-bold text-[#FF914D]">I Love Coding!</p>
          </div>
          <img 
            src="https://images.pexels.com/photos/4963436/pexels-photo-4963436.jpeg"
            alt="Happy Child Learning to Code"
            className="w-full h-auto rounded-lg shadow-2xl"
          />
        </div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4 leading-tight">
            Inspiring Young Minds Through Technology
          </h1>
          
          <p className="text-xl md:text-2xl text-white opacity-90 mb-8">
            Where Learning Meets Fun! Start your coding adventure today.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <Link
              to="/school-registration"
              className="inline-flex items-center justify-center px-6 py-4 bg-blue-500 text-white text-xl font-bold rounded-full shadow-lg hover:bg-blue-600 transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              <School className="w-6 h-6 mr-2" />
              Register My School
            </Link>
            
            <Link
              to="/student-registration"
              className="inline-flex items-center justify-center px-6 py-4 bg-green-500 text-white text-xl font-bold rounded-full shadow-lg hover:bg-green-600 transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
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
                className="bg-gradient-to-r from-yellow-300 via-green-400 to-blue-500 h-full rounded-full"
                style={{ width: '100%', animation: 'pulse 2s infinite' }}
              ></div>
            </div>
            <p className="text-right text-white font-bold mt-1">100%</p>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(0.98);
            opacity: 0.8;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;