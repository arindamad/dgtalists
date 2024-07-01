"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import Accordion from 'react-bootstrap/Accordion';
import Modal from '@/component/modal/Modal';

const Emerging = () => {
    const [show, setShow] = useState(false);

    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);
    return (
        <section className="emerging emerging-1" id="emerging">
            <div className="container">
                <h2 className="heading">Our expertise in <br /> mobile app development technologies</h2>
                <p className="sub-heading">As a top mobile app development company, we are adept at ensuring top-notch development
                    results. Our technical expertise covers a range of languages, design software and development tools. We are
                    experts in various mobile app development technologies, including but not limited to:</p>
                <div className="emerging-spcl">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="ak_accordion_content">
                                <Accordion defaultActiveKey="0">
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header>
                                            <div className="each_accordion">
                                                <Image width={30} height={30} src="/phone.png" alt="" />
                                                <h4>Android App Development</h4>
                                            </div>
                                        </Accordion.Header>
                                        <Accordion.Body>
                                            <p>At DGtalists, we take pride in being a one-stop Android App Development service provider. Our developers can provide you with end-to-end services. You can expect:</p>
                                            <div className="gray-block">
                                                <ul>
                                                    <li>Enterprise class Android Apps</li>
                                                    <li>Consumer Ready Android E-Commerce Apps</li>
                                                    <li>Android Game Development</li>
                                                    <li>Android Biometric App Development</li>
                                                    <li>Android App Integration with Mobile Pay</li>
                                                </ul>
                                            </div>
                                            <a className="cta" onClick={handleShow} data-bs-toggle="modal" data-bs-target=".enquiry_modal_wrap">Hire Flutter Developer</a>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="1">
                                        <Accordion.Header>
                                            <div className="each_accordion">
                                                <Image width={30} height={30} src="/ios-small.png" alt="" />
                                                <h4>iOS App Development</h4>
                                            </div>
                                        </Accordion.Header>
                                        <Accordion.Body>
                                            <p>Our experienced iOS app development team assures designing, developing and deploying the perfect mobile application as per your requirement. We have built latest iOS app solutions like gaming app, social networking apps, mCommerce, e-learning , real estate apps etc. using latest technologies :</p>
                                            <div className="gray-block">
                                                <ul>
                                                    <li>Enterprise class Android Apps</li>
                                                    <li>Consumer Ready Android E-Commerce Apps</li>
                                                    <li>Android Game Development</li>
                                                    <li>Android Biometric App Development</li>
                                                    <li>Android App Integration with Mobile Pay</li>
                                                </ul>
                                            </div>
                                            <a className="cta" onClick={handleShow} data-bs-toggle="modal" data-bs-target=".enquiry_modal_wrap">Hire Flutter Developer</a>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="2">
                                        <Accordion.Header>
                                            <div className="each_accordion">
                                                <Image width={30} height={30} src="/react-native-small.png" alt="" />
                                                <h4>React Native App Development</h4>
                                            </div>
                                        </Accordion.Header>
                                        <Accordion.Body>
                                            <p>We create robust, intuitive, feature-rich android mobile apps using latest technologies. From ideation to development and launching - we provide our clients end-to-end Android App Development Services and our android app developers are specialized in</p>
                                            <div className="gray-block">
                                                <ul>
                                                    <li>Enterprise class Android Apps</li>
                                                    <li>Consumer Ready Android E-Commerce Apps</li>
                                                    <li>Android Game Development</li>
                                                    <li>Android Biometric App Development</li>
                                                    <li>Android App Integration with Mobile Pay</li>
                                                </ul>
                                            </div>
                                            <a className="cta" onClick={handleShow} data-bs-toggle="modal" data-bs-target=".enquiry_modal_wrap">Hire Flutter Developer</a>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="3">
                                        <Accordion.Header>
                                            <div className="each_accordion">
                                                <Image width={30} height={30} src="/flutter-small.png" alt="" />
                                                <h4>Flutter App Development</h4>
                                            </div>
                                        </Accordion.Header>
                                        <Accordion.Body>
                                            <p>Our team has expertise in developing all kinds of Internet and Web portals including B2B
                                                portals, B2C portals, micro-sites, e-commerce portals etc with user-friendly interfaces that
                                                satisfy all usability parameters.</p>
                                            <div className="gray-block">
                                                <ul>
                                                    <li>Enterprise class Android Apps</li>
                                                    <li>Consumer Ready Android E-Commerce Apps</li>
                                                    <li>Android Game Development</li>
                                                    <li>Android Biometric App Development</li>
                                                    <li>Android App Integration with Mobile Pay</li>
                                                </ul>
                                            </div>
                                            <a className="cta" onClick={handleShow} data-bs-toggle="modal" data-bs-target=".enquiry_modal_wrap">Hire Flutter Developer</a>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="ak_tab_img">
                                <Image width={415} height={277} src="/mobile-app-developer.jpg" alt="block-chain" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Modal show={show} onHide={handleClose} />

        </section>
    )
}

export default Emerging