import React from 'react'
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineEmail } from "react-icons/md";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { FaFacebookF,FaXTwitter } from "react-icons/fa6";
import { FaInstagram,FaLinkedinIn } from "react-icons/fa";


const Contact = () => {
    return (
        <section id="contact-us" className="contact-us" style={{backgroundImage: `url(/img-20.jpg)`}}>

            <div className="container">

                <div className="row">

                    <div className="col-lg-7 col-md-6">

                        <div className="contact-info">

                            <h4>Get In Touch</h4>
                            <div className="each_contact_address">
                                <div className="contact_icon">
                                <CiLocationOn/>

                                </div>
                                <div className="contact-info">
                                    <h6>Location</h6>
                                    <p>Stesalit Towers, 3rd floor, Block GP, Sector V, Salt Lake<br/>
                                        Electronics Complex, Kolkata-700091, West Bengal</p>
                                </div>

                            </div>
                            <div className="each_contact_address">
                                <div className="contact_icon">
                                   <MdOutlineEmail/>
                                </div>
                                <div className="contact-info">
                                    <h6>Email Us</h6>
                                    <a href="mailto:contact@dgtalists.com">contact@dgtalists.com</a>
                                </div>
                            </div>
                            <div className="each_contact_address">
                                <div className="contact_icon">
                                <IoPhonePortraitOutline/>

                                </div>
                                <div className="contact-info">
                                    <h6>Call Now</h6>
                                    <a href="tel:+91 9748791820">+91 9748791820</a>
                                </div>
                            </div>


                        </div>

                        <div className="follow-us">

                            <ul>

                                <li><a href="https://www.facebook.com/dgtalists"><FaFacebookF/></a></li>

                                <li><a href="https://twitter.com/Dgtalists"><FaXTwitter/></a></li>

                                <li><a href="https://www.linkedin.com/company/dgtalists/"><FaLinkedinIn/></a></li>

                                <li><a href="https://www.instagram.com/dgtalists/"><FaInstagram/></a></li>

                            </ul>

                        </div>

                    </div>

                    <div className="col-lg-5 col-md-6">
                        <div className="contact_form">
                            <h4>Get A Quote</h4>
                            <p>Fill up the form now to let us know your requirements</p>
                            <div className="row">
                                <div className="col-lg-6">

                                    <input type="email" className="form-control each_input_field" id="exampleFormControlInput1"
                                        placeholder="Full Name"/>

                                </div>
                                <div className="col-lg-6">

                                    <input type="email" className="form-control each_input_field" id="exampleFormControlInput1"
                                        placeholder="Phone Number"/>

                                </div>
                                <div className="col-lg-6">

                                    <input type="email" className="form-control each_input_field" id="exampleFormControlInput1"
                                        placeholder="Email address"/>

                                </div>
                                <div className="col-lg-6">
                                    <select className="form-select each_input_field" aria-label="Default select example">

                                        <option selected>Select service</option>

                                        <option value="1">One</option>

                                        <option value="2">Two</option>

                                        <option value="3">Three</option>

                                    </select>
                                </div>
                                <div className="col-lg-12">

                                    <textarea className="form-control each_input_field" id="exampleFormControlTextarea1" rows="3"
                                        placeholder="Write your requirements"></textarea>

                                </div>
                            </div>
                            <a className="cta" href="#">Enquire Now</a>

                        </div>

                    </div>

                </div>

            </div>

        </section>
    )
}

export default Contact