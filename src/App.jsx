import { useState } from 'react'
import MainHero from './components/Hero/MainHero'

function App() {
  
  const [user, setUser] = useState('Patient')
  return (
  <>
  <MainHero user={user} setUser={setUser} />
    
  </>
  )
}

export default App
