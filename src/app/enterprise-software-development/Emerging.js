"use client"
import Image from 'next/image'
import React from 'react'
import Accordion from 'react-bootstrap/Accordion';



const Emerging = () => {
    return (
        <section className="emerging" id="emerging">
            <div className="container">
                <h2 className="heading">We Use Emerging Tools & Technologies</h2>
                <p className="sub-text">We make use of an extensive array of emerging technologies and tools, spanning diverse
                    domains, to deliver
                    top-notch solutions. These include:
                </p>
                <div className="row">
                    <div className="col-lg-8">
                        <div className="ak_accordion_content">
                            <Accordion defaultActiveKey="0">
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>
                                        <div className="each_accordion">
                                            <Image width={30} height={30} src="/block-chain.png" alt="" />
                                            <h4>Blockchain</h4>
                                        </div>
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        <p>Blockchain technology can bring about various major transformations in enterprise software
                                            development. Dgtalists is a pioneer in Blockchain Solutions development, and makes
                                            blockchain-enabled enterprise solutions that improve business transparency, efficiency and
                                            security. These help ensure Identity Verification, Decentralized Storage, Secure Transactions,
                                            Smart Contracts and Supply Chain Management.</p>

                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="1">
                                    <Accordion.Header>
                                        <div className="each_accordion">
                                            <Image width={30} height={30} src="/internet-things.png" alt="" />
                                            <h4>Internet Of Things</h4>
                                        </div>
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        <p>IoT (Internet of Things) is quickly revolutionizing business-custom operations and
                                            interactions. At
                                            Dgtalists, we leverage the potential of IoT to improve customer experiences, optimize business
                                            processes,
                                            and make operations more efficient. In enterprise software development, we have used IoT for
                                            improved
                                            Customer Experience, improved Asset Tracking and Management, increased Safety and Security, Data
                                            Analytics, Predictive Maintenance and enhanced Supply Chain Management. </p>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="2">
                                    <Accordion.Header>
                                        <div className="each_accordion">
                                            <Image width={30} height={30} src="/data-analytics.png" alt="" />
                                            <h4>Data Analytics</h4>
                                        </div>
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        <p>In Enterprise Software Development, we have years of experience in implementing Data Analytics.
                                            Our team
                                            has used data analytics for Machine Learning, Data Visualization, Business Intelligence, Data
                                            Management,
                                            Real-Time Analytics and Predictive Analytics. We help businesses identify opportunities, make
                                            informed
                                            decisions, and drive growth.</p>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="3">
                                    <Accordion.Header>
                                        <div className="each_accordion">
                                            <Image width={30} height={30} src="/artificial-thing.png" alt="" />
                                            <h4>Artificial Intelligence</h4>
                                        </div>
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        <p>Artificial intelligence (AI) involves developing computer systems that help execute tasks like
                                            language
                                            translation, speech recognition, decision-making, and visual perception, which generally need
                                            human
                                            intelligence. We have helped diverse businesses globally with cutting-edge AI technologies,
                                            ensuring
                                            increased productivity, improved accuracy, and reduced costs. Get help with Predictive
                                            Analytics,
                                            Intelligent Automation, Personalization, Fraud Detection and Natural Language Processing.
                                        </p>
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="ak_tab_img">
                            <Image width={415} height={415} src="/blockchain.jpg" alt="block-chain" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Emerging