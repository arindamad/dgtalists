import Image from 'next/image'
import React from 'react'

const RightService = () => {
  return (
    <section className="right_service">
      <div className="right_service_bg" style={{backgroundImage: 'url(/why-choose-01.jpg)'}}></div>
      <div className="row justify-content-end">
        <div className="col-lg-6">
          <div className="right_service_content">
            <h3 className="heading">Get #1 Custom Web Development Services
              At Rates That Fit Your Budget!</h3>
            <p>Our Custom Web Development services can easily be tailored to your specific needs, to improve your
              digital presence, boost your traffic and provide you with high conversion rates - just as you want.Our
              team is capable of providing you with all kinds of web development services, including web-based
              applications and software that can ensure the best online experience for your users. Despite our quality,
              we are known for affordability. Our custom web development services are available for your business at the
              most reasonable rates.</p>

            <p>Do not waste time. Get in touch with us now for the most amazing, tailored web development services for
              your business - guaranteed to drive traffic and boost lead conversions, regardless of the size of your
              enterprise.</p>
          </div>
        </div>
      </div>
      <div className="bg_graphics">
        <Image width={488} height={400} src="/bg-right.png" alt=""/>
      </div>
    </section>
  )
}

export default RightService