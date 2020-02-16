import React from 'react';
import './index.css';

function Component(props) {
  const {titulo, color} = props; 

  return (
    <div style={{background: 'red', color:color}}>
      <h1>{titulo}</h1>
    </div>
  );
}

export default Component;