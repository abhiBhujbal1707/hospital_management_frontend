import React from 'react';

const Leave = () => {
  return (
    <div className="bg-zinc-300 shadow rounded-lg p-6">
      <h2 className="text-xl font-semibold mb-4">Apply for Leave</h2>
      <form className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Leave Type
          </label>
          <select className="w-full border border-gray-300 rounded-lg px-3 py-2">
            <option>Sick Leave</option>
            <option>Vacation</option>
            <option>Personal Leave</option>
          </select>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Start Date
            </label>
            <input
              type="date"
              className="w-full border border-gray-300 rounded-lg px-3 py-2"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              End Date
            </label>
            <input
              type="date"
              className="w-full border border-gray-300 rounded-lg px-3 py-2"
            />
          </div>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Reason
          </label>
          <textarea
            rows={4}
            className="w-full border border-gray-300 rounded-lg px-3 py-2"
            placeholder="Please provide a reason for your leave..."
          />
        </div>
        
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700"
        >
          Submit Leave Request
        </button>
      </form>
    </div>
  );
};

export default Leave;