import React, { useState } from 'react';

const patients = [
  { id: 1, patientName: 'John Doe', mainBill: 200, items: [{ item: 'Consultation Fees', price: 200 }], paidAmount: 0 },
  { id: 2, patientName: 'Jane Doe', mainBill: 150, items: [{ item: 'Consultation Fees', price: 150 }], paidAmount: 0 },
  { id: 3, patientName: 'Sam Wilson', mainBill: 300, items: [{ item: 'Consultation Fees', price: 300 }], paidAmount: 0 },
];

const Billing = () => {
  const [bills, setBills] = useState(patients);
  const [paidBills, setPaidBills] = useState([]);
  const [expanded, setExpanded] = useState(null);
  const [newItem, setNewItem] = useState({ item: '', price: 0, patientId: null });
  const [viewItems, setViewItems] = useState(null);
  const [partialPayment, setPartialPayment] = useState({ amount: 0, patientId: null });

  const addItemToBill = () => {
    if (!newItem.item || newItem.price <= 0 || newItem.patientId === null) return;

    setBills(bills.map((bill) => {
      if (bill.id === newItem.patientId) {
        return {
          ...bill,
          mainBill: bill.mainBill + parseFloat(newItem.price),
          items: [...bill.items, { item: newItem.item, price: parseFloat(newItem.price) }],
        };
      }
      return bill;
    }));
    setNewItem({ item: '', price: 0, patientId: null });
    setExpanded(null);
  };

  const handleAddBillClick = (patientId) => {
    setExpanded(patientId === expanded ? null : patientId);
    setNewItem({ ...newItem, patientId });
  };

  const handlePartialPayment = () => {
    if (partialPayment.amount <= 0 || partialPayment.amount > bills.find(bill => bill.id === partialPayment.patientId).mainBill) {
      alert('Please enter a valid amount for the partial payment.');
      return;
    }

    setBills(bills.map((bill) => {
      if (bill.id === partialPayment.patientId) {
        return {
          ...bill,
          mainBill: bill.mainBill - partialPayment.amount,
          paidAmount: (bill.paidAmount || 0) + partialPayment.amount,
        };
      }
      return bill;
    }));

    // Clear partial payment state
    setPartialPayment({ amount: 0, patientId: null });
  };

  const markAsPaid = (patientId) => {
    const paidPatient = bills.find(bill => bill.id === patientId);
    setPaidBills([...paidBills, paidPatient]);
    setBills(bills.filter(bill => bill.id !== patientId));
  };

  return (
    <div className="billingComponent bg-zinc-300 border shadow-lg rounded-lg p-6">
      <h3 className="text-xl font-semibold mb-4 border-b pb-2">Patient Billing</h3>
      <table className="w-full bg-white shadow-md rounded-lg overflow-hidden">
        <thead className="bg-gray-200 text-xl">
          <tr>
            <th className="p-4 text-left">Patient Name</th>
            <th className="p-4 text-left">Main Bill</th>
            <th className="p-4 text-left">Actions</th>
          </tr>
        </thead>
        <tbody className="font-bold">
          {bills.map((bill) => (
            <tr key={bill.id}>
              <td className="p-4">{bill.patientName}</td>
              <td className="p-4">{bill.mainBill}</td>
              <td className="p-4 flex gap-4">
                <button onClick={() => handleAddBillClick(bill.id)} className="text-blue-500 hover:text-blue-700">Add Bill</button>
                <button onClick={() => setPartialPayment({ ...partialPayment, patientId: bill.id })} className="text-orange-500 hover:text-orange-700">Partial Payment</button>
                <button onClick={() => markAsPaid(bill.id)} className="text-green-500 hover:text-green-700">Payment Done</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {expanded !== null && (
        <div className="mt-4 p-4 border rounded-lg bg-gray-100">
          <h4 className="text-lg font-semibold">Add Item to Bill</h4>
          <div className="flex gap-4">
            <input type="text" placeholder="Item Name" value={newItem.item} onChange={(e) => setNewItem({ ...newItem, item: e.target.value })} className="p-2 border rounded-md w-1/2" />
            <input type="number" placeholder="Item Price" value={newItem.price} onChange={(e) => setNewItem({ ...newItem, price: parseFloat(e.target.value) || 0 })} className="p-2 border rounded-md w-1/4" />
          </div>
          <button onClick={addItemToBill} className="mt-2 text-white bg-blue-500 p-2 rounded-md">Add Item</button>
          <button onClick={() => setExpanded(null)} className="mt-2 ml-4 text-white bg-red-500 p-2 rounded-md">Close</button>
        </div>
      )}

      {partialPayment.patientId !== null && (
        <div className="mt-4 p-4 border rounded-lg bg-gray-100">
          <h4 className="text-lg font-semibold">Enter Partial Payment</h4>
          <input type="number" placeholder="Amount" value={partialPayment.amount} onChange={(e) => setPartialPayment({ ...partialPayment, amount: parseFloat(e.target.value) || 0 })} className="p-2 border rounded-md w-1/2" />
          <button onClick={handlePartialPayment} className="mt-2 text-white bg-orange-500 p-2 rounded-md">Submit</button>
        </div>
      )}

      {paidBills.length > 0 && (
        <div className="mt-6">
          <h3 className="text-xl font-semibold mb-4 border-b pb-2">Paid Patients</h3>
          <table className="w-full bg-white shadow-md rounded-lg overflow-hidden">
            <thead className="bg-green-200 text-xl">
              <tr>
                <th className="p-4 text-left">Patient Name</th>
                <th className="p-4 text-left">Paid Amount</th>
                <th className="p-4 text-left">Details</th>
              </tr>
            </thead>
            <tbody className="font-bold">
              {paidBills.map((bill) => (
                <tr key={bill.id}>
                  <td className="p-4">{bill.patientName}</td>
                  <td className="p-4">{bill.paidAmount || bill.mainBill}</td>
                  <td className="p-4">
                    <button onClick={() => setViewItems(bill.id === viewItems ? null : bill.id)} className="text-blue-500 hover:text-blue-700">View Details</button>
                    {viewItems === bill.id && (
                      <div className="mt-2 p-4 border rounded-lg bg-gray-100">
                        <h5 className="font-semibold">Items Charged:</h5>
                        {bill.items.map((item, index) => (
                          <div key={index} className="flex justify-between">
                            <span>{item.item}</span>
                            <span>{item.price}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Billing;
