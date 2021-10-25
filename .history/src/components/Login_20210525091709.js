import { Card } from 'primereact/card';
import React, { Component,useRef, useState } from 'react';
import { InputText } from 'primereact/inputtext';
import '../assets/css/Login.css';
import {Password} from 'primereact/password';
import { Toast } from 'primereact/toast';
import { InputTextarea } from 'primereact/inputtextarea';


 const Login  = () => {

    // les elements du state
    const [value,setValue]=useState('');
    const [toast,SetToast]=useState('');
    const [text,setText]= useState('');
  
   

    
    
        const myToast = useRef(null);
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
                    <Password value={value}  />

                    <InputTextarea rows={5} cols={30} value={text}  autoResize />
                </div>

                <Toast ref={myToast} />
                {myToast.current.show({severity: 'success', summary: 'Success Message', detail: 'Order submitted'})}
            </div>
            </Card>
         
        )
    
}                

export default Login;