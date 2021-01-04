import React from 'react'
import { Switch, Route, BrowserRouter } from 'react-router-dom'
// import components here
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Vote from './components/Vote'
import Home from './components/Home';
import Volunteer from './components/Volunteer';
import RegistrationInfo from './components/RegistrationInfo';
import Purpose from './components/Purpose';

const Router = () => {
    return (
        <div>
            <Navbar/>
            <BrowserRouter>
                <Switch>
                    <Route exact path='/' component={Home}></Route>
                    <Route path='/WhoWeAre' component={Purpose}></Route>
                    <Route path='/Volunteer' component={Volunteer}></Route>
                    <Route path='/VoteReady' component={Vote}></Route>
                    <Route path='/RegisterNow' component={RegistrationInfo}></Route>
                    <Route path='/CheckMyRegistration' component={RegistrationInfo}></Route>
                    <Route path="/LocalRegistrationInformation" component={RegistrationInfo}></Route>
                    <Route path="/StateRegistrationInformation" component={RegistrationInfo}></Route>
                    <Route path="/USRegistrationInformation" component={RegistrationInfo}></Route>
                </Switch>
            </BrowserRouter>
            <Footer/>
        </div>
    );
}

export default Router