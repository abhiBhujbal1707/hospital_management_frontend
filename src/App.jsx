import { useState } from 'react'
import MainHero from './components/Hero/MainHero'
import { BrowserRouter as Router ,Route , Routes } from 'react-router-dom'
import ReceptionistDashboard from './components/Dashboards/Staff/Reception'
import MainNavbar from './components/Header/MainNavbar'
// import MyProvider from '.context/MyProvider'
function App() {

  const [user, setUser] = useState('Patient')
  return (
    <Router>
      <div>

      
     
      <MainNavbar user={user} setUser={setUser}></MainNavbar>
      
     
      {/* <MainHero user={user} setUser={setUser} /> */}
      {/* <Routes>
        <Route path='/dashboard' element={<ReceptionistDashboard />}></Route>
      </Routes> */}
      {/* <div className=" z-20 fixed top-0 w-full ">
          <MainNavbar user={user} setUser={setUser}  />
        </div> */}
        </div>
    </Router>
  )
}

export default App
