'use client'
import React from 'react'
import Image from 'next/image'
import Accordion from 'react-bootstrap/Accordion';

const IotCaseStudy = () => {
    return (
        <>
            <section className="breadcrumb-banner ai-Breadcrumb" style={{ backgroundImage: `url(/ai-software-development-bg.jpg)` }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7">
                            <div className="breadcrumb-content">
                                <h1>IoT Solution</h1>
                                <p>
                                    <h4> Transforming Needle Breakage</h4>
                                </p>
                                <p>We provide high-quality, cost-effective, reliable, full-cycle bespoke software development that matches
                                    your specific needs, budget, and timeframe. Increase your competitive advantage with a custom solution.
                                </p>

                                <a className="cta cta-1" href="#">Hire A Developer</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <main id="main">

                <section className="serviceInnerCaseStudy-sec">
                    <div className="container">
                        <div className="caseTopHeading">
                            <h3>Detection in a Large Garment Company</h3>
                            <h4> <span>Overcoming Needle Breakage with IoT</span> </h4>
                        </div>
                    </div>
                </section>
                <section className="project_overview">
                    <div className="container">
                        <h4 className="case_single__title">Project Overview</h4>
                        <p>In the dynamic garment industry, operational efficiency is key to maintaining competitiveness. A large
                            garment company faced recurrent challenges with needle breakage in their sewing machines, leading to
                            significant production delays and increased costs. This case study examines how DGitalist’s innovative IoT
                            solution revolutionized their approach to this persistent problem</p>
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="each_overview_img">
                                    <Image width={636} height={423} src="/garment-1.jpg" alt="garment" />
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="each_overview_img">
                                    <Image width={636} height={423} src="/garment-2.jpg" alt="garment" />
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

                                    <Accordion>
                                        <Accordion.Item eventKey="0">
                                            <Accordion.Header>
                                                <h5 className="mb-0">
                                                    Frequent Needle Breakages
                                                </h5>
                                            </Accordion.Header>
                                            <Accordion.Body>
                                                <p>The company's sewing machines experienced frequent needle
                                                    breakages, causing significant downtime.</p>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="1">
                                            <Accordion.Header>
                                                <h5 className="mb-0">
                                                    Production Delays
                                                </h5>
                                            </Accordion.Header>
                                            <Accordion.Body>
                                                <p>Each instance of needle breakage led to halts in production lines, affecting overall output.
                                                </p>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="2">
                                            <Accordion.Header>
                                                <h5 className='mb-0'>
                                                    Increased Operational Costs
                                                </h5>
                                            </Accordion.Header>
                                            <Accordion.Body>
                                                <p>Constant monitoring and manual interventions to address
                                                    needle breakages resulted in higher labor costs.</p>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="3">
                                            <Accordion.Header>
                                                <h5 className='mb-3'>
                                                    Quality Concerns
                                                </h5>
                                            </Accordion.Header>
                                            <Accordion.Body>
                                                <p>Broken needles often went unnoticed until later stages, risking the quality of the finished
                                                    products and leading to waste.</p>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                    </Accordion>

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
                <section className="solution_sec" style={{ backgroundImage: `url(/solution_bg.jpg)` }}>
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-8">
                                <div className="faq-wrapper">

                                    <div className="section-elements-title mb-30">
                                        <h4 className="case_single__title">Solutions</h4>
                                    </div>

                                    <div id="faq-toggles">
                                        <Accordion>
                                            <Accordion.Item eventKey="0">
                                                <Accordion.Header>
                                                    <h5 className="mb-0">
                                                        Advanced Detection System
                                                    </h5>
                                                </Accordion.Header>
                                                <Accordion.Body>
                                                    <p>A system integrating a fine laser unit with an Arduino
                                                        microcontroller
                                                        was installed in the sewing machines. This setup was designed to detect needle breakages
                                                        instantly. </p>
                                                </Accordion.Body>
                                            </Accordion.Item>
                                            <Accordion.Item eventKey="1">
                                                <Accordion.Header>
                                                    <h5 className='mb-0'>
                                                        Automated Machine Halting
                                                    </h5>
                                                </Accordion.Header>
                                                <Accordion.Body>
                                                    <p>Upon detecting a broken needle, the system automatically
                                                        halted the sewing machine, preventing further damage and product quality issues.</p>
                                                </Accordion.Body>
                                            </Accordion.Item>
                                            <Accordion.Item eventKey="2">
                                                <Accordion.Header>
                                                    <h5 className='mb-0'>
                                                        Data-Driven Monitoring
                                                    </h5>
                                                </Accordion.Header>
                                                <Accordion.Body>
                                                    <p>The solution included a monitoring system that provided
                                                        real-time data on machine performance and needle breakage incidents, allowing for better
                                                        management and quicker responses. </p>
                                                </Accordion.Body>
                                            </Accordion.Item>
                                        </Accordion>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="automation iot_benifit" id="automation">
                    <div className="container">
                        <div className="section-elements-title mb-30">
                            <h4 className="case_single__title">Benifits</h4>
                        </div>
                        <p className="sub-heading">The implementation of DGitalist's solution brought significant benefits to the garment company </p>
                        <div className="row">
                            <div className="col-lg-3">
                                <div className="card">
                                    <div className="card-img">
                                        <Image width={60} height={60} src="/reduce-time.png" alt="" />
                                    </div>
                                    <small>01</small>
                                    <div className="card-content">
                                        <h6>Reduced Downtime</h6>
                                        <p className="sub-heading">The automated detection and halting system significantly decreased machine idle
                                            time. Post-implementation data showed a 40% reduction in downtime related to needle breakage.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="card">
                                    <div className="card-img">
                                        <Image width={60} height={60} src="/productivity.png" alt="" />
                                    </div>
                                    <small>02</small>
                                    <div className="card-content">
                                        <h6>Increased Production Efficiency</h6>
                                        <p className="sub-heading">The decrease in machine stoppages led to a smoother and more efficient production
                                            process.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="card">
                                    <div className="card-img">
                                        <Image width={60} height={60} src="/money.png" alt="" />
                                    </div>
                                    <small>03</small>
                                    <div className="card-content">
                                        <h6>Cost Savings</h6>
                                        <p className="sub-heading">The reduced need for manual monitoring and intervention resulted in lower labour
                                            costs. The company saw a return on investment within four months of implementing the solution.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="card">
                                    <div className="card-img">
                                        <Image width={60} height={60} src="/favorites.png" alt="" />
                                    </div>
                                    <small>04</small>
                                    <div className="card-content">
                                        <h6>Enhanced Product Quality</h6>
                                        <p className="sub-heading">The timely detection of needle breakages ensured that fewer defective products
                                            reached later stages of production, enhancing overall product quality. </p>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                </section>
                <div className="sol-sec-1">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="conclusion">
                                    <h2>Conclusion</h2>
                                    <p>DGitalist’s IoT solution effectively addressed the needle breakage problem in a large garment
                                        company, leading to improved efficiency, reduced costs, and enhanced product quality. This case
                                        study demonstrates the potential of IoT technology in resolving operational challenges in the
                                        garment industry and sets a precedent for other companies facing similar issues</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default IotCaseStudy