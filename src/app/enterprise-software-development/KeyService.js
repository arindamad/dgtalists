import Image from 'next/image'
import React from 'react'

const KeyService = () => {
    return (
        <section className="key-service" id="key-service">
            <div className="container">
                <h2 className="heading">The Scope of Our Enterprise Software Development Services</h2>
                <p>
                    We cater to the diverse needs of your business with a complete suite of services, designed meticulously.
                </p>
                <div className="row">
                    <div className="col-xl-4 col-lg-6 col-md-6">
                        <div className="service-box-four">
                            <div className="service-four-number">
                                01
                            </div>
                            <span></span>
                            <div className="service-four-content">
                                <div className="service-four-icon">
                                    <Image width={50} height={50} src="/enterprise-web-apps.png" alt=""/>
                                </div>
                                <h5 className="service-four-title">
                                    Enterprise Web Apps
                                </h5>
                                <div className="services-four-des">
                                    Our custom web app solutions meet the specific requirements of your business with a tailored approach.
                                    These are crafted intricately and align precisely with your unique business objectives.
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-6 col-md-6">
                        <div className="service-box-four">
                            <div className="service-four-number">
                                02
                            </div>
                            <span></span>
                            <div className="service-four-content">
                                <div className="service-four-icon">
                                    <Image width={50} height={50} src="/enterprise-mobile-app.png" alt=""/>
                                </div>
                                <h5 className="service-four-title">
                                    Enterprise Mobile Apps
                                </h5>
                                <div className="services-four-des">
                                    Experience the transformative power of our services as we streamline your business processes, to
                                    enhance productivity. Our enterprise mobile applications drive efficiency and connectivity within your
                                    organization, leveraging mobile solutions.
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-6 col-md-6">
                        <div className="service-box-four">
                            <div className="service-four-number">
                                03
                            </div>
                            <span></span>
                            <div className="service-four-content">
                                <div className="service-four-icon">
                                    <Image width={50} height={50} src="/enterprise-tech-consulting.png" alt=""/>
                                </div>
                                <h5 className="service-four-title">
                                    Enterprise Technology Consulting
                                </h5>
                                <div className="services-four-des">
                                    From validating your software project idea to resolving any developmental problem, our tech
                                    consultants offer comprehensive assistance at all stages.
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-6 col-md-6">
                        <div className="service-box-four">
                            <div className="service-four-number">
                                04
                            </div>
                            <span></span>
                            <div className="service-four-content">
                                <div className="service-four-icon">
                                    <Image width={50} height={50} src="/digital-transformation.png" alt=""/>
                                </div>
                                <h5 className="service-four-title">
                                    Digital Transformation
                                </h5>
                                <div className="services-four-des">
                                    In an ever-evolving technological landscape, we ensure that your business remains competitive and
                                    agile. Embrace the digital era as we facilitate seamless transitions into the digital realm. Our
                                    transformative services help redefine the landscape of your business operations.
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-6 col-md-6">
                        <div className="service-box-four">
                            <div className="service-four-number">
                                05
                            </div>
                            <span></span>
                            <div className="service-four-content">
                                <div className="service-four-icon">
                                    <Image width={50} height={50} src="/support.png" alt=""/>
                                </div>
                                <h5 className="service-four-title">
                                    Maintenance and Support
                                </h5>
                                <div className="services-four-des">
                                    Our services foster an error-free and streamlined environment for your business, ensuring that your
                                    software ecosystem operates properly and cohesively. We maintain your systems seamlessly to enhance
                                    overall performance and efficiency, providing you with 24/7 support.
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-6 col-md-6">
                        <div className="service-box-four">
                            <div className="service-four-number">
                                06
                            </div>
                            <span></span>
                            <div className="service-four-content">
                                <div className="service-four-icon">
                                    <Image width={50} height={50} src="/testing.png" alt=""/>
                                </div>
                                <h5 className="service-four-title">
                                    Testing & Quality Assurance
                                </h5>
                                <div className="services-four-des">
                                    Trust our professionals to provide your enterprise with systems that are up to the mark. These undergo
                                    many rounds of testing, to ensure their compatibility and ability to satisfy the demands of
                                    contemporary business operations.
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default KeyService