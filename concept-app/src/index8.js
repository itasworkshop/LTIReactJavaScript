import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//forms - always maintains state, we use controlled component to create forms

class MyForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {value:''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event){
    console.log(event);
    this.setState({value:event.target.value});
    console.log(this.state);
  }

  handleSubmit(event){
    alert('Are you sure you want to submit? '+this.state.value);
    event.preventDefault();
  }

  render(){
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.value} onChange={this.handleChange}/>
        </label>
        <input type="submit" value="Submit"/>
      </form>
    );
  }


}

ReactDOM.render(  
    <MyForm />,
  document.getElementById('root')
);
