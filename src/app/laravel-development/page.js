'use client'
import Image from 'next/image';
import React, { useState } from 'react'
import CallUs from '../custom-software-development/(softwerDevelopment)/CallUs'
import Accordion from 'react-bootstrap/Accordion';
import Modal from '@/component/modal/Modal';

const LaravelDev = () => {
    const [show, setShow] = useState(false);
    
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
    return (
        <>
            <section className="breadcrumb-banner" style={{ backgroundImage: `url(/laravel-bg.jpg)` }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7">
                            <div className="breadcrumb-content">
                                <h1>Laravel Development Services</h1>
                                <p>Dgtalists is a leading Laravel application development company that caters to all your development needs.
                                    We are a highly professional team of developers well aware of utilizing Laravel technology. As a powerful
                                    and reliable cutting-edge technology, Laravel is widely used for its simplicity and versatility. In
                                    addition, it has some amazing features and attributes that improve efficiency and lowers time
                                    requirements. So, if you are interested in implementing laravel technology, in your e-commerce website or
                                    web application, reach out to us.</p>
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className="laravel-banner-img">
                                <Image width={526} height={405} src="/laravel-banner-img.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="laravel-developemnt" id="laravel-developemnt">
                <div className="container">
                    <h3 className="heading">Laravel Development Solutions How Dgtalists helps you?</h3>
                    <p className="sub-heading">Dgtalists is the best Laravel development company with a team of professional Laravel
                        developers who possess the skills required to create functional, structurally sound apps. We develop
                        applications for your business that are user-friendly, highly functional, and easily updated. With us, you do
                        not have to worry about difficulties, as our team uses their practical experience and effort to get the
                        desired results.</p>
                    <div className="laravel-solutions">
                        <div className="row">
                            <div className="col-lg-2 col-6">
                                <div className="laravelBlock">
                                    <Image width={90} height={90} src="/laravel-ic-1.png" alt="" />
                                    <h4>Mobile-Friendly</h4>
                                </div>
                            </div>
                            <div className="col-lg-2 col-6">
                                <div className="laravelBlock">
                                    <Image width={90} height={90} src="/laravel-ic-2.png" alt="" />
                                    <h4>UPGRADATION</h4>
                                </div>
                            </div>
                            <div className="col-lg-2 col-6">
                                <div className="laravelBlock">
                                    <Image width={90} height={90} src="/laravel-ic-3.png" alt="" />
                                    <h4>SECURITY</h4>
                                </div>
                            </div>
                            <div className="col-lg-2 col-6">
                                <div className="laravelBlock">
                                    <Image width={90} height={90} src="/laravel-ic-4.png" alt="" />
                                    <h4>SECURITY</h4>
                                </div>
                            </div>
                            <div className="col-lg-2 col-6">
                                <div className="laravelBlock">
                                    <Image width={90} height={90} src="/laravel-ic-5.png" alt="" />
                                    <h4>SECURITY</h4>
                                </div>
                            </div>
                            <div className="col-lg-2 col-6">
                                <div className="laravelBlock">
                                    <Image width={90} height={90} src="/laravel-ic-6.png" alt="" />
                                    <h4>SECURITY</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="we-offer-are" id="we-offer-are">
                <div className="container">
                    <h2 className="heading">Laravel Development Services</h2>
                    <p className="sub-heading">Laravel is a preferred web application framework for many developers due to its special
                        features that can lower the time required for each project to a significant extent. As one of the top Laravel
                        development agencies at Dgtalists, we engage this open-source PHP web framework to meet your requirements. We
                        feature an array of services, including:</p>
                    <div className="laravelBlockHolder">
                        <div className="row">
                            <div className="col-lg-6 col-md-6">
                                <div className="laravelBlock2">
                                    <h4>
                                        <span>
                                            <Image width={50} height={50} src="/custom-web-1.png" alt="" />
                                        </span>
                                        Custom Web Development
                                    </h4>
                                    <p className="sub-heading">Custom web development is the process of creating a website or web application
                                        that helps businesses and organizations to meet their specific needs. Our Laravel developers work with
                                        popular frameworks that deliver satisfying user experiences to audiences. </p>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                                <div className="laravelBlock2">
                                    <h4>
                                        <span>
                                            <Image width={50} height={50} src="/laravel-sol.png" alt="" />
                                        </span>
                                        LARAVEL ENTERPRISE SOLUTIONS
                                    </h4>
                                    <p className="sub-heading">Our highly talented team of Laravel developers have the prowess of creating
                                        exclusive designs. They also work on incorporating built-in features that deliver a high-quality user
                                        experience. With the help of our customized Laravel web development services, you can get the right
                                        website for your business.</p>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                                <div className="laravelBlock2">
                                    <h4>
                                        <span>
                                            <Image width={50} height={50} src="/laravel-extension.png" alt="" />
                                        </span>
                                        LARAVEL EXTENSION DEVELOPMENT
                                    </h4>
                                    <p className="sub-heading">Laravel is an open-source PHP framework widely used for its extensive range of
                                        features. Our highly talented developers team performs common tasks and creates new features for
                                        Laravel applications tailored to specific business requirements.</p>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                                <div className="laravelBlock2">
                                    <h4>
                                        <span>
                                            <Image width={50} height={50} src="/laravel-multi-vendor.png" alt="" />
                                        </span>
                                        LARAVEL MULTI-VENDOR APPLICATION
                                    </h4>
                                    <p className="sub-heading">Multi-Vendor application is an online marketplace that provides a single platform
                                        for numerous vendors to sell their products or services to customers. Our highly experienced Laravel
                                        developers utilize a combination of web development technologies and tools, such as PHP and Python,
                                        along with pre-built e-commerce platforms like Magento, Shopify, or WooCommerce to build a
                                        multi-vendor application for your business.</p>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                                <div className="laravelBlock2">
                                    <h4>
                                        <span>
                                            <Image width={50} height={50} src="/restful-api.png" alt="" />
                                        </span>
                                        RESTFUL APIS DEVELOPMENT
                                    </h4>
                                    <p className="sub-heading">Our highly talented team of Laravel developers have the prowess of creating
                                        exclusive designs. They also work on incorporating built-in features that deliver a high-quality user
                                        experience. With the help of our customized Laravel web development services, you can get the right
                                        website for your business.</p>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                                <div className="laravelBlock2">
                                    <h4>
                                        <span>
                                            <Image width={50} height={50} src="/api-dev-int.png" alt="" />
                                        </span>
                                        API DEVELOPMENT & INTEGRATION
                                    </h4>
                                    <p className="sub-heading">Add new features and functionality to your existing business software systems by
                                        developing and integrating APIs. Enable the exchange of data between different software systems,
                                        secure access to data and services, and ensure data protection with our professionals.</p>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                                <div className="laravelBlock2">
                                    <h4>
                                        <span>
                                            <Image width={50} height={50} src="/laravel-ecommerce.png" alt="" />
                                        </span>
                                        LARAVEL E-COMMERCE DEVELOPMENT SOLUTIONS
                                    </h4>
                                    <p className="sub-heading">Laravel framework assists businesses and organizations in developing an
                                        E-commerce site that is flexible and easier to maintain. With an exclusive range of built-in features,
                                        it is convenient for users to explore the site.</p>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                                <div className="laravelBlock2">
                                    <h4>
                                        <span>
                                            <Image width={50} height={50} src="/payment-gateway.png" alt="" />
                                        </span>
                                        PAYMENT GATEWAY INTEGRATION
                                    </h4>
                                    <p className="sub-heading">Payment gateway integration boosts your business performance and overall growth.
                                        As an efficient Laravel Development agency, our team utilizes Laravel's built-in features and
                                        third-party tools that deliver a seamless payment processing experience for customers.</p>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                                <div className="laravelBlock2">
                                    <h4>
                                        <span>
                                            <Image width={50} height={50} src="/laravel-crm.png" alt="" />
                                        </span>
                                        LARAVEL CRM DEVELOPMENT
                                    </h4>
                                    <p className="sub-heading">Enhance the customer service and user experience of your business or organization
                                        with Laravel CRM development. Our developers assist in building web applications in the Laravel
                                        framework for rapid page loading, Modular View controller architecture, security concerns, and more.
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                                <div className="laravelBlock2">
                                    <h4>
                                        <span>
                                            <Image width={50} height={50} src="/support&maintainance.png" alt="" />
                                        </span>
                                        SUPPORT & MAINTENANCE
                                    </h4>
                                    <p className="sub-heading">Support and maintenance are essential parts of developing a website or web
                                        application. We have a capable workforce who can constantly support you with scheduling regular
                                        backups, security updates, bug fixes, performance optimization, etc.</p>
                                </div>
                            </div>
                        </div>
                        <a className="cta" onClick={handleShow} data-bs-toggle="modal" data-bs-target=".enquiry_modal_wrap">Hire Laravel Developer</a>
                    </div>
                </div>
            </section>
            <section className="reason-choose" id="reason-choose">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <h2 className="heading">Reasons to choose us</h2>
                            <p className="sub-heading">Dgtalists is a 360-degree Laravel development company. We use this highly creative
                                technology for Laravel web app development. Our talented team of Laravel developers has created visually
                                appealing and highly functional websites and apps using Laravel technology. Our dedication toward each
                                project has been appreciated by all our clients.</p>
                            <p className="sub-heading">So, if you are looking for a development company, this is your chance to avail this
                                modern technology and reach new milestones in your business. Whether you are planning to create a simple
                                website or an e-commerce store for your business or organization using Laravel technology, our team can
                                help you achieve your objectives.</p>
                        </div>
                        <div className="col-lg-6">
                            <Image width={636} height={451} src="/laravel-choos-us-img.png" alt="" />
                        </div>
                    </div>
                </div>
            </section>
            <CallUs data1={'Looking To Develop a Laravel Developers?'} data2={'Please get in touch'} data3={'With advanced tech expertise, we can engineer industry-standard web solutions for your business. If you want to hire Laravel developers stack developers, feel free to contact us.'} />
            <section className="futuristic" id="futuristic">
                <div className="container">
                    <h2 className="heading">Futuristic laravel Development</h2>
                    <span>Advanced Features We Integrate</span>
                    <p className="sub-heading">As with any technology, the future of Laravel development will likely continue to evolve
                        and improve in a number of ways. Here are some potential future developments to keep an eye on.</p>
                    <Image width={850} height={451} src="/futuristic-laraveldevelopment-img.png" alt="" />
                </div>
            </section>
            <section className="faq" id="faq">
                <div className="container">
                    <h3 className="heading">Laravel Development - F.A.Q</h3>
                    <p className="sub-heading">Before you engage our Laravel Development services, clear all your doubts We have
                        compiled and answered a few frequently asked questions. After going through the following question-answers, if
                        you still have any query, feel free to ask our experts.</p>
                    <div className="row">
                        <div className="col-lg-6">
                            <div id="faqlist">
                                <Accordion>
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header>
                                            <span className="num">1.</span>
                                            What is Laravel?
                                        </Accordion.Header>
                                        <Accordion.Body>
                                            Laravel is a free, open-source PHP web application framework that has an extensive range of features
                                            preferred by developers. It offers a modular packaging system, an expressive syntax, and a selection
                                            of tools for testing and managing databases.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="1">
                                        <Accordion.Header>
                                            <span class="num">2.</span>
                                            Why should you use Laravel?
                                        </Accordion.Header>
                                        <Accordion.Body>
                                            Laravel has various advantages, including simple database migration, authentication, routing, and
                                            template engines. Additionally, it provides enhanced security, performance optimisation, and code
                                            reuse.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="2">
                                        <Accordion.Header>
                                            <span className="num">3.</span>
                                            What kinds of apps may be created with Laravel?
                                        </Accordion.Header>
                                        <Accordion.Body>
                                            You can build a wide variety of applications, including e-commerce websites, content management
                                            systems, social networking sites, and more.
                                        </Accordion.Body>
                                    </Accordion.Item>

                                </Accordion>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div id="faqlist">

                                <Accordion>
                                    <Accordion.Item eventKey="3">
                                        <Accordion.Header>
                                            <span className="num">4.</span>
                                            What is the cost of Laravel Development Services?
                                        </Accordion.Header>
                                        <Accordion.Body>
                                            The cost of Laravel development services may differ based on several factors. If you have any
                                            queries related to the expenses, please reach out to us.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="4">
                                        <Accordion.Header>
                                            <span className="num">5.</span>
                                            Tempus quam pellentesque nec nam aliquam sem et tortor consequat?
                                        </Accordion.Header>
                                        <Accordion.Body>
                                            Molestie a iaculis at erat pellentesque adipiscing commodo. Dignissim suspendisse in est ante in.
                                            Nunc vel risus commodo viverra maecenas accumsan. Sit amet nisl suscipit adipiscing bibendum est.
                                            Purus gravida quis blandit turpis cursus in
                                        </Accordion.Body>
                                    </Accordion.Item>

                                </Accordion>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Modal show={show} onHide={handleClose}/>

        </>
    )
}

export default LaravelDev