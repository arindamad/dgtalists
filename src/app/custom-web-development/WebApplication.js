"use client"
import Image from 'next/image'
import React from 'react'
import Accordion from 'react-bootstrap/Accordion';


const WebApplication = () => {
    return (
        <section className="emerging emerging-1" id="emerging">
            <div className="container">
                <h2 className="heading">Few of our Customer Web Application </h2>
                <div className="emerging-spcl">
                    <div className="row">
                        <div className="col-lg-8">

                            <div className="ak_accordion_content">
                                <Accordion defaultActiveKey="0">
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header>
                                            <div className="each_accordion">
                                                <Image width={30} height={30} src="/ecommerce.png" alt="" />
                                                <h4>Ecommerce</h4>
                                            </div>
                                        </Accordion.Header>
                                        <Accordion.Body>
                                            <p>Our experts in e-commerce development leverage the power of Magento, Shopify and custom
                                                frameworks, for designing, development and optimization of your e-commerce store according to
                                                your specific needs.</p>

                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="1">
                                        <Accordion.Header>
                                            <div className="each_accordion">
                                                <Image width={30} height={30} src="/system.png" alt="" />
                                                <h4>CMS</h4>
                                            </div>
                                        </Accordion.Header>
                                        <Accordion.Body>
                                            <p>You can get easy-to-use and feature-rich custom CMS solutions that make website management
                                                more effective and lets you customize the design and content whenever you wish.</p>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="2">
                                        <Accordion.Header>
                                            <div className="each_accordion">
                                                <Image height={30} width={30} src="/portal.png" alt="" />
                                                <h4>Portal</h4>
                                            </div>
                                        </Accordion.Header>
                                        <Accordion.Body>
                                            <p>Our team has expertise in developing all kinds of Internet and Web portals including B2B
                                                portals, B2C portals, micro-sites, e-commerce portals etc with user-friendly interfaces that
                                                satisfy all usability parameters.</p>
                                        </Accordion.Body>
                                    </Accordion.Item>

                                </Accordion>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="ak_tab_img">
                                <Image width={415} height={277} src="/web-development.jpg" alt="block-chain" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WebApplication