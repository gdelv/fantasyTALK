import React from 'react'

const navStyle = {
    padding: '20px',
    justifyContent: 'space-evenly',
    display: 'flex',
    background: '#0C1428',
    color: 'white'
}

const Header = () => {
    return(
        <nav style={navStyle}>
            <h1>fantasyTALK</h1>
            <h3>NFL Fantasy</h3>
            
        </nav>
    )
}

export default Header