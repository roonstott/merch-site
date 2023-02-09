import React from "react";
import MerchTile from "./MerchTile";

function MerchGallery ({inventory, onTileClick}) {

  function TileClick(index) {    
    onTileClick(index)
  }

  return (
    <div>
      {inventory.map((merch) => {
        return (
          <div onClick={() => TileClick(merch.id)} key={merch.id}>
            <MerchTile  name={merch.name}
                        quantity={merch.quantity}
                        description={merch.description}
                        price={merch.price}
                        id={merch.id}
                        key={merch.id}/>
          </div>
          )
        })
      }
    </div>
  )
}

export default MerchGallery;