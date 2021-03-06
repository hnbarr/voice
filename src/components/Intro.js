import React, { Component } from 'react'

export default class Intro extends Component {
    render() {
        return (
            <div id="IntroComponent" className="py-2">
            {/* <div className="mobile-spacer"></div> */}
                <div className="jumbotron mb-0">
                    <div className="row d-flex justify-content-center">
                        <h1 className="col-12 display-2 mt-4 mt-md-0">My Voice Matters</h1>
                        <div id="note" className="col mt-3 p-3 col-10 col-md-8 col-lg-6">
                            <div className="tape"></div>
                            {/* <span className="lead">Here to help you understand our goverment's bits n pieces. Because if you're like us, I'm sure you've struggled with finding relevant information on what you actually care about online.</span>
                            <hr className="my-4"/>
                            <p className="summary m-0">We're just two people trying to do our part in making an actual difference, the best that we can.</p>
                            <div className="text-center my-4 py-3">
                                <a className="btn btn-dark btn-lg" href="/WhoWeAre" role="button">Get Involved</a>
                            </div> */}
                            <span className="lead">
                                For the self educators, for the volunteers, for the kind, for unity!
                            </span>
                            <hr className="my-4"/>
                            <p className="summary m-0">
                            ?
                            </p>
                            <div className="text-center my-4 py-3">
                                <a className="btn btn-dark btn-lg" href="/WhoWeAre" role="button">About Us</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
