
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import DoctorDashboard from './DoctorDashboard.jsx'
// import HospitalManagement from './components/Staff/StaffDashboard.jsx'
import StaffDashboard from './components/Staff/StaffDashboard.jsx'

import Login from './components/Forms/Login.jsx'
import LeaveApplicationForm from './components/Forms/LeaveApplicationForm.jsx'
import Signup from './components/Forms/Signup.jsx'
import Reception from './components/Dashboards/Staff/Reception.jsx'
import AdminDashboard from './components/Dashboards/Admin/AdminDashboard.jsx'
import PatientDashboard from "./components/Dashboards/Patient/PatientDashboard.jsx";
createRoot(document.getElementById('root')).render(
   
    
 <>
 {/* <App></App> */}
   <DoctorDashboard></DoctorDashboard> 
  {/* <HospitalManagement></HospitalManagement> */}
  {/* <div className='w-full bg-white'>Hello </div> */}
 {/* <StaffDashboard></StaffDashboard>  */}
    {/* <Login></Login> */}
    {/* <LeaveApplicationForm /> */}
   {/* <Reception /> */}
   {/* < AdminDashboard />  */}
  {/* { <PatientDashboard /> } */}
 </>
);
