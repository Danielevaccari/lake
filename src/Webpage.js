import React from 'react'
import Navbar from './Navbar'
import Clothes from './Clothes'

function webpage() {
    return (
        <>
            <div className='web1'>
                <Navbar />
            </div>
            <div className='web2'>
                <Clothes />
            </div>
        </>
    )
}

export default webpage
