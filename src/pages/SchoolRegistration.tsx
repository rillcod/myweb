import React, { useState } from 'react';
import { School, Check } from 'lucide-react';
import { supabase } from '../lib/supabase';
import { toast } from 'sonner';
import { useNavigate } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const SchoolRegistration: React.FC = () => {
  const navigate = useNavigate();
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    school_name: '',
    school_type: '',
    principal_name: '',
    address: '',
    lga: '',
    state: '',
    phone: '',
    email: '',
    contact_name: '',
    contact_position: '',
    contact_phone: '',
    contact_email: '',
    contact_whatsapp: '',
    student_count: 0,
    age_groups: [] as string[],
    computers_available: 0,
    preferred_schedule: '',
    duration: '',
    has_computer_lab: false,
    internet_status: '',
    power_status: '',
    additional_space: '',
    expected_students: 0,
    start_date: '',
    special_requirements: ''
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
    } else if (name === 'age_groups') {
      const select = e.target as HTMLSelectElement;
      const selectedOptions = Array.from(select.selectedOptions).map(option => option.value);
      setFormData(prev => ({
        ...prev,
        age_groups: selectedOptions
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

    try {
      const { error } = await supabase
        .from('school_registrations')
        .insert([formData]);

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
              Thank you for registering your school with Rillcod Academy. Our team will review your information and contact you shortly to discuss the next steps.
            </p>
            <button
              onClick={() => navigate('/')}
              className="px-6 py-3 bg-blue-600 text-white font-bold rounded-full hover:bg-blue-700 transition-colors duration-300"
            >
              Return to Home
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div id="school-registration-top" className="min-h-screen bg-gray-50 pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">School Registration</h1>
          
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* School Information */}
              <div className="bg-blue-50 p-6 rounded-lg mb-8">
                <h2 className="text-xl font-semibold text-gray-800 mb-6">School Information</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">School Name*</label>
                    <input
                      type="text"
                      name="school_name"
                      value={formData.school_name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">School Type*</label>
                    <select
                      name="school_type"
                      value={formData.school_type}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                      required
                    >
                      <option value="">Select school type</option>
                      <option value="Primary">Primary</option>
                      <option value="Secondary">Secondary</option>
                      <option value="Both">Both Primary and Secondary</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Principal Name*</label>
                    <input
                      type="text"
                      name="principal_name"
                      value={formData.principal_name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">School Email*</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">School Phone*</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                      required
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-1">School Address*</label>
                    <textarea
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      rows={3}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                      required
                    ></textarea>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">LGA*</label>
                    <input
                      type="text"
                      name="lga"
                      value={formData.lga}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">State*</label>
                    <input
                      type="text"
                      name="state"
                      value={formData.state}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Age Groups*</label>
                    <select
                      name="age_groups"
                      value={formData.age_groups}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                      required
                    >
                      <option value="">Select age group</option>
                      <option value="5-7">Ages 5-7 (Lower Primary)</option>
                      <option value="8-10">Ages 8-10 (Upper Primary)</option>
                      <option value="11-13">Ages 11-13 (Junior Secondary)</option>
                      <option value="14-16">Ages 14-16 (Senior Secondary)</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Contact Person Information */}
              <div className="bg-green-50 p-6 rounded-lg mb-8">
                <h2 className="text-xl font-semibold text-gray-800 mb-6">Contact Person Information</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Contact Person Name*</label>
                    <input
                      type="text"
                      name="contact_name"
                      value={formData.contact_name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Position*</label>
                    <input
                      type="text"
                      name="contact_position"
                      value={formData.contact_position}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Contact Phone*</label>
                    <input
                      type="tel"
                      name="contact_phone"
                      value={formData.contact_phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Contact Email*</label>
                    <input
                      type="email"
                      name="contact_email"
                      value={formData.contact_email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">WhatsApp Number</label>
                    <input
                      type="tel"
                      name="contact_whatsapp"
                      value={formData.contact_whatsapp}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                </div>
              </div>

              {/* Program Requirements */}
              <div className="bg-purple-50 p-6 rounded-lg mb-8">
                <h2 className="text-xl font-semibold text-gray-800 mb-6">Program Requirements</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Number of Students*</label>
                    <input
                      type="number"
                      name="student_count"
                      value={formData.student_count}
                      onChange={handleChange}
                      min="1"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Available Computers*</label>
                    <input
                      type="number"
                      name="computers_available"
                      value={formData.computers_available}
                      onChange={handleChange}
                      min="0"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Preferred Schedule*</label>
                    <input
                      type="text"
                      name="preferred_schedule"
                      value={formData.preferred_schedule}
                      onChange={handleChange}
                      placeholder="E.g., Mondays and Wednesdays, 10am-12pm"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Duration*</label>
                    <select
                      name="duration"
                      value={formData.duration}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                      required
                    >
                      <option value="">Select duration</option>
                      <option value="1 term">1 Term</option>
                      <option value="2 terms">2 Terms</option>
                      <option value="Full academic year">Full Academic Year</option>
                      <option value="Ongoing">Ongoing Program</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Start Date*</label>
                    <input
                      type="date"
                      name="start_date"
                      value={formData.start_date}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Facility Information */}
              <div className="bg-yellow-50 p-6 rounded-lg mb-8">
                <h2 className="text-xl font-semibold text-gray-800 mb-6">Facility Information</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Computer Lab Available?*</label>
                    <div className="flex space-x-4">
                      <label className="inline-flex items-center">
                        <input
                          type="radio"
                          name="has_computer_lab"
                          value="true"
                          checked={formData.has_computer_lab === true}
                          onChange={() => setFormData(prev => ({ ...prev, has_computer_lab: true }))}
                          className="form-radio h-4 w-4 text-blue-600"
                          required
                        />
                        <span className="ml-2">Yes</span>
                      </label>
                      <label className="inline-flex items-center">
                        <input
                          type="radio"
                          name="has_computer_lab"
                          value="false"
                          checked={formData.has_computer_lab === false}
                          onChange={() => setFormData(prev => ({ ...prev, has_computer_lab: false }))}
                          className="form-radio h-4 w-4 text-blue-600"
                        />
                        <span className="ml-2">No</span>
                      </label>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Internet Status*</label>
                    <select
                      name="internet_status"
                      value={formData.internet_status}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
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
                    <label className="block text-sm font-medium text-gray-700 mb-1">Power Supply Status*</label>
                    <select
                      name="power_status"
                      value={formData.power_status}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                      required
                    >
                      <option value="">Select status</option>
                      <option value="Very reliable">Very reliable (rarely interrupted)</option>
                      <option value="Mostly reliable">Mostly reliable (occasional outages)</option>
                      <option value="Somewhat unreliable">Somewhat unreliable (frequent outages)</option>
                      <option value="Very unreliable">Very unreliable (daily outages)</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Expected Students per Session*</label>
                    <input
                      type="number"
                      name="expected_students"
                      value={formData.expected_students}
                      onChange={handleChange}
                      min="1"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                      required
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Additional Space Information</label>
                    <textarea
                      name="additional_space"
                      value={formData.additional_space}
                      onChange={handleChange}
                      rows={3}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Describe any additional space available for equipment or activities"
                    ></textarea>
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Special Requirements</label>
                    <textarea
                      name="special_requirements"
                      value={formData.special_requirements}
                      onChange={handleChange}
                      rows={3}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Any special requirements or requests"
                    ></textarea>
                  </div>
                </div>
              </div>

              {/* Terms and Submit */}
              <div className="space-y-6">
                <div className="flex items-start">
                  <input
                    type="checkbox"
                    id="terms"
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded mt-1"
                    required
                  />
                  <label htmlFor="terms" className="ml-2 block text-sm text-gray-700">
                    I understand and agree to the partnership terms and revenue-sharing model (70% Academy, 30% School)*
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-colors duration-300"
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

export default SchoolRegistration;