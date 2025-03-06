import React, { Children } from 'react';
import { useState } from 'react';
import MyContext from './MyContext';


const MyProvider = ({children}) =>{
    const [isLoggedIn, setisLoggedIn] = useState(false);
    const [Staff, setStaff] = useState(null)
    const [Appointment, setAppointment] = useState(null)
    const [Patients, setPatients] = useState(null)
    return(
        <MyContext.Provider value={{isLoggedIn,setisLoggedIn , Staff , setStaff,Appointment,setAppointment,Patients,setPatients}}>
            {children}
        </MyContext.Provider>
    )
}

export default MyProvider;