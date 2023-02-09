import React from "react";
import MerchGallery from "./MerchGallery";
// import { v4 } from 'uuid';
import merchandiseList from "./merchandiseList";
import MerchDetail from "./MerchDetail";

class MerchControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      showDetails: false,
      tileDisplay: 0,
      inventory: merchandiseList 
    };
  }

  handleHomeClick = () => {
    this.setState({
      showDetails: false
    })
  }

  handleTileClick = (id) => {
    this.setState({
      tileDisplay: parseInt(id),
      showDetails: true
    })
  }

  handleBuyController = (quantity) => {
    let object = this.state.inventory[this.state.tileDisplay]
    if (object["quantity"] >= quantity) {
      object["quantity"] -= quantity; 
    }    
    let newInventory = this.state.inventory
    newInventory[this.state.tileDisplay] = object;
    this.setState({ inventory: newInventory })
  }

  handleRestockController = (quantity) => {
    let object = this.state.inventory[this.state.tileDisplay]
    object["quantity"] += quantity;        
    let newInventory = this.state.inventory
    newInventory[this.state.tileDisplay] = object;
    this.setState({ inventory: newInventory })
  }

  render(){
    let currentView = [];
    if (this.state.showDetails){
      currentView = < MerchDetail handleRestockController={this.handleRestockController} handleBuyController={this.handleBuyController} onHomeClick={this.handleHomeClick} id={this.state.tileDisplay} inventory={this.state.inventory}/>
    } else {
      currentView = <MerchGallery onTileClick={this.handleTileClick} inventory={this.state.inventory} />
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