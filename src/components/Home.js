import React, { Component } from 'react'
import Intro from './Intro';
// import Calendar from './Calendar';
import Topics from './Topics';
// import Vote from './Vote';
// import RegistrationInfo from './RegistrationInfo';

export default class Home extends Component {
    render() {
        return (
            <div>
                <Intro />
                <Topics />
                {/* <Vote /> */}
                {/* <RegistrationInfo /> */}
            </div>
        )
    }
}
