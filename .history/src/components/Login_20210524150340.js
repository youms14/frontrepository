import React from 'react';
import { Component } from "react";
//import {InputText} from "primereact/inputText"
import { InputText } from 'primereact/inputtext';

export default class Login extends Component{

    render(){
        return (
            <div className="container">
            <div className="container p-fluid">
                <div className="p-field">
                    <label htmlFor="firstname1">Firstname</label>
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