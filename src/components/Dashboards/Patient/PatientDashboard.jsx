import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FaUserCircle, FaCalendarCheck, FaFileMedical, FaMoneyBillWave } from "react-icons/fa";

const PatientDashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Profile Section */}
        <Card className="p-4 flex flex-col items-center text-center">
          <FaUserCircle className="text-6xl text-blue-500" />
          <h2 className="text-xl font-semibold mt-3">John Doe</h2>
          <p className="text-gray-500">Patient ID: 123456</p>
          <Button className="mt-4">View Profile</Button>
        </Card>

        {/* Appointments */}
        <Card className="p-4 flex flex-col items-center text-center">
          <FaCalendarCheck className="text-5xl text-green-500" />
          <h3 className="text-lg font-semibold mt-3">Appointments</h3>
          <p className="text-gray-500">Next: 12th Feb, 2025</p>
          <Button className="mt-4">Manage</Button>
        </Card>

        {/* Medical Records */}
        <Card className="p-4 flex flex-col items-center text-center">
          <FaFileMedical className="text-5xl text-red-500" />
          <h3 className="text-lg font-semibold mt-3">Medical Records</h3>
          <p className="text-gray-500">3 new reports</p>
          <Button className="mt-4">View</Button>
        </Card>

        {/* Billing */}
        <Card className="p-4 flex flex-col items-center text-center">
          <FaMoneyBillWave className="text-5xl text-yellow-500" />
          <h3 className="text-lg font-semibold mt-3">Billing</h3>
          <p className="text-gray-500">Pending: $250</p>
          <Button className="mt-4">Pay Now</Button>
        </Card>
      </div>
    </div>
  );
};

export default PatientDashboard;
