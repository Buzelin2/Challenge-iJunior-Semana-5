import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
   <div className='tudo'>
    <div className='splitter'>
      <p className='split'>SPLI</p>
      <p className='split'>TTER</p>
    </div>
    <div className='main'>
      <div className='left'>
        <div className='input_money'>
          <p className='bill'>Bill</p>
          <input class="money" type="text" placeholder="0"></input>
        </div>

      </div>
      <div className='right'>
        
      </div>
    </div>
   </div>
)}

export default App
