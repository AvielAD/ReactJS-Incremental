import React from 'react';
import './index.css';
import Component from './Component';

function App(props) {
  const {titulo, edad} = props; 

  return (
      <React.Fragment>
        <Component
          titulo = "Hola mundo" color = "#333"        
        />

      </React.Fragment>
    );
}

export default App;

