import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';

function App(props){
  return <h1>Hello World!!!! {props.name1}{props.name2}</h1>
}

ReactDOM.render(  
    <App name1="Rajesh" name2="Savita"/>,
  document.getElementById('root')
);
