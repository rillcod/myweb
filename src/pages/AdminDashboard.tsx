import React, { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';

interface SchoolRegistration {
  id: string;
  school_name: string;
  principal_name: string;
  contact_email: string;
  status: string;
  created_at: string;
}

interface StudentRegistration {
  id: string;
  student_name: string;
  parent_name: string;
  parent_email: string;
  status: string;
  created_at: string;
}

const AdminDashboard: React.FC = () => {
  const [schools, setSchools] = useState<SchoolRegistration[]>([]);
  const [students, setStudents] = useState<StudentRegistration[]>([]);
  const [activeTab, setActiveTab] = useState<'schools' | 'students'>('schools');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const { data: schoolData } = await supabase
      .from('school_registrations')
      .select('*')
      .order('created_at', { ascending: false });

    const { data: studentData } = await supabase
      .from('student_registrations')
      .select('*')
      .order('created_at', { ascending: false });

    if (schoolData) setSchools(schoolData);
    if (studentData) setStudents(studentData);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>

      <div className="mb-6">
        <div className="flex space-x-4">
          <button
            className={`px-4 py-2 rounded-lg ${
              activeTab === 'schools'
                ? 'bg-purple-600 text-white'
                : 'bg-gray-200 text-gray-700'
            }`}
            onClick={() => setActiveTab('schools')}
          >
            School Registrations
          </button>
          <button
            className={`px-4 py-2 rounded-lg ${
              activeTab === 'students'
                ? 'bg-purple-600 text-white'
                : 'bg-gray-200 text-gray-700'
            }`}
            onClick={() => setActiveTab('students')}
          >
            Student Registrations
          </button>
        </div>
      </div>

      {activeTab === 'schools' ? (
        <div className="bg-white rounded-lg shadow-md overflow-x-auto">
          <table className="min-w-full">
            <thead>
              <tr className="bg-gray-50">
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  School Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Principal
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Contact Email
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {schools.map((school) => (
                <tr key={school.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {school.school_name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {school.principal_name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {school.contact_email}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`px-2 py-1 text-xs rounded-full ${
                        school.status === 'pending'
                          ? 'bg-yellow-100 text-yellow-800'
                          : 'bg-green-100 text-green-800'
                      }`}
                    >
                      {school.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {new Date(school.created_at).toLocaleDateString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="bg-white rounded-lg shadow-md overflow-x-auto">
          <table className="min-w-full">
            <thead>
              <tr className="bg-gray-50">
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Student Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Parent Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Parent Email
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {students.map((student) => (
                <tr key={student.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {student.student_name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {student.parent_name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {student.parent_email}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`px-2 py-1 text-xs rounded-full ${
                        student.status === 'pending'
                          ? 'bg-yellow-100 text-yellow-800'
                          : 'bg-green-100 text-green-800'
                      }`}
                    >
                      {student.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {new Date(student.created_at).toLocaleDateString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;