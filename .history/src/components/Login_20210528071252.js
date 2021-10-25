import '../assets/css/Login.css';
import React, { useRef, useState } from 'react';
import axios from 'axios';

const Login  = () => {

    const [username,setUsername]=useState('');
    const [password,setPassword]=useState('');

 const  handleSubmit = e =>{
       e.preventDefault();

       const data ={
           username:pseudo,
           password:password
       }

       axios.post('http://localhost:8080/authenticate', data).
       then(res=>{
           console.log(res)
       }).catch(err=>{
        console.log(err)
       })
       //console.log(data)
   }

   
       return (
          <form onSubmit={handleSubmit} className = 'formBlock'>
              <h1>Connexion</h1>


              <div className="labels">Pseudo </div>
              <div className='form-group'>
                  
                  <input type="text" className='form-control' placeholder='pseudo' name='username'
                       onChange={e=>setUsername(e.target.value)}/>
              </div>

              <div className="labels">Password  </div>
              <div className='form-group'>
                  <input type="password" className='form-control' placeholder='password' name='password'
                       onChange={ e => setPassword(e.target.value)}/>
              </div>
              <br/>

              <button className='btn btn-info btn-block submitbuton' onClick={handleSubmit}>Connexion</button>
              <br/>
              <p><span className="notice1">Vous n'avez pas de compte?</span> Veillez contacter le Directeur</p>

          </form>
        
       )
   
}                

export default Login;