import React from 'react'
import Navbar from './Navbar'
import Products from './Products/Products'

function webpage() {
    return (
        <>
            <div className='web1'>
                <Navbar />
            </div>
            <div className='web2'>
                <Products />
            </div>
        </>
    )
}

export default webpage
