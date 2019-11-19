import React from 'react'
import { Route, Switch } from 'react-router-dom'
import NFLQuestions from '../components/screens/NFLQuestions'
import CreateQuestion from '../components/screens/CreateQuestion'
import Home from '../components/screens/Home'

export const Routes = (props) => {
    return(
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/nflquestions' component={NFLQuestions}/>
            <Route exact path='/nflquestions/create' component={CreateQuestion}/>
        </Switch>
    )
}