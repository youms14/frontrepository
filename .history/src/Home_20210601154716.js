import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
//import './components/Fournisseur'
import Header from './components/Header';
import Aside from './components/Aside';
//import Aside from './'
//import ReactDOM from 'react-dom'
//import Fournisseur from './components/Fournisseur';
import {Button} from 'reactstrap';
import Login from './Login';
import axios from 'axios';


class Home extends Component {


  state = {
    ouvert:1,
    fournisseurs: [
      {
        nom:'SABC',
        despription: 'Societe Anonyme des Brasseries du Cameroun'
      },
      {
        nom:'UCB',
        despription: 'Unuion Camerounaise des Brasseries'
      },
      {
        nom:'GUINNESS S. A.',
        despription: ' Guinness Societe Anonyme'
      }
    ]
  }

  toggle = () => this.setState({
    ouvert:this.state.ouvert===1?(2):(1)
  });


  componentDidMount() {
    const config ={
      headers:{
        Authorization: 'Bearer ' + localStorage.getItem('token')
      }
      
    };
    localStorage.clear()

    axios.get('user',config).then(
      res=>{
        console.log(res);
      },
      err=>{
        console.log(err)
      }
    )
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
        <Header ouvert={this.state.ouvert} />
        <Button color="danger" id="toggler" onClick={this.toggle} className=" toggleButton" >{this.state.ouvert===1?("hide"):("show")} </Button>
        <Aside ouvert={this.state.ouvert}/>
      </div>
    );
  }
  
}

export default Home;
