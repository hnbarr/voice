import React, { Component } from 'react'
import Navbar from './Navbar';

export default class Purpose extends Component {
    render() {
        return (
            <div id="PurposeComponent" className="component">
            <Navbar/>
            <div className="mobile-spacer"></div>
                <div className="jumbotron">
                    <h1 className="display-2 mt-4 mt-md-0">Why we're doing this.</h1>
                    <p className="lead col-md-8">Recently we wanted to do more and become more involved in our part of making a difference by voting, in our local, state and US elections. We believe it's important for others to do so as well. </p>
                    <hr className="my-4"/>
                    <p className="col-md-8">The main ssue we ran into though, was it's kindof confusing to find out the details of how voting works and what we needed to do to get-it-together. Finding information on voting, the positions and their pull, all the details of how registration works, and everything else along the way has been such a pain in the butt for us.</p>
                    <p className="col-md-8">We're trying to help with that, so if you'd like to help support our cause, share this app, talk about voting, register and head to the polls when it's time! Also, if you'd like to support us, <b>we love donations</b>, thank you! </p>
                    <a className="btn btn-dark btn-lg" href="/" role="button">Donate</a>
                </div>
            </div>
        )
    }
}
