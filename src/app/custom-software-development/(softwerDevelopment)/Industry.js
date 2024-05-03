"use client"
import Image from 'next/image'
import React from 'react'
import Slider from 'react-slick'

const Industry = () => {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        speed: 3000,
        autoplaySpeed: 2000,
        cssEase: "linear",
        arrows: false,
    };
    return (
        <section className="industry-expertise" id="industry-expertise">
            <div className="container">
                <h3 className="heading">our industry expertise</h3>
                <div className="testi-slider-2">
                    <Slider {...settings}>
                        <div>
                            <div className="testimonial-wrap">

                                <div className="testimonial-item">

                                    <div className="each_testimonial-1">

                                        <Image width={238} height={159} src="/manufacturing.jpg" className="testimonial-img" alt="" />

                                    </div>
                                    <div className="developer-content">
                                        <h5 className="name">Manufacturing</h5>
                                    </div>

                                </div>

                            </div>
                        </div>
                        <div>
                            <div className="testimonial-wrap">

                                <div className="testimonial-item">

                                    <div className="each_testimonial-1">

                                        <Image width={238} height={159} src="/healthcare.jpg" className="testimonial-img" alt="" />

                                    </div>
                                    <div className="developer-content">
                                        <h5 className="name">Healthcare</h5>
                                    </div>

                                </div>

                            </div>
                        </div>
                        <div>
                            <div className="testimonial-wrap">

                                <div className="testimonial-item">

                                    <div className="each_testimonial-1">

                                        <Image width={238} height={159} src="/transportation-logistic.jpg" className="testimonial-img" alt="" />

                                    </div>
                                    <div className="developer-content">
                                        <h5 className="name">Transportation & Logistic</h5>
                                    </div>

                                </div>

                            </div>
                        </div>
                        <div>
                            <div className="testimonial-wrap">

                                <div className="testimonial-item">

                                    <div className="each_testimonial-1">

                                        <Image width={238} height={159} src="/banking-finance.png" className="testimonial-img" alt="" />

                                    </div>
                                    <div className="developer-content">
                                        <h5 className="name">Banking & Finance</h5>
                                    </div>

                                </div>

                            </div>
                        </div>
                        <div>
                            <div className="testimonial-wrap">

                                <div className="testimonial-item">

                                    <div className="each_testimonial-1">

                                        <Image width={238} height={159} src="/media.jpg" className="testimonial-img" alt="" />

                                    </div>
                                    <div className="developer-content">
                                        <h5 className="name">Media & Entertainment</h5>
                                    </div>

                                </div>

                            </div>
                        </div>
                        <div>
                            <div className="testimonial-wrap">

                                <div className="testimonial-item">

                                    <div className="each_testimonial-1">

                                        <Image width={238} height={159} src="/sports.png" className="testimonial-img" alt="" />

                                    </div>
                                    <div className="developer-content">
                                        <h5 className="name">Sports</h5>
                                    </div>

                                </div>

                            </div>
                        </div>
                        <div>
                            <div className="testimonial-wrap">

                                <div className="testimonial-item">

                                    <div className="each_testimonial-1">

                                        <Image width={238} height={159} src="/event-management.jpg" className="testimonial-img" alt="" />

                                    </div>
                                    <div className="developer-content">
                                        <h5 className="name">Event Management</h5>
                                    </div>

                                </div>

                            </div>
                        </div>
                        <div>
                            <div className="testimonial-wrap">

                                <div className="testimonial-item">

                                    <div className="each_testimonial-1">

                                        <Image width={238} height={159} src="/social-networking.png" className="testimonial-img" alt="" />

                                    </div>
                                    <div className="developer-content">
                                        <h5 className="name">Social Networking</h5>
                                    </div>

                                </div>

                            </div>
                        </div>
                        <div>
                            <div className="testimonial-wrap">

                                <div className="testimonial-item">

                                    <div className="each_testimonial-1">

                                        <Image width={238} height={159} src="/education.jpg" className="testimonial-img" alt="" />

                                    </div>
                                    <div className="developer-content">
                                        <h5 className="name">Education & E-learning</h5>
                                    </div>

                                </div>

                            </div>
                        </div>
                        <div>
                            <div className="testimonial-wrap">

                                <div className="testimonial-item">

                                    <div className="each_testimonial-1">

                                        <Image width={238} height={159} src="/utility.jpg" className="testimonial-img" alt="" />

                                    </div>
                                    <div className="developer-content">
                                        <h5 className="name">Utility</h5>
                                    </div>

                                </div>

                            </div>
                        </div>
                        <div>
                            <div className="testimonial-wrap">

                                <div className="testimonial-item">

                                    <div className="each_testimonial-1">

                                        <Image width={238} height={159} src="/real-estate.jpg" className="testimonial-img" alt="" />

                                    </div>
                                    <div className="developer-content">
                                        <h5 className="name">Real Estate</h5>
                                    </div>

                                </div>

                            </div>
                        </div>

                    </Slider>

                </div>
            </div>
        </section>
    )
}

export default Industry