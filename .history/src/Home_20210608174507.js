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
      ouvert:1
     
    }
  


  toggle = () => this.setState({
    ouvert:this.state.ouvert===1?(2):(1)
  });


  componentDidMount() {
    console.log('je suis dans le cdm de Home')
    console.log(localStorage.getItem('username')
    axios.get('user').then(
      res=>{
        this.setState(
          {
            user: res
          }
        )
        console.log("====="+res);
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

    if (this.props.user){
      console.log(this.props.user)
    }
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
