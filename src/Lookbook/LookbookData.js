import React from 'react'
import { Card, CardMedia, makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
    Cmedia: {
        height: 'auto',
        width: '100%'
    }
})


const LookbookData = ({ product }) => {

    const classes = useStyles()

    return (
        <>
            <Card elevation={5}>
                <img src={product.media.source} className={classes.Cmedia} />
            </Card>
        </>
    )
}

export default LookbookData
