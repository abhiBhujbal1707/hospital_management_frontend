import React, { useState } from "react";
import { useForm } from "react-hook-form";
import TimeSlots from "../../Slots/TimeSlots";

const Appointment = ({ onAppointmentSchedule, checkAppointmentConflict }) => {
  const { register, handleSubmit, formState: { errors }, reset, setError } = useForm();
  const [selectedTime, setSelectedTime] = useState("");

  const handleTimeSelect = (time) => {
    setSelectedTime(time);
  };

  const onSubmit = (data) => {
    const error = checkAppointmentConflict(selectedTime, data.drname);
    if (error) {
      setError("time", { type: "manual", message: error });
      return;
    }

    onAppointmentSchedule({ ...data, time: selectedTime, status: "Scheduled" });
    reset();
  };

  return (
    <div className="bg-zinc-300 border shadow-lg rounded-lg p-6 flex-1 h-s">
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
            className="w-full h-12 pl-2 bg-zinc-100 border-gray-300 rounded-lg shadow-sm"
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
            className="w-full h-12 pl-2 bg-zinc-100 border-gray-300 rounded-lg shadow-sm"
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
              pattern: { value: /^[0-9]{10}$/, message: "Enter a valid 10-digit phone number" },
            })}
            className="w-full h-12 pl-2 bg-zinc-100 border-gray-300 rounded-lg shadow-sm"
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
            className="w-full h-12 pl-2 bg-zinc-100 border-gray-300 rounded-lg shadow-sm"
          />
          {errors.drname && <p className="text-sm text-red-600 mt-1">{errors.drname.message}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Time</label>
          <input
            type="time"
            value={selectedTime}
            className="w-full h-12 pl-2 bg-zinc-100 border-gray-300 rounded-lg shadow-sm"
            //readOnly
          />
          <TimeSlots onSelectTime={handleTimeSelect} checkAppointmentConflict={checkAppointmentConflict} />
          {errors.time && <p className="text-sm text-red-600 mt-1">{errors.time.message}</p>}
        </div>

        <div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-6 py-2 rounded-lg shadow hover:bg-blue-600 focus:outline-none"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Appointment;
