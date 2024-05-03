'use client'
import React from 'react';
import Image from 'next/image';
import Slider from 'react-slick';
import Accordion from 'react-bootstrap/Accordion';

const Katalon = () => {
    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        speed: 500,
        autoplaySpeed: 2000,
        pauseOnHover: false
    };
    return (
        <>
            <section className="breadcrumb-banner ai-Breadcrumb" style={{ backgroundImage: `url(/ai-software-development-bg.jpg)` }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7">
                            <div className="breadcrumb-content">
                                <h1>Mobile App Testing Case Study Katalon</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <main id="main">

                <section className="serviceInnerCaseStudy-sec">
                    <div className="container">
                        <div className="caseTopHeading">
                            <h3>Katalon Studio: A Game-Changer for Software Testing</h3>
                            <p>One of the primary areas of concentration for Inceptial Tech, a quickly expanding IT services provider, is
                                TaaS. Manual testing is laborious, prone to mistakes, and finds it difficult to keep up with the repetitive
                                workflow and quick release cycles. We suggest implementing Katalon Studio, a potent automation testing tool,
                                to get over these restrictions. This case study examines Katalon Studio's advantages and shows how it can
                                greatly enhance Inceptial Tech's testing procedure's efficacy and efficiency.</p>
                        </div>
                    </div>
                </section>
                <section className="project_overview katalon_project_overview">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="each_overview_img ">
                                    <Image width={636} height={410} src="/katalon-1.jpg" alt="garment" />
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="project_overview_content">
                                    <h4 className="case_single__title">Overview</h4>
                                    <ul>
                                        <li>Test Automation which allows you to automate Web Ul, Mobile Application (Native, Hybrid WebView).
                                        </li>
                                        <li>It includes a full package of powerful features that help overcome common challenges in web Ul test
                                            automation, for example, pop-up, Frame, and wait-time.</li>
                                        <li>IDE means real IDE with autocomplete and debugging e.g. IntelliJ IDEA, Eclipse, Visual Studio</li>
                                        <li>Katalon is built on top of Selenium and Appium and it will remove the complexities which make tester
                                            more comfortable.</li>
                                        <li>Works on Windows, Mac and Linux.</li>
                                        <li>Out of the box support for Cloud Services e.g. Sauce Labs, BrowserStack, Kobiton.</li>
                                        <li>It has inbuilt rich libraries which allow the tester to write the test quickly and efficiently.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="challenges_sec">
                    <div className="container">
                        <div className="section-elements-title">
                            <h4 className="case_single__title">Challenges/Problems</h4>
                        </div>
                        <div className="row">
                            <div className="col-lg-8">
                                <div className="faq-wrapper challenge_wrap">

                                    <div id="accordion">

                                        <Accordion>
                                            <Accordion.Item eventKey="0">
                                                <Accordion.Header>Inefficiency of Manual Testing</Accordion.Header>
                                                <Accordion.Body>
                                                    <div className="card-body">
                                                        <p>Manual testing requires a lot of labour and moves slowly. It is a laborious procedure that
                                                            slows down project completion and makes it more difficult to respond to market needs.</p>
                                                    </div>

                                                </Accordion.Body>
                                            </Accordion.Item>
                                            <Accordion.Item eventKey="1">
                                                <Accordion.Header>Limited Test Coverage</Accordion.Header>
                                                <Accordion.Body>
                                                    <div className="card-body">
                                                        <p>When testing by hand, it's common to overlook complex scenarios and edge cases, which leaves
                                                            defects undiscovered in production. Occasionally, significant adverse events are also
                                                            overlooked, resulting in a general problem with quality.
                                                        </p>

                                                    </div>
                                                </Accordion.Body>
                                            </Accordion.Item>
                                            <Accordion.Item eventKey="2">
                                                <Accordion.Header>Repeated Tasks</Accordion.Header>
                                                <Accordion.Body>
                                                    <div className="card-body">
                                                        <p>Manual testers must devote a large amount of time to repeating tasks, which impairs their
                                                            ability to think critically and exploratorily. It also increases the risk of human error and
                                                            inefficient use of resources.</p>
                                                    </div>
                                                </Accordion.Body>
                                            </Accordion.Item>
                                            <Accordion.Item eventKey="3">
                                                <Accordion.Header>Scalability</Accordion.Header>
                                                <Accordion.Body>
                                                    <div className="card-body">
                                                        <p>As the business expands, it releases products at different times, which puts an unmanageable
                                                            strain on the testing staff and raises the possibility of quality problems.</p>
                                                    </div>
                                                </Accordion.Body>
                                            </Accordion.Item>
                                        </Accordion>

                                    </div>

                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="ak_tab_img">
                                    <Image width={415} height={311} src="/challenge.jpg" alt="challenge" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="solution_sec ak_solution" style={{ backgroundImage: `url(/solution_bg.jpg)` }}>
                    <div className="container">
                        <div className="section-elements-title mb-30">
                            <h4 className="case_single__title">Advantages</h4>
                        </div>

                    </div>
                </section>
                <div className="advantages">
                    <div className="container">
                        <div className="advantages_slider" style={{ position: "relative", zIndex: '1' }}>
                            <Slider {...settings}>
                                <div>
                                    <div className="each_benefit_box">
                                        <div className="benefit_icon">
                                            <Image width={60} height={60} src="/performance.png" alt="benefits-icon" />
                                        </div>
                                        <p>Less manual testing and more efficiency</p>
                                    </div>
                                </div>
                                <div>
                                    <div className="each_benefit_box">
                                        <div className="benefit_icon">
                                            <Image width={60} height={60} src="/grow.png" alt="benefits-icon" />
                                        </div>
                                        <p> Boost <br /> scalability</p>
                                    </div>
                                </div>
                                <div>
                                    <div className="each_benefit_box">
                                        <div className="benefit_icon">
                                            <Image width={60} height={60} src="/premium-service.png" alt="benefits-icon" />
                                        </div>
                                        <p>Improved <br /> Quality</p>
                                    </div>
                                </div>
                                <div>
                                    <div className="each_benefit_box">
                                        <div className="benefit_icon">
                                            <Image width={60} height={60} src="/test-coverage.png" alt="benefits-icon" />
                                        </div>
                                        <p> Increased <br />Test Coverage</p>
                                    </div>
                                </div>
                                <div>
                                    <div className="each_benefit_box">
                                        <div className="benefit_icon">
                                            <Image width={60} height={60} src="/calendar.png" alt="benefits-icon" />
                                        </div>
                                        <p> Simplified<br /> Maintenance</p>
                                    </div>
                                </div>
                                <div>
                                    <div className="each_benefit_box">
                                        <div className="benefit_icon">
                                            <Image width={60} height={60} src="/cost-effective.png" alt="benefits-icon" />
                                        </div>
                                        <p> Cost <br />Effectiveness</p>
                                    </div>
                                </div>
                                <div>
                                    <div className="each_benefit_box">
                                        <div className="benefit_icon">
                                            <Image width={60} height={60} src="/web-design.png" alt="benefits-icon" />
                                        </div>
                                        <p> User-friendly <br /> design</p>
                                    </div>
                                </div>
                                <div>
                                    <div className="each_benefit_box">
                                        <div className="benefit_icon">
                                            <Image width={60} height={60} src="/cloud-computing.png" alt="benefits-icon" />
                                        </div>
                                        <p> Wide <br />platform support</p>
                                    </div>
                                </div>

                            </Slider>
                        </div>
                    </div>
                </div>
                <div className="sol-sec-1">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="conclusion">
                                    <h2>Conclusion</h2>
                                    <p>Katalon Studio offers a powerful and cost-effective solution to Inceptial Tech's testing challenges. By adopting Katalon Studio, Inceptial Tech can achieve significant improvements in test efficiency, coverage, and quality, leading to faster releases, lower costs, and higher ROI. This case study provides a compelling rationale for project managers at Inceptial Tech to embrace Katalon Studio and transform their testing process for the better.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

        </>
    )
}

export default Katalon