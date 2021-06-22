import { useState, React } from 'react'
import { Grid } from '@material-ui/core'
import './styles.css'
import LookbookData from './LookbookData'

const Lookbook = ({ products }) => {

    const [scroll, setScroll] = useState(0)

    const handleScrollChange = (event) => {
        setScroll(event.target.value)
    }

    return (
        <>
            <div className='lookbook'>
                <Grid style={{margin: '30%', marginTop: '10%'}} container justify="center" spacing={5}>
                    {products && products.map((product) => (
                        <Grid key={product.id} item xs={12}>
                            <LookbookData product={product} />
                        </Grid>
                    ))}
                </Grid>
            </div>
        </>
    )
}

export default Lookbook
