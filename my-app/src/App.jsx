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
          <input class="count" type="text" placeholder="0"></input>
        </div>
        <p className='tip'>Select Tip %</p>
        <div className='botoes'>
          <div className='botoes_cima'>
            <button className='botao'>5%</button>
            <button className='botao'>10%</button>
            <button className='botao'>15%</button>
          </div>
          <div className='botoes_baixo'>
            <button className='botao'>25%</button>
            <button className='botao'>50%</button>
            <button className='botao botao6'>Custom</button>
          </div>
        </div>
        <div className='input_money'>
          <p className='num_people'>Number of people</p>
          <input class="count" type="text" placeholder="0"></input>
        </div>

      </div>
      <div className='right'>
        
      </div>
    </div>
   </div>
)}

export default App
