import React from 'react';
import { Clock, Award, Target, Users } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">About Rillcod Academy</h2>
          <div className="w-20 h-2 bg-purple-500 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          <div className="bg-gradient-to-br from-purple-50 to-blue-50 p-6 md:p-8 rounded-2xl shadow-md">
            <h3 className="text-2xl font-bold text-purple-600 mb-4">Company Overview</h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Rillcod Academy is a subsidiary of Rillcod Technologies, made of young professionals inspired to help children see possibilities, learn the process and make progress in technology skills.
            </p>
            
            <h3 className="text-2xl font-bold text-purple-600 mb-4">Our Mission</h3>
            <p className="text-gray-700 leading-relaxed">
              Transform Nigeria's educational system from memory-based learning to education that stimulates thinking and creativity. We empower children with 21st-century skills through engaging, fun-filled learning experiences.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-2xl shadow-md border-2 border-blue-100 transform transition-all duration-300 hover:scale-105 hover:shadow-lg">
              <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <Clock className="w-7 h-7 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Experience</h3>
              <p className="text-gray-600">
                Over 4 years of experience in deploying innovative STEM Learning programs for children across Nigeria.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-md border-2 border-green-100 transform transition-all duration-300 hover:scale-105 hover:shadow-lg">
              <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <Award className="w-7 h-7 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Quality</h3>
              <p className="text-gray-600">
                Our curriculum is designed by education experts to ensure age-appropriate, engaging learning experiences.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-md border-2 border-yellow-100 transform transition-all duration-300 hover:scale-105 hover:shadow-lg">
              <div className="w-14 h-14 bg-yellow-100 rounded-full flex items-center justify-center mb-4">
                <Target className="w-7 h-7 text-yellow-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Approach</h3>
              <p className="text-gray-600">
                Hands-on, project-based learning that makes complex concepts accessible and enjoyable for children.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-md border-2 border-purple-100 transform transition-all duration-300 hover:scale-105 hover:shadow-lg">
              <div className="w-14 h-14 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                <Users className="w-7 h-7 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Team</h3>
              <p className="text-gray-600">
                Highly qualified and trained facilitators who are passionate about children's education and technology.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;