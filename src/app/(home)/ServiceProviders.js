import Image from 'next/image'
import React from 'react'
import Slider from "react-slick"

const ServiceProviders = () => {

    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 1000,
        arrows: false,
    };
    return (
        <>
            <section className="service_we_provide" style={{ backgroundImage: `url(/home-service-banner.jpg)` }}>
                <div className="container">
                    <h1 className="heading">Services We Provide</h1>

                    <p className="sub-heading">With a team of seasoned professionals, a commitment to client satisfaction, and
                        cutting-edge technologies, we elevate your business to new heights</p>
                </div>
            </section>

            <div className="all_services">
                <div className="container">

                    <div className='service_slider'>
                        <Slider {...settings}>
                            <div>
                                <div className="each_service_box">
                                    <div className="box">
                                        <h5>
                                            01
                                        </h5>
                                    </div>
                                    <div className="icon-box">

                                        <Image width={34} height={34} src="/custom-software-development.png" alt="" />
                                    </div>
                                    <h6 className="sub-heading">Custom Software Development</h6>



                                    <div className="each_service_content">

                                        <p>Not content with readymade software solutions? Order bespoke software solutions from us, and
                                            empower
                                            your business. We craft custom applications that help boost profitability, enhance user experiences,
                                            and streamline processes. Our solutions, tailored to your unique requirements, can ensure the
                                            epitome
                                            of efficiency and innovation for your enterprise. </p>

                                        <a href="custom-software-development.html" className="cta">Read More</a>

                                    </div>

                                </div>
                            </div>
                            <div>
                                <div className="each_service_box">
                                    <div className="box">
                                        <h5>
                                            02
                                        </h5>
                                    </div>
                                    <div className="icon-box">
                                        <Image width={34} height={34} src="/enterprise-software-development.png" alt="" />
                                    </div>
                                    <h6 className="sub-heading">Enterprise Software Development</h6>
                                    <div className="each_service_content">
                                        <p>Want to scale your operations and take your business to new heights? Our enterprise software
                                            development services are designed to help you do just that! We design robust solutions that align
                                            with
                                            your business objectives. Naturally, you can always expect easy scalability, seamless integration,
                                            and
                                            optimal performance.</p>

                                        <a href="enterprise-software-development.html" className="cta">Read More</a>

                                    </div>

                                </div>
                            </div>
                            <div>
                                <div className="each_service_box">
                                    <div className="box">
                                        <h5>
                                            03
                                        </h5>
                                    </div>
                                    <div className="icon-box">
                                        <Image width={34} height={34} src="/custom-web-development.png" alt="" />
                                    </div>
                                    <h6 className="sub-heading">Custom Web Development</h6>
                                    <div className="each_service_content">

                                        <p>Our custom web development services elevate your brand and make it outstanding from the crowd of
                                            businesses. Get a web presence that stands out! We have expert developers who can engage your
                                            audience
                                            with visually stunning, user-friendly websites. Maximize the potential of your online presence with
                                            our team. </p>

                                        <a href="custom-web-development.html" className="cta">Read More</a>

                                    </div>

                                </div>
                            </div>
                            <div>
                                <div className="each_service_box">
                                    <div className="box">
                                        <h5>
                                            04
                                        </h5>
                                    </div>
                                    <div className="icon-box">
                                        <Image width={34} height={34} src="/progressive-web-app.png" alt="" />
                                    </div>
                                    <h6 className="sub-heading">Progressive Web App Development</h6>
                                    <div className="each_service_content">
                                        <p>Looking to stay ahead of the curve? Our Progressive Web App development services combine the best
                                            of
                                            web and mobile apps, ensuring engaging, reliable, and fast user experiences. Explore our innovative
                                            solutions and embrace the future of web applications</p>

                                        <a href="#" className="cta">Read More</a>

                                    </div>

                                </div>
                            </div>
                            <div>
                                <div className="each_service_box">
                                    <div className="box">
                                        <h5>
                                            05
                                        </h5>
                                    </div>
                                    <div className="icon-box">
                                        <Image width={34} height={34} src="/ai-software-development.png" alt="" />
                                    </div>
                                    <h6 className="sub-heading">AI Software Development</h6>
                                    <div className="each_service_content">
                                        <p>Our AI software development expertise infuses intelligence into your applications. Stay competitive
                                            in today's dynamic business landscape! Automate processes and gain insights easily, by leveraging
                                            artificial intelligence and machine learning. </p>

                                        <a href="ai-software-development.html" className="cta">Read More</a>
                                    </div>

                                </div>
                            </div>
                            <div>
                                <div className="each_service_box">
                                    <div className="box">
                                        <h5>
                                            06
                                        </h5>
                                    </div>
                                    <div className="icon-box">
                                        <Image width={34} height={34} src="/iot.png" alt="" />
                                    </div>
                                    <h6 className="sub-heading">Internet of Things (IOT)</h6>
                                    <div className="each_service_content">
                                        <p>We unlock new possibilities for your business by harnessing the power of IoT. From smart homes to
                                            industrial applications, we help enhance efficiency by optimizing processes. Opt for our IoT
                                            solutions
                                            to connect and control devices seamlessly. </p>

                                        <a href="iot.html" className="cta">Read More</a>

                                    </div>

                                </div>
                            </div>
                            <div>
                                <div className="each_service_box">
                                    <div className="box">
                                        <h5>
                                            07
                                        </h5>
                                    </div>
                                    <div className="icon-box">
                                        <Image width={34} height={34} src="/mobile-app-development.png" alt="" />
                                    </div>
                                    <h6 className="sub-heading">Mobile App Development</h6>
                                    <div className="each_service_content">
                                        <p>Want to provide your customers with a seamless mobile experience? We have the most skilled
                                            developers
                                            to create user-friendly, high-performance apps for Android and iOS. Our mobile app development
                                            services help your business reach targeted audience on the go. </p>

                                        <a href="mobile-app-development.html" className="cta">Read More</a>

                                    </div>

                                </div>
                            </div>
                            <div>
                                <div className="each_service_box">
                                    <div className="box">
                                        <h5>
                                            08
                                        </h5>
                                    </div>
                                    <div className="icon-box">
                                        <Image width={34} height={34} src="/test-engineering.png" alt="" />
                                    </div>
                                    <h6 className="sub-heading">Quality Assurance - Test Engineering</h6>
                                    <div className="each_service_content">
                                        <p>Our quality engineering professionals use the best practices as well as a comprehensive digital
                                            assurance and testing strategy to ensure that your products meet the highest quality standards.
                                            There
                                            is maximum test coverage and quality across all stages of product development.</p>

                                        <a href="test-engineering.html" className="cta">Read More</a>

                                    </div>

                                </div>
                            </div>
                            <div>
                                <div className="each_service_box">
                                    <div className="box">
                                        <h5>
                                            09
                                        </h5>
                                    </div>
                                    <div className="icon-box">
                                        <Image src="/digital-marketing.png" width={34} height={34} alt="" />


                                    </div>
                                    <h6 className="sub-heading">Digital Marketing</h6>
                                    <div className="each_service_content">

                                        <p>Get the best online solutions for all your digital channels, drive brand awareness and ensure fast
                                            lead generation for your business. We offer comprehensive digital marketing solutions and services
                                            at
                                            the most affordable rates.</p>

                                        <a href="digital-marketing.html" className="cta">Read More</a>

                                    </div>

                                </div>
                            </div>
                        </Slider>

                    </div>
                </div>
            </div>
        </>
    )
}

export default ServiceProviders