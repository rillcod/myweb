import React, { useState } from 'react';
import { Users, Check } from 'lucide-react';

const StudentRegistration: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formSubmitted, setFormSubmitted] = useState(false);
  
  const handleNextStep = (e: React.FormEvent) => {
    e.preventDefault();
    if (currentStep < 5) {
      setCurrentStep(currentStep + 1);
      // Scroll to top of form
      document.getElementById('student-registration')?.scrollIntoView({ behavior: 'smooth' });
    } else {
      // Submit form
      setFormSubmitted(true);
    }
  };
  
  const handlePrevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
      // Scroll to top of form
      document.getElementById('student-registration')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const renderFormStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Student Information</h3>
            
            <div>
              <label htmlFor="fullName" className="block text-gray-700 font-medium mb-2">Full Name*</label>
              <input
                type="text"
                id="fullName"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                placeholder="Enter student's full name"
                required
              />
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="age" className="block text-gray-700 font-medium mb-2">Age*</label>
                <input
                  type="number"
                  id="age"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="Enter age"
                  min="3"
                  max="18"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="dob" className="block text-gray-700 font-medium mb-2">Date of Birth*</label>
                <input
                  type="date"
                  id="dob"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  required
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="grade" className="block text-gray-700 font-medium mb-2">Grade/Class Level*</label>
              <select
                id="grade"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                required
              >
                <option value="">Select grade/class level</option>
                <option value="Preschool">Preschool</option>
                <option value="Primary 1">Primary 1</option>
                <option value="Primary 2">Primary 2</option>
                <option value="Primary 3">Primary 3</option>
                <option value="Primary 4">Primary 4</option>
                <option value="Primary 5">Primary 5</option>
                <option value="Primary 6">Primary 6</option>
                <option value="JSS 1">JSS 1</option>
                <option value="JSS 2">JSS 2</option>
                <option value="JSS 3">JSS 3</option>
                <option value="SSS 1">SSS 1</option>
                <option value="SSS 2">SSS 2</option>
                <option value="SSS 3">SSS 3</option>
              </select>
            </div>
            
            <div>
              <label htmlFor="currentSchool" className="block text-gray-700 font-medium mb-2">Current School Name*</label>
              <input
                type="text"
                id="currentSchool"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                placeholder="Enter current school name"
                required
              />
            </div>
            
            <div>
              <label htmlFor="gender" className="block text-gray-700 font-medium mb-2">Gender*</label>
              <div className="flex space-x-4">
                <label className="inline-flex items-center">
                  <input type="radio" name="gender" value="male" className="form-radio h-5 w-5 text-green-600" required />
                  <span className="ml-2">Male</span>
                </label>
                <label className="inline-flex items-center">
                  <input type="radio" name="gender" value="female" className="form-radio h-5 w-5 text-green-600" />
                  <span className="ml-2">Female</span>
                </label>
              </div>
            </div>
          </div>
        );
      
      case 2:
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Parent/Guardian Information</h3>
            
            <div>
              <label htmlFor="parentName" className="block text-gray-700 font-medium mb-2">Parent/Guardian Full Name*</label>
              <input
                type="text"
                id="parentName"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                placeholder="Enter parent/guardian name"
                required
              />
            </div>
            
            <div>
              <label htmlFor="relationship" className="block text-gray-700 font-medium mb-2">Relationship to Student*</label>
              <select
                id="relationship"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                required
              >
                <option value="">Select relationship</option>
                <option value="Mother">Mother</option>
                <option value="Father">Father</option>
                <option value="Grandparent">Grandparent</option>
                <option value="Aunt/Uncle">Aunt/Uncle</option>
                <option value="Legal Guardian">Legal Guardian</option>
                <option value="Other">Other</option>
              </select>
            </div>
            
            <div>
              <label htmlFor="parentPhone" className="block text-gray-700 font-medium mb-2">Phone Number*</label>
              <input
                type="tel"
                id="parentPhone"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                placeholder="Enter phone number"
                required
              />
            </div>
            
            <div>
              <label htmlFor="parentWhatsapp" className="block text-gray-700 font-medium mb-2">WhatsApp Number*</label>
              <input
                type="tel"
                id="parentWhatsapp"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                placeholder="Enter WhatsApp number"
                required
              />
            </div>
            
            <div>
              <label htmlFor="parentEmail" className="block text-gray-700 font-medium mb-2">Email Address*</label>
              <input
                type="email"
                id="parentEmail"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                placeholder="Enter email address"
                required
              />
            </div>
            
            <div>
              <label htmlFor="homeAddress" className="block text-gray-700 font-medium mb-2">Home Address*</label>
              <textarea
                id="homeAddress"
                rows={3}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                placeholder="Enter home address"
                required
              ></textarea>
            </div>
          </div>
        );
      
      case 3:
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Program Selection</h3>
            
            <div>
              <label htmlFor="courseInterest" className="block text-gray-700 font-medium mb-2">Course Interest*</label>
              <select
                id="courseInterest"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                required
              >
                <option value="">Select course</option>
                <option value="ICT Fundamentals">ICT Fundamentals</option>
                <option value="Scratch Programming">Scratch Programming</option>
                <option value="HTML/CSS Programming">HTML/CSS Programming</option>
                <option value="Python Programming">Python Programming</option>
                <option value="Web Design">Web Design</option>
                <option value="Robotics Programming">Robotics Programming</option>
              </select>
            </div>
            
            <div>
              <label htmlFor="preferredSchedule" className="block text-gray-700 font-medium mb-2">Preferred Schedule*</label>
              <select
                id="preferredSchedule"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                required
              >
                <option value="">Select schedule</option>
                <option value="Weekday Afternoons">Weekday Afternoons (after school)</option>
                <option value="Weekday Mornings">Weekday Mornings (for homeschooled)</option>
                <option value="Weekend Mornings">Weekend Mornings</option>
                <option value="Weekend Afternoons">Weekend Afternoons</option>
                <option value="School Holidays">School Holidays</option>
              </select>
            </div>
            
            <div>
              <label htmlFor="learningLevel" className="block text-gray-700 font-medium mb-2">Learning Level*</label>
              <div className="flex space-x-4">
                <label className="inline-flex items-center">
                  <input type="radio" name="learningLevel" value="basic" className="form-radio h-5 w-5 text-green-600" required />
                  <span className="ml-2">Basic</span>
                </label>
                <label className="inline-flex items-center">
                  <input type="radio" name="learningLevel" value="intermediate" className="form-radio h-5 w-5 text-green-600" />
                  <span className="ml-2">Intermediate</span>
                </label>
                <label className="inline-flex items-center">
                  <input type="radio" name="learningLevel" value="advanced" className="form-radio h-5 w-5 text-green-600" />
                  <span className="ml-2">Advanced</span>
                </label>
              </div>
            </div>
            
            <div>
              <label htmlFor="classType" className="block text-gray-700 font-medium mb-2">Class Type*</label>
              <div className="flex space-x-4">
                <label className="inline-flex items-center">
                  <input type="radio" name="classType" value="group" className="form-radio h-5 w-5 text-green-600" required />
                  <span className="ml-2">Group</span>
                </label>
                <label className="inline-flex items-center">
                  <input type="radio" name="classType" value="individual" className="form-radio h-5 w-5 text-green-600" />
                  <span className="ml-2">Individual</span>
                </label>
              </div>
            </div>
          </div>
        );
      
      case 4:
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Additional Information</h3>
            
            <div>
              <label className="block text-gray-700 font-medium mb-2">Previous coding experience?*</label>
              <div className="flex space-x-4 mb-4">
                <label className="inline-flex items-center">
                  <input type="radio" name="codingExperience" value="yes" className="form-radio h-5 w-5 text-green-600" required />
                  <span className="ml-2">Yes</span>
                </label>
                <label className="inline-flex items-center">
                  <input type="radio" name="codingExperience" value="no" className="form-radio h-5 w-5 text-green-600" />
                  <span className="ml-2">No</span>
                </label>
              </div>
              
              <div>
                <label htmlFor="experienceDetails" className="block text-gray-700 font-medium mb-2">If yes, please provide details:</label>
                <textarea
                  id="experienceDetails"
                  rows={3}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="What languages/tools has the student used before?"
                ></textarea>
              </div>
            </div>
            
            <div>
              <label className="block text-gray-700 font-medium mb-2">Own laptop/device availability*</label>
              <div className="flex space-x-4">
                <label className="inline-flex items-center">
                  <input type="radio" name="ownDevice" value="yes" className="form-radio h-5 w-5 text-green-600" required />
                  <span className="ml-2">Yes, will bring own device</span>
                </label>
                <label className="inline-flex items-center">
                  <input type="radio" name="ownDevice" value="no" className="form-radio h-5 w-5 text-green-600" />
                  <span className="ml-2">No, needs device provided</span>
                </label>
              </div>
            </div>
            
            <div>
              <label htmlFor="specialRequirements" className="block text-gray-700 font-medium mb-2">Special requirements or accommodations</label>
              <textarea
                id="specialRequirements"
                rows={3}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                placeholder="Any special needs, learning accommodations, etc."
              ></textarea>
            </div>
            
            <div>
              <label htmlFor="hearAboutUs" className="block text-gray-700 font-medium mb-2">How did you hear about us?*</label>
              <select
                id="hearAboutUs"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                required
              >
                <option value="">Select option</option>
                <option value="School">From child's school</option>
                <option value="Friend">Friend or family recommendation</option>
                <option value="Social Media">Social media</option>
                <option value="Search">Internet search</option>
                <option value="Event">At an event</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>
        );
      
      case 5:
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Payment Information</h3>
            
            <div className="bg-green-50 p-4 rounded-lg mb-6">
              <p className="text-gray-700">
                <strong>Program Fee:</strong> ₦15,000 per learner (subject to review)
              </p>
            </div>
            
            <div>
              <label htmlFor="paymentMethod" className="block text-gray-700 font-medium mb-2">Payment method*</label>
              <select
                id="paymentMethod"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                required
              >
                <option value="">Select payment method</option>
                <option value="Bank Transfer">Bank Transfer</option>
                <option value="Cash">Cash Payment</option>
                <option value="POS">POS Payment</option>
              </select>
            </div>
            
            <div>
              <label htmlFor="paymentPlan" className="block text-gray-700 font-medium mb-2">Payment plan preference*</label>
              <select
                id="paymentPlan"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                required
              >
                <option value="">Select payment plan</option>
                <option value="Full Payment">Full Payment</option>
                <option value="Installment">Installment (50% before start, 50% midway)</option>
              </select>
            </div>
            
            <div className="flex items-start">
              <input
                id="termsAgreement"
                type="checkbox"
                className="h-5 w-5 text-green-600 mt-1"
                required
              />
              <label htmlFor="termsAgreement" className="ml-2 block text-gray-700">
                I agree to the terms and conditions of Rillcod Academy, including payment policies and program requirements*
              </label>
            </div>
            
            <div className="flex items-start">
              <input
                id="photoRelease"
                type="checkbox"
                className="h-5 w-5 text-green-600 mt-1"
                required
              />
              <label htmlFor="photoRelease" className="ml-2 block text-gray-700">
                I give permission for my child's photos and projects to be used for Rillcod Academy promotional purposes*
              </label>
            </div>
          </div>
        );
      
      default:
        return null;
    }
  };

  if (formSubmitted) {
    return (
      <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <Check className="w-10 h-10 text-green-600" />
        </div>
        <h3 className="text-2xl font-bold text-gray-800 mb-4">Registration Successful!</h3>
        <p className="text-gray-600 mb-6">
          Thank you for registering your child with Rillcod Academy! We've received your information and will contact you shortly with payment details and class schedule.
        </p>
        <button
          onClick={() => {
            setFormSubmitted(false);
            setCurrentStep(1);
          }}
          className="px-6 py-3 bg-green-600 text-white font-bold rounded-full hover:bg-green-700 transition-colors duration-300"
        >
          Register Another Student
        </button>
      </div>
    );
  }

  return (
    <section id="student-registration" className="py-16 md:py-24 bg-green-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Student Registration</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Enroll your child for exciting tech learning adventures!
          </p>
          <div className="w-20 h-2 bg-green-500 mx-auto rounded-full mt-4"></div>
        </div>
        
        {/* Progress steps */}
        <div className="max-w-3xl mx-auto mb-8">
          <div className="flex justify-between">
            {[1, 2, 3, 4, 5].map((step) => (
              <div 
                key={step}
                className={`relative flex flex-col items-center ${step <= currentStep ? 'text-green-600' : 'text-gray-400'}`}
              >
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  step < currentStep ? 'bg-green-600 text-white' : 
                  step === currentStep ? 'bg-white border-2 border-green-600 text-green-600' :
                  'bg-white border-2 border-gray-300 text-gray-400'
                }`}>
                  {step < currentStep ? <Check className="w-5 h-5" /> : step}
                </div>
                <div className="text-xs mt-2 font-medium text-center">
                  {step === 1 && 'Student Info'}
                  {step === 2 && 'Parent Info'}
                  {step === 3 && 'Program'}
                  {step === 4 && 'Additional'}
                  {step === 5 && 'Payment'}
                </div>
                
                {/* Connecting line */}
                {step < 5 && (
                  <div className={`absolute top-5 left-10 w-[calc(100%-2.5rem)] h-[2px] ${
                    step < currentStep ? 'bg-green-600' : 'bg-gray-300'
                  }`}></div>
                )}
              </div>
            ))}
          </div>
        </div>
        
        <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-8">
          <div className="mb-6 flex items-center">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600 mr-4">
              <Users className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800">Student Registration - Step {currentStep} of 5</h3>
          </div>
          
          <form onSubmit={handleNextStep}>
            {renderFormStep()}
            
            <div className="mt-8 flex justify-between">
              {currentStep > 1 && (
                <button
                  type="button"
                  onClick={handlePrevStep}
                  className="px-6 py-3 bg-gray-200 text-gray-700 font-medium rounded-lg hover:bg-gray-300 transition-colors duration-300"
                >
                  Previous
                </button>
              )}
              
              <button
                type="submit"
                className={`px-6 py-3 bg-green-600 text-white font-bold rounded-lg hover:bg-green-700 transition-colors duration-300 ${
                  currentStep === 1 ? 'ml-auto' : ''
                }`}
              >
                {currentStep < 5 ? 'Next Step' : 'Submit Registration'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default StudentRegistration;