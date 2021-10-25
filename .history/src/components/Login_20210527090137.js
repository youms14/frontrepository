import '../assets/css/Login.css';
import React, { useRef, useState } from 'react';

const Login  = () => {

    const [pseudo,setPseudo]=useState('');
    const [password,setPassword]=useState('');

 const  handleSubmit = e =>{
       e.preventDefault();

       const data ={
           pseudo=this.pseudo,
           password=this.password
       }
       console.log(data)
   }

   
       return (
          <form onSubmit={handleSubmit} className = 'formBlock'>
              <h1>Connexion</h1>


              <div className="labels">Pseudo </div>
              <div className='form-group'>
                  
                  <input type="text" className='form-control' placeholder='pseudo'
                       onChange={e=>setPseudo(e.target.value)}/>
              </div>

              <div className="labels">Password  </div>
              <div className='form-group'>
                  <input type="password" className='form-control' placeholder='password'
                       onChange={ e => setPassword(e.target.value)}/>
              </div>
              <br/>

              <button className='btn btn-info btn-block submitbuton'>Connexion</button>
              <br/>
              <p><span className="notice1">Vous n'avez pas de compte?</span> Veillez contacter le Directeur</p>

          </form>
        
       )
   
}                

export default Login;