import React from 'react';

function App(props) {
  const {titulo, edad} = props; 

  return (
    <div>
      <h1>{titulo}</h1>
      <p>{edad}</p>
    </div>
  );
}

export default App;

