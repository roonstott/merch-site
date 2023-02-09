import React from "react";

function MerchTile ({name, quantity, description, price}) {

  
  return (
    <div >
      <h3>{name}</h3>
      <p>Description: {description}</p>
      <p>Quantity: {quantity}</p>
      <p>Price: {price}</p>
    </div>
  )
}

export default MerchTile