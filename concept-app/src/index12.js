import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

//React Hooks - React 16.8 onwards we got this facility

//func based component and class based compoent - state and some lifecycle methods
//react hooks allow use of state and other feactures in function based component also
//Returns a stateful value, and a function to update it.

function MyHooks(){
  //this.state = {counter:0};
  const [count,setCount] = useState(0); //react hook

  return(
    <div>
      <p>You clicked {count} times.</p>
      <button onClick={() => {
          setCount(count + 1);
            }}>Click Me</button>
    </div>
  );

}

ReactDOM.render(  
    <MyHooks/>,
  document.getElementById('root')
);

