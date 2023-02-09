import React from "react";


function Restock ({onClickingRestock, id}) {

  function handleRestock(event) {
    event.preventDefault();
    const qty = parseInt(event.target.quantity.value)
    onClickingRestock(qty, id);
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