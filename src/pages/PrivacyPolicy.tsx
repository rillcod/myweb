import React from 'react';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">Privacy Policy</h1>
        
        <div className="bg-white rounded-xl shadow-md p-8 space-y-6">
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Information We Collect</h2>
            <p className="text-gray-600">We collect information that you provide directly to us, including:</p>
            <ul className="list-disc list-inside mt-2 text-gray-600 space-y-2">
              <li>Personal information (name, email address, phone number)</li>
              <li>Student information for registration purposes</li>
              <li>Parent/guardian contact information</li>
              <li>Educational background and preferences</li>
              <li>Payment information</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">How We Use Your Information</h2>
            <p className="text-gray-600">We use the information we collect to:</p>
            <ul className="list-disc list-inside mt-2 text-gray-600 space-y-2">
              <li>Process your registration and maintain your account</li>
              <li>Communicate with you about our services</li>
              <li>Provide educational services and support</li>
              <li>Improve our programs and services</li>
              <li>Send important updates and announcements</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Information Sharing</h2>
            <p className="text-gray-600">
              We do not sell, trade, or otherwise transfer your personal information to outside parties. This does not include trusted third parties who assist us in operating our website, conducting our business, or servicing you.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Data Security</h2>
            <p className="text-gray-600">
              We implement appropriate security measures to protect your personal information. However, no method of transmission over the internet or electronic storage is 100% secure.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Your Rights</h2>
            <p className="text-gray-600">You have the right to:</p>
            <ul className="list-disc list-inside mt-2 text-gray-600 space-y-2">
              <li>Access your personal information</li>
              <li>Correct inaccurate information</li>
              <li>Request deletion of your information</li>
              <li>Opt-out of marketing communications</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Contact Us</h2>
            <p className="text-gray-600">
              If you have any questions about this Privacy Policy, please contact us at:
            </p>
            <div className="mt-2 text-gray-600">
              <p>Email: info@rillcod.tech</p>
              <p>Phone: 08116600091</p>
              <p>Address: No 26 Ogiesoba Avenue, Off Airport Road, Benin City</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;