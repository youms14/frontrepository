import { Card } from 'primereact/card';
import React, { Component } from 'react';
import { InputText } from 'primereact/inputtext';
import '../assets/css/Login.css';
import {Password} from 'primereact/password';


 class Login extends Component {

    state = {
        value:''
    }
  
   

   
    render() {
        return (
            <Card>
            <div className="p-shadow-24 login" >
                    <div className="p-fluid">
                    <div className="p-field">
                        <label htmlFor="firstname1">Firstname</label>
                        <InputText id="firstname1" type="text"/>
                    </div>
                        
                    <Card>YOUMBA</Card>

                    <div className="p-field">
                        <label htmlFor="lastname1">Lastname</label>
                        <InputText id="lastname1" type="text"/>
                        <Password value={this.state.value} onChange={(e) => this.state.value=e.target.value} />
                    </div>
                </div>
            </div>
            </Card>
         
        )
    }
}                

export default Login;