import React, { Component } from 'react'

export default class Purpose extends Component {
    render() {
        return (
            <div id="PurposeComponent">
            <div className="mobile-spacer p-4"></div>
                <div className="fullPage row">
                    <div className="col-10 offset-1 pt-4">
                        <h1 className="display-4 pt-4 mt-md-0">Why we're doing this.</h1>
                        {/* <p className="lead col-md-10">Recently we wanted to do more and become more involved in our part of making a difference by voting, in our local, state and US elections. We believe it's important for others to do so as well. </p>
                        <p className="col-md-10">
                            <hr className="my-4"/>
                            <span>
                                The main ssue we ran into though, was it's kindof confusing to find out the details of how voting works and what we needed to do to get-it-together. Finding information on voting, the positions and their pull, all the details of how registration works, and everything else along the way has been such a pain in the butt for us.
                            </span>
                        </p> */}
                        <h4 className="mt-3">
                        If 2020 taught us anything, it's that we all can do better.  
                        </h4>
                        <p className="col-md-10">
                        We can be more educated about each other, our past, our cultures, our government, our systemic issues and ourselves.
                        </p>
                        <p className="col-md-10">
                            <span>
                                We're aiming to be a resource for those of you who are trying to self educate and to become involved in making the world a better place for everyone and everything. 
                            </span>    
                        </p>
                        <hr className="my-4"/>
                        <p className="col-md-10">If you'd like to help our cause, share this app or <a href="/Volunteer">come volunteer</a> with us in Austin, TX!</p>
                        {/* <p className="col-md-10">Donations go towards our volunteer movement in Austin as well as improvement, outreach and development of our platform! To help us, click below, thank you! </p> */}
                        <div className="d-flex">
                            <a className="btn mx-3 btn-dark btn-md" href="https://www.paypal.me/HeatherBarr332" role="button">Donate</a>
                            <a className="btn mx-3 btn-dark btn-md" href="mailto:hnbarr94@gmail.com">Contact Us!</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
