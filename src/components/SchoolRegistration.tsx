import React, { useState } from 'react';
import { School, Check } from 'lucide-react';

const SchoolRegistration: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formSubmitted, setFormSubmitted] = useState(false);
  
  const handleNextStep = (e: React.FormEvent) => {
    e.preventDefault();
    if (currentStep < 5) {
      setCurrentStep(currentStep + 1);
      // Scroll to top of form
      document.getElementById('school-registration')?.scrollIntoView({ behavior: 'smooth' });
    } else {
      // Submit form
      setFormSubmitted(true);
    }
  };
  
  const handlePrevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
      // Scroll to top of form
      document.getElementById('school-registration')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const renderFormStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4">School Information</h3>
            
            <div>
              <label htmlFor="schoolName" className="block text-gray-700 font-medium mb-2">School Name*</label>
              <input
                type="text"
                id="schoolName"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter school name"
                required
              />
            </div>
            
            <div>
              <label htmlFor="schoolType" className="block text-gray-700 font-medium mb-2">School Type*</label>
              <select
                id="schoolType"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              >
                <option value="">Select school type</option>
                <option value="Primary">Primary</option>
                <option value="Secondary">Secondary</option>
                <option value="Both">Both Primary and Secondary</option>
              </select>
            </div>
            
            <div>
              <label htmlFor="principalName" className="block text-gray-700 font-medium mb-2">Principal/Head Teacher Name*</label>
              <input
                type="text"
                id="principalName"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter principal's name"
                required
              />
            </div>
            
            <div>
              <label htmlFor="schoolAddress" className="block text-gray-700 font-medium mb-2">School Address*</label>
              <textarea
                id="schoolAddress"
                rows={3}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter full school address"
                required
              ></textarea>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="lga" className="block text-gray-700 font-medium mb-2">Local Government Area*</label>
                <input
                  type="text"
                  id="lga"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter LGA"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="state" className="block text-gray-700 font-medium mb-2">State*</label>
                <input
                  type="text"
                  id="state"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter state"
                  required
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="schoolPhone" className="block text-gray-700 font-medium mb-2">School Phone Number*</label>
                <input
                  type="tel"
                  id="schoolPhone"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter school phone"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="schoolEmail" className="block text-gray-700 font-medium mb-2">School Email Address*</label>
                <input
                  type="email"
                  id="schoolEmail"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter school email"
                  required
                />
              </div>
            </div>
          </div>
        );
      
      case 2:
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Contact Person Details</h3>
            
            <div>
              <label htmlFor="contactName" className="block text-gray-700 font-medium mb-2">Contact Person Name*</label>
              <input
                type="text"
                id="contactName"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter contact person's name"
                required
              />
            </div>
            
            <div>
              <label htmlFor="position" className="block text-gray-700 font-medium mb-2">Title/Position*</label>
              <input
                type="text"
                id="position"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="E.g., ICT Coordinator, Vice Principal"
                required
              />
            </div>
            
            <div>
              <label htmlFor="directPhone" className="block text-gray-700 font-medium mb-2">Direct Phone Number*</label>
              <input
                type="tel"
                id="directPhone"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter direct phone number"
                required
              />
            </div>
            
            <div>
              <label htmlFor="contactEmail" className="block text-gray-700 font-medium mb-2">Email Address*</label>
              <input
                type="email"
                id="contactEmail"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter email address"
                required
              />
            </div>
            
            <div>
              <label htmlFor="whatsapp" className="block text-gray-700 font-medium mb-2">WhatsApp Number</label>
              <input
                type="tel"
                id="whatsapp"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter WhatsApp number"
              />
            </div>
          </div>
        );
      
      case 3:
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Program Requirements</h3>
            
            <div>
              <label htmlFor="studentCount" className="block text-gray-700 font-medium mb-2">Number of students to be enrolled*</label>
              <input
                type="number"
                id="studentCount"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Estimated number of students"
                min="1"
                required
              />
            </div>
            
            <div>
              <label htmlFor="ageGroups" className="block text-gray-700 font-medium mb-2">Preferred age groups/classes*</label>
              <select
                id="ageGroups"
                multiple
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              >
                <option value="5-7">Ages 5-7 (Lower Primary)</option>
                <option value="8-10">Ages 8-10 (Upper Primary)</option>
                <option value="11-13">Ages 11-13 (Junior Secondary)</option>
                <option value="14-16">Ages 14-16 (Senior Secondary)</option>
              </select>
              <p className="text-sm text-gray-500 mt-1">Hold Ctrl/Cmd to select multiple options</p>
            </div>
            
            <div>
              <label htmlFor="computers" className="block text-gray-700 font-medium mb-2">Available computer systems*</label>
              <input
                type="number"
                id="computers"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Number of computers available"
                min="1"
                required
              />
              <p className="text-sm text-gray-500 mt-1">Minimum 10 required for school programs</p>
            </div>
            
            <div>
              <label htmlFor="schedule" className="block text-gray-700 font-medium mb-2">Preferred schedule (days and times)*</label>
              <textarea
                id="schedule"
                rows={3}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="E.g., Tuesdays and Thursdays, 10am-11am"
                required
              ></textarea>
            </div>
            
            <div>
              <label htmlFor="duration" className="block text-gray-700 font-medium mb-2">Duration preference*</label>
              <select
                id="duration"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              >
                <option value="">Select duration</option>
                <option value="1 term">1 Term</option>
                <option value="2 terms">2 Terms</option>
                <option value="Full academic year">Full Academic Year</option>
                <option value="Ongoing">Ongoing Program</option>
              </select>
            </div>
          </div>
        );
      
      case 4:
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Facility Information</h3>
            
            <div>
              <label className="block text-gray-700 font-medium mb-2">Do you have a computer lab?*</label>
              <div className="flex space-x-4">
                <label className="inline-flex items-center">
                  <input type="radio" name="computerLab" value="yes" className="form-radio h-5 w-5 text-blue-600" required />
                  <span className="ml-2">Yes</span>
                </label>
                <label className="inline-flex items-center">
                  <input type="radio" name="computerLab" value="no" className="form-radio h-5 w-5 text-blue-600" />
                  <span className="ml-2">No</span>
                </label>
              </div>
            </div>
            
            <div>
              <label htmlFor="functionalComputers" className="block text-gray-700 font-medium mb-2">Number of functional computers available*</label>
              <input
                type="number"
                id="functionalComputers"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter number of functional computers"
                min="0"
                required
              />
            </div>
            
            <div>
              <label htmlFor="internet" className="block text-gray-700 font-medium mb-2">Internet connectivity status*</label>
              <select
                id="internet"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              >
                <option value="">Select status</option>
                <option value="Reliable high-speed">Reliable high-speed</option>
                <option value="Moderate speed">Moderate speed</option>
                <option value="Slow but functional">Slow but functional</option>
                <option value="Unreliable">Unreliable</option>
                <option value="None">No internet connectivity</option>
              </select>
            </div>
            
            <div>
              <label htmlFor="power" className="block text-gray-700 font-medium mb-2">Power supply reliability*</label>
              <select
                id="power"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              >
                <option value="">Select reliability</option>
                <option value="Very reliable">Very reliable (rarely interrupted)</option>
                <option value="Mostly reliable">Mostly reliable (occasional outages)</option>
                <option value="Somewhat unreliable">Somewhat unreliable (frequent outages)</option>
                <option value="Very unreliable">Very unreliable (daily outages)</option>
              </select>
            </div>
            
            <div>
              <label htmlFor="additionalSpace" className="block text-gray-700 font-medium mb-2">Space for additional equipment*</label>
              <textarea
                id="additionalSpace"
                rows={3}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Describe available space for additional equipment if needed"
                required
              ></textarea>
            </div>
          </div>
        );
      
      case 5:
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Partnership Details</h3>
            
            <div className="bg-blue-50 p-4 rounded-lg mb-6">
              <p className="text-gray-700">
                <strong>Partnership Model:</strong> Rillcod Academy operates on a revenue-sharing model with partner schools, with a standard split of 70% to Academy and 30% to School.
              </p>
            </div>
            
            <div>
              <label htmlFor="studentsPerSession" className="block text-gray-700 font-medium mb-2">Expected number of students per session*</label>
              <input
                type="number"
                id="studentsPerSession"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter expected number of students"
                min="1"
                required
              />
            </div>
            
            <div>
              <label htmlFor="startDate" className="block text-gray-700 font-medium mb-2">Preferred start date*</label>
              <input
                type="date"
                id="startDate"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>
            
            <div>
              <label htmlFor="specialRequirements" className="block text-gray-700 font-medium mb-2">Special requirements or requests</label>
              <textarea
                id="specialRequirements"
                rows={4}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Any special requirements or requests"
              ></textarea>
            </div>
            
            <div className="flex items-start">
              <input
                id="agreement"
                type="checkbox"
                className="h-5 w-5 text-blue-600 mt-1"
                required
              />
              <label htmlFor="agreement" className="ml-2 block text-gray-700">
                I understand and agree to the partnership terms and revenue-sharing model with Rillcod Academy*
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
          Thank you for registering your school with Rillcod Academy. Our team will review your information and contact you shortly to discuss the next steps.
        </p>
        <button
          onClick={() => {
            setFormSubmitted(false);
            setCurrentStep(1);
          }}
          className="px-6 py-3 bg-blue-600 text-white font-bold rounded-full hover:bg-blue-700 transition-colors duration-300"
        >
          Register Another School
        </button>
      </div>
    );
  }

  return (
    <section id="school-registration" className="py-16 md:py-24 bg-blue-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">School Registration</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Partner with Rillcod Academy to bring innovative tech education to your school
          </p>
          <div className="w-20 h-2 bg-blue-500 mx-auto rounded-full mt-4"></div>
        </div>
        
        {/* Progress steps */}
        <div className="max-w-3xl mx-auto mb-8">
          <div className="flex justify-between">
            {[1, 2, 3, 4, 5].map((step) => (
              <div 
                key={step}
                className={`relative flex flex-col items-center ${step <= currentStep ? 'text-blue-600' : 'text-gray-400'}`}
              >
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  step < currentStep ? 'bg-blue-600 text-white' : 
                  step === currentStep ? 'bg-white border-2 border-blue-600 text-blue-600' :
                  'bg-white border-2 border-gray-300 text-gray-400'
                }`}>
                  {step < currentStep ? <Check className="w-5 h-5" /> : step}
                </div>
                <div className="text-xs mt-2 font-medium text-center">
                  {step === 1 && 'School Info'}
                  {step === 2 && 'Contact Person'}
                  {step === 3 && 'Program'}
                  {step === 4 && 'Facility'}
                  {step === 5 && 'Partnership'}
                </div>
                
                {/* Connecting line */}
                {step < 5 && (
                  <div className={`absolute top-5 left-10 w-[calc(100%-2.5rem)] h-[2px] ${
                    step < currentStep ? 'bg-blue-600' : 'bg-gray-300'
                  }`}></div>
                )}
              </div>
            ))}
          </div>
        </div>
        
        <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-8">
          <div className="mb-6 flex items-center">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mr-4">
              <School className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800">School Registration - Step {currentStep} of 5</h3>
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
                className={`px-6 py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-colors duration-300 ${
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

export default SchoolRegistration;