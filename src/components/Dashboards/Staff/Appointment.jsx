
// import React, { useState, useContext, useEffect } from "react";
// import { useForm } from "react-hook-form";
// import TimeSlots from "../../Slots/TimeSlots";
// import MyContext from "../../../context/MyContext";
// import AppointmentBooking from "../../AppointmentComponent";
// const Appointment = () => {
//   const { register, handleSubmit, formState: { errors }, reset, setError } = useForm();
//   const [selectedTime, setSelectedTime] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [message, setMessage] = useState(null);
//   const { Appointment, setAppointment } = useContext(MyContext);

//   // Function to handle time slot selection
//   const handleTimeSelect = (time) => {
//     setSelectedTime(time);
//     console.log(`Time Slot Selected: ${time}`);
//   };

//   // Log Appointment state whenever it updates
//   useEffect(() => {
//     console.log("Updated Appointment State:", Appointment);
//   }, [Appointment]);

//   const onSubmit = async (data) => {
//     if (!selectedTime) {
//       setError("time", { type: "manual", message: "Please select a time slot" });
//       return;
//     }

//     const appointmentDetails = {
//       firstName: data.fname,
//       lastName: data.lname,
//       phoneNumber: data.phone,
//       doctorName: data.drname,
//       time: selectedTime
//     };

//     // ✅ Update state without await
//     setAppointment(appointmentDetails);

//     console.log("Submitting Appointment:", appointmentDetails);

//     setLoading(true);
//     setMessage(null);

//     try {
//       const response = await fetch("http://localhost:5116/api/appointments", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(appointmentDetails),
//       });

//       const result = await response.json();
//       if (response.ok) {
//         setMessage({ type: "success", text: "Appointment booked successfully!" });
//         reset();
//         setSelectedTime("");
//       } else {
//         setMessage({ type: "error", text: result.message || "Failed to book appointment." });
//       }
//     } catch (error) {
//       setMessage({ type: "error", text: "Server error. Please try again later." });
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="bg-zinc-300 border shadow-lg rounded-lg p-6 flex-1">
//       <h3 className="text-xl font-semibold mb-4 border-b pb-2">Schedule Appointment</h3>
      
//       {message && (
//         <p className={`text-sm mb-4 ${message.type === "success" ? "text-green-600" : "text-red-600"}`}>
//           {message.text}
//         </p>
//       )}

//       <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
//         <div>
//           <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
//           <input
//             type="text"
//             {...register("fname", { required: "First name is required" })}
//             className="w-full h-12 pl-2 bg-zinc-100 border-gray-300 rounded-lg shadow-sm"
//           />
//           {errors.fname && <p className="text-sm text-red-600 mt-1">{errors.fname.message}</p>}
//         </div>

//         <div>
//           <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
//           <input
//             type="text"
//             {...register("lname", { required: "Last name is required" })}
//             className="w-full h-12 pl-2 bg-zinc-100 border-gray-300 rounded-lg shadow-sm"
//           />
//           {errors.lname && <p className="text-sm text-red-600 mt-1">{errors.lname.message}</p>}
//         </div>

//         <div>
//           <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
//           <input
//             type="tel"
//             {...register("phone", {
//               required: "Phone number is required",
//               pattern: { value: /^[0-9]{10}$/, message: "Enter a valid 10-digit phone number" },
//             })}
//             className="w-full h-12 pl-2 bg-zinc-100 border-gray-300 rounded-lg shadow-sm"
//           />
//           {errors.phone && <p className="text-sm text-red-600 mt-1">{errors.phone.message}</p>}
//         </div>

//         <div>
//           <label className="block text-sm font-medium text-gray-700 mb-1">Doctor Name</label>
//           <input
//             type="text"
//             {...register("drname", { required: "Doctor Name is required" })}
//             className="w-full h-12 pl-2 bg-zinc-100 border-gray-300 rounded-lg shadow-sm"
//           />
//           {errors.drname && <p className="text-sm text-red-600 mt-1">{errors.drname.message}</p>}
//         </div>

//         <div>
//           <label className="block text-sm font-medium text-gray-700 mb-1">Time</label>
//           <input
//             type="time"
//             value={selectedTime}
//             readOnly
//             className="w-full h-12 pl-2 bg-zinc-100 border-gray-300 rounded-lg shadow-sm"
//           />
//           <TimeSlots onSelectTime={handleTimeSelect} />
//           {errors.time && <p className="text-sm text-red-600 mt-1">{errors.time.message}</p>}
//         </div>

//         <div>
//           <button
//             type="submit"
//             disabled={loading}
//             className="bg-blue-500 text-white px-6 py-2 rounded-lg shadow hover:bg-blue-600 focus:outline-none"
//           >
//             {loading ? "Submitting..." : "Submit"}
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default Appointment;


import React, { useState, useContext, useEffect } from "react";
// import AppointmentBooking from "../../AppointmentComponent"; // Import the new component
// import MyContext from "../../../context/MyContext";
import MyContext from "../../../context/MyContext";
import AppointmentBooking from "../../AppointmentComponent";
const Appointment = () => {
  const [appointments, setAppointments] = useState([]); // Store fetched appointments
  const { setAppointment } = useContext(MyContext);
  const [message, setMessage] = useState(null);

  // Fetch Appointments from Backend
  useEffect(() => {
    fetchAppointments();
  }, []);

  const fetchAppointments = async () => {
    try {
      const response = await fetch("http://localhost:5002/api/appointments");
      const data = await response.json();
      setAppointments(data); // Store appointments in state
    } catch (error) {
      console.error("Error fetching appointments:", error);
      setMessage({ type: "error", text: "Failed to load appointments." });
    }
  };

  // Function to delete an appointment
  const deleteAppointment = async (id) => {
    if (!window.confirm("Are you sure you want to delete this appointment?")) return;

    try {
      const response = await fetch(`http://localhost:5002/api/appointments/${id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        setMessage({ type: "success", text: "Appointment deleted successfully!" });
        fetchAppointments(); // Refresh list after deletion
      } else {
        setMessage({ type: "error", text: "Failed to delete appointment." });
      }
    } catch (error) {
      setMessage({ type: "error", text: "Server error. Please try again later." });
    }
  };

  return (
    <div className="bg-gray-200 border shadow-lg rounded-lg p-6 flex-1">
      <h3 className="text-xl font-semibold mb-4 border-b pb-2">Schedule an Appointment</h3>

      {/* Display Messages */}
      {message && (
        <p className={`text-sm mb-4 ${message.type === "success" ? "text-green-600" : "text-red-600"}`}>
          {message.text}
        </p>
      )}

      {/* Appointment Booking Form */}
      <AppointmentBooking />

      {/* Appointments List */}
      <h3 className="text-lg font-semibold mt-6">Existing Appointments</h3>
      {appointments.length > 0 ? (
        <ul className="mt-4">
          {appointments.map((appt) => (
            <li key={appt._id} className="flex justify-between bg-white shadow-sm p-3 rounded-lg mb-2">
              <span>
                {appt.firstName} {appt.lastName} - {appt.date} at {appt.time} with Dr. {appt.doctor}
              </span>
              <button
                onClick={() => deleteAppointment(appt._id)}
                className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-700"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-600 mt-4">No appointments booked yet.</p>
      )}
    </div>
  );
};

export default Appointment;
