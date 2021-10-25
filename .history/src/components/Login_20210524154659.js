





import 'primeicons/primeicons.css';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.css';
//import 'primeflex/primeflex.css';
//import '../../index.css';
import ReactDOM from 'react-dom';

import React, { Component } from 'react';
import { InputText } from 'primereact/inputtext';


 class Login extends Component {

    constructor() {

       // this.states = [];
        
    }

   
    render() {
        return (
            <div className="container">

                <h5>Connexion </h5>
                <div className="p-fluid">
                    <div className="p-field">
                        <label htmlFor="">Firstname</label>
                        <InputText id="firstname1" type="text"/>
                    </div>
                    <div className="p-field">
                        <label htmlFor="lastname1">Lastname</label>
                        <InputText id="lastname1" type="text"/>
                    </div>
                </div>

                
            </div>
        )
    }
}                

export default Login;