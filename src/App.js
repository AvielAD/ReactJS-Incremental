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


      </React.Fragment>
    );
    
  }

}

export default App;

