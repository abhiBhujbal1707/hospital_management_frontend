import React, { useState, useRef, useEffect } from 'react';
import {
  LayoutDashboard,
  Users,
  Calendar,
  Pill,
  ClipboardList,
  Settings as SettingsIcon,
  BellRing,
  Menu,
  X,
  Search,
  TrendingUp,
  ChevronDown
} from 'lucide-react';

// Mock data for different time periods
const timePeriodsData = {
  daily: {
    stats: [
      { title: 'Total Patients', value: '48', change: '+8.5%' },
      { title: 'Available Doctors', value: '32', change: '+1.4%' },
      { title: 'Appointments Today', value: '24', change: '+5.2%' },
      { title: 'Revenue', value: '$4,580', change: '+12.3%' },
    ],
    patients: [
      { id: 1, name: 'Sarah Johnson', status: 'Admitted', department: 'Cardiology', date: '2024-03-15' },
      { id: 2, name: 'Michael Chen', status: 'Discharged', department: 'Orthopedics', date: '2024-03-15' },
      { id: 3, name: 'Emma Davis', status: 'Pending', department: 'Neurology', date: '2024-03-15' },
    ]
  },
  weekly: {
    stats: [
      { title: 'Total Patients', value: '284', change: '+10.5%' },
      { title: 'Available Doctors', value: '45', change: '+2.0%' },
      { title: 'Weekly Appointments', value: '156', change: '+7.2%' },
      { title: 'Revenue', value: '$18,580', change: '+14.3%' },
    ],
    patients: [
      { id: 1, name: 'Sarah Johnson', status: 'Admitted', department: 'Cardiology', date: '2024-03-15' },
      { id: 2, name: 'Michael Chen', status: 'Discharged', department: 'Orthopedics', date: '2024-03-14' },
      { id: 3, name: 'Emma Davis', status: 'Pending', department: 'Neurology', date: '2024-03-14' },
      { id: 4, name: 'James Wilson', status: 'Admitted', department: 'Pediatrics', date: '2024-03-13' },
      { id: 5, name: 'Linda Garcia', status: 'Discharged', department: 'Surgery', date: '2024-03-12' },
    ]
  },
  monthly: {
    stats: [
      { title: 'Total Patients', value: '1,284', change: '+12.5%' },
      { title: 'Available Doctors', value: '64', change: '+2.4%' },
      { title: 'Monthly Appointments', value: '648', change: '+8.2%' },
      { title: 'Revenue', value: '$82,580', change: '+15.3%' },
    ],
    patients: [
      { id: 1, name: 'Sarah Johnson', status: 'Admitted', department: 'Cardiology', date: '2024-03-15' },
      { id: 2, name: 'Michael Chen', status: 'Discharged', department: 'Orthopedics', date: '2024-03-14' },
      { id: 3, name: 'Emma Davis', status: 'Pending', department: 'Neurology', date: '2024-03-14' },
      { id: 4, name: 'James Wilson', status: 'Admitted', department: 'Pediatrics', date: '2024-03-10' },
      { id: 5, name: 'Linda Garcia', status: 'Discharged', department: 'Surgery', date: '2024-03-08' },
      { id: 6, name: 'Robert Taylor', status: 'Admitted', department: 'ENT', date: '2024-03-05' },
      { id: 7, name: 'Maria Rodriguez', status: 'Discharged', department: 'Dermatology', date: '2024-03-01' },
    ]
  }
};

// Mock data for all patients
const allPatients = [
  { id: 1, name: 'Sarah Johnson', age: 45, status: 'Admitted', department: 'Cardiology', date: '2024-03-15', contact: '+1 234-567-8901', email: 'sarah.j@email.com' },
  { id: 2, name: 'Michael Chen', age: 32, status: 'Discharged', department: 'Orthopedics', date: '2024-03-14', contact: '+1 234-567-8902', email: 'michael.c@email.com' },
  { id: 3, name: 'Emma Davis', age: 28, status: 'Pending', department: 'Neurology', date: '2024-03-14', contact: '+1 234-567-8903', email: 'emma.d@email.com' },
  { id: 4, name: 'James Wilson', age: 52, status: 'Admitted', department: 'Pediatrics', date: '2024-03-13', contact: '+1 234-567-8904', email: 'james.w@email.com' },
  { id: 5, name: 'Linda Garcia', age: 39, status: 'Discharged', department: 'Surgery', date: '2024-03-12', contact: '+1 234-567-8905', email: 'linda.g@email.com' },
];

