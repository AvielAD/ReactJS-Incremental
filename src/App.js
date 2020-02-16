import React from 'react';
import './index.css';
import Component from './Component';

function App(props) {

  return (
      <React.Fragment>
        <Component
        />
        <Component
          color = "#333"        
        />
        <Component
          titulo = "Hola mundo"        
        />

        <Component
          items = {['test 1','test 2','test 3']}        
        />

      </React.Fragment>
    );
}


export default App;

