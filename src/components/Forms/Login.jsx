
import React, { useState, useContext } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { IoEye } from "react-icons/io5";
import MyContext from '../../context/MyContext';

const Login = () => {
  const { register, handleSubmit, formState: { errors } , reset } = useForm();
  const [loginError, setLoginError] = useState('');
  const [userInfo, setUserInfo] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const { isLoggedIn, setisLoggedIn, Staff, setStaff } = useContext(MyContext);

  const onSubmit = async (data) => {
    try {
      const response = await axios.post('http://localhost:5116/api/auth/login', {
        phone: data.phone,
        password: data.password
      });

      // ✅ Save Token in localStorage
      localStorage.setItem('token', response.data.token);

      // ✅ Update Staff state
      setStaff(response.data.user); 

      console.log("Staff Data:", response.data.user); // Debugging

      // ✅ Set user info for display
      setUserInfo({
        firstName: response.data.user.firstName,
        lastName: response.data.user.lastName,
        role: response.data.user.role,
        userType: response.data.user.userType
      });

      // ✅ Set login status to true
      setisLoggedIn(true);

      // ✅ Fix Alert: Use response.data.user instead of Staff (since Staff updates asynchronously)
      alert(`Login successful! Welcome, ${response.data.user.firstName} ${response.data.user.lastName}`);

      setLoginError('');
      reset();
    } catch (error) {
      setLoginError(error.response?.data?.message || 'Login failed');
    }
  };

  return (
    <div className="mt-10 rounded-lg w-full max-w-md">
      <h1 className="text-2xl font-bold text-center mb-6">Login Form</h1>

      <form onSubmit={handleSubmit(onSubmit)} className="p-8 bg-white shadow-lg rounded-lg">
        {/* Phone Number */}
        <div className="mb-4">
          <input
            type="tel"
            id="phone"
            placeholder='Phone Number'
            {...register('phone', { required: 'Phone number is required', minLength: { value: 10, message: 'Phone number must be 10 digits long' } })}
            className="mt-2 w-full border border-gray-300 rounded-lg shadow-sm p-3 focus:ring-blue-500 focus:border-blue-500"
          />
          {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>}
        </div>

        {/* Password */}
        <div className="mb-4 relative flex justify-between items-center">
          <input
            type={showPassword ? 'text' : 'password'}
            id="password"
            placeholder='Password'
            {...register('password', { required: 'Password is required', minLength: { value: 6, message: 'Password must be at least 6 characters long' } })}
            className="mt-2 w-full border border-gray-300 rounded-lg shadow-sm p-3 focus:ring-blue-500 focus:border-blue-500"
          />
          {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}

          {/* Eye Icon to toggle password visibility */}
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-8 text-gray-600"
          >
            {showPassword ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 5c7 0 7 14 0 14S5 12 12 5z"></path>
              </svg>
            ) : (
              <IoEye />
            )}
          </button>
        </div>

        {/* Error Message */}
        {loginError && <p className="text-red-500 text-sm text-center">{loginError}</p>}

        {/* Submit Button */}
        <button type="submit" className="w-full my-2 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300">
          Login
        </button>
      </form>

      {/* Show User Info if login is successful */}
      {userInfo && isLoggedIn && (
        <div className="mt-4 p-4 bg-green-100 border border-green-400 text-green-800 rounded-lg text-center">
          <p><strong>Welcome:</strong> {userInfo.firstName} {userInfo.lastName}</p>
          <p><strong>Role:</strong> {userInfo.role}</p>
        </div>
      )}
    </div>
  );
};

export default Login;
