import React, { useState } from 'react'
import { Calendar, Bell, User, Users, ClipboardList, Settings } from 'lucide-react'
import { LeaveIcon } from './components/Dashboards/Doctor/LeaveIcon.jsx'
import Profile from './components/Dashboards/Doctor/Profile.jsx'
import Appointments from './components/Dashboards/Doctor/Appoitment.jsx'
import Patients from './components/Dashboards/Doctor/PatientDetail.jsx'
import Reports from './components/Dashboards/Doctor/Report.jsx'
import Leave from './components/Dashboards/Doctor/Leave.jsx'
import Setting from './components/Dashboards/Doctor/Setting.jsx'
function App() {
  const [activeSection, setActiveSection] = useState('profile');

  const renderContent = () => {
    switch (activeSection) {
      case 'profile':
        return <Profile />;
      case 'appointments':
        return <Appointments />;
      case 'patients':
        return <Patients />;
      case 'reports':
        return <Reports />;
      case 'leave':
        return <Leave />;
      case 'settings':
        return <SettingsComponent />;
      default:
        return <Profile />;
    }
  };

  return (
    <div className="min-h-screen bg-zinc-500 flex flex-col md:flex-row">
      {/* Sidebar */}
      <aside className="w-full md:w-64 bg-zinc-300 shadow-md p-6">
        <h2 className="text-2xl font-semibold mb-6">Doctor Dashboard</h2>
        <ul className="space-y-4">
          <li>
            <button
              onClick={() => setActiveSection('profile')}
              className={`flex items-center gap-3 text-gray-700 hover:text-blue-700 w-full text-left ${
                activeSection === 'profile' ? 'text-blue-700 font-semibold' : ''
              }`}
            >
              <User /> Profile
            </button>
          </li>
          <li>
            <button
              onClick={() => setActiveSection('appointments')}
              className={`flex items-center gap-3 text-gray-700 hover:text-blue-700 w-full text-left ${
                activeSection === 'appointments' ? 'text-blue-700 font-semibold' : ''
              }`}
            >
              <Calendar /> Appointments
            </button>
          </li>
          <li>
            <button
              onClick={() => setActiveSection('patients')}
              className={`flex items-center gap-3 text-gray-700 hover:text-blue-700 w-full text-left ${
                activeSection === 'patients' ? 'text-blue-700 font-semibold' : ''
              }`}
            >
              <Users /> Patients
            </button>
          </li>
          <li>
            <button
              onClick={() => setActiveSection('reports')}
              className={`flex items-center gap-3 text-gray-700 hover:text-blue-700 w-full text-left ${
                activeSection === 'reports' ? 'text-blue-700 font-semibold' : ''
              }`}
            >
              <ClipboardList /> Reports
            </button>
          </li>
          <li>
            <button
              onClick={() => setActiveSection('leave')}
              className={`flex items-center gap-3 text-gray-700 hover:text-blue-700 w-full text-left ${
                activeSection === 'leave' ? 'text-blue-700 font-semibold' : ''
              }`}
            >
              <LeaveIcon /> Apply For Leave
            </button>
          </li>
          <li>
            <button
              onClick={() => setActiveSection('settings')}
              className={`flex items-center gap-3 text-gray-700 hover:text-blue-700 w-full text-left ${
                activeSection === 'settings' ? 'text-blue-700 font-semibold' : ''
              }`}
            >
              <Settings /> Settings
            </button>
          </li>
        </ul>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-4 md:p-8">
        {/* Header */}
        <header className="flex items-center justify-between mb-8">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800">Welcome, Dr. Smith</h1>
          <div className="flex items-center space-x-4">
            <Bell className="text-lg md:text-xl text-gray-600 cursor-pointer hover:text-blue-700" />
          </div>
        </header>

        {/* Dynamic Content */}
        {renderContent()}
      </main>
    </div>
  );
}

export default App;