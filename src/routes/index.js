import React from 'react'
import { Route, Switch } from 'react-router-dom'
// import Main from '../Main'
import Home from '../components/screens/Home'

export const Routes = () => {
    return(
        <Switch>
            <Route exact path='/' component={Home}/>
        </Switch>
    )
}