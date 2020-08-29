import React, { Component } from 'react'

export default class Intro extends Component {
    render() {
        return (
            <div id="IntroComponent">
                <div class="jumbotron">
                    <h1 class="display-4">My Voice Matters</h1>
                    <p class="lead">Here to help you understand our goverment's bits n pieces. Because if you're like us, I'm sure having some help with knowing who makes what moves in this place and how we can actually make a difference with our vote.</p>
                    <hr class="my-4"/>
                    <p>We're just two people trying to do our part in making an actual difference, the best that we can.</p>
                    <a class="btn btn-light btn-lg" href="#" role="button">Learn more</a>
                </div>
            </div>
        )
    }
}
