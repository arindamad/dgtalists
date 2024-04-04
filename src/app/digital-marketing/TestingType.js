"use client"
import Image from 'next/image'
import React from 'react'
import Slider from 'react-slick'

const TestingType = () => {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        speed: 500,
        arrows:false,
        autoplaySpeed: 2000,
      };
  return (
    <section className="testing-type why_love_customer" id="testing-type">
      <div className="offer__shadow ">
        <Image width={36} height={36} src="/offer-shadow-shape.png" alt="shadow"/>
      </div>
      <div className="offer__shape-right">
        <Image width={36} height={36} src="/offer-bg-shape-right.png" alt="shape"/>
      </div>
      <div className="container">
        <h4 className="heading">Why do Customers <br/> Love Being with Dgtalists</h4>
        <div className="customer_love_slider">
            <Slider {...settings}>
                <div>
                <div className="offer__item">
                <div className="offer__icon">
                  <Image width={36} height={36} src="/promotion.png" alt="customer-love-img"/>
                </div>
                <div className="card-content">
                  <h6>Higher <br/> ROI</h6>
                </div>
              </div>
                </div>
                <div>
                <div className="offer__item">
                <div className="offer__icon">
                  <Image width={36} height={36} src="/delivery-time.png" alt="customer-love-img"/>
                </div>
                <div className="card-content">
                  <h6>On-Time <br/> Deliveries</h6>
                </div>
              </div>
                </div>
                <div>
                <div className="offer__item">
                <div className="offer__icon">
                  <Image width={36} height={36} src="/results.png" alt="customer-love-img"/>
                </div>
                <div className="card-content">
                  <h6>Guaranteed <br/> Results</h6>
                </div>
              </div>
                </div>
                <div>
                <div className="offer__item">
                <div className="offer__icon">
                  <Image width={36} height={36} src="/test-engineering.png" alt="customer-love-img"/>
                </div>
                <div className="card-content">
                  <h6>Data <br/> Confidentiality</h6>
                </div>
              </div>
                </div>
                <div>
                <div className="offer__item">
                <div className="offer__icon">
                  <Image width={36} height={36} src="/project-manager.png" alt="customer-love-img"/>
                </div>
                <div className="card-content">
                  <h6>Steadfast <br/> Project Manager</h6>
                </div>
              </div>
                </div>
                <div>
                <div className="offer__item">
                <div className="offer__icon">
                  <Image width={36} height={36} src="/budgeting.png" alt="customer-love-img"/>
                </div>
                <div className="card-content">
                  <h6>Cost-Effective <br/> Pricing</h6>
                </div>
              </div>
                </div>
                <div>
                <div className="offer__item">
                <div className="offer__icon">
                  <Image width={36} height={36} src="/customer-service.png" alt="customer-love-img"/>
                </div>
                <div className="card-content">
                  <h6>Real Client<br/> Communication</h6>
                </div>
              </div>
                </div>
                <div>
                <div className="offer__item">
                <div className="offer__icon">
                  <Image width={36} height={36} src="/higher-performance.png" alt="customer-love-img"/>
                </div>
                <div className="card-content">
                  <h6>Management <br/> Efficiency</h6>
                </div>
              </div>
                </div>


            </Slider>
        </div>
      </div>
    </section>
  )
}

export default TestingType