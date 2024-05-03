import React from 'react'
import { LuPenSquare } from "react-icons/lu";
import { CiLocationOn } from "react-icons/ci";
import { IoCallOutline } from "react-icons/io5";
import { FiUser } from "react-icons/fi";
import { BsEnvelope } from "react-icons/bs";
import { FiLink } from "react-icons/fi";
import { BsPen } from "react-icons/bs";

const Cnt = () => {
    return (
        <>
            <section className="breadcrumb-banner" style={{ backgroundImage: `url(/quality-assurance-bg.png)` }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="breadcrumb-content">
                                <h1>Contact us</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



            <main id="main">
                <section className="contact-page" id="contact-page">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="tp-contact-main">
                                    <div className="tp-section tp-section-two">
                                        <div className="tp-section-sub-title">
                                            <LuPenSquare />
                                            <h6 className="sub-heading"> Let's Talk With Us</h6>
                                        </div>
                                        <div className="conatct-head">
                                            <h4 className="heading">Grow Your Business With Our Expertise</h4>
                                            <p className="sub-heading">System is a term used to refer to an organized collection symbols and processes that may be used to operate on such symbols.</p>
                                        </div>
                                        <div className="tp-contact-location-wrap d-flex align-items-center mt-lg-5">
                                            <div className="tp-contact-location">
                                                <span className="tp-contact-location-title">
                                                    United Kingdom
                                                </span>
                                                <a href="#" className="location-area"><CiLocationOn />
                                                    Liverpool Science Park, Innovation Centre One, 131 Mount Pleasant, Liverpool, L3 5TF, England</a>
                                                <a href="+44 78802 27829"><IoCallOutline />+44 78802 27829</a>
                                            </div>
                                        </div>
                                        <div className="tp-contact-location-wrap d-flex align-items-center mt-lg-5">
                                            <div className="tp-contact-location">
                                                <span className="tp-contact-location-title">
                                                    India
                                                </span>
                                                <a href="#" className="location-area"><CiLocationOn />
                                                    Stesalit Towers, 3rd floor, Block GP, Sector V, Salt Lake Electronics Complex, Kolkata-700091, West Bengal</a>
                                                <a href="+91 9748791820"><IoCallOutline />+91 9748791820 / +91 9051402028</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="tp-contact-details-form mb-40">
                                    <form action="#">
                                        <div className="row">
                                            <div className="col-lg-6">
                                                <div className="tp-contact-details-form-input mb-20">
                                                    <input type="text" placeholder="First Name" />
                                                    <span><FiUser /></span>
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="tp-contact-details-form-input mb-20">
                                                    <input type="text" placeholder="Last Name" />
                                                    <span><FiUser /></span>
                                                </div>
                                            </div>
                                            <div className="col-lg-12">
                                                <div className="tp-contact-details-form-input mb-20">
                                                    <input type="text" placeholder="Email" />
                                                    <span><BsEnvelope /></span>
                                                </div>
                                            </div>
                                            <div className="col-lg-12">
                                                <div className="tp-contact-details-form-input mb-20">
                                                    <input type="text" placeholder="Phone Number" />
                                                    <span><IoCallOutline /></span>
                                                </div>
                                            </div>
                                            <div className="col-lg-12">
                                                <div className="tp-contact-details-form-input mb-20">
                                                    <input type="text" placeholder="Company Name" />
                                                    <span><FiUser /></span>
                                                </div>
                                            </div>
                                            <div className="col-lg-12">
                                                <div className="tp-contact-details-form-input mb-20">
                                                    <input type="text" placeholder="Website URL" />
                                                    <span><FiLink /></span>
                                                </div>
                                            </div>
                                            <div className="col-lg-12">
                                                <div className="tp-contact-details-form-input mb-20">
                                                    <textarea name="Message" placeholder="Write Your Message"></textarea>
                                                    <span><BsPen /></span>
                                                </div>
                                            </div>
                                            <div className="col-lg-12">
                                                <div className="tp-contact-details-form-btn">
                                                    <button className="cta">Send a Message</button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </main>
        </>
    )
}

export default Cnt