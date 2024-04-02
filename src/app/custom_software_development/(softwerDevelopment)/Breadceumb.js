import Image from 'next/image'
import React from 'react'

const Breadceumb = () => {
    return (
        <section className="breadcrumb-banner" style={{backgroundImage: `url(/custom-software-bg.jpg)`}}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-7">
                        <div className="breadcrumb-content">
                            <h1>For Innovative, Custom Software Development Services, DGtalists is Your Best Bet!</h1>
                            <p>Looking for tailored software solutions that not only meet but exceed your expectations? Welcome to
                                DGtalists, your go-to destination for tailored solutions for your business requirements. </p>
                            <p>In a rapidly evolving digital landscape, our commitment to excellence makes us outstanding! With a team
                                of highly skilled professionals, we deliver cutting-edge, custom software development services.</p>
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <form className="bannerform">
                            <div className="card">

                                <h1>Talk to our experts</h1>

                                <div>

                                    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Full Name"/>

                                </div>

                                <div>

                                    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Email address"/>

                                </div>

                                <div>

                                    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Phone Number" />

                                </div>

                                <div>

                                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"
                                        placeholder="I am interested in"></textarea>

                                </div>

                                
                                <div className="robot-cap">
                                    <Image width={170} height={38} src="/i-am-nt-robot.png" alt=""/>
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

export default Breadceumb