import React from 'react';
import './index.css';

function App(props) {
  const {titulo, edad} = props; 

  return (
    <div className="bloque">
      <h1>{titulo}</h1>
      <p>{edad}</p>
    </div>
  );
}

export default App;

