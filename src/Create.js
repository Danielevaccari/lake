import { React, useState } from 'react'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Select from '@material-ui/core/Select'
import { FormControl, InputLabel } from '@material-ui/core';
import forest from './forest.jpeg'

const Create = (props) => {

    const [day, setDay] = useState('')
    const [month, setMonth] = useState('')
    const [year, setYear] = useState('')

    const handleDayChange = (event) => {
        setDay(event.target.value)
    }
    const handleMonthChange = (event) => {
        setMonth(event.target.value)
    }
    const handleYearChange = (event) => {
        setYear(event.target.value)
    }
    return (
        <>
            <div className='divC'>
            
                <div className='div1C'>
                    <Paper elevation={6} className='paperC' style={{backgroundImage: forest}}>
                        <h2 className='headerC'>Create account</h2>

                        <TextField className='textField' label='Insert username'>

                        </TextField>
                        <TextField className='textField' label='Insert password'>

                        </TextField>

                        <form className='createBC'>
                            <FormControl>
                                <InputLabel id='d'>Day</InputLabel>
                                <Select className='selectC' native value={day} onChange={handleDayChange}>
                                    <option />
                                    <option value={1}>1</option>
                                    <option value={2}>2</option>
                                    <option value={3}>3</option>
                                </Select>
                            </FormControl>

                            <FormControl>
                                <InputLabel id='m'>Month</InputLabel>
                                <Select className='selectC' native value={month} onChange={handleMonthChange}>
                                    <option />
                                    <option value={'January'}>January</option>
                                    <option value={'February'}>February</option>
                                    <option value={'March'}>March</option>
                                    <option value={'April'}>April</option>
                                    <option value={'May'}>May</option>
                                    <option value={'June'}>June</option>
                                    <option value={'July'}>July</option>
                                    <option value={'August'}>August</option>
                                    <option value={'September'}>September</option>
                                    <option value={'October'}>October</option>
                                    <option value={'November'}>November</option>
                                    <option value={'December'}>December</option>
                                </Select>
                            </FormControl>

                            <FormControl>
                                <InputLabel id='y'>Year</InputLabel>
                                <Select className='selectC' native value={year} onChange={handleYearChange}>

                                </Select>
                            </FormControl>
                        </form>
                        <div className='createBC'>
                            <Button onClick={props.c} disableRipple={true}>
                                Back
                            </Button>
                            <Button disableRipple={true}>
                                Create
                            </Button>
                        </div>
                    </Paper>
                </div>
            </div>
        </>
    )
}

export default Create
