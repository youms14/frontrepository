import React, { Component } from 'react';


class Header extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            username:'Ange'
        }

    }

    
    /*
    hideSidebar= (e)=> {
        //e.preventDefault();
        const h=document.getElementById('wrapper');
        //$("#wrapper").toggleClass("toggled");
        h.toggleClass("toggled");
        console.log(h)
    }*/

    
    
    render() {

        
       
        const event = new Date();
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        const today=event.toLocaleDateString('fr-FR', options)
       
        
       
        return (
            
            <header id="header">
                <nav className="navbar navbar-dark bg-dark topHeader">

                    <a  className="navbar-brand logoR" href="/">Repository<span className="logo">Soft</span></a>
                    
                    

                    <p><b className="dateacceuil">{this.state.username}</b></p>
                    <p  className="dateacceuil">{today}</p>   
                    <button type="button" className="btn btn-info"><b>Log Out</b></button>       

                
                </nav>          
            </header>

        )
    }
}

export default Header