// Mock data for appointments
const appointments = [
  { id: 1, patientName: 'Sarah Johnson', department: 'Cardiology', doctor: 'Dr. Smith', date: '2024-03-20', time: '10:00 AM', status: 'Scheduled' },
  { id: 2, patientName: 'Michael Chen', department: 'Orthopedics', doctor: 'Dr. Brown', date: '2024-03-21', time: '2:30 PM', status: 'Confirmed' },
  { id: 3, patientName: 'Emma Davis', department: 'Neurology', doctor: 'Dr. Wilson', date: '2024-03-22', time: '11:15 AM', status: 'Pending' },
];

// Mock data for medicine inventory
const medicines = [
  { id: 1, name: 'Amoxicillin', category: 'Antibiotic', stock: 500, unit: 'tablets', expiryDate: '2024-12-31' },
  { id: 2, name: 'Ibuprofen', category: 'Pain Relief', stock: 1000, unit: 'tablets', expiryDate: '2024-10-15' },
  { id: 3, name: 'Insulin', category: 'Diabetes', stock: 200, unit: 'vials', expiryDate: '2024-06-30' },
];

// Mock data for reports
const reports = [
  { id: 1, title: 'Monthly Patient Statistics', department: 'All', date: '2024-03-01', type: 'Statistical' },
  { id: 2, title: 'Revenue Analysis Q1', department: 'Finance', date: '2024-03-15', type: 'Financial' },
  { id: 3, title: 'Department Performance', department: 'Management', date: '2024-03-10', type: 'Performance' },
];

