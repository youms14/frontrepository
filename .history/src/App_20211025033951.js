import React, { useState } from 'react';
import './App.css';
import Login from './Login';
import Home from './Home';
import {BrowserRouter , Route,Switch} from 'react-router-dom';


const App = () =>  {


  const [isConnected,setIsConnected]=useState(false);
  const [user, setUser]=useState({username:"",password:""});
  //const [error, setError]=useState("");

  const login = details => {
    console.log(details)

    if (localStorage.getItem('username')!==""){
        setUser({username:localStorage.getItem('username')})
      }

      if (localStorage.getItem('password')!==""){
        setUser({password:localStorage.getItem('password')})
      }

      console.log("je suis dans le login")
      console.log(user)

  }
  
 
  const renderRouter = (isConnected) => {
    //J'ai changé la condition deconnexion(momentanée)
    return !isConnected ? <Home setConnect={setIsConnected} isConnected={isConnected} /> : <Login  setConnect={setIsConnected} isConnected={isConnected} />
  }

  // {login}
  // {(localStorage.getItem('username')!== "")?(
  //   <Home user={user}/>
  // ):(
  //   <Login/>
  // )}

  
    
    return (
      
      
      
          <div className="App ">
         {renderRouter(isConnected)}
        </div>
   



      

    );
  
  
}

export default App;
