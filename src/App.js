import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';



import Intervalo from './components/Intervalo';
import Media from './components/Media';
import Sorteio from './components/Sorteio';
import Soma from './components/Soma';


function App() {

  const [min, setMin] = useState(100)
  const [max, setMax] = useState(100000)

  return (
    <div className="App">
      <h1>Exercício React-Redux</h1>
      <div className='linha'>
        <Intervalo min={min} max={max}
        onMinChanged={setMin} onMaxChanged={setMax}></Intervalo>       
      </div>
      <div className='linha'>
        <Media min={min} max={max} />
        <Soma min={min} max={max} />
        <Sorteio min={min} max={max}  />
      </div>

    </div>
  );
}

export default App;
