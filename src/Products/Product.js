import React from 'react'
import Card from '@material-ui/core/Card';
import { CardActions, CardContent, CardMedia, IconButton, makeStyles, Typography } from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons';

const useStyles = makeStyles({
    productView: {
        height: '100%'
    },
    img: {
        height: '180px',
        padding: '20%',
        backgroundSize: 'auto'
    },
    cardActions: {
        display: 'flex',
        justifyContent: 'flex-end',
    },
    cardContent: {
        display: 'flex',
        justifyContent: 'space-between',
    },
})

const Product = ({ product, handleAddToCart }) => {

    const classes = useStyles()

    return (
        <Card elevation={10} className={classes.productView}>
            <CardMedia className={classes.img} image={product.media.source} />
            <CardContent>
                <div className={classes.cardContent}>
                    <Typography variant='h5' gutterBottom>
                        {product.name}
                    </Typography>

                    <Typography>
                        {product.price.formatted_with_symbol}
                    </Typography>
                </div>
                <Typography dangerouslySetInnerHTML={{ __html: product.description }} />
            </CardContent>
            <CardActions className={classes.cardActions} disableSpacing>
                <IconButton arial-abel='Add to cart' onClick={() => handleAddToCart(product.id, 1)}>
                    <AddShoppingCart />
                </IconButton>
            </CardActions>
        </Card>
    )
}

export default Product