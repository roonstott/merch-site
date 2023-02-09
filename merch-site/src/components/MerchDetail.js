import React from 'react'; 
import Buy from './Buy';
import Restock from './Restock';

function MerchDetail(props) {
  
  const item = props.item;
  return (
    <div>
      <button onClick={() => props.onHomeClick()}>Go Back</button>
      <h1>{item.name}</h1>
      <p>Description: {item.description}</p>
      <p>Price: {item.price}</p>
      <p>Quantity: {item.quantity}</p>
      <Buy onClickingBuy={props.onBuyClick} id={item.id} />
      <Restock onClickingRestock={props.onRestockClick} id={item.id} />
    </div>
  )
}

export default MerchDetail;