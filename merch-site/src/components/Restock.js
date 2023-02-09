import React from "react";


function Restock ({handleRestockDetails}) {

  function handleRestock(event) {
    event.preventDefault();
    const qty = parseInt(event.target.quantity.value)
    handleRestockDetails(qty);
  }

  return (
    <React.Fragment>
      <form onSubmit={handleRestock}>
        <input
          type='number'
          name='quantity'
          placeholder='Quantity' />       
        <button type='submit'>Restock</button>
      </form>
    </React.Fragment>
  )
}

export default Restock;