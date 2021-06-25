import React from 'react'
import { Grid, Typography, Container, Button, makeStyles } from '@material-ui/core'
import HourglassEmptyIcon from '@material-ui/icons/HourglassEmpty';
import CartItem from './CartItem'
import { Link } from 'react-router-dom'

const useStyles = makeStyles({
    productList: {
        padding: '5%'
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
        paddingBottom: '5%'
    },
    cartRight: {
        display: 'flex',
        flex: '40%',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    cartLeft: {
        flex: '60%'
    }

})



const Cart = ({ cart, handleEmptyCart, handleRemoveFromCart, handleUpdateQuantity }) => {

    const classes = useStyles()

    const EmptyCart = () => (
        <Typography>
            You have no items in your cart, Start Adding !
        </Typography>
    )

    const FilledCart = () => (

        <>

            <Grid className={classes.productList} container spacing={4}>
                {cart.line_items && cart.line_items.map((item) => (
                    <Grid item className={classes.singleProductGrid} xs={12} sm={4} key={item.id}>
                        <CartItem item={item} handleRemoveFromCart={handleRemoveFromCart} handleUpdateQuantity={handleUpdateQuantity} />
                    </Grid>
                ))}
            </Grid>
            <div className={classes.cartValues}>
                <div className={classes.cartLeft}>

                </div>

                <div className={classes.cartRight}>
                    <Button size='small' onClick={handleEmptyCart} disableRipple={true} variant='contained' >
                        Clear cart
                    </Button>

                    <Button size='large' component={Link} to='/checkout' disableRipple={true} variant='contained'>
                        Checkout
                    </Button>
                    <Typography>
                        Total: {cart.subtotal.formatted_with_symbol}
                    </Typography>
                </div>


            </div>
        </>
    )

    if (!cart.line_items) {
        return (<div className={classes.cartLoad}>{<HourglassEmptyIcon className={classes.cartLoadIcon} />}</div>)
    }

    return (
        <div style={{backgroundColor: 'rgb(192, 191, 191)', minHeight: '100vh'}}>
            <Container>
                <Typography variant='h4'>
                    Cart
                </Typography>
                {!cart.line_items.length ? <EmptyCart /> : <FilledCart />}
            </Container>
        </div>

    )
}

export default Cart