import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';

//create JSX for printing current time into web page

function tick(){
  const element = (
    <div>
      <h1>This is Tick Demo.</h1>
      <h2>This is {new Date().toString()}</h2>
    </div>
  );

ReactDOM.render(  
    element,
  document.getElementById('root')
);
}

setInterval(() => {
  tick()
}, 1000);
