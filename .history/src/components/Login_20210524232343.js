import { Card } from 'primereact/card';
import React, { Component } from 'react';
import { InputText } from 'primereact/inputtext';
import '../assets/css/Login.css';


 class Login extends Component {

    

   
    render() {
        return (

            <div className="p-shadow-5 login" >
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