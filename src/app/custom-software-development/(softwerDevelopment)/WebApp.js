"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import Slider from 'react-slick'
import Modal from '@/component/modal/Modal'

const WebApp = () => {

    const [show, setShow] = useState(false);
    
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 2000,
        arrows: false,
    };
    return (
        <>
        <section className="web-app" id="web-app">
            <div className="container">
                <h3 className="heading">Web Application Services</h3>
                <p>We are a high-end web app development agency that provides excellent web design services at affordable rates
                    to assist your business in achieving success online. Our team of skilled web developers is capable of creating
                    and improving your online presence. Reach out to us for our top-notch web development services & accelerate
                    lead conversions for your company.</p>
                <span>Build a Website for your business with the best Web App Development Company:</span>

                <div className='testi-slider-1'>

                    <Slider {...settings}>
                        <div>
                            <div className="testimonial-wrap">

                                <div className="testimonial-item">

                                    <div className="each_testimonial-1">

                                        <Image width={60} height={60} src="/python-icon.png" className="testimonial-img" alt="" />

                                        <div className="testimonial-content">

                                            <h3>Python</h3>

                                            <p className="para-4">We make sure that each line of code meets the highest standards, adhering to
                                                stringent quality assurance processes. </p>

                                            <Link className="cta" href="/python-development">Read More</Link>
                                        </div>

                                    </div>

                                </div>

                            </div>
                        </div>
                        <div>
                            <div className="testimonial-wrap">

                                <div className="testimonial-item">

                                    <div className="each_testimonial-1">

                                        <Image width={60} height={60} src="/laravel.png" className="testimonial-img" alt="" />

                                        <div className="testimonial-content">

                                            <h3>Laravel Application</h3>

                                            <p className="para-4">We empower you to take control of your online presence with first-class and
                                                cutting-edge Laravel applications.</p>

                                            <Link className="cta" href="/laravel-development">Read More</Link>
                                        </div>

                                    </div>

                                </div>

                            </div>
                        </div>
                        <div>
                            <div className="testimonial-wrap">

                                <div className="testimonial-item">

                                    <div className="each_testimonial-1">

                                        <Image width={60} height={60} src="/nodejs.png" className="testimonial-img" alt="" />

                                        <div className="testimonial-content">

                                            <h3>Node App</h3>

                                            <p className="para-4">You can get a tailored solution that satisfies the unique demands of your
                                                enterprise, reducing costs, enhancing visibility and improving collaboration.</p>

                                            <Link className="cta" href="/node.js-development">Read More</Link>
                                        </div>

                                    </div>

                                </div>

                            </div>
                        </div>
                        <div>

                            <div className="testimonial-wrap">

                                <div className="testimonial-item">

                                    <div className="each_testimonial-1">

                                        <Image  width={60} height={60} src="/ci.png" className="testimonial-img" alt=""/>

                                            <div className="testimonial-content">

                                                <h3>CI App development</h3>

                                                <p className="para-4">With a tailored CI app designed for your business, we help your business enhance
                                                    customer satisfaction. We use our proprietary technologies to build apps, and let you strengthen
                                                    relationships with your customers.</p>

                                                <Link className="cta" href="/ci-development">Read More</Link>
                                            </div>

                                    </div>

                                </div>

                            </div>
                        </div>




                    </Slider>


                </div>
                <a className="cta" href="#" data-bs-toggle="modal" onClick={handleShow} data-bs-target=".enquiry_modal_wrap">Hire Software Developer</a>
            </div>
        </section>
        <Modal show={show} onHide={handleClose}/>
        </>
        
    )
}

export default WebApp