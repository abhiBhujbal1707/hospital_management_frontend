import React from 'react';
import { FileText } from 'lucide-react';

const Reports = () => {
  const reports = [
    { id: 1, name: 'Monthly Patient Summary', date: '2024-02-01', type: 'Monthly Report' },
    { id: 2, name: 'Treatment Success Rate', date: '2024-02-15', type: 'Analysis Report' },
    { id: 3, name: 'Patient Satisfaction Survey', date: '2024-02-10', type: 'Survey Report' },
  ];

  return (
    <div className="bg-zinc-300 shadow rounded-lg p-6">
      <h2 className="text-xl font-semibold mb-4">Reports</h2>
      <div className="grid gap-4">
        {reports.map((report) => (
          <div key={report.id} className="bg-white p-4 rounded-lg shadow flex items-center justify-between">
            <div className="flex items-center gap-3">
              <FileText className="text-blue-600" />
              <div>
                <h3 className="font-medium">{report.name}</h3>
                <p className="text-sm text-gray-600">{report.type} - {report.date}</p>
              </div>
            </div>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              View
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reports;