import React from 'react';
import { TrendingUp } from 'lucide-react';

const Dashboard = ({ selectedPeriod, currentData }) => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        {currentData.stats.map((stat) => (
          <div key={stat.title} className="bg-white rounded-xl p-6 shadow-sm">
            <h3 className="text-sm font-medium text-gray-500">{stat.title}</h3>
            <div className="mt-2 flex items-baseline justify-between">
              <p className="text-2xl font-semibold text-gray-900">{stat.value}</p>
              <div className="flex items-center">
                <TrendingUp size={16} className="text-green-500 mr-1" />
                <span className="text-sm font-medium text-green-600">{stat.change}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-xl shadow-sm p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-gray-800">
            Recent Patients ({selectedPeriod.charAt(0).toUpperCase() + selectedPeriod.slice(1)} Report)
          </h2>
          <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">View all</button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="text-left text-sm font-medium text-gray-500">
                <th className="pb-4">Patient Name</th>
                <th className="pb-4">Department</th>
                <th className="pb-4">Status</th>
                <th className="pb-4">Date</th>
              </tr>
            </thead>
            <tbody>
              {currentData.patients.map((patient) => (
                <tr key={patient.id} className="border-t border-gray-100">
                  <td className="py-4">
                    <div className="font-medium text-gray-900">{patient.name}</div>
                  </td>
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
                  <td className="py-4 text-gray-600">{patient.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;