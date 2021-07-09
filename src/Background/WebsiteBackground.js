import React, { useState, useEffect } from 'react'

const WebsiteBackground = () => {

    const [hovered, setHovered] = useState(false)

    const trueHover = () => {
        setHovered(prevHovered => true)
    }

    const falseHover = () => {
        setHovered(prevHovered => false)
    }


    return (
        <>
            <div className='surroundings'>
                <div onMouseOut={falseHover} onMouseOver={trueHover} className='hover'>
                    <div className={!hovered ? 'real' : 'real2'}>
                    {!hovered ? 'Clothing INC™' : ''}
                    </div>
                    <div style={{ transform: 'translate(10px, 10px) skewY(-9deg)' }} className='real'>
                        Clothing INC™
                    </div>
                    <div style={{ transform: 'translate(20px, 20px) skewY(-9deg)' }} className={!hovered ? 'real' : 'real2'}>
                    {!hovered ? 'Clothing INC™' : ''}
                    </div>
                </div>
            </div>
        </>
    )
}

export default WebsiteBackground
