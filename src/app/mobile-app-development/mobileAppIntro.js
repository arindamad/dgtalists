import Image from 'next/image'
import React from 'react'

const mobileAppIntro = () => {
    return (
        <section className="mobileAppIntro">
            <div className="container">
                <h3 className="heading">We Offer a Wide
                    Variety of<br/> Mobile Application Development</h3>
                <p className="sub-heading">We are committed to cross-platform app development, ensuring that your application
                    seamlessly resonates across a wide range of platforms and operating systems.</p>

                <div className="appThreeCol">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="feature-item-two ">
                                <div className="icon_text">
                                    <Image width={50} height={50} src="/smartphone.png" alt="Ic" />
                                    <h4><a href="#">Native Mobile App Development</a></h4>
                                </div>
                                <p>We are at the forefront of mobile technology breakthroughs. Our developers specialize in crafting
                                    top-notch native mobile app experiences, with a focus on user experience design.</p>
                            </div>
                        </div>

                        <div className="col-lg-4">
                            <div className="feature-item-two ">
                                <div className="icon_text">
                                    <Image width={50} height={50} src="/application.png" alt="Ic" />
                                    <h4><a href="#">Hybrid Mobile App Development</a></h4>
                                </div>
                                <p>We develop cost-effective, versatile mobile apps that leverage the strengths of both native and web
                                    technologies for consistent performance and a broader reach.</p>
                            </div>
                        </div>

                        <div className="col-lg-4">
                            <div className="feature-item-two ">
                                <div className="icon_text">
                                    <Image width={50} height={50} src="/front-end.png" alt="Ic" />
                                    <h4><a href="#">Progressive Web App Development</a></h4>
                                </div>
                                <p>With our expertise in building progressive web applications, we combine the best of web and mobile
                                    capabilities and transform your web presence into dynamic and engaging user experiences.</p>
                            </div>

                        </div>

                    </div>
                </div>

            </div>
        </section>
    )
}

export default mobileAppIntro