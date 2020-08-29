import React, { Component } from 'react'

export default class Intro extends Component {
    render() {
        return (
            <div id="IntroComponent">
                <div className="jumbotron">
                    <h1 className="display-4">My Voice Matters</h1>
                    <p className="lead">Here to help you understand our goverment's bits n pieces. Because if you're like us, I'm sure having some help with knowing who makes what moves in this place and how to make the best desicion in ensuring what we get what we want in the elections.</p>
                    <hr className="my-4"/>
                    <p>We're just two people trying to do our part in making an actual difference, the best that we can.</p>
                    <a className="btn btn-dark btn-lg" href="/" role="button">Learn more</a>
                </div>
            </div>
        )
    }
}
