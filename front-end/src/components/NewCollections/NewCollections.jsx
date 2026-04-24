import React from 'react'
import './NewCollections.css'
import Item from '../item/Item.jsx'

const NewCollections = ({products}) => {
  const newProducts = products.slice(0,8);
  return (
    <div className='new-collections'>
      <h1 className='text-center mb-4'>NEW COLLECTIONS</h1>
      <hr className='mb-5'/>

      <div className="new-collections-container">
        {newProducts.map(product=>{
          return(
          <div className="col-md-3 mb-4" key={product.id}>
            <Item
              image = {product.image}
              name = {product.title}
              price = {product.price}
            />
          </div>)
        })}
      </div>
    </div>
  )
}

export default NewCollections
