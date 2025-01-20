import React from 'react'
import { useForm } from 'react-hook-form'
const LeaveApplicationForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data)=>{
        console.log(`Data:`,data)
    }
    return (
        <>
            <h1>Leave Application</h1>
            <form onSubmit={handleSubmit(onSubmit)}>

            <div>
            <label htmlFor="leaveType">Leave Type</label>
            <input type="text" 
            id='leaveType'
            {...register('leaveType',{required:'Leave type must required!'})}

            />
            {errors.leaveType && <p>{errors.leaveType.message}</p>}
            </div>

            <button 
                    type="submit" 
                    className="w-full my-2 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 focus:ring-opacity-50"
                >
                    Sign Up
                </button>
            </form>

            

        </>
    )
}

export default LeaveApplicationForm
