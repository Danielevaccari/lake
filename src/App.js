import React, { useState, useEffect } from 'react'
import Meniu from './Meniu'
import Webpage from './Webpage'
import { commerce } from './library/commerce'
import './NavStyles.css'
import './ClothStyles.css'
import Products from './Products/Products'

function App() {

  const [products, setProducts] = useState([])

  const fetchProducts = async () => {
    const { data } = await commerce.products.list()
    setProducts(data)
  }

  useEffect(() => {
      fetchProducts()
  }, [])

  console.log(products)

  return (
    <>
      <Meniu />
      <Webpage />
      <Products products={products}/>
    </>
  );
}

export default App;
