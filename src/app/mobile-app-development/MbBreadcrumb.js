import Image from 'next/image'
import React from 'react'

const MbBreadcrumb = () => {
  return (
    <section className="breadcrumb-banner mobile-app-banner" style={{backgroundImage: 'url(/mobile-app-banner.jpg)'}}>
    <div className="container">
      <div className="row">
        <div className="col-lg-7">
          <div className="breadcrumb-content">
            <h2>DGtalists Ensures End-to-End Mobile App Development for Your Enterprise!</h2>
            <p>DGtalists is a trusted partner for end-to-end mobile application development services. Experience
              comprehensive services tailored for both corporate and consumer-facing environments. We understand the
              critical role of mobile experience and focus on crafting top-notch experiences for your business.</p>
            <p>With us, you can be assured of exceptional usability, aesthetically pleasing interfaces, and emotional
              connections. Accelerated delivery ensures rapid functionality delivery, with no compromise on the quality
              front. </p>

            <a className="cta" href="#">Talk To Us</a>

          </div>
        </div>
        <div className="col-lg-5">
          <div className="rightimg"><Image width={410} height={506} src="/app-screen.png" /></div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default MbBreadcrumb