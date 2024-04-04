import Image from 'next/image'
import React from 'react'

const Innovate = () => {
  return (
    <section className="innovate" id="innovate">
      <div className="container">
        <div className="about-wrap">
          <div className="row d-flex align-items-center">
            <div className="col-lg-6">
              <div className="about-img-wrap">
                <Image width={453} height={599} className="shape-1" src="/about-shape2.png" alt=""/>
                <div className="about-img">
                  <Image width={300} height={452} src="/partner-img-1.png" alt="#"/>
                </div>
                <div className="about-img about-img-2">
                  <Image width={300} height={452} src="/partner-img-2.png" alt="#"/>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-content-wrap">
                <div className="section-title">
                  <h5>Our Partner</h5>
                  <h3 className="heading">partnering with
                    Inceptial Tech</h3>
                </div>
                <p className="sub-heading"> Partnering allows each party access to the other's skill sets and resources,
                  which can greatly improve their individual potential. Inceptial Technologies UK and DGtalists have
                  formed a partnership in ((YEAR)) with an ideal ambition to accomplish greater success.
                </p>
                <p className="sub-heading">
                  We have a team of expert individuals who have several years of experience in various fields, including
                  digital marketing services, mobile app development, and web solutions. Together we believe we will be
                  able to surpass our current capabilities and be able to feature services all around the world. </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Innovate