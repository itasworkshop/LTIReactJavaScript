import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';

//create JSX for printing current time into web page

function Tick(){
  const element = (
    <div>
      <h1>This is Tick Demo.</h1>
      <h2>This is {new Date().toString()}</h2>
    </div>
  );

  return element;
}

ReactDOM.render(  
    <Tick/>,
  document.getElementById('root')
);
