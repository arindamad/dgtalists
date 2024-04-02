import Image from 'next/image'
import React from 'react'
import Slider from "react-slick";


const Clients = () => {

    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        autoplay: true,
        speed: 12000,
        autoplaySpeed: 1,
        cssEase: "linear",
        arrows: false,
        rtl:true
    };
    return (
        <>
            <section className="client" id="client">

                <div className="container">

                    <div className="row">

                        <div className="col-lg-3">

                            <div className="our-client">

                                <h4>Clients/Partners</h4>

                            </div>

                        </div>

                        <div className="col-lg-9">

                            <div className="slider-container">
                                <Slider {...settings}>
                                    <div>
                                        <figure>
                                            <Image width={153} height={61} src="/oracle.png" alt="" />

                                        </figure>
                                    </div>
                                    <div>
                                        <figure>

                                            <Image width={153} height={61} src="/cdac.png" alt="" />
                                        </figure>
                                    </div>
                                    <div>
                                        <figure>

                                            <Image width={153} height={61} src="/ast.png" alt="" />
                                        </figure>
                                    </div>
                                    <div>
                                        <figure>

                                            <Image width={153} height={61} src="/dream-tech.png" alt="" />
                                        </figure>
                                    </div>
                                    <div>
                                        <figure>
                                            <Image width={153} height={61} src="/tera-motors.png" alt="" />

                                        </figure>
                                    </div>
                                    <div>
                                        <figure>

                                            <Image width={153} height={61} src="/shineroad.png" alt="" />
                                        </figure>
                                    </div>
                                    <div>
                                        <figure>

                                            <Image width={153} height={61} src="/bassetti.png" alt="" />
                                        </figure>
                                    </div>
                                    <div>
                                        <figure>

                                            <Image src="/tcg.png" width={153} height={61} alt="" />
                                        </figure>

                                    </div>
                                </Slider>
                            </div>

                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default Clients