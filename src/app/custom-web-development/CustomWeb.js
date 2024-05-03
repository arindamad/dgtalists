import Image from 'next/image'
import React from 'react'

const CustomWeb = () => {
    return (
        <section className="custom-web" id="custom-web">
            <div className="container">
                <h3 className="heading">We Assist Businesses of All Sizes!</h3>
                <p className="sub-heading">We have a global presence! Our customized web development services are one of the driving
                    forces for thousands of startups and small and mid-sized businesses all over the world.</p>
                <p className="sub-heading">Even some of the top-notch Fortune 500 businesses are drawing benefits from the quality
                    of our assistance. Oracle, DreamzTech Solutions, AST, pwc and Terra Motors are some of our most esteemed
                    clients. We have worked for Supergas, Diyaonline and Coveti, offering top-of-the-line customer web
                    applications. </p>
                <p className="sub-heading">Our custom web development services have won multiple awards in the recent years, making
                    us a top name in the business today. You can get: </p>
                <div className="custom-web-spcl">
                    <div className="row">
                        <div className="col-lg-3">
                            <div className="custom-web-card">
                                <div className="custom-web-item">
                                    <div className="custom-web-overlay"></div>
                                    <div className="custom-header">
                                        <Image width={40} height={40} src="/custom-web-dev-1.png" alt=""/>
                                            <h5>
                                                eCommerce Website Design
                                            </h5>
                                    </div>
                                    <p>We can provide you with the most well-designed E-Commerce websites and online stores as per your
                                        requirements and up to the latest designing standards in the industry, at the most affordable rates.
                                        Provide your shoppers with one of the best online retail experiences!</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="custom-web-card">
                                <div className="custom-web-item">
                                    <div className="custom-web-overlay"></div>
                                    <div className="custom-header">
                                        <Image width={40} height={40} src="/custom-web-dev-2.png" alt=""/>
                                            <h5>
                                                Small Business Website
                                            </h5>
                                    </div>
                                    <p>A good website is one of the key assets of any small business, and that is what we can easily
                                        ensure for your enterprise. Get the most cutting-edge website for your small enterprise, at rates
                                        that match your budget.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="custom-web-card">
                                <div className="custom-web-item">
                                    <div className="custom-web-overlay"></div>
                                    <div className="custom-header">
                                        <Image width={40} height={40} src="/custom-web-dev-3.png" alt=""/>
                                            <h5>
                                                Web Application Development
                                            </h5>
                                    </div>
                                    <p>Dgtalists boasts of one of the most skilled and efficient teams, having years of experience in
                                        developing user-friendly web applications at the most competitive rates, as per client
                                        specifications.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="custom-web-card">
                                <div className="custom-web-item">
                                    <div className="custom-web-overlay"></div>
                                    <div className="custom-header">
                                        <Image width={40} height={40} src="/custom-web-dev-4.png" alt=""/>
                                            <h5>
                                                Corporate Website Design
                                            </h5>
                                    </div>
                                    <p>When you entrust us with designing your corporate website, you can rest assured about getting one
                                        of the most unique websites to reflect your corporate values, theme, vision, products and services.
                                        The quality of our work matches the best in className, despite our affordability.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CustomWeb