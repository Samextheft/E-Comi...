import React, {useContext} from 'react'
import {useParams} from 'react-router-dom'
import {ShopContext} from '../Context/ShopContext'
import Item from '../components/item/Item'

const ShopCategory = () => {
  const {category} = useParams()
  const {products} = useContext(ShopContext)

  const categoryMap = {
    mens:"men's clothing",
    womens:"women's clothing",
    kids:"jewelery"
  }

  const filteredProducts = products.filter(product => product.category === categoryMap[category])

  return (
    console.log(category),
    <div className="container mt-5">
      <h2 className="mb-4 text-capitalize">{category} Collection</h2>

      <div className="row g-4">
        {filteredProducts.map(product => (
          <div className="col-lg-4 col-md-6 col-sm-12" key={product.id}>
            <Item
              image={product.image}
              name={product.title}
              price={product.price}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default ShopCategory
