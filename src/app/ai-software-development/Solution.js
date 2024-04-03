"use client"
import Image from 'next/image';
import React from 'react'
import Slider from 'react-slick';

const Solution = () => {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        speed: 500,
        autoplaySpeed: 2000,
    };
    return (
        <>
            <section className="our_solution" id="our_solution">
                <div className="container-fluid">
                    <div className="solution_wrap" style={{ backgroundImage: `url(/solution-bg-new.png)` }}>
                        <div className="section_top">

                            <h4 className="heading"> Our AI Software Development Services</h4>
                        </div>
                        <p>Our Team Specializes In Providing Your Business With Advanced AI Solutions, Leveraging The Potential Of
                            Machine Learning And Data Analytics, To Give A Boost To Your Business Activities. Customers Can Get A More
                            Streamlined, Efficient Experience And Your Enterprise Decision-Making Processes Are Improved As Well.</p>
                        <p>We can provide you with a number of AI applications, including:</p>
                    </div>

                </div>
            </section>
            <section className="solutin_slider_wrapper" id="solutin_slider_wrapper">
                <div className="container">
                    <div className="solution_slider swiper" id="">
                        <Slider {...settings}>
                            <div>
                                <div className="each_solution_slider">
                                    <div className="slider_img">
                                        <Image width={301} height={364} src="/predictive-maintainence.png" alt="soluction" />
                                        <div className="slider_content">
                                            <h5>predictive maintenance</h5>
                                            <div className="solution_desc">
                                                <div>
                                                    <h5>predictive maintenance</h5>
                                                    <p>With smart solutions powered by AI, we help your business with equipment failure prediction and
                                                        prevention by evaluating data from sensors, equipments etc.</p>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="each_solution_slider">
                                    <div className="slider_img">
                                        <Image width={301} height={364} src="/fraud-detection.png" alt="soluction" />
                                        <div className="slider_content">
                                            <h5>Fraud detection</h5>
                                            <div className="solution_desc">
                                                <div>
                                                    <h5>Fraud detection</h5>
                                                    <p>Get the best AI solutions that help prevent fraud for your business and ensure trust among your
                                                        customers.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="each_solution_slider">
                                    <div className="slider_img">
                                        <Image width={301} height={364} src="/marketing.png" alt="soluction" />
                                        <div className="slider_content">
                                            <h5>personalized Marketing</h5>
                                            <div className="solution_desc">
                                                <div>
                                                    <h5>personalized Marketing</h5>
                                                    <p>Obtain marketing solutions specific to your business needs and goals with our AI powered
                                                        solutions.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="each_solution_slider">
                                    <div className="slider_img">
                                        <Image width={301} height={364} src="/language-processing.png" alt="soluction" />
                                        <div className="slider_content">
                                            <h5>Natural Language Processing</h5>
                                            <div className="solution_desc">
                                                <div>
                                                    <h5>Natural Language Processing</h5>
                                                    <p>When it comes to natural language processing, our artificial intelligence systems and solutions
                                                        can be the best ally for your business.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="each_solution_slider">
                                    <div className="slider_img">
                                        <Image width={301} height={364} src="/chatbots.png" alt="soluction" />
                                        <div className="slider_content">
                                            <h5>Chatbots</h5>
                                            <div className="solution_desc">
                                                <div>
                                                    <h5>Chatbots</h5>
                                                    <p>With smart chatbots powered by artificial intelligence algorithms, we make it easier for you to
                                                        communicate with your customers round the clock. Provide them with exact responses
                                                        for whatever queries they may have.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="each_solution_slider">
                                    <div className="slider_img">
                                        <Image width={301} height={364} src="/speech-recognition.png" alt="soluction" />
                                        <div className="slider_content">
                                            <h5>Speech Recognition</h5>
                                            <div className="solution_desc">
                                                <div>
                                                    <h5>Speech Recognition</h5>
                                                    <p>Our AI solutions are powered by advanced algorithms for recognizing speech and accurate
                                                        analysis afterwards.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="each_solution_slider">
                                    <div className="slider_img">
                                        <Image width={301} height={364} src="/recomendation-engine.png" alt="soluction" />
                                        <div className="slider_content">
                                            <h5>recommendation Engines</h5>
                                            <div className="solution_desc">
                                                <div>
                                                    <h5>recommendation Engines</h5>
                                                    <p>ou can always rely on the effectiveness of our recommendation engines, driven by the latest
                                                        artificial intelligence algorithms, models and systems. </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="each_solution_slider">
                                    <div className="slider_img">
                                        <Image width={301} height={364} src="/image-video-analysis.png" alt="soluction" />
                                        <div className="slider_content">
                                            <h5>Image & Video Analysis</h5>
                                            <div className="solution_desc">
                                                <div>
                                                    <h5>Image & Video Analysis</h5>
                                                    <p>We help you analyze videos and images for your business, improve your decision making and
                                                        ensure proper evaluation with cutting-edge AI solutions.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Slider>
                    </div>
                </div>
            </section>

        </>

    )
}

export default Solution