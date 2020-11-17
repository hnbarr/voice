import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Navbar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar fixed-top navbar-expand-md navbar-dark bg-dark">
                    <Link className="navbar-brand" to='/' id='dashBtn'> MVM </Link> 
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                        <li className="nav-item mx-3 active">
                            <a className="nav-link" href="/VoteReady">Vote</a>
                        </li>
                        <li className="nav-item mx-3">
                            <a className="nav-link disabled" href="/RegisterNow">Register Now</a>
                        </li>
                        <li className="nav-item mx-3">
                            <a className="nav-link disabled" href="/CheckMyRegistration">Check My Registration Status</a>
                        </li>
                        </ul>
                        {/* <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                        <button className="btn btn-outline-light my-2 my-sm-0" type="submit">Search</button>
                        </form> */}
                    </div>
                </nav>
            </div>
        )
    }
}
