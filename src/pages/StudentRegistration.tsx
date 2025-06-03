import React, { useState } from 'react';
import { Users, Check } from 'lucide-react';
import { supabase } from '../lib/supabase';
import { toast } from 'sonner';
import { useNavigate } from 'react-router-dom';

const StudentRegistration: React.FC = () => {
  const navigate = useNavigate();
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    student_name: '',
    age: 0,
    dob: '',
    grade: '',
    current_school: '',
    gender: '',
    parent_name: '',
    relationship: '',
    parent_phone: '',
    parent_whatsapp: '',
    parent_email: '',
    home_address: '',
    course_interest: '',
    preferred_schedule: '',
    learning_level: '',
    class_type: '',
    coding_experience: false,
    experience_details: '',
    own_device: false,
    special_requirements: '',
    hear_about_us: '',
    payment_method: '',
    payment_plan: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    
    if (type === 'checkbox') {
      const checkbox = e.target as HTMLInputElement;
      setFormData(prev => ({
        ...prev,
        [name]: checkbox.checked
      }));
    } else if (type === 'number') {
      setFormData(prev => ({
        ...prev,
        [name]: parseInt(value) || 0
      }));
    } else if (type === 'radio') {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate date of birth
    if (!formData.dob) {
      toast.error('Please enter a valid date of birth');
      return;
    }

    try {
      // Format the date to ISO string for PostgreSQL
      const formattedData = {
        ...formData,
        dob: new Date(formData.dob).toISOString()
      };

      const { error } = await supabase
        .from('student_registrations')
        .insert([formattedData]);

      if (error) throw error;

      setFormSubmitted(true);
      toast.success('Registration submitted successfully!');
      setTimeout(() => {
        navigate('/');
      }, 3000);
    } catch (error) {
      console.error('Error:', error);
      toast.error('Failed to submit registration. Please try again.');
    }
  };

  if (formSubmitted) {
    return (
      <div className="min-h-screen bg-gray-50 pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-xl mx-auto bg-white rounded-2xl shadow-lg p-8 text-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Check className="w-10 h-10 text-green-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Registration Successful!</h3>
            <p className="text-gray-600 mb-6">
              Thank you for registering with Rillcod Academy! We've received your information and will contact you shortly with next steps.
            </p>
            <button
              onClick={() => navigate('/')}
              className="px-6 py-3 bg-green-600 text-white font-bold rounded-full hover:bg-green-700 transition-colors duration-300"
            >
              Return to Home
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div id="student-registration-top" className="min-h-screen bg-gray-50 pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">Student Registration</h1>
          
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Student Information */}
              <div className="bg-blue-50 p-6 rounded-lg mb-8">
                <h2 className="text-xl font-semibold text-gray-800 mb-6">Student Information</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Student Name*</label>
                    <input
                      type="text"
                      name="student_name"
                      value={formData.student_name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Age*</label>
                    <input
                      type="number"
                      name="age"
                      value={formData.age}
                      onChange={handleChange}
                      min="3"
                      max="18"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Date of Birth*</label>
                    <input
                      type="date"
                      name="dob"
                      value={formData.dob}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Grade/Class Level*</label>
                    <select
                      name="grade"
                      value={formData.grade}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
                      required
                    >
                      <option value="">Select grade level</option>
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
                    <label className="block text-sm font-medium text-gray-700 mb-1">Current School*</label>
                    <input
                      type="text"
                      name="current_school"
                      value={formData.current_school}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Gender*</label>
                    <div className="flex space-x-4">
                      <label className="inline-flex items-center">
                        <input
                          type="radio"
                          name="gender"
                          value="male"
                          onChange={handleChange}
                          checked={formData.gender === 'male'}
                          className="form-radio h-4 w-4 text-green-600"
                          required
                        />
                        <span className="ml-2">Male</span>
                      </label>
                      <label className="inline-flex items-center">
                        <input
                          type="radio"
                          name="gender"
                          value="female"
                          onChange={handleChange}
                          checked={formData.gender === 'female'}
                          className="form-radio h-4 w-4 text-green-600"
                        />
                        <span className="ml-2">Female</span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              {/* Parent Information */}
              <div className="bg-green-50 p-6 rounded-lg mb-8">
                <h2 className="text-xl font-semibold text-gray-800 mb-6">Parent/Guardian Information</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Parent/Guardian Name*</label>
                    <input
                      type="text"
                      name="parent_name"
                      value={formData.parent_name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Relationship to Student*</label>
                    <select
                      name="relationship"
                      value={formData.relationship}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
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
                    <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number*</label>
                    <input
                      type="tel"
                      name="parent_phone"
                      value={formData.parent_phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">WhatsApp Number*</label>
                    <input
                      type="tel"
                      name="parent_whatsapp"
                      value={formData.parent_whatsapp}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email Address*</label>
                    <input
                      type="email"
                      name="parent_email"
                      value={formData.parent_email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
                      required
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Home Address*</label>
                    <textarea
                      name="home_address"
                      value={formData.home_address}
                      onChange={handleChange}
                      rows={3}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
                      required
                    ></textarea>
                  </div>
                </div>
              </div>

              {/* Program Selection */}
              <div className="bg-purple-50 p-6 rounded-lg mb-8">
                <h2 className="text-xl font-semibold text-gray-800 mb-6">Program Selection</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Course Interest*</label>
                    <select
                      name="course_interest"
                      value={formData.course_interest}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
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
                    <label className="block text-sm font-medium text-gray-700 mb-1">Preferred Schedule*</label>
                    <select
                      name="preferred_schedule"
                      value={formData.preferred_schedule}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
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
                    <label className="block text-sm font-medium text-gray-700 mb-1">Learning Level*</label>
                    <div className="flex space-x-4">
                      <label className="inline-flex items-center">
                        <input
                          type="radio"
                          name="learning_level"
                          value="beginner"
                          onChange={handleChange}
                          checked={formData.learning_level === 'beginner'}
                          className="form-radio h-4 w-4 text-green-600"
                          required
                        />
                        <span className="ml-2">Beginner</span>
                      </label>
                      <label className="inline-flex items-center">
                        <input
                          type="radio"
                          name="learning_level"
                          value="intermediate"
                          onChange={handleChange}
                          checked={formData.learning_level === 'intermediate'}
                          className="form-radio h-4 w-4 text-green-600"
                        />
                        <span className="ml-2">Intermediate</span>
                      </label>
                      <label className="inline-flex items-center">
                        <input
                          type="radio"
                          name="learning_level"
                          value="advanced"
                          onChange={handleChange}
                          checked={formData.learning_level === 'advanced'}
                          className="form-radio h-4 w-4 text-green-600"
                        />
                        <span className="ml-2">Advanced</span>
                      </label>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Class Type*</label>
                    <div className="flex space-x-4">
                      <label className="inline-flex items-center">
                        <input
                          type="radio"
                          name="class_type"
                          value="group"
                          onChange={handleChange}
                          checked={formData.class_type === 'group'}
                          className="form-radio h-4 w-4 text-green-600"
                          required
                        />
                        <span className="ml-2">Group</span>
                      </label>
                      <label className="inline-flex items-center">
                        <input
                          type="radio"
                          name="class_type"
                          value="individual"
                          onChange={handleChange}
                          checked={formData.class_type === 'individual'}
                          className="form-radio h-4 w-4 text-green-600"
                        />
                        <span className="ml-2">Individual</span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              {/* Additional Information */}
              <div className="bg-yellow-50 p-6 rounded-lg mb-8">
                <h2 className="text-xl font-semibold text-gray-800 mb-6">Additional Information</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Previous Coding Experience?*</label>
                    <div className="flex space-x-4">
                      <label className="inline-flex items-center">
                        <input
                          type="radio"
                          name="coding_experience"
                          value="true"
                          checked={formData.coding_experience === true}
                          onChange={() => setFormData(prev => ({ ...prev, coding_experience: true }))}
                          className="form-radio h-4 w-4 text-green-600"
                          required
                        />
                        <span className="ml-2">Yes</span>
                      </label>
                      <label className="inline-flex items-center">
                        <input
                          type="radio"
                          name="coding_experience"
                          value="false"
                          checked={formData.coding_experience === false}
                          onChange={() => setFormData(prev => ({ ...prev, coding_experience: false }))}
                          className="form-radio h-4 w-4 text-green-600"
                        />
                        <span className="ml-2">No</span>
                      </label>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Own Device Available?*</label>
                    <div className="flex space-x-4">
                      <label className="inline-flex items-center">
                        <input
                          type="radio"
                          name="own_device"
                          value="true"
                          checked={formData.own_device === true}
                          onChange={() => setFormData(prev => ({ ...prev, own_device: true }))}
                          className="form-radio h-4 w-4 text-green-600"
                          required
                        />
                        <span className="ml-2">Yes</span>
                      </label>
                      <label className="inline-flex items-center">
                        <input
                          type="radio"
                          name="own_device"
                          value="false"
                          checked={formData.own_device === false}
                          onChange={() => setFormData(prev => ({ ...prev, own_device: false }))}
                          className="form-radio h-4 w-4 text-green-600"
                        />
                        <span className="ml-2">No</span>
                      </label>
                    </div>
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Experience Details</label>
                    <textarea
                      name="experience_details"
                      value={formData.experience_details}
                      onChange={handleChange}
                      rows={3}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
                      placeholder="If you have coding experience, please provide details"
                    ></textarea>
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Special Requirements</label>
                    <textarea
                      name="special_requirements"
                      value={formData.special_requirements}
                      onChange={handleChange}
                      rows={3}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
                      placeholder="Any special needs or requirements"
                    ></textarea>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">How did you hear about us?*</label>
                    <select
                      name="hear_about_us"
                      value={formData.hear_about_us}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
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
              </div>

              {/* Payment Information */}
              <div className="bg-pink-50 p-6 rounded-lg mb-8">
                <h2 className="text-xl font-semibold text-gray-800 mb-6">Payment Information</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Payment Method*</label>
                    <select
                      name="payment_method"
                      value={formData.payment_method}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
                      required
                    >
                      <option value="">Select payment method</option>
                      <option value="Bank Transfer">Bank Transfer</option>
                      <option value="Cash">Cash Payment</option>
                      <option value="POS">POS Payment</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Payment Plan*</label>
                    <select
                      name="payment_plan"
                      value={formData.payment_plan}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
                      required
                    >
                      <option value="">Select payment plan</option>
                      <option value="Full Payment">Full Payment</option>
                      <option value="Installment">Installment (50% before start, 50% midway)</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Terms and Submit */}
              <div className="space-y-6">
                <div className="flex items-start">
                  <input
                    type="checkbox"
                    id="terms"
                    className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded mt-1"
                    required
                  />
                  <label htmlFor="terms" className="ml-2 block text-sm text-gray-700">
                    I agree to the terms and conditions, including payment policies and program requirements*
                  </label>
                </div>

                <div className="flex items-start">
                  <input
                    type="checkbox"
                    id="photo-release"
                    className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded mt-1"
                    required
                  />
                  <label htmlFor="photo-release" className="ml-2 block text-sm text-gray-700">
                    I give permission for my child's photos and projects to be used for promotional purposes*
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-green-600 text-white font-bold rounded-lg hover:bg-green-700 transition-colors duration-300"
                >
                  Submit Registration
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentRegistration;