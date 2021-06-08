import React from 'react'
import Card from '@material-ui/core/Card';
import { CardActions, CardContent, CardMedia, IconButton, Typography } from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons';

const Product = ({ product }) => {

    return (
        <Card>
            <CardMedia image={product.media.source}/>
            <CardContent>
                <div>
                    <Typography variant='h5' gutterBottom>
                        {product.name}
                    </Typography>
                        
                    <Typography>
                        {product.price.formatted_with_symbol}
                    </Typography>
                </div>
                <Typography dangerouslySetInnerHTML={{__html: product.description}}/>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton arial-abel='Add to cart'>
                    <AddShoppingCart/>
                </IconButton>
            </CardActions>
        </Card>
    )
}

export default Product