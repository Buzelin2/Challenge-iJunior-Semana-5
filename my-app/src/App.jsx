import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
   <div className='tudo'>
    <p className='split'>SPLI</p>
    <p className='split'>TTER</p>
    <div className='main'></div>
   </div>
)}

export default App