function Dashboard({ selectedPeriod, currentData }) {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        {currentData.stats.map((stat) => (
          <div key={stat.title} className="bg-white rounded-xl p-6 shadow-sm">
            <h3 className="text-sm font-medium text-gray-500">{stat.title}</h3>
            <div className="mt-2 flex items-baseline justify-between">
              <p className="text-2xl font-semibold text-gray-900">{stat.value}</p>
              <div className="flex items-center">
                <TrendingUp size={16} className="text-green-500 mr-1" />
                <span className="text-sm font-medium text-green-600">{stat.change}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-xl shadow-sm p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-gray-800">
            Recent Patients ({selectedPeriod.charAt(0).toUpperCase() + selectedPeriod.slice(1)} Report)
          </h2>
          <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">View all</button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="text-left text-sm font-medium text-gray-500">
                <th className="pb-4">Patient Name</th>
                <th className="pb-4">Department</th>
                <th className="pb-4">Status</th>
                <th className="pb-4">Date</th>
              </tr>
            </thead>
            <tbody>
              {currentData.patients.map((patient) => (
                <tr key={patient.id} className="border-t border-gray-100">
                  <td className="py-4">
                    <div className="font-medium text-gray-900">{patient.name}</div>
                  </td>
                  <td className="py-4 text-gray-600">{patient.department}</td>
                  <td className="py-4">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium
                      ${patient.status === 'Admitted' ? 'bg-green-100 text-green-800' :
                        patient.status === 'Discharged' ? 'bg-gray-100 text-gray-800' :
                          'bg-yellow-100 text-yellow-800'
                      }`}>
                      {patient.status}
                    </span>
                  </td>
                  <td className="py-4 text-gray-600">{patient.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

function Patients() {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold text-gray-800">All Patients</h2>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">Add New Patient</button>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="text-left text-sm font-medium text-gray-500">
              <th className="pb-4">Patient Name</th>
              <th className="pb-4">Age</th>
              <th className="pb-4">Department</th>
              <th className="pb-4">Status</th>
              <th className="pb-4">Contact</th>
              <th className="pb-4">Email</th>
              <th className="pb-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {allPatients.map((patient) => (
              <tr key={patient.id} className="border-t border-gray-100">
                <td className="py-4">
                  <div className="font-medium text-gray-900">{patient.name}</div>
                </td>
                <td className="py-4 text-gray-600">{patient.age}</td>
                <td className="py-4 text-gray-600">{patient.department}</td>
                <td className="py-4">
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium
                    ${patient.status === 'Admitted' ? 'bg-green-100 text-green-800' :
                      patient.status === 'Discharged' ? 'bg-gray-100 text-gray-800' :
                        'bg-yellow-100 text-yellow-800'
                    }`}>
                    {patient.status}
                  </span>
                </td>
                <td className="py-4 text-gray-600">{patient.contact}</td>
                <td className="py-4 text-gray-600">{patient.email}</td>
                <td className="py-4">
                  <button className="text-blue-600 hover:text-blue-700 mr-3">Edit</button>
                  <button className="text-red-600 hover:text-red-700">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function Appointments() {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold text-gray-800">Appointments</h2>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">Schedule Appointment</button>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="text-left text-sm font-medium text-gray-500">
              <th className="pb-4">Patient Name</th>
              <th className="pb-4">Department</th>
              <th className="pb-4">Doctor</th>
              <th className="pb-4">Date</th>
              <th className="pb-4">Time</th>
              <th className="pb-4">Status</th>
              <th className="pb-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {appointments.map((appointment) => (
              <tr key={appointment.id} className="border-t border-gray-100">
                <td className="py-4">
                  <div className="font-medium text-gray-900">{appointment.patientName}</div>
                </td>
                <td className="py-4 text-gray-600">{appointment.department}</td>
                <td className="py-4 text-gray-600">{appointment.doctor}</td>
                <td className="py-4 text-gray-600">{appointment.date}</td>
                <td className="py-4 text-gray-600">{appointment.time}</td>
                <td className="py-4">
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium
                    ${appointment.status === 'Confirmed' ? 'bg-green-100 text-green-800' :
                      appointment.status === 'Scheduled' ? 'bg-blue-100 text-blue-800' :
                        'bg-yellow-100 text-yellow-800'
                    }`}>
                    {appointment.status}
                  </span>
                </td>
                <td className="py-4">
                  <button className="text-blue-600 hover:text-blue-700 mr-3">Edit</button>
                  <button className="text-red-600 hover:text-red-700">Cancel</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function Medicine() {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold text-gray-800">Medicine Inventory</h2>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">Add Medicine</button>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="text-left text-sm font-medium text-gray-500">
              <th className="pb-4">Medicine Name</th>
              <th className="pb-4">Category</th>
              <th className="pb-4">Stock</th>
              <th className="pb-4">Unit</th>
              <th className="pb-4">Expiry Date</th>
              <th className="pb-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {medicines.map((medicine) => (
              <tr key={medicine.id} className="border-t border-gray-100">
                <td className="py-4">
                  <div className="font-medium text-gray-900">{medicine.name}</div>
                </td>
                <td className="py-4 text-gray-600">{medicine.category}</td>
                <td className="py-4 text-gray-600">{medicine.stock}</td>
                <td className="py-4 text-gray-600">{medicine.unit}</td>
                <td className="py-4 text-gray-600">{medicine.expiryDate}</td>
                <td className="py-4">
                  <button className="text-blue-600 hover:text-blue-700 mr-3">Edit</button>
                  <button className="text-red-600 hover:text-red-700">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function Reports() {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold text-gray-800">Reports</h2>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">Generate Report</button>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="text-left text-sm font-medium text-gray-500">
              <th className="pb-4">Report Title</th>
              <th className="pb-4">Department</th>
              <th className="pb-4">Date</th>
              <th className="pb-4">Type</th>
              <th className="pb-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {reports.map((report) => (
              <tr key={report.id} className="border-t border-gray-100">
                <td className="py-4">
                  <div className="font-medium text-gray-900">{report.title}</div>
                </td>
                <td className="py-4 text-gray-600">{report.department}</td>
                <td className="py-4 text-gray-600">{report.date}</td>
                <td className="py-4">
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium
                    ${report.type === 'Statistical' ? 'bg-purple-100 text-purple-800' :
                      report.type === 'Financial' ? 'bg-green-100 text-green-800' :
                        'bg-blue-100 text-blue-800'
                    }`}>
                    {report.type}
                  </span>
                </td>
                <td className="py-4">
                  <button className="text-blue-600 hover:text-blue-700 mr-3">View</button>
                  <button className="text-blue-600 hover:text-blue-700 mr-3">Download</button>
                  <button className="text-red-600 hover:text-red-700">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function SettingsPanel() {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <h2 className="text-lg font-semibold text-gray-800 mb-6">Settings</h2>
      <div className="space-y-6">
        <div>
          <h3 className="text-md font-medium text-gray-700 mb-4">General Settings</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Hospital Name</label>
              <input type="text" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input type="email" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Contact Number</label>
              <input type="tel" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500" />
            </div>
          </div>
        </div>
        
        <div>
          <h3 className="text-md font-medium text-gray-700 mb-4">Notification Settings</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-700">Email Notifications</span>
              <button className="relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 bg-blue-600">
                <span className="translate-x-5 inline-block h-5 w-5 transform rounded-full bg-white transition duration-200 ease-in-out"></span>
              </button>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-700">SMS Notifications</span>
              <button className="relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 bg-gray-200">
                <span className="translate-x-0 inline-block h-5 w-5 transform rounded-full bg-white transition duration-200 ease-in-out"></span>
              </button>
            </div>
          </div>
        </div>

        <div className="pt-4">
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">Save Changes</button>
        </div>
      </div>
    </div>
  );
}

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [selectedPeriod, setSelectedPeriod] = useState('daily');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('dashboard');
  const dropdownRef = useRef(null);

  const currentData = timePeriodsData[selectedPeriod];

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const navigationItems = [
    { icon: LayoutDashboard, label: 'Dashboard', id: 'dashboard' },
    { icon: Users, label: 'Patients', id: 'patients' },
    { icon: Calendar, label: 'Appointments', id: 'appointments' },
    { icon: Pill, label: 'Medicine', id: 'medicine' },
    { icon: ClipboardList, label: 'Reports', id: 'reports' },
    { icon: SettingsIcon, label: 'Settings', id: 'settings' },
  ];

  const renderContent = () => {
    switch (activeSection) {
      case 'dashboard':
        return <Dashboard selectedPeriod={selectedPeriod} currentData={currentData} />;
      case 'patients':
        return <Patients />;
      case 'appointments':
        return <Appointments />;
      case 'medicine':
        return <Medicine />;
      case 'reports':
        return <Reports />;
      case 'settings':
        return <SettingsPanel />;
      default:
        return <Dashboard selectedPeriod={selectedPeriod} currentData={currentData} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
    <aside
      className={`${isSidebarOpen ? 'w-64' : 'w-20'} bg-white border-r border-gray-200 transition-all duration-300 ease-in-out fixed h-full z-20`}
    >
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
  
    <main className={`flex-1 ${isSidebarOpen ? 'ml-64' : 'ml-20'} transition-all duration-300 ease-in-out`}>
      <header className="bg-white border-b border-gray-200 p-4 sticky top-0 z-10">
        <div className="flex items-center justify-between">
          <div className="flex items-center bg-gray-100 rounded-lg px-4 py-2 flex-1 max-w-xl">
            <Search size={20} className="text-gray-400" />
            <input type="text" placeholder="Search..." className="ml-2 bg-transparent border-none focus:outline-none w-full" />
          </div>
          <button className="p-2 hover:bg-gray-100 rounded-full ml-4 relative">
            <BellRing size={20} />
            <span className="absolute top-1 right-1 bg-red-500 rounded-full w-2 h-2"></span>
          </button>
          <img
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt="Profile"
            className="w-10 h-10 rounded-full ml-4"
          />
        </div>
      </header>
  
      <div className="p-6">
        {activeSection === 'dashboard' && (
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold text-gray-800">Dashboard Overview</h1>
  
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center justify-between w-40 px-4 py-2 bg-white border border-gray-300 rounded-lg shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                <span className="text-sm font-medium text-gray-700">
                  {selectedPeriod.charAt(0).toUpperCase() + selectedPeriod.slice(1)} Report
                </span>
                <ChevronDown size={16} className="ml-2 text-gray-500" />
              </button>
  
              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
                  {['daily', 'weekly', 'monthly'].map((period) => (
                    <button
                      key={period}
                      onClick={() => {
                        setSelectedPeriod(period);
                        setIsDropdownOpen(false);
                      }}
                      className={`w-full px-4 py-2 text-left text-sm hover:bg-gray-50 first:rounded-t-lg last:rounded-b-lg
                        ${selectedPeriod === period ? 'bg-blue-50 text-blue-600' : 'text-gray-700'}`}
                    >
                      {period.charAt(0).toUpperCase() + period.slice(1)} Report
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}
  
        {renderContent()}
      </div>
    </main>
  </div>
  );
}

export default App;