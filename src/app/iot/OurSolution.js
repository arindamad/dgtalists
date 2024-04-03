"use client"
import Image from 'next/image'
import React from 'react'
import Slider from 'react-slick'

const OurSolution = () => {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        speed: 500,
        autoplaySpeed: 1500,
        arrows:false
      };
    return (
        <>
            <section className="our_solution" id="our_solution">
                <div className="container-fluid">
                    <div className="solution_wrap" style={{backgroundImage: 'url(/solution-bg-new.png)'}}>
                        <div className="section_top">

                            <h4 className="heading"> We Follow <br />A Simple Process</h4>
                        </div>
                        <p>We Follow A Step-By-Step Process For A Streamlined Approach To IoT Development:</p>
                    </div>

                </div>
            </section>
            <section className="solutin_slider_wrapper" id="solutin_slider_wrapper">
                <div className="container">
                    <div className="solution_slider" id="">
                        <Slider {...settings}>
                            <div>
                                <div className="each_solution_slider">
                                    <div className="slider_img">
                                        <Image width={301} height={363} src="/requirement.png" alt="soluction" />
                                        <div className="slider_content">
                                            <h5>Requirement Gathering</h5>
                                            <div className="solution_desc">
                                                <div>
                                                    <h5>Requirement Gathering</h5>
                                                    <p>We understand your needs and objectives thoroughly, and gather info as well as resources, to
                                                        lay the
                                                        foundation for successful implementation of IoT.</p>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="each_solution_slider">
                                    <div className="slider_img">
                                        <Image width={301} height={363} src="/iot-uiux.png" alt="soluction" />
                                        <div className="slider_content">
                                            <h5>UI/UX Design</h5>
                                            <div className="solution_desc">
                                                <div>
                                                    <h5>UI/UX Design</h5>
                                                    <p>We ensure a seamless and engaging experience for end-users by crafting visually appealing,
                                                        intuitive
                                                        user interfaces. </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="each_solution_slider">
                                    <div className="slider_img">
                                        <Image width={301} height={363} src="/prototype.png" alt="soluction" />
                                        <div className="slider_content">
                                            <h5>Prototype</h5>
                                            <div className="solution_desc">
                                                <div>
                                                    <h5>Prototype</h5>
                                                    <p>Following designing, we develop a prototype to visualize and refine the concept.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="each_solution_slider">
                                    <div className="slider_img">
                                        <Image width={301} height={363} src="/development.png" alt="soluction" />
                                        <div className="slider_content">
                                            <h5>Development</h5>
                                            <div className="solution_desc">
                                                <div>
                                                    <h5>Development</h5>
                                                    <p>We utilize state-of-the-art languages and technologies for full-scale development, ensuring
                                                        alignment
                                                        with your vision and bringing your IoT solution to life.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="each_solution_slider">
                                    <div className="slider_img">
                                        <Image width={301} height={363} src="/quality-assurance.png" alt="soluction" />
                                        <div className="slider_content">
                                            <h5>Quality Assurance</h5>
                                            <div className="solution_desc">
                                                <div>
                                                    <h5>Quality Assurance</h5>
                                                    <p>Using rigorous testing processes the performance, reliability, and security of your IoT
                                                        solutions are
                                                        ensured, meeting the highest standards.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="each_solution_slider">
                                    <div className="slider_img">
                                        <Image width={301} height={363} src="/deployment.png" alt="soluction" />
                                        <div className="slider_content">
                                            <h5>Deployment</h5>
                                            <div className="solution_desc">
                                                <div>
                                                    <h5>Deployment</h5>
                                                    <p>Finally, we deploy the finalized IoT solution with efficiency, ensuring a seamless transition
                                                        from
                                                        developmental stage to active use.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="each_solution_slider">
                                    <div className="slider_img">
                                        <Image width={301} height={363} src="/iot-support.png" alt="soluction" />
                                        <div className="slider_content">
                                            <h5>Support & Maintenance</h5>
                                            <div className="solution_desc">
                                                <div>
                                                    <h5>Support & Maintenance</h5>
                                                    <p>We also offer ongoing support and maintenance to resolve any problem, adapting your IoT
                                                        solution to
                                                        evolving requirements and optimizing its performance.</p>
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

export default OurSolution