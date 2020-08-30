import React, { Component } from 'react'

export default class Intro extends Component {
    render() {
        return (
            <div id="IntroComponent" className="component">
            <div className="mobile-spacer"></div>
                <div className="jumbotron">
                    <h1 className="display-2 mt-4 mt-md-0">My Voice Matters</h1>
                    <p className="lead col-md-8">Here to help you understand our goverment's bits n pieces. Because if you're like us, I'm sure you've struggled with finding relevant information on what you actually care about online.</p>
                    <hr className="my-4"/>
                    <p>We're just two people trying to do our part in making an actual difference, the best that we can.</p>
                    <a className="btn btn-dark btn-lg" href="/WhoWeAre" role="button">Get Involved</a>
                </div>
            </div>
        )
    }
}
