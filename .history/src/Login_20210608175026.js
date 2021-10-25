import './assets/css/Login.css';
import React, { useRef, useState,useEffect } from 'react';
import axios from 'axios';
import Home from './Home';

import {BrowserRouter as Router, Route, Link, NavLink, Switch} from 'react-router-dom';

const Login  = ({ isConnected, setConnect }) => {

    const [username,setUsername]=useState('');
    const [password,setPassword]=useState('');

    const clearStorage = () => {
        localStorage.clear();
    }
   
    //equivalence of cdM et cdU
    useEffect(() => {
        localStorage.clear();
    });
    
    
    const  handleSubmit = e =>{
        e.preventDefault();
 
        const data ={
            username:username,
            password:password
        }
 
        axios.post('http://localhost:8080/authenticate', data).
        then(res=>{
            localStorage.setItem('token',res.data.token)
            console.log('je suis dans le login')
            console.log(res.config.data)
            localStorage.setItem('username',res.config.data.username)
            localStorage.setItem('password',res.config.data.password)
            setConnect(true)
            isConnected=true
        }).catch(err=>{
            localStorage.setItem('token', null)
         console.log(err)
        })
        //console.log(data)
    }

   
       return (
        
            
          <form onSubmit={handleSubmit} className = 'formBlock'>
              <h1>Connexion</h1>
                {clearStorage}

              <div className="labels">Pseudo </div>
              <div className='form-group'>
                  
                  <input type="text" className='form-control' placeholder='pseudo' name='username' value={username}
                       onChange={e=>setUsername(e.target.value)}/>
              </div>

              <div className="labels">Password  </div>
              <div className='form-group'>
                  <input type="password" className='form-control' placeholder='password' name='password' value={password}
                       onChange={ e => setPassword(e.target.value)}/>
              </div>
              <br/>

              
                  <button  type="submit" className='btn btn-info btn-block submitbuton' onClick={handleSubmit}>Connexion</button>
                   
                  
              <br/>
              <p><span className="notice1">Vous n'avez pas de compte?</span> Veillez contacter le Directeur</p>

          </form>

          
        
           
         
        
       )
   
}                

export default Login;