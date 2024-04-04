"use client"
import Image from 'next/image'
import React from 'react'
import Slider from 'react-slick'

const ValuableClient = () => {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        speed: 500,
        autoplaySpeed: 2000,
        arrows:false
      };
    return (
        <section className="valuable-client" id="valuable-client">
            <div className="container">
                <h2 className="heading">Our Clients</h2>
                <div className="partnerSlider">
                    <Slider {...settings}>
                        <div>
                            <figure>
                                <Image width={158} height={63} src="/ast.png" alt="" />
                            </figure>
                        </div>
                        <div>
                            <figure>
                                <Image width={158} height={63} src="/dream-tech.png" alt="" />
                            </figure>
                        </div>
                        <div>
                            <figure>
                                <Image width={158} height={63} src="/tera-motors.png" alt="" />
                            </figure>
                        </div>
                        <div>
                            <figure>
                                <Image width={158} height={63} src="/bassetti.png" alt="" />
                            </figure>
                        </div>
                        <div>
                            <figure>
                                <Image width={158} height={63} src="/cdac.png" alt="" />
                            </figure>
                        </div>
                        <div>
                            <figure>
                                <Image width={158} height={63} src="/tcg.png" alt="" />
                            </figure>
                        </div>
                        <div>
                            <figure>
                                <Image width={158} height={63} src="/ast.png" alt="" />
                            </figure>
                        </div>
                        <div>
                            <figure>
                                <Image width={158} height={63} src="/dream-tech.png" alt="" />
                            </figure>
                        </div>
                        <div>
                            <figure>
                                <Image width={158} height={63} src="/tera-motors.png" alt="" />
                            </figure>
                        </div>
                        <div>
                            <figure>
                                <Image width={158} height={63} src="/ast.png" alt="" />
                            </figure>
                        </div>
                        <div>
                            <figure>
                                <Image width={158} height={63} src="/dream-tech.png" alt="" />
                            </figure>
                        </div>
                        <div>
                            <figure>
                                <Image width={158} height={63} src="/tera-motors.png" alt="" />
                            </figure>
                        </div>
                    </Slider>
                </div>

            </div>
        </section>
    )
}

export default ValuableClient