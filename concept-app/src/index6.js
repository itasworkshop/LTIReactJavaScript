import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//class based component - state -- their own property

class MyComponent extends React.Component{

  constructor(props){
    super(props);
    this.state = {isOn:false};
    this.myHandler = this.myHandler.bind(this);
  }

  myHandler(){
    this.setState( state => (
      {isOn: !state.isOn}
    ));
  }

  render(){
    return(
      <button onClick={this.myHandler}>{this.state.isOn ? 'ON' : 'OFF'}</button>
    );
  }

}

ReactDOM.render(  
    <MyComponent />,
  document.getElementById('root')
);
