import React from 'react';
import Image from 'next/image'

const PartnerNode = () => {
  return (
    <section className="partner-node" id="partner-node">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="about-img-wrap">
              <div className="about-img about-img-big">
                <Image width={411} height={508} src="/partner-node-img.jpg" alt=""/>
              </div>
              <div className="about-img about-img-sm">
                <Image width={301} height={323} src="/partner-node-img-2.jpg" alt=""/>
              </div>
              <div className="shape-01"></div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="patner-content">
              <h3 className="heading">Partner With the Best Node JS Development Company</h3>
              <p className="sub-heading">Have you been looking for high-quality Node.js development assistance for some time
                now? We can fit your bill perfectly. Dgtalists is a renowned Node.js development company, operating in
                India, Australia, Canada and USA.
                <br/>
                Our development experts have ears of experience in working with agile SDLC methodology. We boast of the
                expertise to use REST API with Node.js to build high performing applications that put your business on
                the first track to be the market leader in the near future. Get super-efficient, lightweight
                applications that deal with your business needs just as you desire.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PartnerNode