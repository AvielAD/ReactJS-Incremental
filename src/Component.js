import React from 'react';
import './index.css';

function Component(props) {
  const {titulo, color, items} = props; 

  return (
    <div style={{background: 'red', color:color}}>
        <h1>{titulo}</h1>

        <ul>
            {items.map(item =>(
                <li key={item}>{item}</li>
            ))}
        </ul>
    </div>
  );
}
Component.defaultProps = {

    color: '#ff000',
    titulo: 'Titulo',
    items: ['Comprar algo','otro ejemplo','test']
  };
export default Component;