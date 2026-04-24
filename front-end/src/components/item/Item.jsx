import React from 'react'
import './Item.css'
import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
const Item = ({image, name, price}) => {
  const {addToCart} = useContext(CartContext);
  return (
    <div className='item-card'>
      <div className="item">
        <div className='image-container'>
          <img className='item-image' src={image} alt={name} />
        </div>
        
        <div className="item-prices">
          <p className='item-name'>{name}</p>
          <p className='item-price'>$ {price}</p>
        </div>
        <button className='add-to-cart-btn' onClick={() => addToCart({image, name, price})}>Add to Cart</button>
      </div>
    </div>
  )
}

export default Item
