import React from 'react'
import Image from 'next/image'

const CustomDevBanner = () => {
    return (
        <section className="breadcrumb-banner" style={{ backgroundImage: `url(/iot-bg.jpg)` }}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-7">
                        <div className="breadcrumb-content">
                            <h1>Avail the Most Cutting-Edge Custom Web Development Services for Your Business. Choose Dgtalists as Your
                                Partner, Now!</h1>
                            <p>Looking for the most state-of-the-art custom web development services? You can always rely on the
                                Dgtalists team for the needful. We can provide your target audience with the most captivating online
                                experience, with cutting edge web applications and solutions that can ensure high growth within the
                                shortest possible time. Trust us to take your business to greater heights!
                            </p>
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

export default CustomDevBanner