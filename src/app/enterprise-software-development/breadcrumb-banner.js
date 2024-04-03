import Image from 'next/image'
import React from 'react'

const breadceumbBanner = () => {
    return (
        <section className="breadcrumb-banner" style={{ backgroundImage: `url(/custom-software-bg.jpg)` }}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-7">
                        <div className="breadcrumb-content">
                            <h1>DGtalists Covers Your Business Needs with Top-Grade Enterprise Software Development Services</h1>
                            <p>Looking for a trusted partner for top-grade enterprise software development services? Welcome to
                                DGtalists. In this dynamic business landscape, you need cutting-edge technology solutions to stay ahead.
                            </p>
                            <p>With many years of experience in offering tailored enterprise software development services, we are here
                                to empower your business. Trust our skilled developers to cater to the unique needs and challenges of your
                                enterprise.</p>
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <form className="bannerform">
                            <div className="card">

                                <h1>Talk to our experts</h1>

                                <div>

                                    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Full Name" />

                                </div>

                                <div>

                                    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Email address" />

                                </div>

                                <div>

                                    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Phone Number" />

                                </div>

                                <div>

                                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"
                                        placeholder="I am interested in"></textarea>

                                </div>


                                <div className="robot-cap">
                                    <Image width={170} height={38} src="/i-am-nt-robot.png" alt="" />
                                    <a className="cta" href="#">Contact Us</a>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default breadceumbBanner