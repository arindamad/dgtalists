"use client"
import Image from 'next/image'
import React from 'react'
import Slider from 'react-slick'

const OurSolution = () => {
    const settings = {
        dots: false,
        arrows:false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        speed: 500,
        autoplaySpeed: 1500,
        pauseOnHover:false
      };
    return (
        <>

            <section className="our_solution" id="our_solution">
                <div className="container-fluid">
                    <div className="solution_wrap" style={{backgroundImage: `url(/solution-bg-new.png)`}}>
                        <div className="section_top">

                            <h4 className="heading"> Test Automation</h4>
                        </div>
                        <p>At DGTALISTS, we are committed to making testing more efficient by adopting the proprietary Integrated
                            Manual and Automated Testing (IMAAT) approach. Our proficient Test Automation Leads conduct a meticulous
                            analysis to gauge the feasibility of automated testing for each project, meticulously weighing the potential
                            Return on Investment (ROI).</p>
                        <p>After establishing the economic viability, we develop reusable test scripts to expedite the process. These
                            are designed for automated testing at the level of UI and API. We follow a meticulous approach, ensuring
                            seamless and quick integration of test automation in just 3 weeks. This ensures efficiency as well as a
                            robust foundation for comprehensive testing strategies.</p>
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
                                    <Image width={301} height={363} src="/solution-1.png" alt="soluction"/>
                                        <div className="slider_content">
                                            <h5>Test Case Design</h5>
                                            <div className="solution_desc">
                                                <div>
                                                    <h5>Test Case Design</h5>
                                                    <p>Our meticulous approach to test case design ensures thorough coverage and effective validation
                                                        of system functionalities and features.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                </div>
                            </div>
                            </div>
                            <div>
                            <div className="each_solution_slider">
                                <div className="slider_img">
                                    <Image width={301} height={363} src="/solution-1.png" alt="soluction"/>
                                        <div className="slider_content">
                                            <h5>Test Case Design</h5>
                                            <div className="solution_desc">
                                                <div>
                                                    <h5>Test Case Design</h5>
                                                    <p>Our meticulous approach to test case design ensures thorough coverage and effective validation
                                                        of system functionalities and features.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                </div>
                            </div>
                            </div>
                            <div>
                            <div className="each_solution_slider">
                                <div className="slider_img">
                                    <Image width={301} height={363} src="/solution-2.png" alt="soluction"/>
                                        <div className="slider_content">
                                            <h5>Manual Testing</h5>
                                            <div className="solution_desc">
                                                <div>
                                                    <h5>Manual Testing</h5>
                                                    <p>Leveraging manual testing expertise, we ensure meticulous scrutiny and validation of system
                                                        behavior. We offer invaluable insights alongside automated testing efforts.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                </div>
                            </div>
                            </div>
                            <div>
                            <div className="each_solution_slider">
                                <div className="slider_img">
                                    <Image width={301} height={363} src="/solution-3.png" alt="soluction"/>
                                        <div className="slider_content">
                                            <h5>Automated test development for repetitive task</h5>
                                            <div className="solution_desc">
                                                <div>
                                                    <h5>Automated test development for repetitive task</h5>
                                                    <p>We streamline testing processes by creating automated scripts for repetitive tasks, enhancing
                                                        efficiency and accuracy.</p>
                                                </div>
                                            </div>
                                        </div>
                                </div>
                            </div>
                            </div>
                            <div>
                            <div className="each_solution_slider">
                                <div className="slider_img">
                                    <Image width={301} height={363} src="/solution-4.png" alt="soluction"/>
                                        <div className="slider_content">
                                            <h5>Explorately testing to create new test cases</h5>
                                            <div className="solution_desc">
                                                <div>
                                                    <h5>Explorately testing to create new test cases</h5>
                                                    <p>Through exploratory testing, we uncover new scenarios and create dynamic test cases to ensure
                                                        comprehensive coverage.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                </div>
                            </div>
                            </div>
                            <div>
                            <div className="swiper-slide each_solution_slider">
                                <div className="slider_img">
                                    <Image width={301} height={363} src="/solution-1.png" alt="soluction"/>
                                        <div className="slider_content">
                                            <h5>Automated test maintanence</h5>
                                            <div className="solution_desc">
                                                <div>
                                                    <h5>Automated test maintanence</h5>
                                                    <p>We ensure the longevity and relevance of automated tests by implementing regular maintenance
                                                        and updates to keep pace with evolving requirements.
                                                    </p>
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