import React from "react";
import MerchTile from "./MerchTile";
import { v4 } from 'uuid';


function MerchGallery ({inventory, onTileClick}) {

  function TileClick(index) {    
    onTileClick(index)
  }

  return (
    <div>
      {inventory.map((merch, index) => {
        return (
          <div onClick={() => TileClick(index)}>
            <MerchTile  name={merch.name}
                                quantity={merch.quantity}
                                description={merch.description}
                                price={merch.price}
                                key={v4()}/>
          </div>
          )
        })
      }
    </div>
  )
}

export default MerchGallery;