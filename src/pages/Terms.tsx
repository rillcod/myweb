import React from 'react';

const Terms: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">Terms and Conditions</h1>
        
        <div className="bg-white rounded-xl shadow-md p-8 space-y-6">
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Acceptance of Terms</h2>
            <p className="text-gray-600">
              By accessing and using Rillcod Academy's services, you accept and agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Registration and Account</h2>
            <ul className="list-disc list-inside mt-2 text-gray-600 space-y-2">
              <li>All information provided during registration must be accurate and complete</li>
              <li>Parents/guardians are responsible for maintaining the confidentiality of their account</li>
              <li>You must notify us immediately of any unauthorized use of your account</li>
              <li>We reserve the right to suspend or terminate accounts that violate our terms</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Payment Terms</h2>
            <ul className="list-disc list-inside mt-2 text-gray-600 space-y-2">
              <li>Program fees must be paid according to the selected payment plan</li>
              <li>Refunds are subject to our refund policy</li>
              <li>Late payments may result in suspension of services</li>
              <li>All prices are subject to change with notice</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Class Policies</h2>
            <ul className="list-disc list-inside mt-2 text-gray-600 space-y-2">
              <li>Students must attend classes regularly and punctually</li>
              <li>Missed classes may be made up according to our make-up policy</li>
              <li>Students must follow the code of conduct during classes</li>
              <li>Parents must provide notice for any absences</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Intellectual Property</h2>
            <p className="text-gray-600">
              All content, materials, and resources provided by Rillcod Academy are protected by intellectual property laws. Students may use these materials for personal learning purposes only.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Code of Conduct</h2>
            <ul className="list-disc list-inside mt-2 text-gray-600 space-y-2">
              <li>Respect for all students, teachers, and staff</li>
              <li>No harassment or bullying of any kind</li>
              <li>Proper use of equipment and facilities</li>
              <li>Adherence to safety guidelines</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Liability</h2>
            <p className="text-gray-600">
              Rillcod Academy is not liable for any indirect, incidental, or consequential damages arising from the use of our services or participation in our programs.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Changes to Terms</h2>
            <p className="text-gray-600">
              We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting to our website. Continued use of our services constitutes acceptance of modified terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Contact Information</h2>
            <p className="text-gray-600">
              For questions about these Terms and Conditions, please contact us at:
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

export default Terms;