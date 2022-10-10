import React, {useState} from 'react'
import './index.css'

function App() {
  const [num, setNum] = useState('')
  const [bin, setBin] = useState('')
  const [hexa, setHexa] = useState('')
  const [octa, setOcta] = useState('')



  let calcBmi = (event) => {
    event.preventDefault()

    if (num <0) {
      alert('Please enter positive number')
    } else {
      let bin = parseInt(num, 10).toString(2);
      setBin(bin)
      let hexa= parseInt(num, 10).toString(16);
      setHexa(hexa)
      let octa = parseInt(num, 10).toString(8);
      setOcta(octa)
    
    }
  }
  return (
    <div className="app">
      <div className='container'>
        <h2 className='head'>CONVERTER</h2>
        <form onSubmit={calcBmi}>
          <div>
           
           <label>NUMBER (decimals)</label>
            <input value={num} onChange={(e) => setNum(e.target.value)} />
          </div>
          <div>
            <button className='btn' type='submit'>Submit</button>
          </div>
        </form>

        <div className='center'>
          <h3>Binary Value :{bin}</h3>
         
          <h3>Hexadecimal Value :{hexa}</h3>
          
          <h3>Octal Value :{octa}</h3>
        </div>

       
      </div>
    </div>
  );
}

export default App;