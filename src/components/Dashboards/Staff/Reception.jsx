
import React, { useState, useContext } from "react";
import { LayoutDashboard, Calendar, Users, CreditCard, Menu, X } from "lucide-react";
import Appointment from "./Appointment";
import Profile from "./Profile";
import Patients from "./Patients";
import Billing from "./Billing";
import MyContext from "../../../context/MyContext";
import { LeaveIcon } from "../Doctor/LeaveIcon";
// import LeaveApplicationForm from "../../Forms/LeaveApplicationForm";
import Leave from "../Doctor/Leave";
const ReceptionistDashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("profile");
  const { Staff, setStaff } = useContext(MyContext);

  // State to store scheduled appointments
  const [appointments, setAppointments] = useState([]);

  // Function to handle new appointment scheduling
  const handleAppointmentSchedule = (newAppointment) => {
    setAppointments([...appointments, newAppointment]);
    console.log("Appointments List:", [...appointments, newAppointment]); // Debugging log
  };

  // Function to check for appointment conflicts
  const checkAppointmentConflict = (selectedTime, doctorName, editingAppointment = null) => {
    return appointments.some(
      (appointment) =>
        appointment.time === selectedTime &&
        appointment.drname === doctorName &&
        appointment !== editingAppointment // Ignore the current selection
    )
      ? "This time slot is already booked for this doctor."
      : null;
  };

  const navigationItems = [
    { icon: LayoutDashboard, label: "Profile", id: "profile" },
    { icon: Calendar, label: "Appointments", id: "appointment" },
    { icon: Users, label: "Patients", id: "patients" },
    { icon: CreditCard, label: "Billing", id: "billing" },
    {icon: LeaveIcon, label: "Apply For Leave", id: "leave"}
  ];

  const renderSection = () => {
    switch (activeSection) {
      case "profile":
        return <Profile />;
      case "appointment":
        return (
          <Appointment
            onAppointmentSchedule={handleAppointmentSchedule}
            checkAppointmentConflict={checkAppointmentConflict}
          />
        );
      case "patients":
        return <Patients />;
      case "billing":
        return <Billing />;
      case "leave":
        return <Leave/>
      default:
        return <Profile />;
    }
  };

  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <aside className={`${isSidebarOpen ? "w-64" : "w-20"} bg-white border-r border-gray-200 transition-all duration-300 ease-in-out fixed h-full z-20`}>
        <div className="p-4 flex items-center justify-between">
          <h2 className={`font-bold text-xl text-blue-600 ${!isSidebarOpen && "hidden"}`}>Reception</h2>
          <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="p-2 hover:bg-gray-100 rounded-lg">
            {isSidebarOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
        <nav className="mt-4">
          {navigationItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveSection(item.id)}
              className={`w-full flex items-center px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 ${
                activeSection === item.id ? "bg-blue-50 text-blue-600" : ""
              }`}
            >
              {React.createElement(item.icon, { size: 20 })}
              {isSidebarOpen && <span className="ml-3">{item.label}</span>}
            </button>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <main className={`flex-1 ${isSidebarOpen ? "ml-64" : "ml-20"} transition-all duration-300 ease-in-out p-6`}>
        {renderSection()}
      </main>
    </div>
  );
};

export default ReceptionistDashboard;
