import React from 'react'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import './Styles.css'


function Meniu() {
    return (
        <>
            <div className='meniuC'>
                <Paper elevation='6' className='paperC'>
                    <div className='headerC'>Menu</div>
                    <TextField label='Username' className='textFieldUC'>

                    </TextField>

                    <TextField label='Password' className='textFieldPC'>

                    </TextField>
                    <TextField label='Repeat Password' className='textFieldPC'>

                    </TextField>
                    <Button>
                        Submit
                    </Button>
                </Paper>
            </div>
        </>
    )
}

export default Meniu
