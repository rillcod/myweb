import React from 'react';
import { HashLink } from 'react-router-hash-link';
import { Monitor, Cat, Globe, Palette, Bot, Rocket } from 'lucide-react';

const Programs: React.FC = () => {
  const programs = [
    {
      id: 'jss3-tech-academy',
      icon: <Rocket className="w-12 h-12 text-indigo-600" />,
      title: "JSS3 Tech Academy",
      description: "Special 12-week intensive program for JSS3 graduates. Launch your tech journey with hands-on training in programming, digital skills, and career preparation.",
      color: "from-indigo-400 to-indigo-600",
      animation: "animate-float",
      featured: true
    },
    {
      id: 'ict-fundamentals',
      icon: <Monitor className="w-12 h-12 text-blue-600" />,
      title: "ICT Fundamentals",
      description: "Learn to be a Computer Wizard! Discover how computers work and do amazing things with them.",
      color: "from-blue-400 to-blue-600",
      animation: "animate-float"
    },
    // ... (rest of the existing programs)
  ];

  return (
    <section id="programs" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Fun Programs</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Exciting tech adventures waiting for your child!
          </p>
          <div className="w-20 h-2 bg-[#FF914D] mx-auto rounded-full mt-4"></div>
        </div>

        {/* Featured Program */}
        <div className="mb-12">
          {programs.filter(p => p.featured).map((program) => (
            <div 
              key={program.id}
              className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl shadow-xl overflow-hidden transform hover:scale-105 transition-all duration-300"
            >
              <div className="p-8 text-white">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mr-6">
                    {program.icon}
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold mb-2">{program.title}</h3>
                    <p className="text-lg opacity-90">Registration Now Open!</p>
                  </div>
                </div>
                <p className="text-xl mb-6">{program.description}</p>
                <div className="flex flex-wrap gap-4">
                  <HashLink 
                    to="/student-registration#student-registration-top" 
                    className="inline-flex items-center justify-center px-6 py-3 bg-white text-indigo-600 rounded-full hover:bg-opacity-90 transform transition-all duration-300 hover:scale-105 font-bold text-lg"
                  >
                    Enroll Now
                  </HashLink>
                  <HashLink 
                    to={`/programs/${program.id}#program-details-top`}
                    className="inline-flex items-center justify-center px-6 py-3 bg-indigo-700 text-white rounded-full hover:bg-indigo-800 transform transition-all duration-300 hover:scale-105 font-bold text-lg"
                  >
                    Learn More
                  </HashLink>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Regular Programs Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.filter(p => !p.featured).map((program) => (
            <div 
              key={program.id}
              className={`bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl ${program.animation}`}
            >
              <div className={`bg-gradient-to-r ${program.color} p-6 flex items-center justify-center h-32`}>
                <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                  {program.icon}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-3">{program.title}</h3>
                <p className="text-gray-600 mb-6">{program.description}</p>
                
                <div className="flex flex-col sm:flex-row gap-3">
                  <HashLink 
                    to="/student-registration#student-registration-top" 
                    className="inline-flex items-center justify-center px-6 py-3 bg-[#FF914D] text-white rounded-full hover:bg-[#e67e3d] transform transition-all duration-300 hover:scale-105 hover:shadow-lg font-bold"
                  >
                    Enroll Now
                  </HashLink>
                  <HashLink 
                    to={`/programs/${program.id}#program-details-top`}
                    className="inline-flex items-center justify-center px-6 py-3 bg-gray-600 text-white rounded-full hover:bg-gray-700 transform transition-all duration-300 hover:scale-105 hover:shadow-lg font-bold"
                  >
                    Learn More
                  </HashLink>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
      `}</style>
    </section>
  );
};

export default Programs;