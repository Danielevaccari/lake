import React from 'react'
import { Grid, Typography, Container, Button, makeStyles } from '@material-ui/core'
import HourglassEmptyIcon from '@material-ui/icons/HourglassEmpty';
import CartItem from './CartItem'
import { Link } from 'react-router-dom'

const useStyles = makeStyles({
    cart: {
        margin: '0',
        height: '100vh',
        width: '100vw'
    },
    productList: {
        height: '100%',
        width: '100%'
    },
    singleProductGrid: {

    },
    cartLoad: {
        height: '100vh',
        width: '100vw',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    cartLoadIcon: {
        fontSize: '100px'
    },
    cartValues: {
        display: 'flex',
        paddingBottom: '2%'
    },
    cartRight: {
        width: '100%',
        flex: '50%',
        justifyContent: 'center'
    },
    cartLeft: {
        flex: '50%'
    }

})

const Cart = ({ cart, handleEmptyCart, handleRemoveFromCart, handleUpdateQuantity }) => {

    const classes = useStyles()

    const EmptyCart = () => (
        <Typography>
            You have no items in your cart
        </Typography>
    )

    const FilledCart = () => (

        <>
            <Button component={Link} to='/' style={{ height: '50px' }}>go back</Button>
            <Grid className={classes.productList} container spacing={2}>
                {cart.line_items && cart.line_items.map((item) => (
                    <Grid className={classes.singleProductGrid} xs={12} sm={4} key={item.id}>
                        <CartItem item={item} handleRemoveFromCart={handleRemoveFromCart} handleUpdateQuantity={handleUpdateQuantity} />
                    </Grid>
                ))}
            </Grid>
            <div className={classes.cartValues}>
                <div className={classes.cartLeft}>
                    <Typography>
                        Total: {cart.subtotal.formatted_with_symbol}
                    </Typography>
                </div>

                <div className={classes.cartRight}>
                    <Button onClick={handleEmptyCart} disableRipple={true} variant='contained' >
                        Clear cart
                    </Button>

                    <Button disableRipple={true} variant='contained'>
                        Checkout
                    </Button>
                </div>
            </div>
        </>
    )

    if (!cart.line_items) {
        return (<div className={classes.cartLoad}>{<HourglassEmptyIcon className={classes.cartLoadIcon} />}</div>)
    }

    return (
        <div>
            <Container className={classes.cart}>
                <Typography variant='h3'>
                    Cart<Button component={Link} to='/' style={{ height: '50px' }}>go back</Button>
                </Typography>
                {!cart.line_items.length ? <EmptyCart /> : <FilledCart />}
            </Container>
        </div>

    )
}

export default Cart