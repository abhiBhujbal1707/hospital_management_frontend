import React from 'react';
import { useForm } from 'react-hook-form';

const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = (data) => {
    console.log('Login Data:', data);
  };

  return (
    <div className="mt-10 rounded-lg w-full max-w-md ">
      <h1 className="text-2xl font-bold text-center mb-6">Login Form</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="p-8 bg-blur-xs shadow-lg rounded-lg">
        <div className="mb-4">
          <label htmlFor="Phone" className="block text-sm font-semibold text-gray-800">
            Phone Number
          </label>
          <input
            type="tel"
            id="Phone"
            {...register('Phone', {
              required: 'Phone number is required',
              minLength: {
                value: 10,
                message: 'Phone number must be 10 digits long',
              },
            })}
            className="mt-2 w-full border border-gray-300 rounded-lg shadow-sm p-3 focus:ring-blue-500 focus:border-blue-500"
          />
          {errors.Phone && <p className="text-red-500 text-sm mt-1">{errors.Phone.message}</p>}
        </div>

        <div className="mb-4">
          <label htmlFor="Password" className="block text-sm font-semibold text-gray-800">
            Password
          </label>
          <input
            type="password"
            id="Password"
            {...register('Password', {
              required: 'Password is required',
              minLength: {
                value: 6,
                message: 'Password must be at least 6 characters long',
              },
            })}
            className="mt-2 w-full border border-gray-300 rounded-lg shadow-sm p-3 focus:ring-blue-500 focus:border-blue-500"
          />
          {errors.Password && <p className="text-red-500 text-sm mt-1">{errors.Password.message}</p>}
        </div>

        <button
          type="submit"
          className="w-full my-2 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 focus:ring-opacity-50"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
