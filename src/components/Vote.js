import React, { Component } from 'react'
import Navbar from './Navbar';

export default class Vote extends Component {
    render() {
        return (
            <div id="VoteComponent" className="component">
                <Navbar/>
                <div className="mobile-spacer"></div>
                <div className="jumbotron text-center">
                    <h1 className="display-4 mt-4 mt-md-0">Are you #voteready?</h1>
                    <p className="lead">Test second component aded</p>
                    <hr className="my-4"/>
                    <div className="row mb-3">
                        <div className="row d-flex justify-content-center col-10 offset-1 col-sm-12 offset-sm-0">
                            <div className="col-12 col-sm-6 col-md-4">
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">Register Now</h5>
                                        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                        <a href="/RegisterNow" className="btn btn-dark">Lets Go!</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-sm-6 col-md-4">
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">Am I registered?</h5>
                                        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                        <a href="/CheckMyRegistration" className="btn btn-dark">Lemme Check!</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <p>Test</p>
                    <a className="btn btn-peach btn-lg" href="/" role="button">Learn more</a> */}
                </div>
            </div>
        )
    }
}
