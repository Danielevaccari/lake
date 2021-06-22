import React, { useState, useEffect } from 'react'
import Navbar from './Navbar'
import Products from './Products/Products'
import Cart from './Cart/Cart'
import { commerce } from './library/commerce'
import { Switch, Route, HashRouter } from 'react-router-dom'
import Checkout from './Checkout/Checkout'
import Lookbook from './Lookbook/Lookbook'

function Webpage() {

    const [products, setProducts] = useState([])
    const [cart, setCart] = useState({})
    const [order, setOrder] = useState({})
    const [errorMessage, setErrorMessage] = useState('')

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
    const refresCart = async () => {
        const newCart = await commerce.cart.refresh()
        setCart(newCart)
    }
    const handleCaptureCheckout = async (checkoutTokenId, newOrder) => {
        try {
            const incomingOrder = await commerce.checkout.capture(checkoutTokenId, newOrder)
            setOrder(incomingOrder)
            refresCart()
        } catch (error) {
            setErrorMessage(error.data.error.message);
        }
    }
    useEffect(() => {
        fetchProducts()
        fetchCart()
    }, [])

    return (
        <>
            <HashRouter>
                <Switch>

                    <Route exact path='/'>
                        <Navbar totalItems={cart.total_items} />
                        <Products products={products} handleAddToCart={handleAddToCart} />
                    </Route>

                    <Route exact path='/cart'>
                        <Navbar totalItems={cart.total_items} />
                        <Cart cart={cart}
                            handleEmptyCart={handleEmptyCart}
                            handleRemoveFromCart={handleRemoveFromCart}
                            handleUpdateQuantity={handleUpdateQuantity} />
                    </Route>

                    <Route exact path='/checkout'>
                        <Navbar totalItems={cart.total_items} />
                        <Checkout cart={cart} order={order} onCaptureCheckout={handleCaptureCheckout} error={errorMessage} />
                    </Route>

                    <Route exact path='/lookbook'>
                        <Navbar />
                        <Lookbook products={products}/>
                    </Route>

                </Switch>
            </HashRouter>
        </>
    )
}

export default Webpage
