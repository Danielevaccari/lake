import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Product from './Product'


const useStyles = makeStyles({
    content: {
        
        backgroundColor: 'grey',
        padding: '15%',
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
            <Grid container justify="center" spacing={5}>
                {products && products.map((product) => (
                    <Grid key={product.id} item xs={12} sm={6} lg={4}>
                        <Product product={product} handleAddToCart={handleAddToCart}/>
                    </Grid>
                ))}
            </Grid>
        </div>
    )
}
export default Products
