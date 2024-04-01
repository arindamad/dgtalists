import React from 'react'
import Image from 'next/image'
import Style from "./Footer.module.css"

const Footer = () => {
    return (
        <>
            <footer id="footer" className={Style.footer}>

                <div className="foooter-top">

                    <div className="container">

                        <div className="row">

                            <div className="col-lg-3 col-md-6 footer-contact">
                                <a href="index.html">
                                    <Image src="/footer-logo.png" width={118} height={101} alt=""/></a>

                                <p>We are proud to have been recognized by a variety of key industry organizations for our achievements in
                                    Digital Marketing, Design, Development and Branding.

                                </p>

                                <p className="para-1"><span>Opening Hours : </span> Mon - Sat 10:00am to 6:00pm</p>

                            </div>

                            <div className="col-lg-3 col-md-6 footer-links">

                                <h4>Services</h4>

                                <ul>

                                    <li><a href="custom-software-development.html">Custom Software Development</a></li>

                                    <li><a href="enterprise-software-development.html">Enterprise Software Development</a></li>

                                    <li><a href="custom-web-development.html">Custom Web Development</a></li>

                                    <li><a href="ai-software-development.html">AI Software Development</a></li>

                                    <li><a href="iot.html">Internet of Things (IOT)</a></li>

                                    <li><a href="mobile-app-development.html">Mobile App Development</a></li>

                                    <li><a href="test-engineering.html">Quality Assurance - Test Engineering</a></li>

                                    <li><a href="digital-marketing.html">Digital Marketing</a></li>

                                </ul>

                            </div>

                            <div className="col-lg-3 col-md-6 footer-links">

                                <h4>Quick Links</h4>

                                <ul>

                                    <li><a href="javascript:;">AI Based Document Automation Platform</a></li>
                                    <li><a href="iot-based-logistic.html">IOT Based Logistic Solution</a></li>
                                    <li><a href="javascript:;">B2B Marketplace</a></li>
                                    <li><a href="cab-booking-case-study.html">Cab Booking Solution</a></li>

                                    <li><a href="case-study.html">Case Studies</a></li>

                                    <li><a href="about-us.html">About Us</a></li>

                                    <li><a href="contact-us.html">Contact Us</a></li>

                                    <li><a href="blog.html">Blogs</a></li>

                                </ul>

                            </div>

                            <div className="col-lg-3 col-md-6 footer-links">

                                <h4>Office Address</h4>

                                <span>United Kingdom</span>

                                <p>Liverpool Science Park, Innovation Centre One, 131 Mount Pleasant, Liverpool, L3 5TF, England</p>

                                <p><span>Phone : </span> +44 78802 27829</p>

                                <span>India</span>

                                <p>Stesalit Towers, 3rd floor, Block GP, Sector V, Salt Lake Electronics Complex, Kolkata-700091,

                                    West Bengal</p>

                                <p><span>Phone : </span>+91 9748791820 / +91 9051402028</p>

                            </div>

                        </div>

                    </div>

                </div>

                <div className="footer-bottom">

                    <div className="container">
                        <div className="copyright_credits">
                            <div className="copyright">

                                © <strong>2024</strong> Dgtalists . All Rights Reserved.

                            </div>

                            <div className="credits">

                                <Image src="/payment-method 1.png" alt="" width={451} height={43} />

                            </div>
                        </div>
                    </div>
                </div>
            </footer>


        </>
    )
}

export default Footer