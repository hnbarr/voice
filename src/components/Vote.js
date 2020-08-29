import React, { Component } from 'react'

export default class Vote extends Component {
    render() {
        return (
            <div id="VoteComponent">
                <div className="jumbotron">
                    <h1 className="display-4">Are you voteready?</h1>
                    <p className="lead">Test second component aded</p>
                    <hr className="my-4"/>
                    <p>Test</p>
                    <a className="btn btn-peach btn-lg" href="/" role="button">Learn more</a>
                </div>
            </div>
        )
    }
}
