import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

//React Hooks - React 16.8 onwards we got this facility

//useEffect --> actions which can change our component in unpridictable fashion
// to perform side effects on other components in DOM

function MyHooks(){
  //this.state = {counter:0};
  const [count,setCount] = useState(0); //react hook

  //to fetch data API
  useEffect(() =>{
    document.title = `You clicked ${count} times`;
    }
  );

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

