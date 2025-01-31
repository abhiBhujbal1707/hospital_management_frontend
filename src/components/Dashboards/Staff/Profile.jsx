import React from 'react';

const Profile = () => {
  return (
    <div className='my-6 md:my-10 w-full'>
      <div className="bg-zinc-300 shadow rounded-lg p-4 md:p-6 flex flex-col justify-between md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
        <img
          src="/profile.png"
          alt="Receptionist Profile"
          className="w-24 h-24 md:w-32 md:h-32 rounded-full border border-gray-300 object-cover"
        />
        <div>
          <h1 className="text-xl md:text-3xl font-bold text-gray-800">Alice Johnson</h1>
          <p className="text-blue-700">Receptionist</p>
          <p className="text-gray-600">Email: alice.johnson@example.com</p>
          <p className="text-gray-600">Phone: +1 234 567 891</p>
        </div>
        <div className='flex-1'>
          <div className='bg-zinc-300 shadow rounded-lg p-4 md:p-6'>
            <h2 className='font-bold text-xl md:text-2xl'>Information</h2>
            <div>
              <p className="mb-2"><span className="font-bold">Employee ID:</span> RE-305201</p>
              <p className="mb-2"><span className="font-bold">Department:</span> Front Desk</p>
              <p className="mb-2"><span className="font-bold">Office Location:</span> 2nd Floor, Reception Area</p>
              <p className="mb-2"><span className="font-bold">Experience:</span> 5+ years</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
