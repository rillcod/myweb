import React from 'react';
import { Lightbulb, Code, Users, Brain } from 'lucide-react';

const Benefits: React.FC = () => {
  const benefits = [
    {
      icon: <Lightbulb className="w-12 h-12 text-orange-500" />,
      title: "Practical Learning",
      description: "Students learn by doing, working on real projects and building their portfolio from day one."
    },
    {
      icon: <Code className="w-12 h-12 text-orange-500" />,
      title: "Industry-Relevant Skills",
      description: "Our curriculum is constantly updated to match current industry standards and practices."
    },
    {
      icon: <Users className="w-12 h-12 text-orange-500" />,
      title: "Small Class Sizes",
      description: "Maximum attention and support with our small group learning environment."
    },
    {
      icon: <Brain className="w-12 h-12 text-orange-500" />,
      title: "Critical Thinking",
      description: "Develop problem-solving skills and computational thinking abilities."
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose Our Program?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We provide a comprehensive learning experience that prepares students for the digital future.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 bg-orange-100 p-4 rounded-full">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;