// // import React from 'react';
// // import { useContext } from 'react';
// // import MyContext from '../../../context/MyContext';

// // const Profile = () => {
// //   const {Staff , setStaff} = useContext(MyContext)
// //   console.log(Staff.firstName)
// //   return (
// //     <div className='my-6 md:my-10 w-full'>
// //       <div className="bg-zinc-300 shadow rounded-lg p-4 md:p-6 flex flex-col justify-between md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
// //         <img
// //           src="/profile.png"
// //           alt="Receptionist Profile"
// //           className="w-24 h-24 md:w-32 md:h-32 rounded-full border border-gray-300 object-cover"
// //         />
// //         <div>
// //           <h1 className="text-xl md:text-3xl font-bold text-gray-800">{Staff.firstName} {Staff.lastName}</h1>
// //           <p className="text-blue-700">Receptionist</p>
// //           <p className="text-gray-600">{Staff.email}</p>
// //           <p className="text-gray-600">{Staff.phone}</p>
// //         </div>
// //         <div className='flex-1'>
// //           <div className='bg-zinc-300 shadow rounded-lg p-4 md:p-6'>
// //             <h2 className='font-bold text-xl md:text-2xl'>Information</h2>
// //             <div>
// //               <p className="mb-2"><span className="font-bold">Employee ID:</span> RE-305201</p>
// //               <p className="mb-2"><span className="font-bold">Department:</span> Front Desk</p>
// //               <p className="mb-2"><span className="font-bold">Office Location:</span> 2nd Floor, Reception Area</p>
// //               <p className="mb-2"><span className="font-bold">Experience:</span> 5+ years</p>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Profile;

// import React, { useContext } from "react";
// import MyContext from "../../../context/MyContext";

// const Profile = () => {
//   const { Staff } = useContext(MyContext);

//   // Backend URL (Modify if needed)
//   const backendUrl = "http://localhost:5116"; // Change this if your API is running on a different port

//   // Construct the full image URL
//   const profileImageUrl = Staff.imageUrl
//     ? `${backendUrl}${Staff.imageUrl}`
//     : "/profile.png"; // Default image if no profile image exists
//   console.log(profileImageUrl);
//   console.log(Staff);
//   return (
//     <div className="my-6 md:my-10 w-full">
//       <div className="bg-zinc-300 shadow rounded-lg p-4 md:p-6 flex flex-col justify-between md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
//         {/* Display Profile Image */}
//         <img
//           src={profileImageUrl}
//           alt="Staff Profile"
//           className="w-24 h-24 md:w-32 md:h-32 rounded-full border border-gray-300 object-cover"
//         />
//         <div>
//           <h1 className="text-xl md:text-3xl font-bold text-gray-800">
//             {Staff.firstName} {Staff.lastName}
//           </h1>
//           <p className="text-blue-700">{Staff.role}</p>
//           <p className="text-gray-600">{Staff.email}</p>
//           <p className="text-gray-600">{Staff.phone}</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Profile;
import React, { useContext } from "react";
import MyContext from "../../../context/MyContext";
import { IoIosCall } from "react-icons/io";
const Profile = () => {
  const { Staff } = useContext(MyContext);
console.log("Staff state", Staff)
  // Backend URL (Modify if needed)
  const backendUrl = "http://localhost:5002"; // Change this if your API is running on a different port

  // Construct the full image URL
  const profileImageUrl = Staff.imageUrl
    ? `${backendUrl}${Staff.imageUrl}`
    : "/profile.png"; // Default image if no profile image exists

  return (
    <div className="my-6 md:my-10 w-full flex justify-center">
      <div className="bg-white shadow-lg rounded-2xl p-6 md:p-8 w-full max-w-3xl flex flex-col md:flex-row items-center gap-6">
        {/* Profile Image */}
        <img
          src={`http://localhost:5002${Staff.
            profileImage
            }`}
          alt="Staff Profile"
          className="w-28 h-28 md:w-36 md:h-36 rounded-full border-4 border-gray-200 object-cover shadow-md"
        />
        {/* Staff Details */}
        <div className="text-center md:text-left space-y-2">
          <h1 className="text-2xl md:text-3xl font-semibold text-gray-800">
            {Staff.firstName} {Staff.lastName}
          </h1>
          <p className="text-blue-600 text-lg font-medium">{Staff.role}</p>
          <p className="text-gray-600">{Staff.email}</p>
          <p className="text-gray-600 flex"><IoIosCall />{Staff.phone}</p>
          <p className="text-gray-600">{Staff.phone}</p>
          
        </div>
      </div>
    </div>
  );
};

export default Profile;
