import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { red } from '@material-ui/core/colors';

const useStyles = makeStyles({
    gridAroundPapers: {
        height: '50%',
        width: '100%'
    },
    grids: {
        height: '100%',
        width: '15%'
    },
    clothPaper: {
        height: '100%',
        width: '100%',
        backgroundColor: red
    }
})

function Clothes() {

    const classes = useStyles()

    return (
        <div className='firstClothDiv'>
            <Grid container className={classes.gridAroundPapers} spacing={3}>
                <Grid className={classes.grids}>
                    <Paper className={classes.clothPaper}>
                        t
                    </Paper>
                </Grid>

                <Grid className={classes.grids}>
                    <Paper className={classes.clothPaper}>
                        t
                    </Paper>
                </Grid>

                <Grid className={classes.grids}>
                    <Paper className={classes.clothPaper}>
                        t
                    </Paper>
                </Grid>

                <Grid className={classes.grids}>
                    <Paper className={classes.clothPaper}>
                        t
                    </Paper>
                </Grid>

                <Grid className={classes.grids}>
                    <Paper className={classes.clothPaper}>
                        t
                    </Paper>
                </Grid>
            </Grid>
        </div>

    )
}

export default Clothes
