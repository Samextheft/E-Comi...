import React from 'react'
import './popular.css'
import Item from '../item/Item.jsx'

const Popular = ({products}) => {
  const popularProducts = products.filter(item => item.category === "women's clothing"); 
  return (
    <div className='d-flex flex-column align-items-center popular'>
      <h1>POPULAR IN WOMAN</h1>
      <hr/>
      <div className='popular-container'>
        {
          popularProducts.map(product =>{
            return <Item key={product.id} id={product.id} name={product.title} image = {product.image} price={product.price}/>
          })
        }
      </div>
    </div>
  )
}

export default Popular
