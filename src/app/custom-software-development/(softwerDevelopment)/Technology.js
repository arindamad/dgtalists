"use client"
import Image from 'next/image'
import React from 'react'
import Slider from 'react-slick'

const Technology = () => {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 1000,
        arrows: false,
    };
    return (
        <section className="technology-sec">
            <div className="container">
                <h3 className="heading">Technology Expertise</h3>
                <p>We have a highly capable team, comprising of seasoned professionals having years of experience in the
                    software development domain. They have completed numerous projects successfully, and their expertise
                    spans various industries. We develop tailored software for you using:</p>
                <div className="technology_slider_wrapper">
                    <div className="technology_slider">
                        <Slider {...settings}>
                            <div>
                            <div className="each_tech_slider">
                                    <div className="offer__icon">
                                        <Image width={41} height={41} src="/angular.png" alt=""/>
                                    </div>
                                    <div className="card-content">
                                        <h6>Angular</h6>
                                    </div>
                                </div>
                            </div>
                            <div>
                            <div className="each_tech_slider">
                                    <div className="offer__icon">
                                        <Image width={41} height={41} src="/react.png" alt=""/>
                                    </div>
                                    <div className="card-content">
                                        <h6>React</h6>
                                    </div>
                                </div>
                            </div>
                            <div>
                            <div className="each_tech_slider">
                                    <div className="offer__icon">
                                        <Image width={41} height={41} src="/vue.png" alt=""/>
                                    </div>
                                    <div className="card-content">
                                        <h6>Vue Js</h6>
                                    </div>
                                </div>
                            </div>
                            <div>
                            <div className="each_tech_slider">
                                    <div className="offer__icon">
                                        <Image width={41} height={41} src="/flutter.png" alt=""/>
                                    </div>
                                    <div className="card-content">
                                        <h6>Flutter</h6>
                                    </div>
                                </div>
                            </div>
                            <div>
                            <div className="each_tech_slider">
                                    <div className="offer__icon">
                                        <Image width={41} height={41} src="/react.png" alt=""/>
                                    </div>
                                    <div className="card-content">
                                        <h6>React Native</h6>
                                    </div>
                                </div>
                            </div>
                            <div>
                            <div className="each_tech_slider">
                                    <div className="offer__icon">
                                        <Image width={41} height={41} src="/xamarin.png" alt=""/>
                                    </div>
                                    <div className="card-content">
                                        <h6>Xamarin</h6>
                                    </div>
                                </div>
                            </div>
                            <div>
                            <div className="each_tech_slider">
                                    <div className="offer__icon">
                                        <Image width={41} height={41} src="/java.png" alt=""/>
                                    </div>
                                    <div className="card-content">
                                        <h6>Java</h6>
                                    </div>
                                </div>
                            </div>
                            <div>
                            <div className="each_tech_slider">
                                    <div className="offer__icon">
                                        <Image width={41} height={41} src="/dot-net.png" alt=""/>
                                    </div>
                                    <div className="card-content">
                                        <h6>.Net</h6>
                                    </div>
                                </div>
                            </div>
                            <div>
                            <div className="each_tech_slider">
                                    <div className="offer__icon">
                                        <Image width={41} height={41} src="/python.png" alt=""/>
                                    </div>
                                    <div className="card-content">
                                        <h6>Python</h6>
                                    </div>
                                </div>
                            </div>
                            <div>
                            <div className="each_tech_slider">
                                    <div className="offer__icon">
                                        <Image width={41} height={41} src="/go-icon.png" alt=""/>
                                    </div>
                                    <div className="card-content">
                                        <h6>Go Lang</h6>
                                    </div>
                                </div>
                            </div>
                            <div>
                            <div className="each_tech_slider">
                                    <div className="offer__icon">
                                        <Image width={41} height={41} src="/node-js.png"/>
                                    </div>
                                    <div className="card-content">
                                        <h6>Node Js</h6>
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

export default Technology