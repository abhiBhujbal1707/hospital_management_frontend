// import React from 'react';
// import { Save } from 'lucide-react';

// const Appointments = () => {
//   return (
//     <>
//       {/* Statistics Section */}
//       <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mb-6 md:mb-8">
//         <div className="p-4 md:p-6 bg-zinc-300 shadow rounded-lg">
//           <h3 className="text-lg font-semibold text-gray-700">Total Appointments</h3>
//           <p className="text-2xl md:text-3xl font-bold text-blue-700">150</p>
//         </div>
//         <div className="p-4 md:p-6 bg-zinc-300 shadow rounded-lg">
//           <h3 className="text-lg font-semibold text-gray-700">Completed Appointments</h3>
//           <p className="text-2xl md:text-3xl font-bold text-blue-700">25</p>
//         </div>
//         <div className="p-4 md:p-6 bg-zinc-300 shadow rounded-lg">
//           <h3 className="text-lg font-semibold text-gray-700">Pending Appointments</h3>
//           <p className="text-2xl md:text-3xl font-bold text-blue-700">5</p>
//         </div>
//       </section>

//       {/* Appointments Table */}
//       <section className="bg-zinc-300 p-4 md:p-6 shadow rounded-lg">
//         <h2 className="text-lg md:text-xl font-semibold text-gray-800 mb-4 text-center">Today's Appointments</h2>
//         <div className="overflow-x-auto">
//           <table className="w-full bg-white border border-gray-300 rounded-lg">
//             <thead>
//               <tr className="bg-gray-100 border-b">
//                 <th className="px-2 md:px-4 py-2 text-left font-medium text-gray-700">Sr No</th>
//                 <th className="px-2 md:px-4 py-2 text-left font-medium text-gray-700">Patient Name</th>
//                 <th className="px-2 md:px-4 py-2 text-left font-medium text-gray-700">Status</th>
//                 <th className="px-2 md:px-4 py-2 text-left font-medium text-gray-700">Consultancy Fee</th>
//                 <th className="px-2 md:px-4 py-2 text-left font-medium text-gray-700"></th>
//               </tr>
//             </thead>
//             <tbody>
//               {[1, 2, 3].map((index) => (
//                 <tr key={index} className="border-b">
//                   <td className="px-2 md:px-4 py-2">{index}</td>
//                   <td className="px-2 md:px-4 py-2">Jon Doe</td>
//                   <td className="px-2 md:px-4 py-2">
//                     <select className="border rounded px-2 py-1 w-full">
//                       <option value="Incomplete">Incomplete</option>
//                       <option value="Completed">Completed</option>
//                     </select>
//                   </td>
//                   <td className="px-2 md:px-4 py-2">
//                     <input type="number" className="border rounded px-2 py-1 w-full" min="0" />
//                   </td>
//                   <td className="px-2 md:px-4 py-2">
//                     <button className="bg-slate-300 mx-2 my-1 py-1 px-2 rounded-lg flex items-center gap-2">
//                       Save <Save size={16} />
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </section>
//     </>
//   );
// };

// export default Appointments;

import React, { useState } from 'react';
import { Save } from 'lucide-react';

const Appointments = () => {
  const [appointments, setAppointments] = useState([
    { id: 1, name: 'Jon Doe', status: 'Incomplete', fee: '', prescription: '' },
    { id: 2, name: 'Jane Smith', status: 'Incomplete', fee: '', prescription: '' },
    { id: 3, name: 'Alice Johnson', status: 'Incomplete', fee: '', prescription: '' },
  ]);

  const handlePrescriptionChange = (index, value) => {
    const updatedAppointments = [...appointments];
    updatedAppointments[index].prescription = value;
    setAppointments(updatedAppointments);
  };

  const handleSave = (index) => {
    console.log(`Prescription for ${appointments[index].name}:`, appointments[index].prescription);
    // Save logic here (e.g., send to backend)
  };

  return (
    <>
      {/* Statistics Section */}
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mb-6 md:mb-8">
        <div className="p-4 md:p-6 bg-zinc-300 shadow rounded-lg">
          <h3 className="text-lg font-semibold text-gray-700">Total Appointments</h3>
          <p className="text-2xl md:text-3xl font-bold text-blue-700">150</p>
        </div>
        <div className="p-4 md:p-6 bg-zinc-300 shadow rounded-lg">
          <h3 className="text-lg font-semibold text-gray-700">Completed Appointments</h3>
          <p className="text-2xl md:text-3xl font-bold text-blue-700">25</p>
        </div>
        <div className="p-4 md:p-6 bg-zinc-300 shadow rounded-lg">
          <h3 className="text-lg font-semibold text-gray-700">Pending Appointments</h3>
          <p className="text-2xl md:text-3xl font-bold text-blue-700">5</p>
        </div>
      </section>

      {/* Appointments Table */}
      <section className="bg-zinc-300 p-4 md:p-6 shadow rounded-lg">
        <h2 className="text-lg md:text-xl font-semibold text-gray-800 mb-4 text-center">Today's Appointments</h2>
        <div className="overflow-x-auto">
          <table className="w-full bg-white border border-gray-300 rounded-lg">
            <thead>
              <tr className="bg-gray-100 border-b">
                <th className="px-2 md:px-4 py-2 text-left font-medium text-gray-700">Sr No</th>
                <th className="px-2 md:px-4 py-2 text-left font-medium text-gray-700">Patient Name</th>
                <th className="px-2 md:px-4 py-2 text-left font-medium text-gray-700">Status</th>
                <th className="px-2 md:px-4 py-2 text-left font-medium text-gray-700">Consultancy Fee</th>
                <th className="px-2 md:px-4 py-2 text-left font-medium text-gray-700">Prescription</th>
                <th className="px-2 md:px-4 py-2 text-left font-medium text-gray-700"></th>
              </tr>
            </thead>
            <tbody>
              {appointments.map((appointment, index) => (
                <tr key={appointment.id} className="border-b">
                  <td className="px-2 md:px-4 py-2">{index + 1}</td>
                  <td className="px-2 md:px-4 py-2">{appointment.name}</td>
                  <td className="px-2 md:px-4 py-2">
                    <select className="border rounded px-2 py-1 w-full">
                      <option value="Incomplete" selected={appointment.status === 'Incomplete'}>
                        Incomplete
                      </option>
                      <option value="Completed" selected={appointment.status === 'Completed'}>
                        Completed
                      </option>
                    </select>
                  </td>
                  <td className="px-2 md:px-4 py-2">
                    <input
                      type="number"
                      className="border rounded px-2 py-1 w-full"
                      value={appointment.fee}
                      min="0"
                    />
                  </td>
                  <td className="px-2 md:px-4 py-2">
                    <textarea
                      className="border rounded px-2 py-1 w-full"
                      rows="2"
                      placeholder="Enter Prescription"
                      value={appointment.prescription}
                      onChange={(e) => handlePrescriptionChange(index, e.target.value)}
                    />
                  </td>
                  <td className="px-2 md:px-4 py-2">
                    <button
                      className="bg-slate-300 mx-2 my-1 py-1 px-2 rounded-lg flex items-center gap-2"
                      onClick={() => handleSave(index)}
                    >
                      Save <Save size={16} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
};

export default Appointments;
