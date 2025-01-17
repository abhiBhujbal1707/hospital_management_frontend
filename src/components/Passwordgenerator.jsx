import { useRef, useState } from 'react';
import { useCallback , useEffect } from 'react';


function Passwordgenerator() {
  const [Length, setLength] = useState(8)
  const [number, setNumber] = useState(false)
  const [character, setCharacter] = useState(false)
  const [password, setPassword] = useState("")
  const [theme, settheme] = useState("light")

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (number) str += "0123456789"
    if (character) str += "!@#$%^&*()_+|}{<>~"

    for (let i = 1; i <= Length; i++) {
      let pos = Math.floor(Math.random() * str.length)
      pass += str.charAt(pos)

    }
    //console.log(pass)
    setPassword(pass)
    console.log(password)
  }, [Length, number, character, setPassword])

  const passRef = useRef(null)

  const copyPassword = useCallback(()=>{
    window.navigator.clipboard.writeText(password)
    
   passRef.current?.select()
  },[password])

  useEffect(()=>{
    passwordGenerator()
  },[Length, number, character, passwordGenerator])

  const handleTheme = () =>{
    settheme(prev=>prev==="light"?"dark":"light")
    if(theme==="dark") document.body.style.filter="invert"
   document.body.style.filter="invert(1)"
  }

  return (
    <>
      <div className="bg-black w-full h-screen flex items-center justify-center  ">
        <div className="bg-slate-600 w-2/4 h-64 rounded-lg flex flex-col  ">
          <h1 className='text-white font-bold text-3xl mx-auto mt-2'>Password Generator</h1>
          <div className='flex items-center justify-center mt-10 mx-4'>
            <div className='flex w-full h-10 rounded-lg border border-gray-300'>
              <input
                type="text"
                className='flex-grow rounded-l-lg pl-2 outline-none'
                value={password}
                placeholder='Generated Password'
                readOnly
                ref={passRef}
              />
              <button className='bg-blue-700 text-white font-bold rounded-r-lg px-4 outline-none'
              onClick={copyPassword}>
                Copy
              </button>
            </div>

          </div>
          <div className='flex mt-10  mx-auto gap-6 '>
            <div className='flex '>
              <input type="range"
                value={Length}
                min={7}

                onChange={(e) => {
                  setLength(e.target.value)
                }} /><label className='text-white' htmlFor="">Length:{Length}</label>


            </div>
            <div>
              <input type="checkbox" checked={number} onChange={() => setNumber(prev => !prev)} />

              <label className='text-white animate__animated animate__fadeInRightBig'>Numbers</label>
            </div>
            <div>
              <input type="checkbox" checked={character} onChange={() => setCharacter(prev => !prev)} />

              <label className='text-white'>Characters</label>
            </div>
          </div>

        </div>
      </div>


                <button onClick={handleTheme}>Change Theme</button>

    </>
  );
}

export default Passwordgenerator;
