import React, { Component } from 'react'
import Intro from './Intro';
import Vote from './Vote';
import RegistrationInfo from './RegistrationInfo';

export default class Home extends Component {
    render() {
        return (
            <div>
                <Intro />
                <Vote />
                <RegistrationInfo />
            </div>
        )
    }
}
