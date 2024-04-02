import Image from 'next/image'
import React from 'react'

const WhoAre = () => {
    return (
            <section id="we" className="we">

                <div className="container">

                    <div className="row">

                        <div className="col-lg-9">

                            <div className="who-we">

                                <p className="sub-heading">WHO WE ARE</p>

                                <h1 className="heading">When you need custom software solutions, rely on Dgtalists - the specialists in the
                                    digital domain!</h1>

                                <div className="who-we-cont">

                                    <div className="row">

                                        <div className="col-lg-6">

                                            <div className="overview">

                                                <h5>Agile Software Development</h5>

                                                <p>We ensure the evolution of your custom software projects along with the changing needs of your
                                                    business and your users. At Dgtalists, we have an Agile Software Development methodology that
                                                    can offer optimal value. Flexibility, collaboration, and rapid iterations are our priority. With
                                                    us, you can get just the edge that you need.
                                                </p>

                                            </div>

                                        </div>

                                        <div className="col-lg-6">

                                            <div className="experience">

                                                <ul className="best">

                                                    <li>

                                                        <h2 className="heading">15 Years Experience</h2>

                                                        <p className="sub-heading">Our team members have been handling client requirements for the last 15
                                                            years, ensuring utmost satisfaction.
                                                        </p>

                                                    </li>

                                                    <li className="spcl-part">

                                                        <h2 className="heading">Best Certification Team</h2>

                                                        <p className="sub-heading">Your projects undergo the most stringent testing procedures, and our
                                                            team certifies only after complete satisfaction with the outcome.
                                                        </p>

                                                    </li>

                                                    <li>

                                                        <h2 className="heading">Unlimited Revision</h2>

                                                        <p className="sub-heading">We are never satisfied until you are content with the outcome. Our team
                                                            is ready to revise as many times as needed, to ensure the most satisfying results for your
                                                            business.
                                                        </p>

                                                    </li>

                                                </ul>

                                            </div>

                                        </div>

                                    </div>

                                </div>

                                <div className="float-img">

                                    <Image width={120} height={120} src="/we-bg.png"/>

                                </div>

                            </div>

                        </div>

                        <div className="col-lg-3">

                            <div className="who-we-img">

                                <Image src="/who-we.jpg" width={306} height={702} alt=""/>

                            </div>

                        </div>

                    </div>

                </div>

            </section>
    )
}

export default WhoAre