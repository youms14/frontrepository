import React, { Component } from 'react'
import Fournisseur from './Fournisseur';
import '../assets/css/Aside.css';
import { Collapse} from 'reactstrap';
import ListeLivraison from './Livraison/ListeLivraison';
import NouvelleLivraison from './Livraison/NouvelleLivraison';
import {BrowserRouter, Route, Link, NavLink} from 'react-router-dom';
import Vente from './Vente';
import TableauDeBord from './TableauDeBord';
import StockerLivraison from './Livraison/StockerLivraison';
import ConsigneDeconsigne from './Livraison/ConsigneDeconsigne';
import EnregistrerAvance from './Livraison/EnregistrerAvance';
import EffectuerDecaissement from './Livraison/EffectuerDecaissement';
import EffectuerSortiesEmb from './Livraison/EffectuerSortiesEmb';

class Aside extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
           
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
            ],
            role:"ADMIN",
            isClickedVente:true
              
        }


        this.confInitiales= <div className="sub bg-dark">
                                <a href="#" className="itemSubSideBar list-group-item bg-dark list-group-item-action"><font color="#55cdc4"> Capital</font></a>
                                <a href="#" className="itemSubSideBar list-group-item bg-dark list-group-item-action"><font color="#55cdc4"> Emballages</font></a>
                                <a href="#" className="itemSubSideBar list-group-item bg-dark list-group-item-action"><font color="#55cdc4"> Achats Bouteilles</font></a>                           
                            </div>
        
        this.livraisonsSubItem= <div className="sub bg-dark">
                            <Link to="/nouvellelivraison" className="itemSubSideBar list-group-item bg-dark list-group-item-action"><font color="#55cdc4"> Nouvelle Livraison</font></Link>
                            <Link to="/listelivraison" className="itemSubSideBar list-group-item bg-dark list-group-item-action"><font color="#55cdc4"> Consulter Livraisons</font></Link>
                            <Link to="/stockerlivraison" className="itemSubSideBar list-group-item bg-dark list-group-item-action"><font color="#55cdc4"> Stockage Livraison </font></Link>                           
                            <Link to="/enregistreravance" className="itemSubSideBar list-group-item bg-dark list-group-item-action"><font color="#55cdc4"> Enregistrer Avance</font></Link>
                            <Link to="/consignedeconsigne" className="itemSubSideBar list-group-item bg-dark list-group-item-action"><font color="#55cdc4"> Consigne/Deconsigne </font></Link>
                            <Link to="/effectuerdecaissement" className="itemSubSideBar list-group-item bg-dark list-group-item-action"><font color="#55cdc4"> Effectuer Décaissement </font></Link>
                            <Link to="/effectuersortiesemb" className="itemSubSideBar list-group-item bg-dark list-group-item-action"><font color="#55cdc4"> Effectuer Sorties Emb. </font></Link>
                        </div>

        this.facturesSubItem= <div className="sub bg-dark">
                                <a href="#" className="itemSubSideBar list-group-item bg-dark list-group-item-action"><font color="#55cdc4"> Enregistrer Payement Facture</font></a>
                                <a href="#" className="itemSubSideBar list-group-item bg-dark list-group-item-action"><font color="#55cdc4"> Enregistrer Emballages Facture</font></a>
                                <a href="#" className="itemSubSideBar list-group-item bg-dark list-group-item-action"><font color="#55cdc4"> Enregistrer Retour Facture </font></a>                           
                                <a href="#" className="itemSubSideBar list-group-item bg-dark list-group-item-action"><font color="#55cdc4"> Stoker Emb. Facture</font></a>
                                <a href="#" className="itemSubSideBar list-group-item bg-dark list-group-item-action"><font color="#55cdc4"> Livrer Facture</font></a>
                                <a href="#" className="itemSubSideBar list-group-item bg-dark list-group-item-action"><font color="#55cdc4"> Encaisser Argent Facture</font></a>                           
                                <a href="#" className="itemSubSideBar list-group-item bg-dark list-group-item-action"><font color="#55cdc4"> Retourner Produit Facture</font></a>                          
                            
                            </div>

        this.produitsSubItem= <div className="sub bg-dark">
                                <a href="#" className="itemSubSideBar list-group-item bg-dark list-group-item-action"><font color="#55cdc4"> État Magazin</font></a>
                                <a href="#" className="itemSubSideBar list-group-item bg-dark list-group-item-action"><font color="#55cdc4"> Retour Produits</font></a>
                                <a href="#" className="itemSubSideBar list-group-item bg-dark list-group-item-action"><font color="#55cdc4"> Prix Produits</font></a>                           
                            </div>
        this.depensesSubItem= <div className="sub bg-dark">
                                <a href="#" className="itemSubSideBar list-group-item bg-dark list-group-item-action"><font color="#55cdc4"> Nouvelle Dépense</font></a>
                                <a href="#" className="itemSubSideBar list-group-item bg-dark list-group-item-action"><font color="#55cdc4"> Listes Dépenses</font></a>
                                <a href="#" className="itemSubSideBar list-group-item bg-dark list-group-item-action"><font color="#55cdc4"> Decaisser de Caisse Dep </font></a>                           
                                <a href="#" className="itemSubSideBar list-group-item bg-dark list-group-item-action"><font color="#55cdc4"> Decaisser de Caisse Jour. Dep</font></a>
                            </div>   
        
        this.cassSubItem= <div className="sub bg-dark">
                                <a href="#" className="itemSubSideBar list-group-item bg-dark list-group-item-action"><font color="#55cdc4"> Nouveau Cass</font></a>
                                <a href="#" className="itemSubSideBar list-group-item bg-dark list-group-item-action"><font color="#55cdc4"> Liste Cass</font></a>
                                <a href="#" className="itemSubSideBar list-group-item bg-dark list-group-item-action"><font color="#55cdc4"> Gérer Cass Produit</font></a>                           
                                <a href="#" className="itemSubSideBar list-group-item bg-dark list-group-item-action"><font color="#55cdc4"> Gérer Cass Emb</font></a>
                                <a href="#" className="itemSubSideBar list-group-item bg-dark list-group-item-action"><font color="#55cdc4"> Acquiter Cass Par Argent</font></a>
                                <a href="#" className="itemSubSideBar list-group-item bg-dark list-group-item-action"><font color="#55cdc4"> Acquiter Cass Par Emballage</font></a>                           
                            
                            </div>
        
        this.personnelSubItem= <div className="sub bg-dark">
                                <a href="#" className="itemSubSideBar list-group-item bg-dark list-group-item-action"><font color="#55cdc4"> Nouveau Personnel</font></a>
                                <a href="#" className="itemSubSideBar list-group-item bg-dark list-group-item-action"><font color="#55cdc4"> Nouvel Utilisateur</font></a>
                                <a href="#" className="itemSubSideBar list-group-item bg-dark list-group-item-action"><font color="#55cdc4"> Désaciver Utilisateur</font></a>                           
                                <a href="#" className="itemSubSideBar list-group-item bg-dark list-group-item-action"><font color="#55cdc4"> Ajouter Poste</font></a>
                                <a href="#" className="itemSubSideBar list-group-item bg-dark list-group-item-action"><font color="#55cdc4"> supprimer Poste  </font></a>                          
                            
                            </div>
                        
    
        this.itemConfInitialActive=    <a href="#"  className=" item active" onClick={this.showSubMenu}> 
                                                            <span className="itemStyle"> <font color="white">Configurations Initiales</font> </span>
                                                        </a>
        this.itemConfInitial=    <a href="#"  className=" item" onClick={this.showSubMenu}> 
                                    <span className="itemStyle"> <font color="white">Configurations Initiales</font> </span>
                                </a>
                                                    
                                
       
        
    }

   
    showSubMenuTdB =(e) =>{
        if(this.state.isClickedTableauDeBord){
            this.setState({
                isClickedTableauDeBord:false
            })
        }else{
            this.setState({
                isClickedTableauDeBord:true,
                
                isClickedVente:false,
                isClicked:false,
                isClickedLivraison:false,
                isClickedFacture:false,
                isClickedProduit:false,
                isClickedDepense: false,
                isClickedcass:false,
                isClickedPersonnel:false
               
            });
        }

    }


    showSubMenuVente =(e) =>{
        console.log("je suis dans la fonction menu vente")
        if(this.state.isClickedVente){
            this.setState({
                isClickedVente:false
            })
        }else{
            this.setState({
                isClickedVente:true,

                isClickedTableauDeBord:false,
                isClicked:false,
                isClickedLivraison:false,
                isClickedFacture:false,
                isClickedProduit:false,
                isClickedDepense: false,
                isClickedcass:false,
                isClickedPersonnel:false
            })
        }
    }
    

    showSubMenuLivraison = (e) =>{
        
        if (this.state.isClickedLivraison){
            this.setState({
                isClickedLivraison:false
            });
        }else{
            this.setState({
                isClickedLivraison:true,

                isClickedPersonnel:false,
                isClicked:false,
                isClickedFacture:false,
                isClickedProduit:false,
                isClickedDepense: false,
                isClickedcass:false,
                isClickedVente:false,
                isClickedTableauDeBord:false
            })
        } 
    }    

    showSubMenuFacture = (e) =>{
        if (this.state.isClickedFacture){
            this.setState({
                isClickedFacture:false
            });

            
        }else{
            this.setState({
                isClickedFacture:true,

                isClicked:false,
                isClickedLivraison:false,
                isClickedProduit:false,
                isClickedDepense: false,
                isClickedcass:false,
                isClickedPersonnel:false,
                isClickedVente:false,
                isClickedTableauDeBord:false
            })
        } 
    }    

    showSubMenuProduit = (e) =>{
        if (this.state.isClickedProduit){
            this.setState({
                isClickedProduit:false
            });

            
        }else{
            this.setState({
                isClickedProduit:true,

                isClicked:false,
                isClickedLivraison:false,
                isClickedFacture:false,
                isClickedDepense: false,
                isClickedcass:false,
                isClickedPersonnel:false,
                isClickedVente:false,
                isClickedTableauDeBord:false
            })
        } 
    }    

    showSubMenuDepense = (e) =>{
        if (this.state.isClickedDepense){
            this.setState({
                isClickedDepense:false
            });

           
        }else{
            this.setState({
                isClickedDepense:true,

                isClicked:false,
                isClickedLivraison:false,
                isClickedFacture:false,
                isClickedProduit:false,
                isClickedcass:false,
                isClickedPersonnel:false,
                isClickedVente:false,
                isClickedTableauDeBord:false
            })
        } 
    }    

    showSubMenuCass = (e) =>{
        if (this.state.isClickedcass){
            this.setState({
                isClickedcass:false
            });
            
        }else{
            this.setState({
                isClickedcass:true,

                isClicked:false,
                isClickedLivraison:false,
                isClickedFacture:false,
                isClickedProduit:false,
                isClickedDepense: false,
                isClickedPersonnel:false,
                isClickedVente:false,
                isClickedTableauDeBord:false
            })
        } 
    }  

    showSubMenuPersonnel = (e) =>{
        if (this.state.isClickedPersonnel){
            this.setState({
                isClickedPersonnel:false
            });
           
        }else{
            this.setState({
                isClickedPersonnel:true,

                isClicked:false,
                isClickedLivraison:false,
                isClickedFacture:false,
                isClickedProduit:false,
                isClickedDepense: false,
                isClickedcass:false,
                isClickedVente:false,
                isClickedTableauDeBord:false
            });
            //this.state.isFocusPersonnel?(e.target.classList.add('active')):(e.target.classList.remove('active'));
        } 

       
    }  

    showSubMenu = (e) =>{
        if (this.state.isClicked){
            this.setState({
                isClicked:false
            });

           
        }else{
            this.setState({
                isClicked:true,
                isClickedLivraison:false,
                isClickedFacture:false,
                isClickedProduit:false,
                isClickedDepense: false,
                isClickedcass:false,
                isClickedPersonnel:false,
                isClickedVente:false,
                isClickedTableauDeBord:false
            });
        } 
    }
    
    
    
    
    render() {

        return (
            <BrowserRouter className="d-flex " id="wrapper">
                
                
                
                <Collapse isOpen={this.props.ouvert===1?(true):(false)}>
                    <div className="bg-dark border-top sideBarLeft" id="sidebar-wrapper">
                        <div className="sidebar-heading"  id="navbarSupportedContent">
                            <font color="white">{this.state.role}</font>
                        </div>

                        <div className="  list-group list-group-flush">
                            
                               
                            {this.state.isClickedTableauDeBord?(<Link to="/dashboard" className="item active" onClick={this.showSubMenuTdB}><font color="white">Tableau de Bord</font></Link>):(<Link to="/dashboard" className="item" onClick={this.showSubMenuTdB}><font color="white">Tableau de Bord</font></Link>)}

                            {this.state.isClickedLivraison?(<a to="#" className="  item active" onClick={this.showSubMenuLivraison}><font color="white" >Livraisons</font></a>):(<a to="#" className="  item " onClick={this.showSubMenuLivraison}><font color="white" >Livraisons</font></a>)}
                                {this.state.isClickedLivraison?(this.livraisonsSubItem):(null)}

                            {this.state.isClickedVente?(<Link to="/" className="  item active" onClick={this.showSubMenuVente}><font color="white">Ventes</font></Link>):(<Link to="/" className="  item" onClick={this.showSubMenuVente}><font color="white">Ventes</font></Link>)}

                            {this.state.isClickedFacture?(<a href="#" className="  item active" onClick={this.showSubMenuFacture}><font color="white">Factures</font></a>):(<a href="#" className="  item" onClick={this.showSubMenuFacture}><font color="white">Factures</font></a>)}
                                {this.state.isClickedFacture?(this.facturesSubItem ):(null)}

                            {this.state.isClickedProduit?(<a href="#" className=" item active"  onClick={this.showSubMenuProduit}><font color="white">Produits</font></a>):(<a href="#" className=" item"  onClick={this.showSubMenuProduit}><font color="white">Produits</font></a>)}
                                {this.state.isClickedProduit?(this.produitsSubItem ):(null)}

                            {this.state.isClickedDepense?(<a href="#" className="  item active" onClick={this.showSubMenuDepense}><font color="white">Dépenses</font></a>):(<a href="#" className="  item" onClick={this.showSubMenuDepense}><font color="white">Dépenses</font></a>)}
                                {this.state.isClickedDepense?(this.depensesSubItem ):(null)}

                            {this.state.isClickedcass?(<a href="#" className="  item active" onClick={this.showSubMenuCass}><font color="white">Cass</font></a>):(<a href="#" className="  item" onClick={this.showSubMenuCass}><font color="white">Cass</font></a>)}
                                {this.state.isClickedcass?(this.cassSubItem ):(null)}

                            {this.state.isClickedPersonnel?(<a href="#" className="  item active" onClick={this.showSubMenuPersonnel} ><font color="white">Personnel</font></a>):(<a href="#" className="  item" onClick={this.showSubMenuPersonnel} ><font color="white">Personnel</font></a>)}
                                {this.state.isClickedPersonnel?(this.personnelSubItem ):(null)}

                            {this.state.role==="ADMIN" ?(this.state.isClicked?(this.itemConfInitialActive):(this.itemConfInitial)):(null)}
                                {this.state.isClicked?(this.confInitiales):(null)}
                        </div>
                    </div>
                </Collapse>
                
                
                <div id="page-content-wrapper">
                    <div className="container-fluid contentSide ">
                        <Route exact path="/" component={Vente}/>
                        <Route path="/dashboard" component={TableauDeBord}/>
                        <Route path="/nouvellelivraison" component={NouvelleLivraison}/>
                        <Route path="/listelivraison" component={ListeLivraison}/>
                        <Route path="/stockerlivraison" component={StockerLivraison}/>
                        <Route path="/enregistreravance" component={EnregistrerAvance}/>
                        <Route path="/consignedeconsigne" component={ConsigneDeconsigne}/>
                        <Route path="/effectuerdecaissement" component={EffectuerDecaissement} />
                        <Route path="/effectuersortiesemb" component={EffectuerSortiesEmb} />
                    </div>
                </div>
                
            </BrowserRouter>
        )
    }
}

export default Aside
