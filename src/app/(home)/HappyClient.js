import React from 'react'
import { BiSolidQuoteAltRight } from "react-icons/bi";
import Slider from 'react-slick';

const HappyClient = () => {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 3000,
        arrows: false,
    };
    return (
        <section id="happy-client" className="happy-client">

            <div className="container">

                <h1>Our Happy Clients</h1>

                <Slider {...settings}>
                    <div>
                        <div className="testimonial-wrap">

                            <div className="testimonial-item">

                                <div className="each_testimonial">

                                    <div className="testimonial-content">

                                        <h3>Roger Tan</h3>

                                        <p className="para-4">CEO and Co-Founder </p>

                                    </div>
                                    <BiSolidQuoteAltRight fill='#0d6efd' opacity="0.7" fontSize="40px"/>




                                </div>

                                <p className="para-4">DGtalists quickly got our site from concept to completion in a given timeframe. They
                                    took our high-level needs quickly and translated them into an excellent user experience as well as a
                                    high-quality application.</p>

                            </div>

                        </div>
                    </div>
                    <div>
                        <div className="testimonial-wrap">

                            <div className="testimonial-item">

                                <div className="each_testimonial">

                                    <div className="testimonial-content">

                                        <h3>Roger Tan</h3>

                                        <p className="para-4">CEO and Co-Founder </p>

                                    </div>


                                    <BiSolidQuoteAltRight fill='#0d6efd' opacity="0.7" fontSize="40px"/>


                                </div>

                                <p className="para-4">DGtalists quickly got our site from concept to completion in a given timeframe. They
                                    took our high-level needs quickly and translated them into an excellent user experience as well as a
                                    high-quality application.</p>

                            </div>

                        </div>
                    </div>
                    <div>

                        <div className="testimonial-wrap">

                            <div className="testimonial-item">

                                <div className="each_testimonial">

                                    <div className="testimonial-content">

                                        <h3>Jason Howard</h3>

                                        <p className="para-4">Owner and Director </p>

                                    </div>

                                    <BiSolidQuoteAltRight fill='#0d6efd' opacity="0.7" fontSize="40px"/>


                                </div>

                                <p className="para-4">We are really happy with the apps created by DGtalists. The production time was
                                    relatively short. The final apps they provided are really stable. Now, we’ve decided to broaden the
                                    range of apps that they’ll create for us.</p>

                            </div>

                        </div>
                    </div>


                </Slider>

                <div className="testi-slider swiper">

                    <div className="swiper-wrapper">

                        <div className="swiper-slide">



                        </div>

                        <div className="swiper-slide">



                        </div>

                        <div className="swiper-slide">


                        </div>



                    </div>

                    <div className="swiper-pagination"></div>

                </div>

            </div>

        </section>
    )
}

export default HappyClient