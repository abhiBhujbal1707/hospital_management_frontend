import React, { useState, useEffect, useContext } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FcApprove, FcDisapprove } from "react-icons/fc";
import MyContext from "../../../context/MyContext"; // Import the context

const LeaveApproval = () => {
  const { Staff } = useContext(MyContext); // Get logged-in user
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!Staff || !Staff.id) return; // Ensure Staff data is available

    const fetchLeaveRequests = async () => {
      try {
        const response = await fetch(`http://localhost:5116/api/leaverequest/${Staff.id}`); // Fetch only user's leave requests
        if (!response.ok) throw new Error("Failed to fetch data");

        const data = await response.json();
        setRequests(data);
      } catch (error) {
        console.error("Error fetching leave requests:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchLeaveRequests();
  }, [Staff]); // Fetch data when `Staff` changes

  const handleApproval = async (id, status) => {
    try {
      const response = await fetch(`http://localhost:5116/api/leaverequest/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ LeaveStatus: status }),
      });

      if (!response.ok) throw new Error("Failed to update leave status");

      setRequests((prevRequests) =>
        prevRequests.map((req) =>
          req.Id === id ? { ...req, LeaveStatus: status } : req
        )
      );
    } catch (error) {
      console.error("Error updating leave status:", error);
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Leave Approval System</h2>
      {loading ? (
        <p>Loading leave requests...</p>
      ) : requests.length === 0 ? (
        <p>No pending leave requests.</p>
      ) : (
        <div className="grid gap-4">
          {requests.map((request) => (
            <Card key={request.Id} className="p-4 flex justify-between items-center">
              <CardContent>
                <h3 className="text-lg font-semibold">{request.Name}</h3>
                <p className="text-gray-500">Start Date: {request.StartDate}</p>
                <p className="text-gray-500">End Date: {request.EndDate}</p>
                <p className="text-gray-500">Reason: {request.Reason}</p>
                <p className="text-gray-500">Staff Type: {request.Type}</p>
                {request.Type === "Doctor" && <p className="text-gray-500">Department: {request.Department}</p>}
                <p className={`font-semibold mt-2 ${request.LeaveStatus === "Approved" ? "text-green-500" : request.LeaveStatus === "Rejected" ? "text-red-500" : "text-yellow-500"}`}>
                  Status: {request.LeaveStatus}
                </p>
              </CardContent>
              {request.LeaveStatus === "Pending" && (
                <div className="flex space-x-2">
                  <Button onClick={() => handleApproval(request.Id, "Approved")} className="bg-green-500 hover:bg-green-600 p-2">
                    <FcApprove className="mr-2" /> Approve
                  </Button>
                  <Button onClick={() => handleApproval(request.Id, "Rejected")} className="bg-red-500 hover:bg-red-600 p-2">
                    <FcDisapprove className="mr-2" /> Reject
                  </Button>
                </div>
              )}
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default LeaveApproval;