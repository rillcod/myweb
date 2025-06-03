import React from 'react';
import { HashLink } from 'react-router-hash-link';
import { Monitor, Cat, Globe, Palette, Bot } from 'lucide-react';

const Programs: React.FC = () => {
  const programs = [
    {
      id: 'ict-fundamentals',
      icon: <Monitor className="w-12 h-12 text-blue-600" />,
      title: "ICT Fundamentals",
      description: "Learn to be a Computer Wizard! Discover how computers work and do amazing things with them.",
      color: "from-blue-400 to-blue-600",
      animation: "animate-float"
    },
    {
      id: 'scratch-programming',
      icon: <Cat className="w-12 h-12 text-orange-600" />,
      title: "Scratch Programming",
      description: "Create Your Own Cartoons and Games! Make fun animations and games with colorful blocks.",
      color: "from-orange-400 to-orange-600",
      animation: "animate-bounce"
    },
    {
      id: 'web-development',
      icon: <Globe className="w-12 h-12 text-purple-600" />,
      title: "HTML/CSS Programming",
      description: "Build Your Own Websites! Create colorful web pages that everyone can see online.",
      color: "from-purple-400 to-purple-600",
      animation: "animate-spin-slow"
    },
    {
      id: 'python-programming',
      icon: <span className="text-3xl">🐍</span>,
      title: "Python Programming",
      description: "Code with the Friendly Python Snake! Learn the coding language that powers YouTube and Instagram.",
      color: "from-green-400 to-green-600",
      animation: "animate-slide"
    },
    {
      id: 'web-design',
      icon: <Palette className="w-12 h-12 text-pink-600" />,
      title: "Web Design",
      description: "Make Beautiful Web Pages! Design amazing websites that look awesome on phones and computers.",
      color: "from-pink-400 to-pink-600",
      animation: "animate-pulse"
    },
    {
      id: 'robotics',
      icon: <Bot className="w-12 h-12 text-cyan-600" />,
      title: "Robotics Programming",
      description: "Build and Control Cool Robots! Create robots that can move, light up, and follow your commands.",
      color: "from-cyan-400 to-cyan-600",
      animation: "animate-shake"
    }
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
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program) => (
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
        
        .animate-spin-slow {
          animation: spin 8s linear infinite;
        }
        
        .animate-slide {
          animation: slide 3s ease-in-out infinite;
        }
        
        .animate-shake {
          animation: shake 3s ease-in-out infinite;
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes slide {
          0% { transform: translateX(0); }
          50% { transform: translateX(10px); }
          100% { transform: translateX(0); }
        }
        
        @keyframes shake {
          0%, 100% { transform: rotate(0deg); }
          25% { transform: rotate(5deg); }
          75% { transform: rotate(-5deg); }
        }
      `}</style>
    </section>
  );
};

export default Programs;