





import 'primeicons/primeicons.css';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.css';
//import 'primeflex/primeflex.css';
//import '../../index.css';
import ReactDOM from 'react-dom';

import React, { Component } from 'react';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Checkbox } from 'primereact/checkbox';
import { RadioButton } from 'primereact/radiobutton';
import { Dropdown } from 'primereact/dropdown';
import { InputTextarea } from 'primereact/inputtextarea';

 class Login extends Component {

    constructor() {
        super();
        this.state = {
            cities1: [],
            cities2: [],
            selectedState: null
        };

        this.states = [
            {name: 'Arizona', code: 'Arizona'},
            {name: 'California', value: 'California'},
            {name: 'Florida', code: 'Florida'},
            {name: 'Ohio', code: 'Ohio'},
            {name: 'Washington', code: 'Washington'}
        ];
        this.onCityChange1 = this.onCityChange1.bind(this);
        this.onCityChange2 = this.onCityChange2.bind(this);
        this.onStateChange = this.onStateChange.bind(this);
    }

    onCityChange1(e) {
        let selectedCities = [...this.state.cities1];

        if(e.checked)
            selectedCities.push(e.value);
        else
            selectedCities.splice(selectedCities.indexOf(e.value), 1);

        this.setState({cities1: selectedCities});
    }

    onCityChange2(e) {
        let selectedCities = [...this.state.cities2];

        if(e.checked)
            selectedCities.push(e.value);
        else
            selectedCities.splice(selectedCities.indexOf(e.value), 1);

        this.setState({cities2: selectedCities});
    }

    onStateChange(e) {
        this.setState({selectedState: e.value});
    }

    render() {
        return (
            <div className="container">

                <h5>Vertical</h5>
                <div className="p-fluid">
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

export default Login;