import React from 'react';

function App() {

  const frutas = [
    'piña',
    'mango',
    'fresa'
  ];

  return (
    <React.Fragment>
      <ul>
        {frutas.map(fruta => <li id={fruta}>{fruta}</li>)}
      </ul>



    </React.Fragment>
  );
}

export default App;

