import React from "react";
import MerchGallery from "./MerchGallery";
// import { v4 } from 'uuid';
import merchandiseList from "./merchandiseList";
import MerchDetail from "./MerchDetail";
import Footer from "./Footer";
import Admin from "./Admin";
// import PropTypes from "prop-types";


class MerchControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      showDetails: false,
      displayItem: null,
      inventory: merchandiseList,
      showAdmin: false
    };
  }

  handleHomeClick = () => {
    this.setState({
      showDetails: false,
      showAdmin: false
    })
  }

  handleTileClick = (id) => {
    this.setState({
      displayItem: this.state.inventory.filter(item=> item.id === id)[0],
      showDetails: true,
      showAdmin: false
    })
  }

  handleAdminClick = () => {
    this.setState({
      showDetails: false,
      showAdmin: true
    })
  }

  handleBuyClick = (quantity, id) => {
    let item = this.state.inventory.filter(item=> item.id === id)[0];
    if (item["quantity"] >= quantity) {
      item["quantity"] -= quantity; 
    }    
    let newInventory = this.state.inventory.filter(item=>item.id !== id).concat(item);
    this.setState({ 
      inventory: newInventory,
      displayItem: item
     })
  }

  handleRestockClick = (quantity, id) => {
    let item = this.state.inventory.filter(item => item.id === id)[0];
    item["quantity"] += quantity;        
    let newInventory = this.state.inventory.filter(item => item.id !== id).concat(item);
    this.setState({ 
      inventory: newInventory,
      displayItem: item
    })
  }

  render(){
    let currentView = [];
    if (this.state.showDetails){
      currentView = < MerchDetail onRestockClick={this.handleRestockClick} onBuyClick={this.handleBuyClick} onHomeClick={this.handleHomeClick} item={this.state.displayItem}/>
    } else if(this.state.showAdmin) {
      currentView = <Admin handleHomeClick={this.handleHomeClick}/>
    }
    else {
      currentView = 
      <div>
        <MerchGallery onTileClick={this.handleTileClick} inventory={this.state.inventory} />
        <Footer handleAdminClick={this.handleAdminClick}/>
      </div>
    }    

    return (
      // <MerchGallery inventory={this.state.inventory} />
      <div>
        {currentView}        
      </div>
    ) 
  }
}

export default MerchControl;