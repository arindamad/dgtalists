"use client"
import Image from 'next/image'
import React from 'react'
import Slider from 'react-slick'

const AiTechnology = () => {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        speed: 500,
        autoplaySpeed: 1500,
        arrows: false
    };
    return (
        <section className="technology-sec">
            <div className="container">
                <h3 className="heading">Technology Expertise</h3>
                <p>We have a highly capable team, comprising of seasoned professionals having years of experience in the
                    software development domain. They have completed numerous projects successfully, and their expertise
                    spans various industries. We develop tailored software for you using:</p>
                <div className="technology_slider_wrapper">
                    <div className="technology_slider swiper">
                        <Slider {...settings}>
                            <div>
                                <div className="each_tech_slider">
                                    <div className="offer__icon">
                                        <Image width={41} height={41} src="/scala.png" alt="" />
                                    </div>
                                    <div className="card-content">
                                        <h6>Scala</h6>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="each_tech_slider">
                                    <div className="offer__icon">
                                        <Image width={41} height={41} src="/python.png" alt="" />
                                    </div>
                                    <div className="card-content">
                                        <h6>Python</h6>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="each_tech_slider">
                                    <div className="offer__icon">
                                        <Image width={41} height={41} src="/java.png" alt="" />
                                    </div>
                                    <div className="card-content">
                                        <h6>Java</h6>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="each_tech_slider">
                                    <div className="offer__icon">
                                        <Image width={41} height={41} src="/tensorflow.png" alt="" />
                                    </div>
                                    <div className="card-content">
                                        <h6>TensorFlow</h6>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="each_tech_slider">
                                    <div className="offer__icon">
                                        <Image width={41} height={41} src="/keras-logo.png" alt="" />
                                    </div>
                                    <div className="card-content">
                                        <h6>Keras</h6>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="each_tech_slider">
                                    <div className="offer__icon">
                                        <Image width={41} height={41} src="/torch.png" alt="" />
                                    </div>
                                    <div className="card-content">
                                        <h6>Torch</h6>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="each_tech_slider">
                                    <div className="offer__icon">
                                        <Image width={41} height={41} src="/learn.png" alt="" />
                                    </div>
                                    <div className="card-content">
                                        <h6>Learn</h6>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="each_tech_slider">
                                    <div className="offer__icon">
                                        <Image width={41} height={41} src="/pandas.png" alt="" />
                                    </div>
                                    <div className="card-content">
                                        <h6>Pandas</h6>
                                    </div>
                                </div>
                            </div>

                        </Slider>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AiTechnology