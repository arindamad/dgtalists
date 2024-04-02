import Image from 'next/image'
import React from 'react'

const CustomDev = () => {
    return (
        <section className="custom-development-section" id="custom-development-section"
            style={{backgroundImage: `url(/home-service-banner.jpg)`}}>
            <div className="container">
                <h3 className="heading">Custom software <br/> Development Advantages</h3>
                <div className="row justify-content-center">

                    <div className="col-lg-4">
                        <div className="each_feature_box">
                            <div className="feature_icon">
                                <Image width={40} height={40} src="/graphic-design.png" alt="icon"/>
                            </div>
                            <div className="feature_content">
                                <h5>Outstanding Designs</h5>
                                <p>You can get custom design elements from our skilled, expert team members.
                                    Dgtalists has a remarkable process that ensures the most captivating user experience from the
                                    very first moment.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="each_feature_box">
                            <div className="feature_icon">
                                <Image width={40} height={40} src="/frontend.png" alt="icon"/>
                            </div>
                            <div className="feature_content">
                                <h5>Robust Front and Back End </h5>
                                <p>Whether it comes to security, functionality or user-friendliness, our
                                    software solutions tick all the right boxes. You can expect robust front and back ends for your software system package.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="each_feature_box">
                            <div className="feature_icon">
                                <Image width={40} height={40} src="/clash-development.png" alt="icon"/>
                            </div>
                            <div className="feature_content">
                                <h5>Blazing Fast Development</h5>
                                <p>Our experts use Agile Development Methodology to realize your vision.
                                    They change plans and methods to ensure that the outcome is delivered ASAP. If Al Full
                                    Production Release is not something you are prepared for, opt for our MMP (Minimum Marketable
                                    Product) or MVP (Minimum Viable Product). You can get your project published in just a few
                                    weeks.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="each_feature_box">
                            <div className="feature_icon">
                                <Image width={40} height={40} src="/features.png" alt="icon"/>
                            </div>
                            <div className="feature_content">
                                <h5>Rich Features </h5>
                                <p>Get software packages that come with the most useful features. Be assured
                                    of standout UI and UX for your web and mobile apps, as well as added convenience for users.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="each_feature_box">
                            <div className="feature_icon">
                                <Image width={40} height={40} src="/idea.png" alt="icon"/>
                            </div>
                            <div className="feature_content">
                                <h5>Scalable Solutions</h5>
                                <p>Even if your business grows in size and scope in the times to come, as it
                                    should, you can expect your custom software package to keep serving your needs as well as that
                                    of your users. Scalable solutions are our forte, and we know how to deliver them.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="each_feature_box">
                            <div className="feature_icon">
                                <Image width={40} height={40} src="/message.png" alt="icon"/>
                            </div>
                            <div className="feature_content">
                                <h5>Constant Communication</h5>
                                <p>Expect constant support and communication from our experts, all through
                                    the process of development. You can get expert support and guidance from our end. We ensure
                                    that your present as well as future needs are satisfied by the custom software solutions that
                                    we provide your business with.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CustomDev