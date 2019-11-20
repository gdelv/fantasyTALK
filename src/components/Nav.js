import React from 'react'
import { NavLink } from 'react-router-dom'
// import { Flex } from './components/layout/Flex'



const Nav = () => {
    return (
        <nav>
            <h1>PREDICTIONworld</h1>
            {/* <Flex> */}
            <div className='links'>
                <NavLink exact to='/' activeClassName='active' >
                    Home
                 </NavLink>

                <NavLink exact to='/nflquestions' activeClassName='active'>
                    All Predictions
                </NavLink>

                <NavLink exact to='/nflquestions/create' activeClassName='active'>
                    Post a Prediction
                </NavLink>
            </div>

            {/* <Nav */}
            {/* </Flex> */}
        </nav>
    )
}

export default Nav