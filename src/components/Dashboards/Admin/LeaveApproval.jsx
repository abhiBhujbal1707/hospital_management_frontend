import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FcApprove ,FcDisapprove } from "react-icons/fc";
const LeaveApproval = () => {
  const [requests, setRequests] = useState([
    { id: 1, name: "Alice Johnson", startDate: "Feb 10, 2025", endDate: "Feb 15, 2025", reason: "Medical", status: "Pending", type: "Doctor", department: "Cardiology" },
    { id: 2, name: "Bob Smith", startDate: "Feb 12, 2025", endDate: "Feb 14, 2025", reason: "Personal", status: "Pending", type: "Receptionist" },
  ]);

  const handleApproval = (id, status) => {
    setRequests((prevRequests) =>
      prevRequests.map((req) =>
        req.id === id ? { ...req, status } : req
      )
    );
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Leave Approval System</h2>
      <div className="grid gap-4">
        {requests.map((request) => (
          <Card key={request.id} className="p-4 flex justify-between items-center">
            <CardContent>
              <h3 className="text-lg font-semibold">{request.name}</h3>
              <p className="text-gray-500">Start Date: {request.startDate}</p>
              <p className="text-gray-500">End Date: {request.endDate}</p>
              <p className="text-gray-500">Reason: {request.reason}</p>
              <p className="text-gray-500">Staff Type: {request.type}</p>
              {request.type === "Doctor" && <p className="text-gray-500">Department: {request.department}</p>}
              <p className={`font-semibold mt-2 ${request.status === "Approved" ? "text-green-500" : request.status === "Rejected" ? "text-red-500" : "text-yellow-500"}`}>
                Status: {request.status}
              </p>
            </CardContent>
            {request.status === "Pending" && (
              <div className="flex space-x-2">
                <Button onClick={() => handleApproval(request.id, "Approved")} className="bg-green-500 hover:bg-green-600 p-2">Approve</Button>
                <Button onClick={() => handleApproval(request.id, "Rejected")} className="bg-red-500 hover:bg-red-600 p-2">Reject</Button>
              </div>
            )}
          </Card>
        ))}
      </div>
    </div>
  );
};

export default LeaveApproval;
