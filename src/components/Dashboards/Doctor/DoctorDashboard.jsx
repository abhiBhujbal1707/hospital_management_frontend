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
    <div className="min-h-screen bg-zinc-500 flex">


      {/* Sidebar */}
      <aside className="w-64 bg-zinc-300 shadow-md p-6">
        <h2 className="text-2xl font-semibold textb mb-6">Doctor Dashboard</h2>
        <ul className="space-y-4">
          <li><a href="#" className="flex items-center gap-3 text-gray-700 hover:text-blue-700"><CgProfile /> Profile</a></li>
          <li><a
            href="#"
            onClick={() => scrollToSection(appointmentSectionRef)}
            className="flex items-center gap-3 text-gray-700 hover:text-blue-700"
          >
            <AiOutlineCalendar /> Appointments
          </a></li>
          <li><a href="#" className="flex items-center gap-3 text-gray-700 hover:text-blue-700"><FaUsers /> Patients</a></li>
          <li><a href="#" className="flex items-center gap-3 text-gray-700 hover:text-blue-700"><FaClipboardList /> Reports</a></li>

          <li><a href="#" className="flex items-center gap-3 text-gray-700 hover:text-blue-700"><FcLeave />Apply For Leave</a></li>
          <li><a href="#" className="flex items-center gap-3 text-gray-700 hover:text-blue-700"><IoSettings />Settings</a></li>
        </ul>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">

        {/* Header */}
        <header className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Welcome, Dr. Smith</h1>

          <div className="flex items-center space-x-4">
            <AiOutlineBell className="text-xl text-gray-600 cursor-pointer hover:text-blue-700" />
            {/* <div className="w-10 h-10 rounded-full bg-gray-300"></div> */}
          </div>
        </header>

        {/* Doctor Profile */}
        <div className='my-10 '>
          <div className="bg-zinc-300 shadow rounded-lg p-6 flex items-center space-x-6 justify-between">
            <div className='bg-zinc-300 shadow rounded-lg p-6 flex items-center space-x-6'>
              <img
                src="/dr.png"
                alt="Doctor Profile"
                className="w-32 h-32 rounded-full border border-gray-300 bg-zinc-300"
              />
              <div>
                <h1 className="text-3xl font-bold text-gray-800">Dr. John Smith</h1>
                <p className="text-blue-700">Cardiologist</p>
                <p className="text-gray-600">Email: dr.john@example.com</p>
                <p className="text-gray-600">Phone: +1 234 567 890</p>
              </div>
            </div>

            <div>
              <div className='bg-zinc-300 shadow rounded-lg p-6 flex flex-col items-center space-x-6'>
                <h2 className='font-bold text-2xl'>Information</h2>
                <div>
                  <p className="mb-2"><span className="font-bold">License Number</span> DL-1420110012345 or DL14 20110012345</p>
                  <p className="mb-2"><span className="font-bold">Specializations:</span> MD, PhD in Cardiology</p>
                  <p className="mb-2"><span className="font-bold">Experience:</span> 15+ years</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Statistics Section */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="p-6 bg-zinc-300 shadow rounded-lg">
            <h3 className="text-lg font-semibold text-gray-700">Total Patients</h3>
            <p className="text-3xl font-bold text-blue-700">150</p>
          </div>
          <div className="p-6 bg-zinc-300 shadow rounded-lg">
            <h3 className="text-lg font-semibold text-gray-700">Completed Appointments</h3>
            <p className="text-3xl font-bold text-blue-700">25</p>
          </div>
          <div className="p-6 bg-zinc-300 shadow rounded-lg">
            <h3 className="text-lg font-semibold text-gray-700">Pending Appointments</h3>
            <p className="text-3xl font-bold text-blue-700">5</p>
          </div>
        </section>

        {/* Calendar Section */}
        <section ref={appointmentSectionRef} className="bg-zinc-300 p-6 shadow rounded-lg">
          <h2 className="text-xl font-semibold text-gray-800 mb-4 flex  justify-center">Todays Appointments</h2>
          <table className="min-w-full bg-white border border-gray-300 rounded-lg">
            <thead className='rounded-lg'>
              <tr className="bg-gray-100 border-b rounded-lg">
                <th className="px-4 py-2 text-left font-medium text-gray-700 rounded-lg">Sr No</th>
                <th className="px-4 py-2 text-left font-medium text-gray-700">Patient Name</th>
                <th className="px-4 py-2 text-left font-medium text-gray-700">Status</th>
                <th className="px-4 py-2 text-left font-medium text-gray-700 rounded-lg">Bill</th>
                <th className="px-4 py-2 text-left font-medium text-gray-700 rounded-lg"></th>           
              </tr>
            </thead>
            <tr  className="border-b">
            <td className="px-4 py-2"> 1</td>
            <td className="px-4 py-2">Jon Doe</td>
            <td className="px-4 py-2">
              <select
                // value={patient.status}
                // onChange={(e) => handleStatusChange(index, e.target.value)}
                className="border rounded px-2 py-1"
              >
                <option value="Incomplete">Incomplete</option>
                <option value="Completed">Completed</option>
              </select>
            </td>
            <td className="px-4 py-2 ">
              <input
                type="number"
                // value={patient.bill}
                // onChange={(e) => handleBillChange(index, e.target.value)}
                className="border rounded px-2 py-1 w-1/2"
                min="0"
              />
            </td>
            <td className='flex'><button className='bg-slate-300 mx-4 my-2 py-2 px-4 rounded-xl w-full flex justify-center items-center gap-2'>Save <FiSave /></button></td>
          </tr>
          </table>
          
        </section>
      </main>
    </div>
  );
};

export default DoctorDashboard;
