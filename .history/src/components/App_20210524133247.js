import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
//import './components/Fournisseur'
import Header from './components/Header';
import Aside from './components/Aside';
//import ReactDOM from 'react-dom'
//import Fournisseur from './components/Fournisseur';
import {Button} from 'reactstrap';
import Login from './components/Login'


class App extends Component {


  state = {
  }
 
  /*
  componentDidMount() {
    fetch('http://localhost:8080/listefournisseurs')
    .then(res => res.json())
    .then((data) => {
      this.setState({ fournisseurs: data })
    })
    .catch(console.log)
  }*/

  render(){
    //console.log(this.state.ouvert)
    //ReactDOM.createPortal(Button,Header)
    return (
      <div className="App ">
        <Login></Login>
      </div>
    );
  }
  
}

export default App;
