
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import DoctorDashboard from './components/Dashboards/Doctor/DoctorDashboard.jsx'
// import HospitalManagement from './components/Staff/StaffDashboard.jsx'
import StaffDashboard from './components/Staff/StaffDashboard.jsx'
// import Button from './components/ui/button/Button'
import Login from './components/Forms/Login.jsx'
import LeaveApplicationForm from './components/Forms/LeaveApplicationForm.jsx'

createRoot(document.getElementById('root')).render(
    
 <>
 <App></App>
  <DoctorDashboard></DoctorDashboard> 
  {/* <HospitalManagement></HospitalManagement> */}
  <div className='w-full bg-white'>Hello </div>
 <StaffDashboard></StaffDashboard> 
    <Login></Login>
    <LeaveApplicationForm />
 </>
)
