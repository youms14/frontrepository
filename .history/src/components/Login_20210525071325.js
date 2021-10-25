import { Card } from 'primereact/card';
import React, { Component } from 'react';
import { InputText } from 'primereact/inputtext';
import '../assets/css/Login.css';
import {Password} from 'primereact/password';
import { Toast } from 'primereact/toast';
import { InputTextarea } from 'primereact/inputtextarea';


 class Login extends Component {

    state = {
        value:'',
        toast:'',
        text:''
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
                        
                    </div>
                    <Password value={this.state.value}  />

                    <InputTextarea rows={5} cols={30} value={this.state.text}  autoResize />
                </div>

                <Toast ref={toast} />
                {toast.current.show({severity: 'success', summary: 'Success Message', detail: 'Order submitted'})}
            </div>
            </Card>
         
        )
    }
}                

export default Login;