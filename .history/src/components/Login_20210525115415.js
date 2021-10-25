import '../assets/css/Login.css';
import React, { useRef, useState } from 'react';

const Login  = () => {

    const [pseudo,setPseudo]=useState('');
    const [password,setPassword]=useState('');

 const  handleSubmit = e =>{
       e.preventDefault();
   }

   
       return (
          <form onSubmit={handleSubmit} className = 'formBlock'>
              <h3>Connexion</h3>


              <h5>Pseudo </h5>
              <div className='form-group'>
                  
                  <input type="text" className='form-control' placeholder='pseudo'
                       onChange={e=>setPseudo(e.target.value)}/>
              </div>

              <h2>Password  </h2>
              <div className='form-group'>
                  <input type="password" className='form-control' placeholder='password'
                       onChange={ e => setPassword(e.target.value)}/>
              </div>

              <button className='btn btn-info btn-block submitbuton'>Connexion</button>

          </form>
        
       )
   
}                

export default Login;