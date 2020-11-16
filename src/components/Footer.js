import React from 'react'

export default function Footer() {
    return (
        <div className="container-fluid bg-dark p-3" id="footer">
            <div className="row mx-5">
                <section className="text-light col-12 col-md-3 col-lg-4 primary row">
                    <p className="col-12">logo?</p>
                    <p className="col-12">motto?</p>
                </section>
                <section className="text-light col-12 col-md-3 col-lg-4 secondary row">
                    <a className="btn btn-link col-12" href="/">Link</a>
                    <a className="btn btn-link col-12" href="/">Link</a>
                    <a className="btn btn-link col-12" href="/">Link</a>
                    <a className="btn btn-link col-12" href="/">Link</a>
                </section>
                <section className="text-light col-12 col-md-3 col-lg-4 teritary row">
                    Contact here?
                </section>
            </div>
        </div>
    )
}
