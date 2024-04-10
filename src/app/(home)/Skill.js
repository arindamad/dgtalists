import Image from 'next/image'
import React from 'react'
import { BsArrowRight } from "react-icons/bs";
import Link from 'next/link'

const Skill = () => {
    return (
        <section className="expert">

            <div className="container">

                <div className="row">

                    <div className="col-lg-3">

                        <div className="expert-img-1">

                            <Image width={276} height={872} src="/expert-skill-img-1.jpg" alt=""/>

                        </div>

                    </div>

                    <div className="col-lg-9">

                        <div className="expert-skill">

                            <p className="sub-heading">EXPERT SKILL WE HAVE</p>

                            <h1 className="heading">We Have The Skills And Expertise To Deliver High-Quality Custom Software</h1>

                            <div className="row">

                                <div className="col-lg-3">

                                    <div className="expert-skill-2">

                                        <Image width={223} height={332} src="/expert-skill-img-2.jpg" alt=""/>

                                    </div>

                                </div>

                                <div className="col-lg-9">

                                    <div className="custom-software">

                                        <p>We have the potential of delivering tailored functionality targeted for specific organizations,
                                            businesses or users. With over 12 years of enriching experience in custom software development,
                                            DGtalist is here as your reliable tech partner to efficiently develop, design, test, integrate and
                                            deploy high-end custom apps.
                                        </p>

                                        <p>Entitle your business to soar high with our custom software development that has the power to
                                            unleash innovation.</p>

                                        <div className="progress">

                                            <span className="skill">Desktop Software<i className="val">95%</i></span>

                                            <div className="progress-bar-wrap">

                                                <div className="progress-bar progress-bar-1" role="progressbar " aria-valuenow="95"
                                                    aria-valuemin="0" aria-valuemax="100"></div>

                                            </div>

                                        </div>

                                        <div className="progress">

                                            <span className="skill">Web Based Software<i className="val">99%</i></span>

                                            <div className="progress-bar-wrap">

                                                <div className="progress-bar progress-bar-2" role="progressbar" aria-valuenow="99" aria-valuemin="0"
                                                    aria-valuemax="100"></div>

                                            </div>

                                        </div>

                                        <Link className="cta " href="custom-web-development">Get Started<BsArrowRight/></Link>

                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

                <div className="float-img">

                    <Image width={120} height={107} src="/client-bg.png"/>

                </div>

            </div>

        </section>
    )
}

export default Skill