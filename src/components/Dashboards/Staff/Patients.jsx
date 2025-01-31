import React, { useState, useEffect } from 'react';
import { MdDelete } from 'react-icons/md';
import { TbListDetails } from 'react-icons/tb';

// Sample data for appointments
const appointmentData = [
  {
    id: 1,
    fname: 'John',
    lname: 'Doe',
    phone: '1234567890',
    time: '10:00 AM',
    drname: 'Dr. Smith',
    status: 'Arrived',
  },
  {
    id: 2,
    fname: 'Jane',
    lname: 'Doe',
    phone: '0987654321',
    time: '11:00 AM',
    drname: 'Dr. Williams',
    status: 'Scheduled',
  },
  {
    id: 3,
    fname: 'Sam',
    lname: 'Wilson',
    phone: '1122334455',
    time: '1:00 PM',
    drname: 'Dr. Smith',
    status: 'Arrived',
  },
];

const Patients = () => {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    // In a real app, fetch data from the backend (e.g., MongoDB)
    setPatients(appointmentData); // Sample data for now
  }, []);

  const handleDelete = (phone) => {
    // Add functionality to delete an appointment
    setPatients(patients.filter(patient => patient.phone !== phone));
  };

  const handleDetails = (patient) => {
    // Add functionality for viewing more details about the patient (e.g., open a modal or navigate to another page)
    alert(`Viewing details for ${patient.fname} ${patient.lname}`);
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
            <th className="p-4 text-left">Status</th>
            <th className="p-4 text-left">Actions</th>
          </tr>
        </thead>
        <tbody className="font-bold">
          {patients.length === 0 ? (
            <tr>
              <td colSpan="6" className="p-4 text-center text-gray-500">No appointments for today</td>
            </tr>
          ) : (
            patients.map((patient) => (
              <tr key={patient.id}>
                <td className="p-4">{patient.fname} {patient.lname}</td>
                <td className="p-4">{patient.phone}</td>
                <td className="p-4">{patient.time}</td>
                <td className="p-4">{patient.drname}</td>
                <td className="p-4">{patient.status}</td>
                <td className="p-4 flex gap-2">
                  <MdDelete onClick={() => handleDelete(patient.phone)} className="cursor-pointer text-red-500" />
                  <TbListDetails onClick={() => handleDetails(patient)} className="cursor-pointer text-blue-500" />
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
