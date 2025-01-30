import React from 'react';

const Patients = () => {
  const patients = [
    { id: 1, name: 'John Doe', age: 45, condition: 'Hypertension', lastVisit: '2024-02-15' },
    { id: 2, name: 'Jane Smith', age: 32, condition: 'Diabetes', lastVisit: '2024-02-14' },
    { id: 3, name: 'Mike Johnson', age: 58, condition: 'Arthritis', lastVisit: '2024-02-13' },
  ];

  return (
    <div className="bg-zinc-300 shadow rounded-lg p-6">
      <h2 className="text-xl font-semibold mb-4">Patient List</h2>
      <div className="overflow-x-auto">
        <table className="w-full bg-white border border-gray-300 rounded-lg">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-4 py-2 text-left">ID</th>
              <th className="px-4 py-2 text-left">Name</th>
              <th className="px-4 py-2 text-left">Age</th>
              <th className="px-4 py-2 text-left">Condition</th>
              <th className="px-4 py-2 text-left">Last Visit</th>
            </tr>
          </thead>
          <tbody>
            {patients.map((patient) => (
              <tr key={patient.id} className="border-t">
                <td className="px-4 py-2">{patient.id}</td>
                <td className="px-4 py-2">{patient.name}</td>
                <td className="px-4 py-2">{patient.age}</td>
                <td className="px-4 py-2">{patient.condition}</td>
                <td className="px-4 py-2">{patient.lastVisit}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Patients;