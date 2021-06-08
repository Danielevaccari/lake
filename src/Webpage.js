import React, {useState, useEffect} from 'react'
import Navbar from './Navbar'
import { commerce } from './library/commerce'
import Products from './Products/Products'

function Webpage() {

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
            <div className='web1'>
                <Navbar />
            </div>
            <div className='web2'>
                <Products products={products} />
            </div>
        </>
    )
}

export default Webpage
