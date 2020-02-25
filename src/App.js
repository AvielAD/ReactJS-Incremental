import React, {Component} from 'react';
import './index.css';
import Controlado from './Controlado';
class App extends Component{

  constructor(props){
    super(props);
    this.state = { 
    };
  }

  render(){

    return (
      <React.Fragment>
          <Controlado></Controlado>
          <h1>Hola mundo en react</h1>

      </React.Fragment>
    );
    
  }

}

export default App;

