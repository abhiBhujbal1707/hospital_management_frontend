import React from 'react';
import { LayoutDashboard, Users, Calendar, ClipboardList, Settings as SettingsIcon, BellRing, Menu, X } from 'lucide-react';

const Sidebar = ({ isSidebarOpen, setIsSidebarOpen, activeSection, setActiveSection }) => {
  const navigationItems = [
    { icon: LayoutDashboard, label: 'Dashboard', id: 'dashboard' },
    { icon: Users, label: 'Patients', id: 'patients' },
    { icon: Calendar, label: 'Appointments', id: 'appointments' },
    { icon: ClipboardList, label: 'Leave Approval', id: 'leaveApproval' },
    { icon: ClipboardList, label: 'Reports', id: 'reports' },
    { icon: SettingsIcon, label: 'Settings', id: 'settings' },
  ];

  return (
    <aside className={`${isSidebarOpen ? 'w-64' : 'w-20'} bg-white border-r border-gray-200 transition-all duration-300 ease-in-out fixed h-full z-20`}>
      <div className="p-4 flex items-center justify-between">
        <h2 className={`font-bold text-xl text-blue-600 ${!isSidebarOpen && 'hidden'}`}>MedAdmin</h2>
        <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="p-2 hover:bg-gray-100 rounded-lg">
          {isSidebarOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
      <nav className="mt-4">
        {navigationItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveSection(item.id)}
            className={`w-full flex items-center px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 
              ${activeSection === item.id ? 'bg-blue-50 text-blue-600' : ''}`}
          >
            {React.createElement(item.icon, { size: 20 })}
            {isSidebarOpen && <span className="ml-3">{item.label}</span>}
          </button>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;