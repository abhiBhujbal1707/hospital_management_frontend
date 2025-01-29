import React, { useState } from "react";
import { IoIosNotificationsOutline ,  } from "react-icons/io";
import { useForm } from "react-hook-form";
import { MdDelete } from "react-icons/md";
import TimeSlots from "../../Slots/TimeSlots";
import { TbListDetails } from "react-icons/tb";
const Reception = () => {
  const { register, handleSubmit, formState: { errors }, reset, setError } = useForm();
  const [showDetails, setshowDetails] = useState(false)
  const [patient, setPatient] = useState([
    // { fname: "Abhijit", lname: "Bhujbal", phone: 9404016761, time: "12:45", drname: "Dr. Smith", status: "Incomplete" }
  ]);
  const [SelectTime, setSelectTime] = useState("")
  const handleDelete = (phone) => {
    const newPatients = patient.filter((patient) => patient.phone !== phone);
    setPatient(newPatients);
  };

  const [notifications, setNotifications] = useState([
    { id: 1, type: "info", message: "New appointment booked by John Doe." },
    { id: 2, type: "success", message: "Payment completed by Alice Johnson." },
    { id: 3, type: "warning", message: "Dr. Smith is running late today." },
    { id: 4, type: "error", message: "System error: Unable to fetch patient records." },
  ]);
  const handleTimeSelect = (time) => {
    setSelectTime(time); // Update the selected time state
  };
  const checkAppointmentConflict = (time, drname) => {
    // Check if the same doctor has an appointment at the same time
    const conflictingAppointment = patient.find(
      (appointment) => appointment.drname === drname && appointment.time === time
    );
    if (conflictingAppointment) {
      return `This doctor already has an appointment at ${time}. Please choose another time.`;
    }
  
    // Check if the selected time overlaps with an existing appointment for this doctor
    const newAppointmentTime = new Date(`1970-01-01T${time}:00`);
    
    // Check if the next appointment is after 45 minutes
    const timeDifference = 45 * 60 * 1000; // 45 minutes in milliseconds
    const conflictingAppointmentsForDoctor = patient.filter(
      (appointment) => appointment.drname === drname
    );
  
    for (let appointment of conflictingAppointmentsForDoctor) {
      const appointmentTime = new Date(`1970-01-01T${appointment.time}:00`);
      const timeGap = Math.abs(newAppointmentTime - appointmentTime); 
      
      if (timeGap < timeDifference) {
        return `Next appointment for this doctor must be at least 45 minutes apart.`;
      }
    }
  
    return null; // No conflict or time constraint issue
  };
  
  

  const onSubmit = (data) => {
    const error = checkAppointmentConflict(SelectTime, data.drname); // Pass the selected time and doctor
    if (error) {
      setError("time", { type: "manual", message: error });
      return;
    }
  
    setPatient((prev) => [...prev, { ...data, time: SelectTime, status: "Scheduled" }]);
    reset();
  };
  
  

  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-zinc-300 shadow-md fixed top-0 left-0 h-full">
        <div className="p-4 font-bold text-xl">Dashboard</div>
        <nav className="mt-4">
          <ul>
            <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Dashboard</li>
            <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Patients</li>
            <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Appointments</li>
            <li className="flex items-center gap-1 px-4 py-2 hover:bg-gray-200 cursor-pointer">
              Notifications
              <IoIosNotificationsOutline />
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 ml-64 bg-zinc-500">
        <header className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-semibold">Receptionist Dashboard ,Welcome</h1>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="bg-zinc-300 shadow p-4 rounded-lg">
            <h2 className="font-semibold">Appointments Today</h2>
            <p className="text-2xl font-bold">12</p>
          </div>
          <div className="bg-zinc-300 shadow p-4 rounded-lg">
            <h2 className="font-semibold">Completed</h2>
            <p className="text-2xl font-bold">8</p>
          </div>
          <div className="bg-zinc-300 shadow p-4 rounded-lg">
            <h2 className="font-semibold">Pending</h2>
            <p className="text-2xl font-bold">4</p>
          </div>
        </div>

        {/* Patient Addition & Appointment Scheduling Section */}
        <div className="flex flex-wrap flex-col gap-6 w-full p-6">
          <div className="addPatient bg-zinc-300 border shadow-lg rounded-lg p-6 flex-1">
            <h3 className="text-xl font-semibold mb-4 border-b pb-2">Schedule Appointment</h3>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div>
                <label htmlFor="fname" className="block text-sm font-medium text-gray-700 mb-1">
                  First Name
                </label>
                <input
                  type="text"
                  id="fname"
                  {...register("fname", { required: "First name is required" })}
                  className="w-full h-12 pl-2 bg-zinc-100 border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                />
                {errors.fname && <p className="text-sm text-red-600 mt-1">{errors.fname.message}</p>}
              </div>

              <div>
                <label htmlFor="lname" className="block text-sm font-medium text-gray-700 mb-1">
                  Last Name
                </label>
                <input
                  type="text"
                  id="lname"
                  {...register("lname", { required: "Last name is required" })}
                  className="w-full h-12 pl-2 bg-zinc-100 border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                />
                {errors.lname && <p className="text-sm text-red-600 mt-1">{errors.lname.message}</p>}
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  {...register("phone", {
                    required: "Phone number is required",
                    pattern: {
                      value: /^[0-9]{10}$/,
                      message: "Enter a valid 10-digit phone number",
                    },
                  })}
                  className="w-full h-12 pl-2 bg-zinc-100 border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                />
                {errors.phone && <p className="text-sm text-red-600 mt-1">{errors.phone.message}</p>}
              </div>

              <div>
                <label htmlFor="drname" className="block text-sm font-medium text-gray-700 mb-1">
                  Doctor Name
                </label>
                <input
                  type="text"
                  id="drname"
                  {...register("drname", { required: "Doctor Name is required" })}
                  className="w-full h-12 pl-2 bg-zinc-100 border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                />
                {errors.drname && <p className="text-sm text-red-600 mt-1">{errors.drname.message}</p>}
              </div>

              <div>
                <label htmlFor="time" className="block text-sm font-medium text-gray-700 mb-1">
                  Time
                </label>
                <input
                  type="time"
                  id="time"
                  {...register("time", {  })}
                  value={SelectTime} // Bind the selected time here
                  className="w-full h-12 pl-2 bg-zinc-100 border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                />

                {/* {errors.time && <p className="text-sm text-red-600 mt-1">{errors.time.message}</p>} */}
              </div>
              <div>
                <TimeSlots onSelectTime={handleTimeSelect} checkAppointmentConflict={checkAppointmentConflict} />
              </div>
              <div>
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-6 py-2 rounded-lg shadow hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>

          {/* Appointment List Section */}
          <div className="appointmentList bg-zinc-300 border shadow-lg rounded-lg p-6 flex-1">
            <h3 className="text-xl font-semibold mb-4 border-b pb-2">Today's Appointments</h3>
            <table className="w-full bg-white shadow-md rounded-lg overflow-hidden">
              <thead className="bg-gray-200 text-xl">
                <tr>
                  <th className="p-4 text-left">Patient Name</th>
                  <th className="p-4 text-left">Phone</th>
                  <th className="p-4 text-left">Time</th>
                  <th className="p-4 text-left">Doctor Name</th>
                  <th className="p-4 text-left">Status</th>
                  <th className="p-4 text-left">Actions</th>
                </tr>
              </thead>
              <tbody className="font-bold">
                {patient.map((p, index) => (
                  <tr key={index}>
                    <td className="p-4">{p.fname} {p.lname}</td>
                    <td className="p-4">{p.phone}</td>
                    <td className="p-4">{p.time}</td>
                    <td className="p-4">{p.drname}</td>
                    <td className="p-4">{p.status}</td>
                    <td className="p-4 flex gap-2">
                      <MdDelete onClick={() => handleDelete(p.phone)} className="cursor-pointer " />
                      <TbListDetails className="cursor-pointer"/>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Reception;
