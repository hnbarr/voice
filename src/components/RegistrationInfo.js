import React, { Component } from 'react'
import Navbar from './Navbar';

export default class RegistrationInfo extends Component {
    render() {
        return (
            <div id="RegistrationInfoComponent" className="component">
                <Navbar/>
                <div className="mobile-spacer"></div>
                <div className="jumbotron">
                    <h1 className="display-4 mt-4 mt-md-0">Easy Resources Ready for You</h1>
                    <p className="lead">Test registration info component added</p>
                    <hr className="my-4"/>
                    <div className="row">
                        <div className="col-12 col-sm-3 m-0 m-md-2">
                            <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Local</h5>
                                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                <a href="/LocalRegistrationInformation" className="btn btn-light">Search by Zip</a>
                            </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-3 my-2 m-md-2">
                            <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">State</h5>
                                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                <a href="/StateRegistrationInformation" className="btn btn-light">Search by State</a>
                            </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-3 m-0 m-md-2">
                            <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">US</h5>
                                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                <a href="/USRegistrationInformation" className="btn btn-light">Search now</a>
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
