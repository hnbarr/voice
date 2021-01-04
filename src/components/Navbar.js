import React, { Component } from 'react'
// import { Link } from 'react-router-dom'

export default class Navbar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar fixed-top navbar-expand-md navbar-dark bg-dark row">
                    <div className="brand col-3 col-md-7 col-lg-8 col-xxl-9">
                        <a className="navbar-brand" href='/' id='dashBtn'> MVM </a> 
                    </div>
                    <button className="navbar-toggler col-2" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                    <div className="links collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav">
                            <li className="nav-item text-center">
                                <a className="nav-link mx-3" href="/Volunteer">Get Involved</a>
                            </li>
                            <li className="nav-item text-center">
                                <a className="nav-link mx-3" href="/Topics">Topics</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}
