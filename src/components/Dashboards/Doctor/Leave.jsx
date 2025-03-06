// import React ,{useContext} from 'react';
// import MyContext from '../../../context/MyContext';






// const Leave = () => {
//   const {Staff , setStaff} = useContext(MyContext);

//   return (
//     <div className="bg-zinc-300 shadow rounded-lg p-6">
//       <h2 className="text-xl font-semibold mb-4">Apply for Leave</h2>
//       <form className="space-y-4">
//         <div>
//           <label className="block text-sm font-medium text-gray-700 mb-1">
//             Leave Type
//           </label>
//           <select className="w-full border border-gray-300 rounded-lg px-3 py-2">
//             <option>Sick Leave</option>
//             <option>Vacation</option>
//             <option>Personal Leave</option>
//           </select>
//         </div>
        
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">
//               Start Date
//             </label>
//             <input
//               type="date"
//               className="w-full border border-gray-300 rounded-lg px-3 py-2"
//             />
//           </div>
          
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">
//               End Date
//             </label>
//             <input
//               type="date"
//               className="w-full border border-gray-300 rounded-lg px-3 py-2"
//             />
//           </div>
//         </div>
        
//         <div>
//           <label className="block text-sm font-medium text-gray-700 mb-1">
//             Reason
//           </label>
//           <textarea
//             rows={4}
//             className="w-full border border-gray-300 rounded-lg px-3 py-2"
//             placeholder="Please provide a reason for your leave..."
//           />
//         </div>
        
//         <button
//           type="submit"
//           className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700"
//         >
//           Submit Leave Request
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Leave;


import React, { useState , useContext } from "react";
import MyContext from '../../../context/MyContext';
const Leave = () => {
  const [leaveType, setLeaveType] = useState("Sick Leave");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [leaveReason, setLeaveReason] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const {Staff , setStaff} = useContext(MyContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    const leaveRequestData = {
      userId: Staff.id, // Replace with actual userId
      leaveStartDate: startDate,
      leaveEndDate: endDate,
      leaveReason: leaveReason,
    };

    try {
      const response = await fetch("http://localhost:5116/api/leaverequest", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(leaveRequestData),
      });

      const data = await response.json();
      if (response.ok) {
        setMessage("Leave request submitted successfully!");
      } else {
        setMessage(`Error: ${data.message || "Failed to submit leave request"}`);
      }
    } catch (error) {
      setMessage("Error submitting leave request");
      console.error("Request failed:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-zinc-300 shadow rounded-lg p-6">
      <h2 className="text-xl font-semibold mb-4">Apply for Leave</h2>

      {message && (
        <div className="mb-4 text-center text-sm font-medium text-green-600">
          {message}
        </div>
      )}

      <form className="space-y-4" onSubmit={handleSubmit}>
        {/* Leave Type */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Leave Type
          </label>
          <select
            className="w-full border border-gray-300 rounded-lg px-3 py-2"
            value={leaveType}
            onChange={(e) => setLeaveType(e.target.value)}
          >
            <option value="Sick Leave">Sick Leave</option>
            <option value="Vacation">Vacation</option>
            <option value="Personal Leave">Personal Leave</option>
          </select>
        </div>

        {/* Start Date & End Date */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Start Date
            </label>
            <input
              type="date"
              className="w-full border border-gray-300 rounded-lg px-3 py-2"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              End Date
            </label>
            <input
              type="date"
              className="w-full border border-gray-300 rounded-lg px-3 py-2"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              required
            />
          </div>
        </div>

        {/* Reason */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Reason
          </label>
          <textarea
            rows={4}
            className="w-full border border-gray-300 rounded-lg px-3 py-2"
            placeholder="Please provide a reason for your leave..."
            value={leaveReason}
            onChange={(e) => setLeaveReason(e.target.value)}
            required
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 disabled:bg-gray-400"
          disabled={loading}
        >
          {loading ? "Submitting..." : "Submit Leave Request"}
        </button>
      </form>
    </div>
  );
};

export default Leave;
