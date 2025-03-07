
import React, { useState } from 'react';
import { Calendar as CalendarIcon } from 'lucide-react';

function App() {
  const [appointments, setAppointments] = useState([]);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    address: '',
    symptoms: '',
    doctor: ''
  });

  const doctors = [
    { name: 'Dr. Smith', specialization: 'Cardiologist' },
    { name: 'Dr. Johnson', specialization: 'Dermatologist' },
    { name: 'Dr. Williams', specialization: 'Neurologist' },
    { name: 'Dr. Brown', specialization: 'Pediatrician' },
    { name: 'Dr. Jones', specialization: 'Orthopedic' }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setAppointments(prev => [...prev, formData]);
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      date: '',
      time: '',
      address: '',
      symptoms: '',
      doctor: ''
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <CalendarIcon className="h-8 w-8 text-blue-600" />
              <h1 className="ml-2 text-2xl font-bold text-gray-900">Patient Dashboard</h1>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {/* Appointment Booking Form */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-6">Book an Appointment</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Full Name</label>
                  <input type="text" name="fullName" value={formData.fullName} onChange={handleInputChange} required className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Email</label>
                  <input type="email" name="email" value={formData.email} onChange={handleInputChange} required className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Phone</label>
                  <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} required className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Date</label>
                  <input type="date" name="date" value={formData.date} onChange={handleInputChange} required className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Time</label>
                  <input type="time" name="time" value={formData.time} onChange={handleInputChange} required className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Address</label>
                  <input type="text" name="address" value={formData.address} onChange={handleInputChange} required className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Select Doctor</label>
                <select name="doctor" value={formData.doctor} onChange={handleInputChange} required className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500">
                  <option value="">Select a Doctor</option>
                  {doctors.map((doc, index) => (
                    <option key={index} value={`${doc.name} - ${doc.specialization}`}>{`${doc.name} (${doc.specialization})`}</option>
                  ))}
                </select>
              </div>
              <button type="submit" className="w-full bg-blue-600 text-white py-2 px-4 rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                Book Appointment
              </button>
            </form>
          </div>
          {/* Past Appointments */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4">Past Appointments</h2>
            {appointments.length === 0 ? (
              <p className="text-gray-500">No past appointments.</p>
            ) : (
              <ul className="space-y-2">
                {appointments.map((appointment, index) => (
                  <li key={index} className="p-4 border rounded-md shadow-sm">
                    {appointment.fullName} - {appointment.doctor} on {appointment.date} at {appointment.time}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
