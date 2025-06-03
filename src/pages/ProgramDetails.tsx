import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { ArrowLeft, CheckCircle, Book, Target, Clock, Users } from 'lucide-react';
import { programs } from '../data/programs';

const ProgramDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const program = programs.find(p => p.id === id);

  if (!program) {
    return (
      <div className="min-h-screen bg-gray-50 pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Program Not Found</h1>
            <Link to="/#programs" className="text-blue-600 hover:text-blue-700">
              Return to Programs
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const IconComponent = program.icon;
  const colorClasses = {
    blue: { bg: 'bg-blue-100', text: 'text-blue-600', hover: 'hover:bg-blue-700', button: 'bg-blue-600' },
    orange: { bg: 'bg-orange-100', text: 'text-orange-600', hover: 'hover:bg-orange-700', button: 'bg-orange-600' },
    purple: { bg: 'bg-purple-100', text: 'text-purple-600', hover: 'hover:bg-purple-700', button: 'bg-purple-600' },
    green: { bg: 'bg-green-100', text: 'text-green-600', hover: 'hover:bg-green-700', button: 'bg-green-600' },
    pink: { bg: 'bg-pink-100', text: 'text-pink-600', hover: 'hover:bg-pink-700', button: 'bg-pink-600' },
    cyan: { bg: 'bg-cyan-100', text: 'text-cyan-600', hover: 'hover:bg-cyan-700', button: 'bg-cyan-600' }
  };

  const colors = colorClasses[program.color as keyof typeof colorClasses];

  return (
    <div id="program-details-top" className="min-h-screen bg-gray-50 pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Back button */}
        <HashLink
          to="/#programs"
          className="inline-flex items-center text-gray-600 hover:text-gray-800 mb-8 transform transition-all duration-300 hover:translate-x-[-4px]"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Programs
        </HashLink>

        {/* Program Header */}
        <div className={`${colors.bg} rounded-xl p-8 mb-12 animate-fade-in`}>
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
            <div className={`w-20 h-20 bg-white rounded-full flex items-center justify-center animate-bounce-slow`}>
              <IconComponent className={`w-10 h-10 ${colors.text}`} />
            </div>
            <div className="flex-1">
              <h1 className="text-4xl font-bold text-gray-800 mb-4 animate-slide-up">{program.title}</h1>
              <p className="text-xl text-gray-600 mb-6 animate-slide-up delay-100">{program.description}</p>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="flex items-center bg-white p-3 rounded-lg shadow-sm transform hover:scale-105 transition-transform duration-300">
                  <Users className="w-5 h-5 mr-2 text-gray-600" />
                  <span>{program.ageRange}</span>
                </div>
                <div className="flex items-center bg-white p-3 rounded-lg shadow-sm transform hover:scale-105 transition-transform duration-300">
                  <Clock className="w-5 h-5 mr-2 text-gray-600" />
                  <span>{program.duration}</span>
                </div>
                <div className="flex items-center bg-white p-3 rounded-lg shadow-sm transform hover:scale-105 transition-transform duration-300">
                  <Target className="w-5 h-5 mr-2 text-gray-600" />
                  <span>{program.skillLevel}</span>
                </div>
                <div>
                  <HashLink
                    to="/student-registration#student-registration-top"
                    className={`inline-block w-full px-6 py-3 ${colors.button} text-white rounded-full ${colors.hover} transform transition-all duration-300 hover:scale-105 text-center font-bold animate-pulse`}
                  >
                    Enroll Now
                  </HashLink>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            {/* Curriculum */}
            <div className="bg-white rounded-xl shadow-md p-8 mb-8 transform transition-all duration-300 hover:shadow-lg">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <Book className={`w-6 h-6 mr-2 ${colors.text}`} />
                Curriculum Overview
              </h2>
              <div className="space-y-8">
                {program.curriculum.map((section, index) => (
                  <div key={index} className="animate-slide-up" style={{ animationDelay: `${index * 100}ms` }}>
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">
                      {section.title}
                    </h3>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {section.topics.map((topic, topicIndex) => (
                        <li key={topicIndex} className="flex items-start transform transition-all duration-300 hover:translate-x-2">
                          <CheckCircle className={`w-5 h-5 ${colors.text} mr-2 mt-1`} />
                          <span>{topic}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Projects */}
            <div className="bg-white rounded-xl shadow-md p-8 transform transition-all duration-300 hover:shadow-lg">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                Hands-on Projects
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {program.projects.map((project, index) => (
                  <div
                    key={index}
                    className={`${colors.bg} rounded-lg p-6 transform transition-all duration-300 hover:scale-105 hover:shadow-md`}
                  >
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-600">{project.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Learning Outcomes */}
            <div className="bg-white rounded-xl shadow-md p-8 transform transition-all duration-300 hover:shadow-lg">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                Learning Outcomes
              </h2>
              <ul className="space-y-4">
                {program.learningOutcomes.map((outcome, index) => (
                  <li key={index} className="flex items-start transform transition-all duration-300 hover:translate-x-2">
                    <CheckCircle className={`w-5 h-5 ${colors.text} mr-2 mt-1`} />
                    <span>{outcome}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Prerequisites */}
            <div className="bg-white rounded-xl shadow-md p-8 transform transition-all duration-300 hover:shadow-lg">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                Prerequisites
              </h2>
              <ul className="space-y-4">
                {program.prerequisites.map((prerequisite, index) => (
                  <li key={index} className="flex items-start transform transition-all duration-300 hover:translate-x-2">
                    <CheckCircle className={`w-5 h-5 ${colors.text} mr-2 mt-1`} />
                    <span>{prerequisite}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Call to Action */}
            <div className={`${colors.bg} rounded-xl shadow-md p-8 text-center transform transition-all duration-300 hover:shadow-lg`}>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Ready to Start Learning?
              </h2>
              <p className="text-gray-600 mb-6">
                Join our program and start your coding journey today!
              </p>
              <HashLink
                to="/student-registration#student-registration-top"
                className={`block w-full px-6 py-3 ${colors.button} text-white rounded-full ${colors.hover} transform transition-all duration-300 hover:scale-105 text-center font-bold animate-bounce`}
              >
                Enroll Now
              </HashLink>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .animate-fade-in {
          animation: fadeIn 0.6s ease-out forwards;
        }
        
        .animate-slide-up {
          animation: slideUp 0.6s ease-out forwards;
        }
        
        .animate-bounce-slow {
          animation: bounceSlow 3s ease-in-out infinite;
        }
        
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
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
        
        @keyframes bounceSlow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
      `}</style>
    </div>
  );
};

export default ProgramDetails;