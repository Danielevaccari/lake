import React from 'react'

function Navbar() {
    return (
        <>
            <div className='nav'>
                <div className='left'>
                    Clothing INC
                </div>

                <div className='right'>
                    <div className='links'>
                        <a className='link' href='/#'>Men</a>
                        <a className='link' href='/#'>Women</a>
                        <a className='link' href='/#'>Auditorial</a>
                        <a className='link' href='/#'>Contact Us</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar
