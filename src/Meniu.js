import { React, useState } from 'react'
import Create from './Create'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import './Styles.css'


function Meniu() {
    //User input states
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [ca, setCa] = useState(false)


    //Handlers for user input
    const handleUsername = (event) => {
        setUsername(event.target.value)
    }
    const handlePassword = (event) => {
        setPassword(event.target.value)
    }
    const changeCa = () => {
        setCa(prevCa => !prevCa)
    }

    return (
        <>
            {!ca &&
                <div className='divC'>
                    <div className='div1C'>
                        <Paper elevation={6} className='paperC'>
                            <h2 className='headerC'>LOG IN</h2>
                            <TextField value={username} onChange={handleUsername} label='Username' className='textField'>

                            </TextField>

                            <TextField value={password} onChange={handlePassword} label='Password' className='textField'>

                            </TextField>

                            <Button onClick={changeCa} disableRipple={true}>Register</Button>
                            <Button disableRipple={true}>
                                Submit
                    </Button>
                            <div>{username}</div>
                        </Paper>
                    </div>
                </div>}
                {/*Create account render*/}
                {ca && <Create c={changeCa}/>
                }
        </>
    )
}

export default Meniu
