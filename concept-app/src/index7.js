import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//difference between props and state

function MyHello(){
  return <h1>Hello you are logged in.</h1>
}

function YourHello(){
  return <h1>Hello you are logged out.</h1>
}

function LoginButton(props){
  return(
    <button onClick={props.onClick}>Login</button>
  );
}

function LogoutButton(props){
  return(
    <button onClick={props.onClick}>Logout</button>
  );
}

function SayHello(props){
  const isTrue = props.isTrue;

  if(isTrue){
    return <MyHello />;
  }else{
    return <YourHello />;
  }

}

class LoginCommponent extends React.Component{

  constructor(props){
    super(props);
    this.state = {isLoggedIn:false};
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.handleLoginClick = this.handleLoginClick.bind(this);
  }

  handleLoginClick(){
    //this.state = false;
    this.setState({isLoggedIn:false});
  }

  handleLogoutClick(){
    //this.state = false;
    this.setState({isLoggedIn:true});
  }

  render(){
    const isLog = this.state.isLoggedIn;
    let button;

    if(isLog){
      button = <LoginButton onClick={this.handleLoginClick}/>;
    }else{
      button = <LogoutButton onClick={this.handleLogoutClick}/>;
    }

    return(
      <div>
        <SayHello isTrue={isLog} />
        {button}
      </div>
    );

  }


}


ReactDOM.render(  
    <LoginCommponent />,
  document.getElementById('root')
);
