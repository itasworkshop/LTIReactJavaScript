function App(props){
    return <h1>Hello World!!!! {props.name1}</h1>
  }
  
const AppFinal = (props) =>{
    return (
      <div>
        <App name1="Rajesh"/>
        <App name1="Savita"/>
      </div>
  
    );
}


export default AppFinal;