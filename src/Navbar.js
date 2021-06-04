import React from 'react'
import paita2 from './paita2.png'

function Navbar() {
    return (
        <>
            <div className='nav'>
                <div className='left'>
                    Clothing INC
                </div>

                <div className='middle'>
                    <input className='searchInput' placeholder='Search...'></input>
                </div>

                <div className='right'>
                    <div className='links'>
                        <a className='link' href='/#'>Log in</a>
                        <a className='link' href='/#'>Create account</a>
                        <a className='link' href='/#'>Auditorial</a>
                        <a className='link' href='/#'>Contact Us</a>
                    </div>
                </div>
            </div>
            {/*Second part of nav-bar*/}
            <div className='categories'>
                <div className='category'>
                    <a className='link' href='/#'>Men</a>
                    <a className='link' href='/#'>Women</a>
                    <a className='link' href='/#'>Filter</a>
                    <a className='link' href='/#'>SALE</a>
                </div>
            </div>
        </>
    )
}

export default Navbar
