"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import Slider from 'react-slick'
import Modal from '@/component/modal/Modal'

const AkCaseStudySlider = () => {
    const [show, setShow] = useState(false);
    
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 500,
        autoplaySpeed: 2000,
        pauseOnHover:false
    };
    return (
        <section className="dg_case_studies">
            <div className="ak_case_studies_wrapper" style={{ backgroundImage: `url(/case_study_bg.png)` }}>
                <h5 className="heading">Our Web Case Studies</h5>
                <div className="ak_case_study_slider">
                    <Slider {...settings}>
                        <div>
                            <div className="ak_case_studies">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="case_studies_content" data-aos="fade-right">
                                                <div className="case_studies_top">
                                                    <Image width={65} height={65} src="/logo-blue-- 1.png" />
                                                    <h4>Business Application Mobile App</h4>
                                                </div>
                                                <p>AMPLE TECHNOLOGIES LIMITED having a legacy of over 20 years in implementing winning
                                                    technologies, ample enable their customers with robust and best - in - className, ERP Solutions,
                                                    Blockchain, AI - Powered Solutions, Cybersecurity Solutions.AMPLE has the knowledge
                                                    repository, which consists of best practices as applicable for business process design and
                                                    re-design of various e-business application.</p>
                                                <div className="tach_stark">
                                                    <h6>Technology Stack</h6>
                                                    <ul>
                                                        <li><Image width={40} height={40} src="/html-5.png" /></li>
                                                        <li><Image width={40} height={40} src="/css-3.png" /></li>
                                                        <li><Image width={40} height={40} src="/bootstrap.png" /></li>
                                                        <li><Image width={40} height={40} src="/js.png" /></li>

                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="case_img">
                                                <Image width={494} height={320} src="/web-case-1.png" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="ak_case_studies">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="case_studies_content" data-aos="fade-right">
                                                <div className="case_studies_top">
                                                    <Image width={65} height={65} src="/logo-blue-- 1.png" />
                                                    <h4>News Channel</h4>
                                                </div>
                                                <p>launched in October 2021, is the web channel of Dream Forest Stories Pte Ltd. Singapore
                                                    One takes a ground-up approach with stories filed by ordinary citizens from across Singapore.
                                                    As a community channel, Our CityJos will live in the community they report on and tell stories
                                                    from a personal perspective that would resonate well with fellow citizens. We made their
                                                    online presence with custom design and development of their dynamic website.</p>
                                                <div className="tach_stark">
                                                    <h6>Technology Stack</h6>
                                                    <ul>
                                                        <li><Image width={40} height={40} src="/html-5.png" /></li>
                                                        <li><Image width={40} height={40} src="/css-3.png" /></li>
                                                        <li><Image width={40} height={40} src="/bootstrap.png" /></li>
                                                        <li><Image width={40} height={40} src="/js.png" /></li>
                                                        <li><Image width={40} height={40} src="/wordpress-logo.png" /></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="case_img">
                                                <Image width={494} height={320} src="/web-case-2.png" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="ak_case_studies">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="case_studies_content" data-aos="fade-right">
                                                <div className="case_studies_top">
                                                    <Image width={65} height={65} src="/logo-blue-- 1.png" />
                                                    <h4>gaming, metaverse & P2E projects</h4>
                                                </div>
                                                <p>Enjinstarter is the premiere IDO & INO Launchpad for gaming, metaverse & P2E projects. We are
                                                    bringing together gamers, guilds, publishers, gaming studios etc. to build a sustainable
                                                    metaverse gaming & entertainment ecosystem. We have made their online presence. </p>
                                                <div className="tach_stark">
                                                    <h6>Technology Stack</h6>
                                                    <ul>
                                                        <li><Image width={40} height={40} src="/html-5.png" /></li>
                                                        <li><Image width={40} height={40} src="/css-3.png" /></li>
                                                        <li><Image width={40} height={40} src="/bootstrap.png" /></li>
                                                        <li><Image width={40} height={40} src="/js.png" /></li>
                                                        <li><Image width={40} height={40} src="/wordpress-logo.png" /></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="case_img">
                                                <Image width={494} height={320} src="/web-case-3.png" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="ak_case_studies">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="case_studies_content" data-aos="fade-right">
                                                <div className="case_studies_top"> <Image width={65} height={65} src="/logo-blue-- 1.png" />
                                                    <h4>Education</h4>
                                                </div>
                                                <p>Edworth Learning aim to provide a holistic platform to our young learners to reach out to the
                                                    chosen expert subjectteachers from across the world to achieve their goals. The idea and
                                                    method to transmit knowledge is to allow them not only to listen but also understand,
                                                    interact, practice and learn.</p>
                                                <div className="tach_stark">
                                                    <h6>Technology Stack</h6>
                                                    <ul>
                                                        <li><Image width={40} height={40} src="/html-5.png" /></li>
                                                        <li><Image width={40} height={40} src="/css-3.png" /></li>
                                                        <li><Image width={40} height={40} src="/bootstrap.png" /></li>
                                                        <li><Image width={40} height={40} src="/js.png" /></li>
                                                        <li><Image width={40} height={40} src="/wordpress-logo.png" /></li>
                                                        <li></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="case_img"> <Image width={494} height={320} src="/web-case-4.png" /> </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="ak_case_studies">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="case_studies_content" data-aos="fade-right">
                                                <div className="case_studies_top"> <Image width={65} height={65} src="/logo-blue-- 1.png" />
                                                    <h4>MCAT</h4>
                                                </div>
                                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                                                    been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
                                                    galley of type and scrambled it to make a type specimen book. It has survived not only five
                                                    centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                                                <div className="tach_stark">
                                                    <h6>Technology Stack</h6>
                                                    <ul>
                                                        <li><Image width={40} height={40} src="/html-5.png" /></li>
                                                        <li><Image width={40} height={40} src="/css-3.png" /></li>
                                                        <li><Image width={40} height={40} src="/bootstrap.png" /></li>
                                                        <li><Image width={40} height={40} src="/js.png" /></li>
                                                        <li><Image width={40} height={40} src="/wordpress-logo.png" /></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="case_img"> <Image width={494} height={320} src="/web-case-5.png" /> </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="ak_case_studies">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="case_studies_content" data-aos="fade-right">
                                                <div className="case_studies_top"> <Image width={65} height={65} src="/logo-blue-- 1.png" />
                                                    <h4>Organic Bedding Company</h4>
                                                </div>
                                                <p>The Maple Bed is Organic Bedding proudly built and manufactured in Canada. We have made their
                                                    online presence via this mobile friendly e-commerce web portal. With compare of products and
                                                    selling of their products online. </p>
                                                <div className="tach_stark">
                                                    <h6>Technology Stack</h6>
                                                    <ul>
                                                        <li><Image width={40} height={40} src="/css-3.png" /></li>
                                                        <li><Image width={40} height={40} src="/html-5.png" /></li>
                                                        <li><Image width={40} height={40} src="/bootstrap.png" /></li>
                                                        <li><Image width={40} height={40} src="/js.png" /></li>
                                                        <li><Image width={40} height={40} src="/wordpress-logo.png" /></li>
                                                        <li><Image width={40} height={40} src="/shopify.png" /></li>

                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="case_img"> <Image width={494} height={320} src="/web-case-6.png" /> </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="ak_case_studies">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="case_studies_content" data-aos="fade-right">
                                                <div className="case_studies_top"> <Image width={65} height={65} src="/logo-blue-- 1.png" />
                                                    <h4>Online Learning</h4>
                                                </div>
                                                <p>Incours offers tailor-made courses at home or online with qualified teachers to fill this gap
                                                    and optimize student success. We have made their digital presence where students can find
                                                    their private teachers make them register with the site and select the session make the online
                                                    payment via card. Also student can see different packages for the session. </p>
                                                <div className="tach_stark">
                                                    <h6>Technology Stack</h6>
                                                    <ul>
                                                        <li><Image width={40} height={40} src="/html-5.png" /></li>
                                                        <li><Image width={40} height={40} src="/css-3.png" /></li>
                                                        <li><Image width={40} height={40} src="/bootstrap.png" /></li>
                                                        <li><Image width={40} height={40} src="/js.png" /></li>
                                                        <li><Image width={40} height={40} src="/wordpress-logo.png" /></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="case_img"> <Image width={494} height={320} src="/web-case-7.png" /> </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="ak_case_studies">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="case_studies_content" data-aos="fade-right">
                                                <div className="case_studies_top"> <Image width={65} height={65} src="/logo-blue-- 1.png" />
                                                    <h4>Sports Nutrition Provider</h4>
                                                </div>
                                                <p>BYOP is Singapore’s #1 Functional Sports Nutrition Provider. BYOP specializes in functional
                                                    supplementation leading to the creation of 5 specialty series–Prime, Recovery, Power, Shred
                                                    and Silver. BYOP deliver supplementation solutions to any and every athlete. To be the #1
                                                    Sports Nutrition provider in the region.</p>
                                                <div className="tach_stark">
                                                    <h6>Technology Stack</h6>
                                                    <ul>
                                                        <li><Image width={40} height={40} src="/html-5.png" /></li>
                                                        <li><Image width={40} height={40} src="/css-3.png" /></li>
                                                        <li><Image width={40} height={40} src="/bootstrap.png" /></li>
                                                        <li><Image width={40} height={40} src="/js.png" /></li>
                                                        <li><Image width={40} height={40} src="/wordpress-logo.png" /></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="case_img"> <Image width={494} height={320} src="/web-case-8.png" /> </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Slider>
                </div>
            </div>
            <div className="looking_for" style={{ backgroundImage: `url(/cta_bg_1.jpg)` }}>
                <div className="container">
                    <div className="lookinh_for_content">
                        <h5 className="heading">Looking For Something Similar?</h5>
                        <p>Hit the button below and Contact Us for Consultation</p>
                        <a className="cta" onClick={handleShow} data-bs-toggle="modal" data-bs-target=".enquiry_modal">Get Free Consultation</a>
                    </div>
                </div>
            </div>
            <div className="ak_case_studies_wrapper mob_case_wrapper" style={{ backgroundImage: `url(/process-bg.png)` }}>
                <h5 className="heading">Our Mobile Case Studies</h5>
                <div className="ak_case_study_slider">
                    <Slider {...settings}>
                        <div>
                            <div className="ak_case_studies">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="case_studies_content" data-aos="fade-right">
                                                <div className="case_studies_top">
                                                    <Image width={65} height={65} src="/logo-blue-- 1.png" />
                                                    <h4>News Channel App</h4>
                                                </div>
                                                <p>SG One is an application for an online Media Channel in Singapore.  As a community channel,
                                                    Reporters will live in the community they report on and tell stories from a personal
                                                    perspective that would resonate well with fellow citizens.
                                                </p>
                                                <div className="tach_stark">
                                                    <h6>Technology Stack</h6>
                                                    <ul>
                                                        <li><Image width={40} height={40} src="/android-icon.png" /></li>
                                                        <li><Image width={40} height={40} src="/ionic.png" /></li>
                                                        <li><Image width={40} height={40} src="/mysql.png" /></li>
                                                        <li><Image width={40} height={40} src="/wordpress-logo.png" /></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="case_img">
                                                <Image width={490} height={465} src="/app-1.png" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="ak_case_studies">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="case_studies_content" data-aos="fade-right">
                                                <div className="case_studies_top">
                                                    <Image width={65} height={65} src="/logo-blue-- 1.png" />
                                                    <h4>Car Booking App</h4>
                                                </div>
                                                <p>Technological advancement has changed the way of commuting from one place to another. It
                                                    becomes more tech-driven when Uber model comes into existence. Thisapp to bridge the gap
                                                    between drivers and riders to a more convenient option..</p>
                                                <div className="tach_stark">
                                                    <h6>Technology Stack</h6>
                                                    <ul>
                                                        <li><Image width={40} height={40} src="/android-icon.png" /></li>
                                                        <li><Image width={40} height={40} src="/nodejs-icon.png" /></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="case_img">
                                                <Image width={490} height={465} src="/app-2.png" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="ak_case_studies">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="case_studies_content" data-aos="fade-right">
                                                <div className="case_studies_top">
                                                    <Image width={65} height={65} src="/logo-blue-- 1.png" />
                                                    <h4>Restaurant App</h4>
                                                </div>
                                                <p>This is a great solution for foodies in terms of their needs and same for hawkers in business
                                                    point of view. Through this mobile application we can create a bridge between foodies and
                                                    hawkers in very effective way so that foodies can enjoy their food and hawkers can grow their
                                                    business.</p>
                                                <div className="tach_stark">
                                                    <h6>Technology Stack</h6>
                                                    <ul>
                                                        <li><Image width={40} height={40} src="/android-icon.png" /></li>
                                                        <li><Image width={40} height={40} src="/react.png" /></li>
                                                        <li><Image width={40} height={40} src="/laravel.png" /></li>
                                                        <li><Image width={40} height={40} src="/mysql.png" /></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="case_img">
                                                <Image width={490} height={465} src="/app-3.png" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="ak_case_studies">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="case_studies_content" data-aos="fade-right">
                                                <div className="case_studies_top">
                                                    <Image width={65} height={65} src="/logo-blue-- 1.png" />
                                                    <h4>Logistic Mobile App and Web Admin.</h4>
                                                </div>
                                                <p>This is a  app to ease the operation of the entire logistic system where the app is used  to monitor real time tracking of vehicles with it’s statistics and possible fastest distribution
                                                    and an eagles eye on the activity to obliterate any bottleneck
                                                </p>
                                                <div className="tach_stark">
                                                    <h6>Technology Stack</h6>
                                                    <ul>
                                                        <li><Image width={40} height={40} src="/android-icon.png" /></li>
                                                        <li><Image width={40} height={40} src="/react.png" /></li>
                                                        <li><Image width={40} height={40} src="/nodejs-icon.png" /></li>
                                                        <li><Image width={40} height={40} src="/mongodb.png" /></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="case_img">
                                                <Image width={490} height={465} src="/app-4.png" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Slider>
                </div>
            </div>
            <Modal show={show} onHide={handleClose}/>
        </section>
    )
}

export default AkCaseStudySlider