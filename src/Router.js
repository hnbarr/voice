import React from 'react'
import { Switch, Route } from 'react-router-dom'
// import components here
import Vote from './components/Vote'
import Home from './components/Home';
import RegistrationInfo from './components/RegistrationInfo';
import Purpose from './components/Purpose';

const Router = () => {
    return (
        <Switch>
            <Route exact path='/' component={Home}></Route>
            <Route path='/WhoWeAre' component={Purpose}></Route>
            <Route path='/VoteReady' component={Vote}></Route>
            <Route path='/RegisterNow' component={Vote}></Route>
            <Route path='/CheckMyRegistration' component={Vote}></Route>
            <Route path="/LocalRegistrationInformation" component={RegistrationInfo}></Route>
            <Route path="/StateRegistrationInformation" component={RegistrationInfo}></Route>
            <Route path="/USRegistrationInformation" component={RegistrationInfo}></Route>
        </Switch>
    );
}

export default Router