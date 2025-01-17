import React from 'react';

const Profile = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Profile Header */}
      <div className="bg-white shadow rounded-lg p-6 flex items-center space-x-6">
        <img
          src="/doctor-profile.jpg"
          alt="Doctor Profile"
          className="w-32 h-32 rounded-full border border-gray-300"
        />
        <div>
          <h1 className="text-3xl font-bold text-gray-800">Dr. John Smith</h1>
          <p className="text-blue-700">Cardiologist</p>
          <p className="text-gray-600">Email: dr.john@example.com</p>
          <p className="text-gray-600">Phone: +1 234 567 890</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        {/* Left Column */}
        <div className="md:col-span-1">
          <div className="bg-white p-6 shadow rounded-lg">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Profile Information</h2>
            <p className="mb-2"><span className="font-bold">License Number</span> DL-1420110012345 or DL14 20110012345</p>
            <p className="mb-2"><span className="font-bold">Specializations:</span> MD, PhD in Cardiology</p>
            <p className="mb-2"><span className="font-bold">Experience:</span> 15+ years</p>
          </div>
        </div>

        {/* Right Column */}
        <div className="md:col-span-2">
          <div className="bg-white p-6 shadow rounded-lg">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Manage</h2>
            <div className="flex space-x-4 mb-6">
              <button className="px-4 py-2 bg-blue-700 text-white rounded-lg">Appointments</button>
              <button className="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg">Patients</button>
              <button className="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg">Reports</button>
              <button className="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg">Prescriptions</button>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">Upcoming Appointments</h3>
              <ul className="space-y-2">
                <li className="p-4 bg-gray-50 rounded-lg shadow">Appointment with Jane Doe - 11:00 AM</li>
                <li className="p-4 bg-gray-50 rounded-lg shadow">Appointment with Mark Lee - 2:00 PM</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
