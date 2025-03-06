import React, { useState } from "react";
import { LayoutDashboard, Calendar, Users, ClipboardList, CreditCard, Settings, BellRing, Menu, X } from "lucide-react";
import Profile from "./components/Dashboards/Doctor/Profile.jsx";
import Appointments from "./components/Dashboards/Doctor/Appoitment.jsx";
import Patients from "./components/Dashboards/Doctor/PatientDetail.jsx";
import Leave from "./components/Dashboards/Doctor/Leave.jsx";
import Setting from "./components/Dashboards/Doctor/Setting.jsx";
import { LeaveIcon } from "./components/Dashboards/Doctor/LeaveIcon.jsx";

const DoctorDashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("profile");

  const navigationItems = [
    { icon: LayoutDashboard, label: "Profile", id: "profile" },
    { icon: Calendar, label: "Appointments", id: "appointments" },
    { icon: Users, label: "Patients", id: "patients" },
    // { icon: ClipboardList, label: "Reports", id: "reports" },
    { icon: LeaveIcon, label: "Apply For Leave", id: "leave" },
    { icon: Settings, label: "Settings", id: "settings" },
  ];

  const renderSection = () => {
    switch (activeSection) {
      case "profile":
        return <Profile />;
      case "appointments":
        return <Appointments />;
      case "patients":
        return <Patients />;
      case "leave":
        return <Leave />;
      case "settings":
        return <Setting />;
      default:
        return <Profile />;
    }
  };

  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <aside className={`${isSidebarOpen ? "w-64" : "w-20"} bg-white border-r border-gray-200 transition-all duration-300 ease-in-out fixed h-full z-20`}>
        <div className="p-4 flex items-center justify-between">
          <h2 className={`font-bold text-xl text-blue-600 ${!isSidebarOpen && "hidden"}`}>Doctor Dashboard</h2>
          <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="p-2 hover:bg-gray-100 rounded-lg">
            {isSidebarOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
        <nav className="mt-4">
          {navigationItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveSection(item.id)}
              className={`w-full flex items-center px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 ${activeSection === item.id ? "bg-blue-50 text-blue-600" : ""}`}
            >
              {React.createElement(item.icon, { size: 20 })}
              {isSidebarOpen && <span className="ml-3">{item.label}</span>}
            </button>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <main className={`flex-1 ${isSidebarOpen ? "ml-64" : "ml-20"} transition-all duration-300 ease-in-out p-6`}>{renderSection()}</main>
    </div>
  );
};

export default DoctorDashboard;


