import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';

//create JSX for printing current time into web page

function MyHello(){
  return <h1>Hello from my hello.</h1>
}

function YourHello(){
  return <h1>Hello from your hello.</h1>
}

function SayHello(props){
  const isTrue = props.isTrue;

  if(isTrue){
    return <MyHello />;
  }else{
    return <YourHello />;
  }

}

ReactDOM.render(  
    <SayHello isTrue={true}/>,
  document.getElementById('root')
);
