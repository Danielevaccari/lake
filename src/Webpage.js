import React, { useState, useEffect } from 'react'
import Navbar from './Navbar'
import Products from './Products/Products'
import Cart from './Cart/Cart'
import { commerce } from './library/commerce'
import { BrowserRouter as Router, Switch, Route, HashRouter } from 'react-router-dom'

function Webpage() {

    const [products, setProducts] = useState([])
    const [cart, setCart] = useState({})

    const fetchProducts = async () => {
        const { data } = await commerce.products.list()
        setProducts(data)
    }
    const fetchCart = async () => {
        setCart(await commerce.cart.retrieve())
    }

    const handleAddToCart = async (productId, quantity) => {
        const { cart } = await commerce.cart.add(productId, quantity)
        setCart(cart)
    }
    const handleUpdateQuantity = async (productId, quantity) => {
        const { cart } = await commerce.cart.update(productId, { quantity })
        setCart(cart)
    }
    const handleRemoveFromCart = async (productId) => {
        const { cart } = await commerce.cart.remove(productId)
        setCart(cart)
    }
    const handleEmptyCart = async () => {
        const { cart } = await commerce.cart.empty()
        setCart(cart)
    }
    useEffect(() => {
        fetchProducts()
        fetchCart()
    }, [])

    console.log(cart)

    return (
        <>
            <HashRouter>
                <Switch>

                    <Route exact path='/'>
                        <div className='web1'>
                            <Navbar totalItems={cart.total_items} />
                        </div>
                        <Products products={products} handleAddToCart={handleAddToCart} />
                    </Route>

                    <Route exact path='/cart'>
                        <div className='web2'>

                            <Cart cart={cart}
                                handleEmptyCart={handleEmptyCart}
                                handleRemoveFromCart={handleRemoveFromCart}
                                handleUpdateQuantity={handleUpdateQuantity} />
                        </div>
                    </Route>

                </Switch>
            </HashRouter>
        </>
    )
}

export default Webpage
