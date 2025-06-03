import React from 'react';
import { HelpCircle } from 'lucide-react';

const FAQ: React.FC = () => {
  const faqs = [
    {
      question: "What age groups do you cater to?",
      answer: "We offer programs for children aged 5-15 years, with different courses tailored to specific age ranges and skill levels."
    },
    {
      question: "How long are the courses?",
      answer: "Course durations vary from 8 to 14 weeks, depending on the program and complexity level. Each course is designed to provide comprehensive learning while maintaining student engagement."
    },
    {
      question: "Do students need their own computer?",
      answer: "While having a personal device is beneficial for practice at home, we provide computers at our facility. For school programs, we require a minimum of 10 functional computers."
    },
    {
      question: "What is your teaching methodology?",
      answer: "We use a hands-on, project-based learning approach that combines theory with practical applications. Students learn through interactive exercises, games, and real-world projects."
    },
    {
      question: "How much does it cost?",
      answer: "Individual student programs cost ₦15,000 per learner. For schools, we operate on a partnership model with a 70-30 revenue split."
    },
    {
      question: "Do you offer online classes?",
      answer: "Yes! We offer both physical and online classes to accommodate different learning preferences. Our virtual classes provide the same high-quality instruction and interactive experience as our in-person sessions, making tech education accessible from anywhere."
    },
    {
      question: "What safety measures are in place?",
      answer: "We maintain strict safety protocols, including proper supervision, secure internet access, and a child-friendly learning environment."
    },
    {
      question: "Can parents track their child's progress?",
      answer: "Yes, we provide regular progress reports and organize showcase events where students can demonstrate their projects to parents."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Frequently Asked Questions</h1>
          <p className="text-xl text-gray-600">Find answers to common questions about our programs</p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-md mb-6 overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="p-6">
                <div className="flex items-start">
                  <HelpCircle className="w-6 h-6 text-[#FF914D] flex-shrink-0 mr-4 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-3">{faq.question}</h3>
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;