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

  return (
    <div id="program-details-top" className="min-h-screen bg-gray-50 pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Back button */}
        <HashLink
          to="/#programs"
          className="inline-flex items-center text-gray-600 hover:text-gray-800 mb-8"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Programs
        </HashLink>

        {/* Program Header */}
        <div className={`bg-${program.color}-100 rounded-xl p-8 mb-12`}>
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
            <div className={`w-20 h-20 bg-${program.color}-200 rounded-full flex items-center justify-center`}>
              <IconComponent className={`w-10 h-10 text-${program.color}-600`} />
            </div>
            <div className="flex-1">
              <h1 className="text-4xl font-bold text-gray-800 mb-4">{program.title}</h1>
              <p className="text-xl text-gray-600 mb-6">{program.description}</p>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="flex items-center">
                  <Users className="w-5 h-5 mr-2 text-gray-600" />
                  <span>{program.ageRange}</span>
                </div>
                <div className="flex items-center">
                  <Clock className="w-5 h-5 mr-2 text-gray-600" />
                  <span>{program.duration}</span>
                </div>
                <div className="flex items-center">
                  <Target className="w-5 h-5 mr-2 text-gray-600" />
                  <span>{program.skillLevel}</span>
                </div>
                <div>
                  <HashLink
                    to="/student-registration#student-registration-top"
                    className={`inline-block px-6 py-3 bg-${program.color}-600 text-white rounded-full hover:bg-${program.color}-700 transition-colors`}
                  >
                    Enroll Now
                  </HashLink>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Curriculum */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-md p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <Book className="w-6 h-6 mr-2 text-blue-600" />
                Curriculum Overview
              </h2>
              <div className="space-y-8">
                {program.curriculum.map((section, index) => (
                  <div key={index}>
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">
                      {section.title}
                    </h3>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {section.topics.map((topic, topicIndex) => (
                        <li key={topicIndex} className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-1" />
                          <span>{topic}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Projects */}
            <div className="bg-white rounded-xl shadow-md p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                Hands-on Projects
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {program.projects.map((project, index) => (
                  <div
                    key={index}
                    className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow"
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
            <div className="bg-white rounded-xl shadow-md p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                Learning Outcomes
              </h2>
              <ul className="space-y-4">
                {program.learningOutcomes.map((outcome, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-1" />
                    <span>{outcome}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Prerequisites */}
            <div className="bg-white rounded-xl shadow-md p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                Prerequisites
              </h2>
              <ul className="space-y-4">
                {program.prerequisites.map((prerequisite, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-blue-500 mr-2 mt-1" />
                    <span>{prerequisite}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Call to Action */}
            <div className={`bg-${program.color}-50 rounded-xl shadow-md p-8 text-center`}>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Ready to Start Learning?
              </h2>
              <p className="text-gray-600 mb-6">
                Join our program and start your coding journey today!
              </p>
              <HashLink
                to="/student-registration#student-registration-top"
                className={`block w-full px-6 py-3 bg-${program.color}-600 text-white rounded-full hover:bg-${program.color}-700 transition-colors text-center`}
              >
                Enroll Now
              </HashLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgramDetails;