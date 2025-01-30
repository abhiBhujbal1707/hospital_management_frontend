import React from 'react';

const Appointments = () => {
  const appointments = [
    { id: 1, patientName: 'Sarah Johnson', department: 'Cardiology', doctor: 'Dr. Smith', date: '2024-03-20', time: '10:00 AM', status: 'Scheduled' },
    { id: 2, patientName: 'Michael Chen', department: 'Orthopedics', doctor: 'Dr. Brown', date: '2024-03-21', time: '2:30 PM', status: 'Confirmed' },
    { id: 3, patientName: 'Emma Davis', department: 'Neurology', doctor: 'Dr. Wilson', date: '2024-03-22', time: '11:15 AM', status: 'Pending' },
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold text-gray-800">Appointments</h2>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">Schedule Appointment</button>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="text-left text-sm font-medium text-gray-500">
              <th className="pb-4">Patient Name</th>
              <th className="pb-4">Department</th>
              <th className="pb-4">Doctor</th>
              <th className="pb-4">Date</th>
              <th className="pb-4">Time</th>
              <th className="pb-4">Status</th>
              <th className="pb-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {appointments.map((appointment) => (
              <tr key={appointment.id} className="border-t border-gray-100">
                <td className="py-4">
                  <div className="font-medium text-gray-900">{appointment.patientName}</div>
                </td>
                <td className="py-4 text-gray-600">{appointment.department}</td>
                <td className="py-4 text-gray-600">{appointment.doctor}</td>
                <td className="py-4 text-gray-600">{appointment.date}</td>
                <td className="py-4 text-gray-600">{appointment.time}</td>
                <td className="py-4">
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium
                    ${appointment.status === 'Confirmed' ? 'bg-green-100 text-green-800' :
                      appointment.status === 'Scheduled' ? 'bg-blue-100 text-blue-800' :
                        'bg-yellow-100 text-yellow-800'
                    }`}>
                    {appointment.status}
                  </span>
                </td>
                <td className="py-4">
                  <button className="text-blue-600 hover:text-blue-700 mr-3">Edit</button>
                  <button className="text-red-600 hover:text-red-700">Cancel</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Appointments;