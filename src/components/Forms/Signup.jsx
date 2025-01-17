import React from 'react';
import { useForm } from 'react-hook-form';
import Passwordgenerator from '../Passwordgenerator';

const Signup = ({ userType }) => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (Data) => {
        console.log(`${userType} Data:`, Data);
    };

    return (
        <div className=' my-4  rounded-lg  w-full max-w-md'>
            <h1 className='text-2xl font-bold text-center mb-6'>{userType} Sign In Form</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="max-w-5xl mx-auto p-8 bg-blur-xs shadow-lg rounded-lg ">
                <div className="grid grid-cols-2 gap-6">
                    <div>
                        <label htmlFor="fname" className="block text-sm font-semibold text-gray-800">First Name</label>
                        <input 
                            type="text" 
                            id="fname" 
                            {...register('fname', { required: 'Name is required' })} 
                            className="mt-2 w-full border border-gray-300 rounded-lg shadow-sm p-3 focus:ring-blue-500 focus:border-blue-500"
                        />
                        {errors.fname && <p className="text-red-500 text-sm mt-1">{errors.fname.message}</p>}
                    </div>

                    <div>
                        <label htmlFor="lname" className="block text-sm font-semibold text-gray-800">Last Name</label>
                        <input 
                            type="text" 
                            id="lname" 
                            {...register('lname', { required: 'Name is required' })} 
                            className="mt-2 w-full border border-gray-300 rounded-lg shadow-sm p-3 focus:ring-blue-500 focus:border-blue-500"
                        />
                        {errors.lname && <p className="text-red-500 text-sm mt-1">{errors.lname.message}</p>}
                    </div>

                    <div className="col-span-2">
                        <label htmlFor="gender" className="block text-sm font-semibold text-gray-800">Gender</label>
                        <div className="flex items-center gap-6 mt-2">
                            <label htmlFor="male" className="flex items-center">
                                <input
                                    type="radio"
                                    id="male"
                                    value="Male"
                                    {...register('gender', { required: 'Please select a gender' })}
                                    className="mr-2"
                                />
                                Male
                            </label>
                            <label htmlFor="female" className="flex items-center">
                                <input
                                    type="radio"
                                    id="female"
                                    value="Female"
                                    {...register('gender', { required: 'Please select a gender' })}
                                    className="mr-2"
                                />
                                Female
                            </label>
                            <label htmlFor="other" className="flex items-center">
                                <input
                                    type="radio"
                                    id="other"
                                    value="Other"
                                    {...register('gender', { required: 'Please select a gender' })}
                                    className="mr-2"
                                />
                                Other
                            </label>
                        </div>
                        {errors.gender && <p className="text-red-500 text-sm mt-1">{errors.gender.message}</p>}
                    </div>

                    <div>
                        <label htmlFor="password" className="block text-sm font-semibold text-gray-800">Password</label>
                        <input 
                            type="password" 
                            id="password" 
                            {...register('password', { required: 'Password is required' })} 
                            className="mt-2 w-full border border-gray-300 rounded-lg shadow-sm p-3 focus:ring-blue-500 focus:border-blue-500"
                        />
                        {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-sm font-semibold text-gray-800">Email</label>
                        <input 
                            type="email" 
                            id="email" 
                            {...register('email')} 
                            className="mt-2 w-full border border-gray-300 rounded-lg shadow-sm p-3 focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>

                    <div>
                        <label htmlFor="phone" className="block text-sm font-semibold text-gray-800">Phone Number</label>
                        <input 
                            type="tel" 
                            id="phone" 
                            {...register('phone', { required: 'Phone number is required' })} 
                            className="mt-2 w-full border border-gray-300 rounded-lg shadow-sm p-3 focus:ring-blue-500 focus:border-blue-500"
                        />
                        {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>}
                    </div>

                    <div>
                        <label htmlFor="dob" className="block text-sm font-semibold text-gray-800">Date Of Birth</label>
                        <input 
                            type="date" 
                            id="dob" 
                            {...register('dob', { required: 'Date of birth is required' })} 
                            className="mt-2 w-full border border-gray-300 rounded-lg shadow-sm p-3 focus:ring-blue-500 focus:border-blue-500"
                        />
                        {errors.dob && <p className="text-red-500 text-sm mt-1">{errors.dob.message}</p>}
                    </div>

                    <div>
                        <label htmlFor="address" className="block text-sm font-semibold text-gray-800">Address</label>
                        <input 
                            type="text" 
                            id="address" 
                            {...register('address')} 
                            className="mt-2 w-full border border-gray-300 rounded-lg shadow-sm p-3 focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>

                    <div>
                        <label htmlFor="bloodgrp" className="block text-sm font-semibold text-gray-800">Blood Group</label>
                        <input 
                            type="text" 
                            id="bloodgrp" 
                            {...register('bloodgrp', { required: 'Blood group is required' })} 
                            className="mt-2 w-full border border-gray-300 rounded-lg shadow-sm p-3 focus:ring-blue-500 focus:border-blue-500"
                        />
                        {errors.bloodgrp && <p className="text-red-500 text-sm mt-1">{errors.bloodgrp.message}</p>}
                    </div>

                    {userType === 'Doctor' && (
                        <>
                            <div>
                                <label htmlFor="specialization" className="block text-sm font-semibold text-gray-800">Specialization</label>
                                <input 
                                    type="text" 
                                    id="specialization" 
                                    {...register('specialization', { required: 'Specialization is required' })} 
                                    className="mt-2 w-full border border-gray-300 rounded-lg shadow-sm p-3 focus:ring-blue-500 focus:border-blue-500"
                                />
                                {errors.specialization && <p className="text-red-500 text-sm mt-1">{errors.specialization.message}</p>}
                            </div>

                            <div>
                                <label htmlFor="licences" className="block text-sm font-semibold text-gray-800">License Number</label>
                                <input 
                                    type="text" 
                                    id="licences" 
                                    {...register('licences', { required: 'License number is required' })} 
                                    className="mt-2 w-full border border-gray-300 rounded-lg shadow-sm p-3 focus:ring-blue-500 focus:border-blue-500"
                                />
                                {errors.licences && <p className="text-red-500 text-sm mt-1">{errors.licences.message}</p>}
                            </div>

                            <div>
                                <label htmlFor="exp" className="block text-sm font-semibold text-gray-800">Experience</label>
                                <input 
                                    type="text" 
                                    id="exp" 
                                    {...register('exp', { required: 'Experience is required' })} 
                                    className="mt-2 w-full border border-gray-300 rounded-lg shadow-sm p-3 focus:ring-blue-500 focus:border-blue-500"
                                />
                                {errors.exp && <p className="text-red-500 text-sm mt-1">{errors.exp.message}</p>}
                            </div>
                        </>
                    )}

                    {userType === 'Patient' && (
                        <>
                            <div>
                                <label htmlFor="emcontact" className="block text-sm font-semibold text-gray-800">Emergency Contact Number</label>
                                <input 
                                    type="tel" 
                                    id="emcontact" 
                                    {...register('emcontact', { required: 'Emergency contact is required' })} 
                                    className="mt-2 w-full border border-gray-300 rounded-lg shadow-sm p-3 focus:ring-blue-500 focus:border-blue-500"
                                />
                                {errors.emcontact && <p className="text-red-500 text-sm mt-1">{errors.emcontact.message}</p>}
                            </div>

                            <div className="col-span-2">
                                <label htmlFor="medhistory" className="block text-sm font-semibold text-gray-800">Medical History</label>
                                <textarea 
                                    id="medhistory" 
                                    {...register('medhistory', { required: 'Medical history is required' })} 
                                    className="mt-2 w-full border border-gray-300 rounded-lg shadow-sm p-3 focus:ring-blue-500 focus:border-blue-500"
                                ></textarea>
                                {errors.medhistory && <p className="text-red-500 text-sm mt-1">{errors.medhistory.message}</p>}
                            </div>
                        </>
                    )}
                </div>

                <button 
                    type="submit" 
                    className="w-full my-2 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 focus:ring-opacity-50"
                >
                    Sign Up
                </button>
            </form>
        </div>
    );
};

export default Signup;
