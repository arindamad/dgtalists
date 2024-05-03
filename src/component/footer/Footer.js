import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
    return (
        <>
            <footer id="footer" className="footer">

                <div className="foooter-top">

                    <div className="container">

                        <div className="row">

                            <div className="col-lg-3 col-md-6 footer-contact">
                                <a href="/">
                                    <Image src="/footer-logo.png" width={118} height={101} alt=""/></a>

                                <p>We are proud to have been recognized by a variety of key industry organizations for our achievements in
                                    Digital Marketing, Design, Development and Branding.

                                </p>

                                <p className="para-1"><span>Opening Hours : </span> Mon - Sat 10:00am to 6:00pm</p>

                            </div>

                            <div className="col-lg-3 col-md-6 footer-links">

                                <h4>Services</h4>

                                <ul>

                                    <li><Link href="/custom-software-development">Custom Software Development</Link></li>

                                    <li><Link href="/enterprise-software-development">Enterprise Software Development</Link></li>

                                    <li><Link href="/custom-web-development">Custom Web Development</Link></li>

                                    <li><Link href="/ai-software-development">AI Software Development</Link></li>

                                    <li><Link href="/iot">Internet of Things (IOT)</Link></li>

                                    <li><Link href="/mobile-app-development">Mobile App Development</Link></li>

                                    <li><Link href="/test-engineering">Quality Assurance - Test Engineering</Link></li>

                                    <li><Link href="/digital-marketing">Digital Marketing</Link></li>

                                </ul>

                            </div>

                            <div className="col-lg-3 col-md-6 footer-links">

                                <h4>Quick Links</h4>

                                <ul>

                                    <li><Link href="!#">AI Based Document Automation Platform</Link></li>
                                    <li><Link href="/iot-based-logistic">IOT Based Logistic Solution</Link></li>
                                    <li><Link href="!#">B2B Marketplace</Link></li>
                                    <li><Link href="/cab-booking-case-study">Cab Booking Solution</Link></li>

                                    <li><Link href="/case-study">Case Studies</Link></li>

                                    <li><Link href="/about-us">About Us</Link></li>

                                    <li><Link href="/contact-us">Contact Us</Link></li>

                                    <li><Link href="/blog">Blogs</Link></li>

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