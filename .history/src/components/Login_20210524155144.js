import { Card } from 'primereact/card';
import 'primeicons/primeicons.css';
import React, { Component } from 'react';
import { InputText } from 'primereact/inputtext';


 class Login extends Component {

    constructor() {

       // this.states = [];
        
    }

   
    render() {
        return (
            <Card>

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

                
            </Card>
        )
    }
}                

export default Login;