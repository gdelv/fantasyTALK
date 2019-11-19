import React from 'react'
import { NavLink } from 'react-router-dom'
// import { Flex } from './components/layout/Flex'


const navStyle = {
    padding: '20px',
    justifyContent: 'space-evenly',
    display: 'flex',
    background: '#0C1428',
    color: 'white'
}

const Nav = () => {
    return (
        <nav style={navStyle}>
            <h1>fantasyTALK</h1>
            {/* <Flex> */}
                <NavLink exact to='/' >
                Home
                 </NavLink>

                <NavLink exact to='/nflquestions'>
                NFL Questions
                </NavLink>
            {/* </Flex> */}
        </nav>
    )
}

export default Nav