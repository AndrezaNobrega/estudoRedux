import React from 'react';
import logo from './logo.svg';
import './App.css';



import Intervalo from './components/Intervalo';
import Media from './components/Media';
import Sorteio from './components/Sorteio';
import Soma from './components/Soma';


function App() {

  return (
    <div className="App">
      <h1>Exercício React-Redux</h1>
      <div className='linha'>
        <Intervalo ></Intervalo>       
      </div>
      <div className='linha'>
        <Media  />
        <Soma />
        <Sorteio   />
      </div>

    </div>
  );
}

export default App;
