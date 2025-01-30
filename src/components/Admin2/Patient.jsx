import React from 'react';

const Patients = () => {
  const allPatients = [
    { id: 1, name: 'Sarah Johnson', age: 45, status: 'Admitted', department: 'Cardiology', date: '2024-03-15', contact: '+1 234-567-8901', email: 'sarah.j@email.com' },
    { id: 2, name: 'Michael Chen', age: 32, status: 'Discharged', department: 'Orthopedics', date: '2024-03-14', contact: '+1 234-567-8902', email: 'michael.c@email.com' },
    { id: 3, name: 'Emma Davis', age: 28, status: 'Pending', department: 'Neurology', date: '2024-03-14', contact: '+1 234-567-8903', email: 'emma.d@email.com' },
    { id: 4, name: 'James Wilson', age: 52, status: 'Admitted', department: 'Pediatrics', date: '2024-03-13', contact: '+1 234-567-8904', email: 'james.w@email.com' },
    { id: 5, name: 'Linda Garcia', age: 39, status: 'Discharged', department: 'Surgery', date: '2024-03-12', contact: '+1 234-567-8905', email: 'linda.g@email.com' },
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <div className="flex items-center justify-between mb-6">  
        <h2 className="text-lg font-semibold text-gray-800">All Patients</h2>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">Add New Patient</button>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="text-left text-sm font-medium text-gray-500">
              <th className="pb-4">Patient Name</th>
              <th className="pb-4">Age</th>
              <th className="pb-4">Department</th>
              <th className="pb-4">Status</th>
              <th className="pb-4">Contact</th>
              <th className="pb-4">Email</th>
              <th className="pb-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {allPatients.map((patient) => (
              <tr key={patient.id} className="border-t border-gray-100">
                <td className="py-4">
                  <div className="font-medium text-gray-900">{patient.name}</div>
                </td>
                <td className="py-4 text-gray-600">{patient.age}</td>
                <td className="py-4 text-gray-600">{patient.department}</td>
                <td className="py-4">
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium
                    ${patient.status === 'Admitted' ? 'bg-green-100 text-green-800' :
                      patient.status === 'Discharged' ? 'bg-gray-100 text-gray-800' :
                        'bg-yellow-100 text-yellow-800'
                    }`}>
                    {patient.status}
                  </span>
                </td>
                <td className="py-4 text-gray-600">{patient.contact}</td>
                <td className="py-4 text-gray-600">{patient.email}</td>
                <td className="py-4">
                  <button className="text-blue-600 hover:text-blue-700 mr-3">Edit</button>
                  <button className="text-red-600 hover:text-red-700">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Patients;