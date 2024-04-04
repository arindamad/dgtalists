"use client"
import Image from 'next/image'
import React from 'react'
import Slider from 'react-slick'

const AiSoftwareDevelopment = () => {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 500,
        autoplaySpeed: 2000,
        arrows: false
    }
    return (
        <section className="ai_software_development dm_service" style={{backgroundImage: `url(/ai-bg.jpg)`}}>
            <div className="container">
                <h4 className="heading">You Take Growth For Business</h4>
                <div className="dm_service_slider">
                    <Slider {...settings}>
                        <div>
                            <div className="each_ai_box">
                                <figure>
                                    <Image width={412} height={296} src="/smm.png" alt="ai-img" />
                                </figure>
                                <div className="ai_content">
                                    <div className="ai_icon_box">
                                        <Image width={40} height={40} src="/social-media.png" alt="ai-icon" />
                                    </div>
                                    <h5>Social media Marketing</h5>
                                    <p>Our team works with you in close collaboration, getting a hang of your business goals and
                                        challenges.
                                        We come up with AI strategies that align with your goals, offer consultation on AI technologies such
                                        as Machine Learning and assist you in choosing the best AI technology for particular use cases.</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="each_ai_box">
                                <figure>
                                    <Image width={412} height={296} src="/social-media-opt.png" alt="ai-img" />
                                </figure>
                                <div className="ai_content">
                                    <div className="ai_icon_box">
                                        <Image width={40} height={40} src="/social-media-1.png" alt="ai-icon" />
                                    </div>
                                    <h5>Social media Optimization</h5>
                                    <p>Our team works with you in close collaboration, getting a hang of your business goals and
                                        challenges.
                                        We come up with AI strategies that align with your goals, offer consultation on AI technologies such
                                        as Machine Learning and assist you in choosing the best AI technology for particular use cases.</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="each_ai_box">
                                <figure>
                                    <Image width={412} height={296} src="/seo.png" alt="ai-img" />
                                </figure>
                                <div className="ai_content">
                                    <div className="ai_icon_box">
                                        <Image width={40} height={40} src="/social-media-2.png" alt="ai-icon" />
                                    </div>
                                    <h5>Search Engine Optimization</h5>
                                    <p>Our team works with you in close collaboration, getting a hang of your business goals and
                                        challenges.
                                        We come up with AI strategies that align with your goals, offer consultation on AI technologies such
                                        as Machine Learning and assist you in choosing the best AI technology for particular use cases.</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="each_ai_box">
                                <figure>
                                    <Image width={412} height={296} src="/graphics-design.jpeg" alt="ai-img" />
                                </figure>
                                <div className="ai_content">
                                    <div className="ai_icon_box">
                                        <Image width={40} height={40} src="/social-media-3.png" alt="ai-icon" />
                                    </div>
                                    <h5>Graphic Design</h5>
                                    <p>Our team works with you in close collaboration, getting a hang of your business goals and
                                        challenges.
                                        We come up with AI strategies that align with your goals, offer consultation on AI technologies such
                                        as Machine Learning and assist you in choosing the best AI technology for particular use cases.</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="each_ai_box">
                                <figure>
                                    <Image width={412} height={296} src="/ppc.png" alt="ai-img" />
                                </figure>
                                <div className="ai_content">
                                    <div className="ai_icon_box">
                                        <Image width={40} height={40} src="/social-media-4.png" alt="ai-icon" />
                                    </div>
                                    <h5>Pay per Click</h5>
                                    <p>Our team works with you in close collaboration, getting a hang of your business goals and
                                        challenges.
                                        We come up with AI strategies that align with your goals, offer consultation on AI technologies such
                                        as Machine Learning and assist you in choosing the best AI technology for particular use cases.</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="each_ai_box">
                                <figure>
                                    <Image width={412} height={296} src="/app-opt.png" alt="ai-img" />
                                </figure>
                                <div className="ai_content">
                                    <div className="ai_icon_box">
                                        <Image width={40} height={40} src="/social-media-5.png" alt="ai-icon" />
                                    </div>
                                    <h5>App Store Optimization</h5>
                                    <p>Our team works with you in close collaboration, getting a hang of your business goals and
                                        challenges.
                                        We come up with AI strategies that align with your goals, offer consultation on AI technologies such
                                        as Machine Learning and assist you in choosing the best AI technology for particular use cases.</p>
                                </div>
                            </div>
                        </div>

                    </Slider>

                </div>
            </div>
        </section>
    )
}

export default AiSoftwareDevelopment