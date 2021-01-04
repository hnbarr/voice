import React from 'react'

export default function Footer() {
    return (
        <div className="bg-dark p-3" id="footer">
            <div className="row d-flex justify-content-between">
                <section className="text-light text-center col primary col">
                    <a href="mailto:hnbarr94@gmail.com">Contact Us!</a>
                </section>
                <section className="text-light text-center col secondary col">
                    <a className="btn btn-link" href="/VoteReady">Get #voteready!</a>
                </section>
                <section className="text-light text-center col teritary col">
                    <a className="btn btn-link" href="/RegisterNow">Resources!</a>
                </section>
            </div>
        </div>
    )
}
