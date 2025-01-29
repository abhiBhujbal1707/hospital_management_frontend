import React from 'react';
import { useForm } from 'react-hook-form';

const LeaveApplicationForm = () => {
    const { register, handleSubmit, formState: { errors }, reset, watch } = useForm();

    // Watch for startdate and enddate
    const startdate = watch('startdate');
    const enddate = watch('Enddate');

    const onSubmit = (data) => {
        console.log('Data:', data);
        reset();
    };

    return (
        <>
            <h1>Leave Application</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor="leaveType">Leave Type</label>
                    <input
                        type="text"
                        id="leaveType"
                        {...register('leaveType', { required: 'Leave type must be provided!' })}
                    />
                    {errors.leaveType && <p>{errors.leaveType.message}</p>}
                </div>

                <div>
                    <label htmlFor="startdate">Select Start Date</label>
                    <input
                        type="date"
                        id="startdate"
                        {...register('startdate', { required: 'Please mention the start date!' })}
                    />
                    {errors.startdate && <p>{errors.startdate.message}</p>}
                </div>

                <div>
                    <label htmlFor="Enddate">Select End Date</label>
                    <input
                        type="date"
                        id="Enddate"
                        {...register('Enddate', {
                            required: 'Please mention the end date!',
                            validate: (value) =>
                                new Date(value) >= new Date(startdate) || 'End date must be after start date!'
                        })}
                    />
                    {errors.Enddate && <p>{errors.Enddate.message}</p>}
                </div>

                <button
                    type="submit"
                    className="w-full my-2 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 focus:ring-opacity-50"
                >
                    Submit
                </button>
            </form>
        </>
    );
};

export default LeaveApplicationForm;
