// import React, { useState, useContext } from "react";
// import { motion } from "framer-motion";
// import MyContext from "../../context/MyContext";

// function LeaveApplication() {
//   const { Staff } = useContext(MyContext);
//   const [leaveData, setLeaveData] = useState({
//     leaveType: "",
//     startDate: "",
//     endDate: "",
//     reason: "",
//   });

//   const [loading, setLoading] = useState(false);
//   const [message, setMessage] = useState("");

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setLeaveData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setMessage("");

//     const requestData = {
//       UserId: Staff?.id, // Using Staff.id from context
//       LeaveStartDate: leaveData.startDate,
//       LeaveEndDate: leaveData.endDate,
//       LeaveStatus: "Pending", // Default status
//       LeaveReason: leaveData.reason,
//     };

//     try {
//       const response = await fetch("http://localhost:5116/api/leave/apply", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(requestData),
//       });

//       if (!response.ok) {
//         throw new Error("Failed to submit leave application");
//       }

//       setMessage("Leave application submitted successfully!");
//       setLeaveData({
//         leaveType: "",
//         startDate: "",
//         endDate: "",
//         reason: "",
//       });
//     } catch (error) {
//       setMessage("Error: " + error.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <motion.div
//       id="leave-section"
//       className="max-w-lg mx-auto mt-12 p-8 bg-white shadow-2xl rounded-2xl border border-gray-200"
//       initial={{ opacity: 0, y: -50 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.5 }}
//     >
//       <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
//         Apply for Leave
//       </h2>

//       {message && (
//         <p
//           className={`text-center mb-4 ${
//             message.includes("Error") ? "text-red-500" : "text-green-500"
//           }`}
//         >
//           {message}
//         </p>
//       )}

//       <form onSubmit={handleSubmit} className="space-y-5">
//         <div>
//           <label
//             htmlFor="leaveType"
//             className="block text-sm font-medium text-gray-700"
//           >
//             Leave Type
//           </label>
//           <select
//             id="leaveType"
//             name="leaveType"
//             value={leaveData.leaveType}
//             onChange={handleChange}
//             className="mt-2 w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none bg-gray-100"
//             required
//           >
//             <option value="">Select Leave Type</option>
//             <option value="sick">Sick Leave</option>
//             <option value="vacation">Vacation</option>
//             <option value="emergency">Emergency</option>
//           </select>
//         </div>

//         <div className="grid grid-cols-2 gap-4">
//           <div>
//             <label
//               htmlFor="startDate"
//               className="block text-sm font-medium text-gray-700"
//             >
//               Start Date
//             </label>
//             <input
//               type="date"
//               id="startDate"
//               name="startDate"
//               value={leaveData.startDate}
//               onChange={handleChange}
//               className="mt-2 w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none bg-gray-100"
//               required
//             />
//           </div>
//           <div>
//             <label
//               htmlFor="endDate"
//               className="block text-sm font-medium text-gray-700"
//             >
//               End Date
//             </label>
//             <input
//               type="date"
//               id="endDate"
//               name="endDate"
//               value={leaveData.endDate}
//               onChange={handleChange}
//               className="mt-2 w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none bg-gray-100"
//               required
//             />
//           </div>
//         </div>

//         <div>
//           <label
//             htmlFor="reason"
//             className="block text-sm font-medium text-gray-700"
//           >
//             Reason for Leave
//           </label>
//           <textarea
//             id="reason"
//             name="reason"
//             value={leaveData.reason}
//             onChange={handleChange}
//             rows="4"
//             className="mt-2 w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none bg-gray-100"
//             required
//           ></textarea>
//         </div>

//         <motion.button
//           type="submit"
//           className="w-full py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-lg shadow-md hover:shadow-xl transition-transform transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-300"
//           whileHover={{ scale: 1.05 }}
//           whileTap={{ scale: 0.95 }}
//           disabled={loading}
//         >
//           {loading ? "Submitting..." : "Submit Application"}
//         </motion.button>
//       </form>
//     </motion.div>
//   );
// }

// export default LeaveApplication;
import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import MyContext from "../../context/MyContext";

function LeaveApplication() {
  const { Staff } = useContext(MyContext);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();
  const [message, setMessage] = useState("");

  const onSubmit = async (data) => {
    setMessage("");
    const requestData = {
      UserId: Staff?.id,
      LeaveStartDate: data.startDate,
      LeaveEndDate: data.endDate,
      LeaveStatus: "Pending",
      LeaveReason: data.reason,
    };

    try {
      const response = await fetch("http://localhost:5116/api/leave/apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(requestData),
      });

      if (!response.ok) throw new Error("Failed to submit leave application");
      setMessage("Leave application submitted successfully!");
      reset();
    } catch (error) {
      setMessage("Error: " + error.message);
    }
  };

  return (
    <motion.div
      id="leave-section"
      className="max-w-lg mx-auto mt-12 p-8 bg-white shadow-2xl rounded-2xl border border-gray-200"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Apply for Leave</h2>
      {message && <p className={`text-center mb-4 ${message.includes("Error") ? "text-red-500" : "text-green-500"}`}>{message}</p>}
      
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        <div>
          <label className="block text-sm font-medium text-gray-700">Leave Type</label>
          <select
            {...register("leaveType", { required: "Leave type is required" })}
            className="mt-2 w-full p-3 border rounded-lg bg-gray-100"
          >
            <option value="">Select Leave Type</option>
            <option value="sick">Sick Leave</option>
            <option value="vacation">Vacation</option>
            <option value="emergency">Emergency</option>
          </select>
          {errors.leaveType && <p className="text-red-500 text-sm">{errors.leaveType.message}</p>}
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Start Date</label>
            <input type="date" {...register("startDate", { required: "Start date is required" })} className="mt-2 w-full p-3 border rounded-lg bg-gray-100" />
            {errors.startDate && <p className="text-red-500 text-sm">{errors.startDate.message}</p>}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">End Date</label>
            <input type="date" {...register("endDate", { required: "End date is required" })} className="mt-2 w-full p-3 border rounded-lg bg-gray-100" />
            {errors.endDate && <p className="text-red-500 text-sm">{errors.endDate.message}</p>}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Reason for Leave</label>
          <textarea {...register("reason", { required: "Reason is required" })} rows="4" className="mt-2 w-full p-3 border rounded-lg bg-gray-100"></textarea>
          {errors.reason && <p className="text-red-500 text-sm">{errors.reason.message}</p>}
        </div>

        <motion.button
          type="submit"
          className="w-full py-3 bg-blue-500 text-white rounded-lg shadow-md hover:shadow-xl transition-transform transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          disabled={isSubmitting}
        >
          {isSubmitting ? "Submitting..." : "Submit Application"}
        </motion.button>
      </form>
    </motion.div>
  );
}

export default LeaveApplication;
