import React, { useState } from 'react';
import './App.css';
import Header from './Header';

function App() {

  const [counter, setCounter] = useState(0);

  function increment() {
    setCounter(counter + 1);
    console.log(counter);
  }

  return (
    <div>  
      <Header title="Ecoleta"/>
      <h1>{counter}</h1>
      <button type="button" onClick={increment}>Incrementar</button>
    </div>
  );
}

export default App;
