// import React, { useState } from "react";

// const TimeSlots = ({onSelectTime,checkAppointmentConflict}) => {
//   const slots = [
//     { time: "10:00 AM", available: true },
//     { time: "10:45 AM", available: true },
//     { time: "11:30 AM", available: true },
//     { time: "12:15 PM", available: true },
//     { time: "01:00 PM", available: false, break: "Lunch Break" },
//     { time: "01:45 PM", available: true },
//     { time: "02:30 PM", available: true },
//     { time: "03:15 PM", available: true },
//     { time: "04:00 PM", available: true },
//     { time: "04:15 PM", available: false, break: "Tea Break" },
//     { time: "04:45 PM", available: true },
//     { time: "05:30 PM", available: true },
//     { time: "06:00 PM", available: true },
//   ];

//   const emergencySlots = [
//     { time: "10:00 AM", available: false, emergency: "Emergency Booking Reserved" },
//     { time: "06:00 PM", available: false, emergency: "Emergency Booking Reserved" },
//   ];

//   const handleSlotClick = (slot) => {
//     if (!slot.available) {
//       alert("This slot is unavailable.");
//       return;
//     }
  
//     const conflictMessage = checkAppointmentConflict(slot.time, "Dr. Smith"); // Replace "Dr. Smith" with the actual selected doctor
//     if (conflictMessage) {
//       alert(conflictMessage);  // Show conflict message
//       return;
//     }
  
//     alert(`You have selected the ${slot.time} slot.`);
//     onSelectTime(slot.time);
//   };
  

//   return (
//     <div className="p-4 space-y-2">
//       <h3 className="text-lg font-semibold mb-4">Select a Time Slot</h3>
//       <div className="grid grid-cols-4 gap-2">
//         {slots.map(
//           (slot, index) =>
//             !slot.break && (
//               <button
//                 key={index}
//                 className={`w-full p-2 text-sm text-center rounded ${!slot.available ? 'bg-gray-400 text-white' : 'bg-blue-500 text-white'}`}
//                 disabled={!slot.available}
//                 onClick={() => handleSlotClick(slot)}
//               >
//                 {slot.time}
//               </button>
//             )
//         )}
//         {emergencySlots.map((slot, index) => (
//           <button
//             key={index}
//             className="w-full p-2 text-sm text-center rounded bg-red-500 text-white"
//             disabled
//           >
//             {slot.time} - {slot.emergency}
//           </button>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default TimeSlots;
import React from "react";

const TimeSlots = ({ onSelectTime }) => {
  const slots = [
    { time: "10:00 AM", available: true },
    { time: "10:45 AM", available: true },
    { time: "11:30 AM", available: true },
    { time: "12:15 PM", available: true },
    { time: "01:00 PM", available: false, break: "Lunch Break" },
    { time: "01:45 PM", available: true },
    { time: "02:30 PM", available: true },
    { time: "03:15 PM", available: true },
    { time: "04:00 PM", available: true },
    { time: "04:15 PM", available: false, break: "Tea Break" },
    { time: "04:45 PM", available: true },
    { time: "05:30 PM", available: true },
    { time: "06:00 PM", available: true },
  ];

  const handleSlotClick = (slot) => {
    if (!slot.available) {
      alert("This slot is unavailable.");
      return;
    }

    console.log(`Time Slot Selected: ${slot.time}`);
    onSelectTime(slot.time); // Pass the selected time to Appointment.jsx
  };

  return (
    <div className="p-4 space-y-2">
      <h3 className="text-lg font-semibold mb-4">Select a Time Slot</h3>
      <div className="grid grid-cols-4 gap-2">
        {slots.map(
          (slot, index) =>
            !slot.break && (
              <button
                key={index}
                className={`w-full p-2 text-sm text-center rounded ${
                  slot.available ? "bg-blue-500 text-white" : "bg-gray-400 text-white"
                }`}
                disabled={!slot.available}
                onClick={() => handleSlotClick(slot)}
              >
                {slot.time}
              </button>
            )
        )}
      </div>
    </div>
  );
};

export default TimeSlots;
