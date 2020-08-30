import React, { Component } from 'react'
import Intro from './Intro';
import Vote from './Vote';
import Navbar from './Navbar';
import RegistrationInfo from './RegistrationInfo';

export default class Home extends Component {
    render() {
        return (
            <div>
                <Navbar/>
                <Intro />
                <Vote />
                <RegistrationInfo />
            </div>
        )
    }
}
