import React from 'react'; 
import Buy from './Buy';
import Restock from './Restock';

function MerchDetail(props) {
  function GoHome() {
    props.onHomeClick();
  }

  function handleBuyDetails (quantity)  {
    props.handleBuyController(quantity);
  }

  function handleRestockDetails (quantity)  {
    props.handleRestockController(quantity);
  }

  const item = props.inventory[props.id]
  return (
    <div>
      <button onClick={() => GoHome()}>Go Back</button>
      <h1>{item.name}</h1>
      <p>Description: {item.description}</p>
      <p>Price: {item.price}</p>
      <p>Quantity: {item.quantity}</p>
      <Buy handleBuyDetails={handleBuyDetails} />
      <Restock handleRestockDetails={handleRestockDetails} />
    </div>
  )
}

export default MerchDetail;