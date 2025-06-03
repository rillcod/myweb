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
      color: "from-blue-400 to-blue-600"
    },
    {
      id: 'scratch-programming',
      icon: <Cat className="w-12 h-12 text-orange-600" />,
      title: "Scratch Programming",
      description: "Create Your Own Cartoons and Games! Make fun animations and games with colorful blocks.",
      color: "from-orange-400 to-orange-600"
    },
    {
      id: 'web-development',
      icon: <Globe className="w-12 h-12 text-purple-600" />,
      title: "HTML/CSS Programming",
      description: "Build Your Own Websites! Create colorful web pages that everyone can see online.",
      color: "from-purple-400 to-purple-600"
    },
    {
      id: 'python-programming',
      icon: <span className="text-3xl">🐍</span>,
      title: "Python Programming",
      description: "Code with the Friendly Python Snake! Learn the coding language that powers YouTube and Instagram.",
      color: "from-green-400 to-green-600"
    },
    {
      id: 'web-design',
      icon: <Palette className="w-12 h-12 text-pink-600" />,
      title: "Web Design",
      description: "Make Beautiful Web Pages! Design amazing websites that look awesome on phones and computers.",
      color: "from-pink-400 to-pink-600"
    },
    {
      id: 'robotics',
      icon: <Bot className="w-12 h-12 text-cyan-600" />,
      title: "Robotics Programming",
      description: "Build and Control Cool Robots! Create robots that can move, light up, and follow your commands.",
      color: "from-cyan-400 to-cyan-600"
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
              className="bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              <div className={`bg-gradient-to-r ${program.color} p-6 flex items-center justify-center h-32`}>
                <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                  {program.icon}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-3">{program.title}</h3>
                <p className="text-gray-600">{program.description}</p>
                
                <div className="mt-6 flex justify-between items-center">
                  <HashLink 
                    to="/student-registration#student-registration-top" 
                    className="inline-flex items-center justify-center px-4 py-2 bg-[#FF914D] text-white rounded-full hover:bg-[#e67e3d] transition-colors"
                  >
                    Enroll Now
                  </HashLink>
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 24 24">
                        <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;