import React, { Component } from 'react'
import Calendar from './Calendar';

export default class Volunteer extends Component {
    render() {
        return (
            <div className="" id="VolunteerComponent">
                <div className="mobile-spacer py-5"></div>
                <div className="row">
                    <div className="col">
                        content here
                    </div>                
                </div>
                <Calendar/>
            </div>
        )
    }
}
