import React from 'react';

const Profile = () => {
  return (
    <div className='my-6 md:my-10 w-full'>
      <div className="bg-zinc-300 shadow rounded-lg p-4 md:p-6 flex flex-col justify-between md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
        <img
          src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
          alt="Doctor Profile"
          className="w-24 h-24 md:w-32 md:h-32 rounded-full border border-gray-300 object-cover"
        />
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
  );
};

export default Profile;