'use client'
import React, { useState } from 'react'
import Image from 'next/image';
import CallUs from '../custom-software-development/(softwerDevelopment)/CallUs';
import Accordion from 'react-bootstrap/Accordion';
import Modal from '@/component/modal/Modal';

const CiDev = () => {
    const [show, setShow] = useState(false);
    
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
    return (
        <>
            <section className="breadcrumb-banner" style={{ backgroundImage: `url(/ci-dev-bg.jpg)` }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7">
                            <div className="breadcrumb-content">
                                <h1>CI Development Services</h1>
                                <p>CI (Continuous Integration) development is an automation process of developing software that focuses on
                                    the frequent integration of code changes into a shared code repository. Dgtalists is the best CI
                                    development firm featuring various services that improve code quality, fasten release cycles, and reduce
                                    development costs. Hire our developers' team to build web applications by implementing CI services.</p>
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className="laravel-banner-img">
                                <Image width={526} height={362} src="/technology-ci-banner-right.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <main id="main">

                <section className="laravel-developemnt" id="laravel-developemnt">
                    <div className="container">
                        <h3 className="heading">CI Development Solutions
                            How Dgtalists helps you?</h3>
                        <p className="sub-heading">At Dgtalists, our team comprises highly skilled and professional developers who
                            specialize in Continuous Integration (CI) development. We focus on delivering highly functional applications
                            that assist in identifying bugs early, improving collaboration, and solving problems at a fast pace. With our
                            practical experience and commitment, we guarantee that our development process will yield the desired results
                            for your business.</p>
                        <div className="laravel-solutions">
                            <div className="row">
                                <div className="col-lg-2 col-6">
                                    <div className="laravelBlock">
                                        <Image width={90} height={90} src="/lightweight.png" alt="" />
                                        <h4>LIGHT WEIGHT</h4>
                                    </div>
                                </div>
                                <div className="col-lg-2 col-6">
                                    <div className="laravelBlock">
                                        <Image width={90} height={90} src="/architecture.png" alt="" />
                                        <h4>MVC ARCHITECTURE</h4>
                                    </div>
                                </div>
                                <div className="col-lg-2 col-6">
                                    <div className="laravelBlock">
                                        <Image width={90} height={90} src="/high-performance.png" alt="" />
                                        <h4>HIGH PERFORMANCE</h4>
                                    </div>
                                </div>
                                <div className="col-lg-2 col-6">
                                    <div className="laravelBlock">
                                        <Image width={90} height={90} src="/entensive-library.png" alt="" />
                                        <h4>EXTENSIVE LIBRARY</h4>
                                    </div>
                                </div>
                                <div className="col-lg-2 col-6">
                                    <div className="laravelBlock">
                                        <Image width={90} height={90} src="/cross-platform.png" alt="" />
                                        <h4>CROSS-PLATFORM COMPATIBILITY</h4>
                                    </div>
                                </div>
                                <div className="col-lg-2 col-6">
                                    <div className="laravelBlock">
                                        <Image width={90} height={90} src="/security-1.png" alt="" />
                                        <h4>SECURITY</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="we-offer-are" id="we-offer-are">
                    <div className="container">
                        <h2 className="heading">CI Development Services</h2>
                        <span>We Offer Are</span>
                        <p className="sub-heading">Dgtalists' team of highly skilled and competent developers specializes in Continuous
                            Integration (CI) development. We focus on delivering top-notch applications that provide businesses and
                            organizations with more competitive benefits than others in the same industry. With our deep practical
                            experience and unwavering commitment, our team guarantees that our development process will always yield the
                            desired results for your business. Our CI development services include:</p>
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
                                        <p className="sub-heading">CI development is the key to creating custom websites and applications that meet
                                            your specific business needs. Our team of skilled CI developers uses popular frameworks to deliver
                                            exceptional user experiences that delight audiences</p>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6">
                                    <div className="laravelBlock2">
                                        <h4>
                                            <span>
                                                <Image width={50} height={50} src="/laravel-sol.png" alt="" />
                                            </span>
                                            CI EXTENSION DEVELOPMENT
                                        </h4>
                                        <p className="sub-heading">When it comes to CI extension development, our talented team performs common
                                            tasks and creates new features tailored to your specific requirements. With the exclusive features of
                                            CI extension development, we assist businesses and organizations to customize their web applications
                                            as per their requirements.</p>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6">
                                    <div className="laravelBlock2">
                                        <h4>
                                            <span>
                                                <Image width={50} height={50} src="/laravel-extension.png" alt="" />
                                            </span>
                                            MULTI-VENDOR APPLICATION
                                        </h4>
                                        <p className="sub-heading">Feature a single platform for numerous vendors to sell their products or services
                                            to customers with Multi-vendor Application. We assist in creating a multi-vendor application for
                                            businesses and organizations with cutting-edge technologies.</p>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6">
                                    <div className="laravelBlock2">
                                        <h4>
                                            <span>
                                                <Image width={50} height={50} src="/laravel-multi-vendor.png" alt="" />
                                            </span>
                                            API DEVELOPMENT & INTEGRATION
                                        </h4>
                                        <p className="sub-heading">Create and integrate APIs to expand the capabilities of your current corporate
                                            software platforms. Enable data transmission between various software programs, safeguard users'
                                            access to information and services, and guarantee data security with the help of our experts.</p>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6">
                                    <div className="laravelBlock2">
                                        <h4>
                                            <span>
                                                <Image width={50} height={50} src="/restful-api.png" alt="" />
                                            </span>
                                            CI E-COMMERCE DEVELOPMENT SOLUTIONS
                                        </h4>
                                        <p className="sub-heading">CI framework helps businesses and organizations create flexible,
                                            easier-to-maintain e-commerce sites. Users can easily navigate the website thanks to its easy array of
                                            built-in features.</p>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6">
                                    <div className="laravelBlock2">
                                        <h4>
                                            <span>
                                                <Image width={50} height={50} src="/api-dev-int.png" alt="" />
                                            </span>
                                            PAYMENT GATEWAY INTEGRATION
                                        </h4>
                                        <p className="sub-heading">Payment gateway integration assists in improving performance and overall growth.
                                            As a proficient CI development company, our staff makes use of continuous integration built-in
                                            capabilities and outside technologies to provide consumers with a frictionless payment processing
                                            experience.</p>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6">
                                    <div className="laravelBlock2">
                                        <h4>
                                            <span>
                                                <Image width={50} height={50} src="/laravel-ecommerce.png" alt="" />
                                            </span>
                                            CI CRM DEVELOPMENT
                                        </h4>
                                        <p className="sub-heading">With CI CRM development, you can improve user experience and customer service for
                                            your business or organization. Our professionals aid in the development of web applications using CI
                                            framework for speedy page loading, modular view controller architecture, security concerns, and more.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6">
                                    <div className="laravelBlock2">
                                        <h4>
                                            <span>
                                                <Image width={50} height={50} src="/payment-gateway.png" alt="" />
                                            </span>
                                            SUPPORT AND MAINTENANCE
                                        </h4>
                                        <p className="sub-heading">Support and maintenance are essential parts of developing a website or web
                                            application. We have a capable workforce who can constantly support you with scheduling regular
                                            backups, security updates, bug fixes, performance optimization, etc.</p>
                                    </div>
                                </div>
                            </div>
                            <a className="cta" onClick={handleShow} data-bs-toggle="modal" data-bs-target=".enquiry_modal_wrap">Hire CI Developer</a>
                        </div>
                    </div>
                </section>

                <section className="reason-choose" id="reason-choose">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <h2 className="heading">Reasons to choose us</h2>
                                <p className="sub-heading">At Dgtalists, we pride ourselves on being a full-service CI development company,
                                    providing comprehensive solutions for all your development needs. We make use of the capabilities of this
                                    incredibly inventive technology to develop websites and applications that look attractive and are also
                                    functional. Our team of skilled Laravel developers is passionate about every project they take on, and our
                                    dedication has earned us appreciation and trust from our clients.</p>
                                <p className="sub-heading">So, if you are searching for a development company that can help take your business
                                    to the next level, look no further. Our team has the expertise to create everything from simple websites
                                    to complex e-commerce platforms using the CI framework. With our guidance and support, you can achieve
                                    your objectives and elevate your brand to new heights.</p>
                            </div>
                            <div className="col-lg-6">
                                <Image width={636} height={451} src="/laravel-choos-us-img.png" alt="" />
                            </div>
                        </div>
                    </div>
                </section>
                <CallUs data1={'Looking for CI Developers ?'} data2={'Please get in touch'} data3={'With advanced tech expertise, we can engineer industry-standard web solutions for your business. If you want to CI Laravel developers, feel free to contact us.'} />

                <section className="futuristic" id="futuristic">
                    <div className="container">
                        <h2 className="heading">Futuristic CI Development</h2>
                        <span>Advanced Features We Integrate</span>
                        <p className="sub-heading">At Dgtalists, we provide professional CI Implementation and Management Services for you.
                        </p>
                        <Image width={850} height={451} src="/futuristic-ci-development-img.png" alt="" />
                    </div>
                </section>

                <section className="faq" id="faq">
                    <div className="container">
                        <h3 className="heading">CI Development - F.A.Q</h3>
                        <p className="sub-heading">Before you engage our CI Development services, clear all your doubts We have compiled and
                            answered a few frequently asked questions. After going through the following question-answers, if you still
                            have any query, feel free to ask our experts.</p>
                        <div className="row">
                            <div className="col-lg-6">
                                <div id="faqlist" data-aos="fade-up"
                                    data-aos-delay="100">
                                    <Accordion>
                                        <Accordion.Item eventKey="0">
                                            <Accordion.Header>
                                                <span className="num">1.</span>
                                                What is the cost of CI development services?
                                            </Accordion.Header>
                                            <Accordion.Body>
                                                The cost of CI development services may differ based on several factors. If you have any queries
                                                related to the expenses, please reach out to us.
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="1">
                                            <Accordion.Header>
                                                <span className="num">2.</span>
                                                How is CI different from Continuous Delivery (CD)?
                                            </Accordion.Header>
                                            <Accordion.Body>
                                                Continuous Delivery is a software development process in which code updates are automatically
                                                created, tested, and sent to production. While CI focuses on integrating code changes into a central
                                                repository, CD advances the process by automating the deployment of code changes to production.
                                            </Accordion.Body>
                                        </Accordion.Item>
                                    </Accordion>

                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div id="faqlist">
                                    <Accordion>
                                        <Accordion.Item eventKey="2">
                                            <Accordion.Header>
                                                <span className="num">3.</span>
                                                What should I opt for CI development services?
                                            </Accordion.Header>
                                            <Accordion.Body>
                                                CI development services have several advantages, including faster release cycles, improved code
                                                quality, reduced development costs, and better collaboration between team members.
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="3">
                                            <Accordion.Header>
                                                <span className="num">4.</span>
                                                What is Continuous Integration (CI)?
                                            </Accordion.Header>
                                            <Accordion.Body>
                                                Continuous Integration is a software development process in which developers routinely integrate
                                                their code changes into a central repository, which is then automatically built, tested, and
                                                deployed.
                                            </Accordion.Body>
                                        </Accordion.Item>
                                    </Accordion>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

            </main>
            <Modal show={show} onHide={handleClose}/>
        </>
    )
}

export default CiDev