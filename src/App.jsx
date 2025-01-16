import { useState } from 'react'
import MainHero from './components/Hero/MainHero'

function App() {
  const [count, setCount] = useState(0)

  return (
  <>
   <MainHero />
    
  </>
  )
}

export default App
