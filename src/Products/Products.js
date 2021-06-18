import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Product from './Product'


const useStyles = makeStyles({
    content: {
        
        backgroundColor: 'rgb(122,34,80)',
        padding: '5%',
        height: '100%'
    },
    root: {
        flexGrow: 1,
    }
})

const Products = ({ products, handleAddToCart }) => {

    const classes = useStyles()

     /*if (products.line_items < 1) {
        return (<div className={classes.cartLoad}>{<HourglassEmptyIcon className={classes.cartLoadIcon} />}</div>)
    }*/

    return (
        <div className={classes.content}>
            <Grid container justify="center" spacing={4}>
                {products && products.map((product) => (
                    <Grid key={product.id} item xs={12} sm={6} md={4} lg={3}>
                        <Product product={product} handleAddToCart={handleAddToCart}/>
                    </Grid>
                ))}
            </Grid>
        </div>
    )
}
export default Products
