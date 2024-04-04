"use client"
import Image from 'next/image'
import React from 'react'
import Slider from 'react-slick'

const Expert = () => {
    const settings = {
        dots: false,
        arrows:false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        speed: 500,
        autoplaySpeed: 2000,
        pauseOnHover:false

      };
    return (
        <>
            <section className="expert_bg mobileAppIntro" style={{backgroundImage: 'url(/support-bg-shape.png)'}}>
                <div className="container">
                    <h3 className="heading">Why Depend On<br /> Our Experts?</h3>
                </div>
            </section>


            <section className="mobileAppIntro eaxpert_sec">
                <div className="container">
                    <div className="our_expertise_wrap">
                        <div className="solution_slider" id="">
                            <Slider {...settings}>
                                <div>
                                    <div className="each_expertise_slide">
                                        <div className="expertise_img">
                                            <Image width={301} height={335} src="/custom-ios.jpg" alt="nativeandcrossplatform" />
                                        </div>
                                        <div className="expertise_desc">
                                            <h5>Custom iOS and Android apps development</h5>
                                        </div>

                                    </div>
                                </div>
                                <div>
                                    <div className="each_expertise_slide">
                                        <div className="expertise_img">
                                            <Image width={301} height={335} src="/secondary.jpg" alt="nativeandcrossplatform" />
                                        </div>
                                        <div className="expertise_desc">
                                            <h5>Second platform app development</h5>
                                        </div>

                                    </div>
                                </div>
                                <div>
                                    <div className="each_expertise_slide">
                                        <div className="expertise_img">
                                            <Image width={301} height={335} src="/consulting.jpg" alt="nativeandcrossplatform" />
                                        </div>
                                        <div className="expertise_desc">
                                            <h5>Consulting and prototyping</h5>
                                        </div>

                                    </div>
                                </div>
                                <div>
                                    <div className="each_expertise_slide">
                                        <div className="expertise_img">
                                            <Image width={301} height={335} src="/ui-ux.jpg" alt="nativeandcrossplatform" />
                                        </div>
                                        <div className="expertise_desc">
                                            <h5>UI/UX design</h5>

                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="each_expertise_slide">
                                        <div className="expertise_img">
                                            <Image width={301} height={335} src="/automated-qa.jpg" alt="nativeandcrossplatform" />
                                        </div>
                                        <div className="expertise_desc">
                                            <h5>Automated QA and testing</h5>

                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="each_expertise_slide">
                                        <div className="expertise_img">
                                            <Image width={301} height={335} src="/embededandroid.jpg" alt="nativeandcrossplatform" />
                                        </div>
                                        <div className="expertise_desc">
                                            <h5>Embedded Android & AOSP customizations</h5>
                                        </div>

                                    </div>
                                </div>
                                <div>
                                    <div className="each_expertise_slide">
                                        <div className="expertise_img">
                                            <Image width={301} height={335} src="/geofencing.jpg" alt="nativeandcrossplatform" />
                                        </div>
                                        <div className="expertise_desc">
                                            <h5>Power management, notification and geofencing</h5>

                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="each_expertise_slide">
                                        <div className="expertise_img">
                                            <Image width={301} height={335} src="/customer-support.jpg" alt="nativeandcrossplatform" />
                                        </div>
                                        <div className="expertise_desc">
                                            <h5>Maintenance and post-warranty support</h5>
                                        </div>

                                    </div>
                                </div>
                            </Slider>
                        </div>

                    </div>
                </div>
            </section>
        </>

    )
}

export default Expert