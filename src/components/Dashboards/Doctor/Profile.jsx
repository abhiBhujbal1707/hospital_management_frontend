import React from 'react';
import { useState, useContext } from 'react';
import MyContext from '../../../context/MyContext';
const Profile = () => {
  const { Staff, setStaff } = useContext(MyContext);
  const backendImgUrl = 'http://localhost:5002';
  const profileImgURL = backendImgUrl + Staff.profileImage
  console.log(profileImgURL)
  return (
    <div className='my-6 md:my-10 w-full'>
      <div className="bg-zinc-300 shadow rounded-lg p-4 md:p-6 flex flex-col justify-between md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
        <img
          src={profileImgURL}
          alt="Doctor Profile"
          className="w-24 h-24 md:w-32 md:h-32 rounded-full border border-gray-300 object-cover"
        />
        <div>
          <h1 className="text-xl md:text-3xl font-bold text-gray-800">{Staff.firstName} {Staff.lastName
          }</h1>
          <p className="text-blue-700">{Staff.specialization
          }</p>
          <p className="text-gray-600">{Staff.
            email}</p>
          <p className="text-gray-600">{Staff.phone
          }</p>
        </div>
        <div className='flex-1'>
          <div className='bg-zinc-300 shadow rounded-lg p-4 md:p-6'>
            <h2 className='font-bold text-xl md:text-2xl'>Information</h2>
            <div>
              <p className="mb-2"><span className="font-bold">License Number:</span> {Staff.licenseNumber}</p>
              <p className="mb-2"><span className="font-bold">Specializations:</span>{Staff.specialization}</p>
              <p className="mb-2"><span className="font-bold">Experience:</span> {Staff.experience}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;