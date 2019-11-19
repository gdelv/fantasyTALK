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
                <NavLink exact to='/' activeClassName='active' >
                Home
                 </NavLink>

                <NavLink exact to='/nflquestions' activeClassName='active'>
                NFL Questions
                </NavLink>

                <NavLink exact to='/nflquestions/create' activeClassName='active'>
                    Add a Question
                </NavLink>

                {/* <Nav */}
            {/* </Flex> */}
        </nav>
    )
}

export default Nav