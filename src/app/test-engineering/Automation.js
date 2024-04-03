import Image from 'next/image'
import React from 'react'

const Automation = () => {
    return (
        <section className="automation" id="automation">
            <div className="container">
                <h3 className="heading">What Can We Offer You?</h3>
                <p className="sub-heading">At DGtalists, you can expect an extensive array of independent software testing services
                    that uphold the highest standards of security and industry excellence. </p>
                <div className="row">
                    <div className="col-lg-4">
                        <div className="card">
                            <div className="card-img">
                                <Image width={60} height={60} src="/automation-testing-icon.png" alt=""/>
                            </div>
                            <small>01</small>
                            <div className="card-content">
                                <h6>Automation Testing Services</h6>
                                <p className="sub-heading">We develop automated test scripts effectively, and your application gets tested
                                    and assessed thoroughly in each test cycle. </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="card">
                            <div className="card-img">
                                <Image width={60} height={60} src="/manual-testing-service.png" alt=""/>
                            </div>
                            <small>02</small>
                            <div className="card-content">
                                <h6>Manual Testing Services</h6>
                                <p className="sub-heading">Using a manual component, we can supplement automated testing. We have
                                    state-of-the-art testing labs, adaptable teams and skilled professionals having profound Quality
                                    Assurance (QA) expertise to offer these services. </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="card">
                            <div className="card-img">
                                <Image width={60} height={60} src="/api-testing-service.png" alt=""/>
                            </div>
                            <small>03</small>
                            <div className="card-content">
                                <h6>API Testing Services</h6>
                                <p className="sub-heading">We can save functional testing time, which allows us to mitigate management
                                    risks, reduce time-to-market, analyze overall build strength, elevate quality, and optimize testing
                                    and operating expenses.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="card">
                            <div className="card-img">
                                <Image width={60} height={60} src="/mobile-app-testing.png" alt=""/>
                            </div>
                            <small>04</small>
                            <div className="card-content">
                                <h6>Mobile App Testing Services</h6>
                                <p className="sub-heading">Our team ensures your mobile application reaches its full potential, by providing
                                    project testing services, identifying existing flaws through complete testing and QA packages or
                                    offering ongoing enhancement and support. There are seamless operations, performance and compatibility
                                    across varied platforms. </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="card">
                            <div className="card-img">
                                <Image width={60} height={60} src="/security-testing.png" alt=""/>
                            </div>
                            <small>05</small>
                            <div className="card-content">
                                <h6>Security Testing Services</h6>
                                <p className="sub-heading">At DGtalists, our team employs intelligent techniques and expertise to identify
                                    problem areas swiftly and enhance software code security. This ensures a successful turnaround.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="card">
                            <div className="card-img">
                                <Image width={60} height={60} src="/api-testing-service.png" alt=""/>
                            </div>
                            <small>06</small>
                            <div className="card-content">
                                <h6>Load & Performance Testing Services</h6>
                                <p className="sub-heading">We have a capable testing team, having expertise in fixing load and performance
                                    issues of projects mid-lifecycle, attending to projects facing issues quickly.</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Automation