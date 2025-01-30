import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';

const StaffManagement = () => {
  const [staffList, setStaffList] = useState([]);
  const [currentStaffId, setCurrentStaffId] = useState(null);

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    reset,
    formState: { errors },
  } = useForm();

  const role = watch('role');

  useEffect(() => {
    const mockStaffData = [
      { id: 1, firstName: 'John', lastName: 'Doe', gender: 'Male', phone: '1234567890', email: 'john@example.com', address: '123 Main St', dob: '1990-01-01', joiningDate: '2022-06-15', shift: 'Day', salary: 50000, status: 'Active', emergencyContact: '9876543210', role: 'Nurse' },
      { id: 2, firstName: 'Jane', lastName: 'Smith', gender: 'Female', phone: '0987654321', email: 'jane@example.com', address: '456 Elm St', dob: '1985-07-20', joiningDate: '2021-04-10', shift: 'Night', salary: 70000, status: 'Active', emergencyContact: '8765432109', role: 'Doctor', specialization: 'Cardiology', licenseNumber: 'DOC12345', experience: '10 years' },
    ];
    setStaffList(mockStaffData);
  }, []);

  const onSubmit = (data) => {
    if (currentStaffId !== null) {
      setStaffList((prev) => prev.map((staff) => (staff.id === currentStaffId ? { ...staff, ...data, id: currentStaffId } : staff)));
      setCurrentStaffId(null);
    } else {
      const newStaffEntry = { id: staffList.length + 1, ...data };
      setStaffList((prev) => [...prev, newStaffEntry]);
    }
    reset();
  };

  const handleEdit = (staff) => {
    setCurrentStaffId(staff.id);
    Object.keys(staff).forEach((key) => setValue(key, staff[key]));
  };
  const handleDelete = (id) => {
    setStaffList((prev) => prev.filter((staff) => staff.id !== id));
  };
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Staff Management</h2>

      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-2">{currentStaffId !== null ? 'Edit Staff' : 'Add New Staff'}</h3>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <input {...register('firstName', { required: 'First Name is required' })} placeholder="First Name" className="w-full px-4 py-2 border rounded-lg" />
          <input {...register('lastName', { required: 'Last Name is required' })} placeholder="Last Name" className="w-full px-4 py-2 border rounded-lg" />
          <select {...register('gender', { required: 'Gender is required' })} className="w-full px-4 py-2 border rounded-lg">
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
          <input {...register('phone', { required: 'Phone Number is required' })} placeholder="Phone Number" className="w-full px-4 py-2 border rounded-lg" />
          <input {...register('email', { required: 'Email is required' })} placeholder="Email" className="w-full px-4 py-2 border rounded-lg" />
          <input {...register('address', { required: 'Address is required' })} placeholder="Address" className="w-full px-4 py-2 border rounded-lg" />
          <label className="block">Date of Birth</label>
          <input {...register('dob', { required: 'Date of Birth is required' })} type="date" className="w-full px-4 py-2 border rounded-lg" />
          <label className="block">Joining Date</label>
          <input {...register('joiningDate', { required: 'Joining Date is required' })} type="date" className="w-full px-4 py-2 border rounded-lg" />
          <input {...register('shift', { required: 'Shift Timing is required' })} placeholder="Shift Timing" className="w-full px-4 py-2 border rounded-lg" />
          <input {...register('salary', { required: 'Salary is required' })} type="number" placeholder="Salary" className="w-full px-4 py-2 border rounded-lg" />
          <select {...register('status', { required: 'Status is required' })} className="w-full px-4 py-2 border rounded-lg">
            <option value="">Select Status</option>
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
          </select>
          <input {...register('emergencyContact', { required: 'Emergency Contact is required' })} placeholder="Emergency Contact" className="w-full px-4 py-2 border rounded-lg" />
          <select {...register('role', { required: 'Role is required' })} className="w-full px-4 py-2 border rounded-lg">
            <option value="">Select Role</option>
            <option value="Doctor">Doctor</option>
            
            <option value="Receptionist">Receptionist</option>
           
          </select>
          {role === 'Doctor' && (
            <>
              <input {...register('specialization', { required: 'Specialization is required' })} placeholder="Specialization" className="w-full px-4 py-2 border rounded-lg" />
              <input {...register('licenseNumber', { required: 'License Number is required' })} placeholder="License Number" className="w-full px-4 py-2 border rounded-lg" />
              <input {...register('experience', { required: 'Experience is required' })} placeholder="Years of Experience" className="w-full px-4 py-2 border rounded-lg" />
            </>
          )}
          <button type="submit" className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg">
            {currentStaffId !== null ? 'Update Staff' : 'Add Staff'}
          </button>
        </form>
      </div>

      <h3 className="text-xl font-semibold mb-2">Staff List</h3>
      <ul>
        {staffList.map((staff) => (
          <li key={staff.id} className="flex justify-between items-center p-2 border-b">
            {staff.firstName} {staff.lastName} ({staff.role})
            <div className="space-x-2">
              <button onClick={() => handleEdit(staff)} className="px-3 py-1 bg-yellow-500 text-white rounded">Edit</button>
              <button onClick={() => handleDelete(staff.id)} className="px-3 py-1 bg-red-500 text-white rounded">Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StaffManagement;
