import React, {useEffect, useState} from 'react'
import Hero from '../components/hero/hero'
import Popular from '../components/popular/popular'
import Offers from '../components/offers/offers'
import NewCollections from '../components/NewCollections/NewCollections'
import NewsLetter from '../components/NewsLetter/NewsLetter'
import Footer from '../components/footer/footer'

const Shop = () => {
  const [products, setProducts] = useState([])
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Error fetching products:', error))
  }, [])
  
  return (
    <div>
      <Hero />
      <Popular products={products} />
      <Offers />
      <NewCollections products={products}/>
      <NewsLetter/>
      <Footer/>
    </div>
  )
}

export default Shop
