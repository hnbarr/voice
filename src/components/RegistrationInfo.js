import React, { Component } from 'react'
import Navbar from './Navbar';

export default class RegistrationInfo extends Component {
    render() {
        return (
            <div id="RegistrationInfoComponent" className="component">
                <Navbar/>
                <div className="mobile-spacer"></div>
                <div className="jumbotron text-center row">
                    <h1 className="display-4 mt-4 mt-md-0">Learn More</h1>
                    <div className="lead col-10 offset-1">
                        <span>Curious about any of your local, state & US politicans & their positions?</span> 
                        <span>Check out these resources below to learn more about who your county. state and US goverment representatives are.</span>
                    </div>
                    <hr className="my-4"/>
                    <div className="row d-flex justify-content-center col-10 offset-1 col-sm-12 offset-sm-0">
                        <div className="col-12 col-sm-6 col-lg-3">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">Local</h5>
                                    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                    <a href="/LocalRegistrationInformation" className="btn btn-outline-dark">Search by Zip</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-lg-3">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">State</h5>
                                    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                    <a href="/StateRegistrationInformation" className="btn btn-outline-dark">Search by State</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-lg-3">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">US</h5>
                                    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                    <a href="/USRegistrationInformation" className="btn btn-outline-dark">Search now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
