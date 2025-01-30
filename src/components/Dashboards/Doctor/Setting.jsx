import React from 'react';
import { Bell, Lock, User, Moon } from 'lucide-react';

const Settings = () => {
  return (
    <div className="bg-zinc-300 shadow rounded-lg p-6">
      <h2 className="text-xl font-semibold mb-6">Settings</h2>
      
      <div className="space-y-6">
        <div className="border-b pb-6">
          <h3 className="text-lg font-medium mb-4 flex items-center gap-2">
            <User className="text-blue-600" />
            Profile Settings
          </h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email Notifications
              </label>
              <select className="w-full border border-gray-300 rounded-lg px-3 py-2">
                <option>All notifications</option>
                <option>Important only</option>
                <option>None</option>
              </select>
            </div>
          </div>
        </div>
        
        <div className="border-b pb-6">
          <h3 className="text-lg font-medium mb-4 flex items-center gap-2">
            <Bell className="text-blue-600" />
            Notification Preferences
          </h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-gray-700">Email Alerts</span>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
              </label>
            </div>
          </div>
        </div>
        
        <div className="border-b pb-6">
          <h3 className="text-lg font-medium mb-4 flex items-center gap-2">
            <Lock className="text-blue-600" />
            Security
          </h3>
          <button className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700">
            Change Password
          </button>
        </div>
        
        <div>
          <h3 className="text-lg font-medium mb-4 flex items-center gap-2">
            <Moon className="text-blue-600" />
            Appearance
          </h3>
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-gray-700">Dark Mode</span>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;