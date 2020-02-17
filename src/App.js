import React, {Component} from 'react';
import './index.css';

class App extends Component{

  constructor(props){
    super(props);
    this.state = { 
      clicks: props.clicks,
      titulo: props.titulo,
    };
  }

  render(){
    
    const {titulo} = this.props;
    const {clicks} = this.state;

    return (
      <React.Fragment>
        <h1>{titulo}</h1>
        <span>{clicks}</span>
        <br/>
        <button onClick={ ()=>{
          this.setState({clicks: clicks + 1});
        }}>Click me</button>

      </React.Fragment>
    );
    
  }

}

export default App;

