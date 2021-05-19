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
                    <h2 className='headerC'>LOG IN</h2>
                    <TextField label='Username' className='textFieldUC'>

                    </TextField>

                    <TextField label='Password' className='textFieldPC'>

                    </TextField>
                    <TextField label='Repeat Password' className='textFieldPC'>

                    </TextField>
                    <Button disableRipple='true'>Register</Button>
                    <Button disableRipple='true'>
                        Submit
                    </Button>
                </Paper>
            </div>
        </>
    )
}

export default Meniu
