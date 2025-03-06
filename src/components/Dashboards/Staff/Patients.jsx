
import React, { useEffect, useContext } from "react";
import { MdDelete } from "react-icons/md";
import { TbListDetails } from "react-icons/tb";
import axios from "axios";
import MyContext from "../../../context/MyContext";

const Patients = () => {
  const { Patients, setPatients } = useContext(MyContext);

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const response = await axios.get("http://localhost:5116/api/appointments");
        setPatients(response.data);
        console.log("Updated Patients state:", response.data);
      } catch (error) {
        console.error("Error fetching appointments:", error);
      }
    };

    fetchAppointments();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5116/api/appointments/${id}`);
      setPatients((prevPatients) => prevPatients.filter((patient) => patient._id !== id));
      console.log("Appointment deleted successfully");
    } catch (error) {
      console.error("Error deleting appointment:", error);
    }
  };
  

  const handleDetails = (patient) => {
    console.log("Patient Details:", patient);
    alert(`Viewing details for ${patient.firstName} ${patient.lastName}`);
  };

  return (
    <div className="appointmentList bg-zinc-300 border shadow-lg rounded-lg p-6 flex-1">
      <h3 className="text-xl font-semibold mb-4 border-b pb-2">Today's Appointments</h3>
      <table className="w-full bg-white shadow-md rounded-lg overflow-hidden">
        <thead className="bg-gray-200 text-xl">
          <tr>
            <th className="p-4 text-left">Patient Name</th>
            <th className="p-4 text-left">Phone</th>
            <th className="p-4 text-left">Time</th>
            <th className="p-4 text-left">Doctor Name</th>
            <th className="p-4 text-left">Date</th> {/* ✅ New Date Column */}
            <th className="p-4 text-left">Status</th>
            <th className="p-4 text-left">Actions</th>
          </tr>
        </thead>
        <tbody className="font-bold">
          {!Patients || Patients.length === 0 ? (
            <tr>
              <td colSpan="7" className="p-4 text-center text-gray-500">
                No appointments for today
              </td>
            </tr>
          ) : (
            Patients.map((patient) => (
              <tr key={patient._id || patient.Id || `${patient.firstName}-${patient.lastName}-${patient.time}`}>
                <td className="p-4">{patient.firstName} {patient.lastName}</td>
                <td className="p-4">{patient.phoneNumber}</td>
                <td className="p-4">{patient.time}</td>
                <td className="p-4">{patient.doctorName}</td>
                <td className="p-4">
                  {new Date(patient.date).toLocaleDateString("en-GB")} {/* ✅ Formatted Date */}
                </td>
                <td className="p-4">{patient.status}</td>
                <td className="p-4 flex gap-2">
                  <MdDelete onClick={() => handleDelete(patient._id)} className="cursor-pointer text-red-500" />
                  {/*   <TbListDetails onClick={() => handleDetails(patient)} className="cursor-pointer text-blue-500" /> */}
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Patients;
