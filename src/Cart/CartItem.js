import React from 'react'
import { Typography, Button, Card, CardActions, CardContent, CardMedia, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    cartProductImage: {
        height: '200px',
        backgroundSize: 'auto'
    },
    cardClass: {
        height: '330px',
    },
    cartItemButtons: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%'
    }
})

const CartItem = ({ item, handleRemoveFromCart, handleUpdateQuantity }) => {

    const classes = useStyles()

    return (
        <Card className={classes.cardClass}>
            <CardMedia image={item.media.source} alt={item.name} className={classes.cartProductImage} />
            <CardContent>
                <Typography>
                    {item.name}
                </Typography>

                <Typography>
                    {item.line_total.formatted_with_symbol}
                </Typography>
            </CardContent>
            <CardActions>
                <div className={classes.cartItemButtons}>
                    <Button size='small' onClick={() => handleUpdateQuantity(item.id, item.quantity - 1)}>-</Button>
                    <Typography>{item.quantity}</Typography>
                    <Button size='small' onClick={() => handleUpdateQuantity(item.id, item.quantity + 1)}>+</Button>
                </div>
                <Button onClick={() => handleRemoveFromCart(item.id)} size='small'>Remove</Button>
            </CardActions>
        </Card>
    )
}

export default CartItem
