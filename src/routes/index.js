import React from 'react'
import { Route, Switch } from 'react-router-dom'
import NFLQuestions from '../components/screens/NFLQuestions'
import Home from '../components/screens/Home'

export const Routes = () => {
    return(
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/nflquestions' component={NFLQuestions}/>
        </Switch>
    )
}