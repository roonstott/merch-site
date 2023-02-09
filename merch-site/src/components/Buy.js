import React from "react";


function Buy ({handleBuyDetails}) {

  function handleBuy(event) {
    event.preventDefault();
    const qty = parseInt(event.target.quantity.value)
    handleBuyDetails(qty);
  }

  return(
    <React.Fragment>
      <form onSubmit={handleBuy}>
        <input
          type='number'
          name='quantity'
          placeholder='Quantity' />       
        <button type='submit'>Buy</button>
      </form>
    </React.Fragment>
  )
}

export default Buy;