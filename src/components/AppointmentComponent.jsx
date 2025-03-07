import React, { useContext, useState, useEffect } from "react";
import MyContext from "../context/MyContext";

const AppointmentBooking = () => {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    address: "",
    symptoms: "",
    doctor: "",
  });

  const { Doctors, setDoctors } = useContext(MyContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5002/api/doctors");
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setDoctors(data);
        console.log("Doctors List:", data);
      } catch (error) {
        console.error("Error fetching doctors:", error);
        setErrorMessage("Failed to load doctors.");
      }
    };
    fetchData();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage("");

    try {
      const response = await fetch("http://localhost:5002/api/appointments", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to book appointment.");
      }

      const result = await response.json();
      console.log("✅ Appointment booked:", result);

      setAppointments((prev) => [...prev, formData]);

      // Reset form after successful submission
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        date: "",
        time: "",
        address: "",
        symptoms: "",
        doctor: "",
      });

      alert("✅ Appointment booked successfully!");
    } catch (error) {
      console.error("❌ Error booking appointment:", error);
      setErrorMessage("❌ Failed to book appointment. Try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-semibold mb-6">Book an Appointment</h2>

      {errorMessage && <p className="text-red-500">{errorMessage}</p>}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">First Name</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
            required
            className="border rounded-md w-full p-2"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Last Name</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
            required
            className="border rounded-md w-full p-2"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
            className="border rounded-md w-full p-2"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Phone</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            required
            className="border rounded-md w-full p-2"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Address</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleInputChange}
            required
            className="border rounded-md w-full p-2"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Doctor</label>
          <select
            name="doctor"
            value={formData.doctor}
            onChange={handleInputChange}
            required
            className="border rounded-md w-full p-2"
          >
            <option value="">Select a Doctor</option>
            {Doctors &&
              Doctors.map((doc) => (
                <option key={doc._id} value={`${doc.firstName} ${doc.lastName}`}>
                  Dr. {doc.firstName} {doc.lastName} - {doc.specialization}
                </option>
              ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Date</label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleInputChange}
            required
            className="border rounded-md w-full p-2"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Time</label>
          <input
            type="time"
            name="time"
            value={formData.time}
            onChange={handleInputChange}
            required
            className="border rounded-md w-full p-2"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Symptoms</label>
          <textarea
            name="symptoms"
            value={formData.symptoms}
            onChange={handleInputChange}
            required
            className="border rounded-md w-full p-2"
            rows={3}
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full py-2 px-4 rounded-md text-white bg-blue-600 hover:bg-blue-700"
        >
          {loading ? "Booking..." : "Book Appointment"}
        </button>
      </form>
    </div>
  );
};

export default AppointmentBooking;
