


import React, { useRef } from 'react';
import { AiOutlineBell, AiOutlineCalendar, AiOutlineUser } from 'react-icons/ai';
import { FaClipboardList, FaUsers } from 'react-icons/fa';
import { FcLeave } from "react-icons/fc";
import { IoSettings } from "react-icons/io5";
import { CgProfile, CgDetailsMore } from "react-icons/cg";
import { FiSave } from "react-icons/fi";

const DoctorDashboard = () => {
  const appointmentSectionRef = useRef(null);

  const scrollToSection = (sectionRef) => {
    sectionRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-zinc-500 flex flex-col md:flex-row">

      {/* Sidebar */}
      <aside className="w-full md:w-64 bg-zinc-300 shadow-md p-6">
        <h2 className="text-2xl font-semibold mb-6">Doctor Dashboard</h2>
        <ul className="space-y-4">
          <li><a href="#" className="flex items-center gap-3 text-gray-700 hover:text-blue-700"><CgProfile /> Profile</a></li>
          <li><a href="#" onClick={() => scrollToSection(appointmentSectionRef)} className="flex items-center gap-3 text-gray-700 hover:text-blue-700"><AiOutlineCalendar /> Appointments</a></li>
          <li><a href="#" className="flex items-center gap-3 text-gray-700 hover:text-blue-700"><FaUsers /> Patients</a></li>
          <li><a href="#" className="flex items-center gap-3 text-gray-700 hover:text-blue-700"><FaClipboardList /> Reports</a></li>
          <li><a href="#" className="flex items-center gap-3 text-gray-700 hover:text-blue-700"><FcLeave /> Apply For Leave</a></li>
          <li><a href="#" className="flex items-center gap-3 text-gray-700 hover:text-blue-700"><IoSettings /> Settings</a></li>
        </ul>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-4 md:p-8">

        {/* Header */}
        <header className="flex items-center justify-between mb-8">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800">Welcome, Dr. Smith</h1>
          <div className="flex items-center space-x-4">
            <AiOutlineBell className="text-lg md:text-xl text-gray-600 cursor-pointer hover:text-blue-700" />
          </div>
        </header>

        {/* Doctor Profile */}
        <div className='my-6 md:my-10  w-full '>
          <div className="bg-zinc-300 shadow rounded-lg p-4 md:p-6 flex flex-col justify-between md:flex-row  items-center space-y-4  md:space-y-0 md:space-x-6">
            <img src="/dr.png" alt="Doctor Profile" className="w-24 h-24 md:w-32 md:h-32 rounded-full border border-gray-300" />
            <div>
              <h1 className="text-xl md:text-3xl font-bold text-gray-800">Dr. John Smith</h1>
              <p className="text-blue-700">Cardiologist</p>
              <p className="text-gray-600">Email: dr.john@example.com</p>
              <p className="text-gray-600">Phone: +1 234 567 890</p>
            </div>
            <div className='flex-1'>
              <div className='bg-zinc-300 shadow rounded-lg p-4 md:p-6'>
                <h2 className='font-bold text-xl md:text-2xl'>Information</h2>
                <div>
                  <p className="mb-2"><span className="font-bold">License Number:</span> DL-1420110012345</p>
                  <p className="mb-2"><span className="font-bold">Specializations:</span> MD, PhD in Cardiology</p>
                  <p className="mb-2"><span className="font-bold">Experience:</span> 15+ years</p>
                </div>
              </div>
            </div>
          </div>
        </div>

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

        {/* Calendar Section */}
        <section ref={appointmentSectionRef} className="bg-zinc-300 p-4 md:p-6 shadow rounded-lg">
          <h2 className="text-lg md:text-xl font-semibold text-gray-800 mb-4 text-center">Today's Appointments</h2>
          <div className="overflow-x-auto">
            <table className="w-full bg-white border border-gray-300 rounded-lg">
              <thead>
                <tr className="bg-gray-100 border-b">
                  <th className="px-2 md:px-4 py-2 text-left font-medium text-gray-700">Sr No</th>
                  <th className="px-2 md:px-4 py-2 text-left font-medium text-gray-700">Patient Name</th>
                  <th className="px-2 md:px-4 py-2 text-left font-medium text-gray-700">Status</th>
                  <th className="px-2 md:px-4 py-2 text-left font-medium text-gray-700">Bill</th>
                  <th className="px-2 md:px-4 py-2 text-left font-medium text-gray-700"></th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="px-2 md:px-4 py-2">1</td>
                  <td className="px-2 md:px-4 py-2">Jon Doe</td>
                  <td className="px-2 md:px-4 py-2">
                    <select className="border rounded px-2 py-1 w-full">
                      <option value="Incomplete">Incomplete</option>
                      <option value="Completed">Completed</option>
                    </select>
                  </td>
                  <td className="px-2 md:px-4 py-2">
                    <input type="number" className="border rounded px-2 py-1 w-full" min="0" />
                  </td>
                  <td className="px-2 md:px-4 py-2">
                    <button className="bg-slate-300 mx-2 my-1 py-1 px-2 rounded-lg flex items-center gap-2">Save <FiSave /></button>
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="px-2 md:px-4 py-2">1</td>
                  <td className="px-2 md:px-4 py-2">Jon Doe</td>
                  <td className="px-2 md:px-4 py-2">
                    <select className="border rounded px-2 py-1 w-full">
                      <option value="Incomplete">Incomplete</option>
                      <option value="Completed">Completed</option>
                    </select>
                  </td>
                  <td className="px-2 md:px-4 py-2">
                    <input type="number" className="border rounded px-2 py-1 w-full" min="0" />
                  </td>
                  <td className="px-2 md:px-4 py-2">
                    <button className="bg-slate-300 mx-2 my-1 py-1 px-2 rounded-lg flex items-center gap-2">Save <FiSave /></button>
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="px-2 md:px-4 py-2">1</td>
                  <td className="px-2 md:px-4 py-2">Jon Doe</td>
                  <td className="px-2 md:px-4 py-2">
                    <select className="border rounded px-2 py-1 w-full">
                      <option value="Incomplete">Incomplete</option>
                      <option value="Completed">Completed</option>
                    </select>
                  </td>
                  <td className="px-2 md:px-4 py-2">
                    <input type="number" className="border rounded px-2 py-1 w-full" min="0" />
                  </td>
                  <td className="px-2 md:px-4 py-2">
                    <button className="bg-slate-300 mx-2 my-1 py-1 px-2 rounded-lg flex items-center gap-2">Save <FiSave /></button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </main>
    </div>
  );
};

export default DoctorDashboard;
