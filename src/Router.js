import React from 'react'
import { Switch, Route } from 'react-router-dom'
// import components here
import Vote from './components/Vote'
// import Intro from './components/Intro'
import Home from './components/Home';

const Router = () => {
    return (
        <Switch>
            <Route exact path='/' component={Home}></Route>
            <Route exact path='/Vote' component={Vote}></Route>
        </Switch>
    );
}

export default Router