import Image from 'next/image'
import React from 'react'

const BreadcrumbBanner = () => {
  return (
    <section className="breadcrumb-banner" style={{backgroundImage: `url(/laravel-bg.jpg)`}}>
    <div className="container">
      <div className="row">
        <div className="col-lg-7">
          <div className="breadcrumb-content">
            <h1>Dgtalists Boosts Your Business Prospects With Advanced Node.js Development Services! Hire Our Experts,
              Now! </h1>
            <p>Are you looking for state of the art Node.js development services for your business? Trust our experts at
              Dgtalists to provide you with feature-rich, scalable mobile and web app solutions with extremely fast
              backend and frontend with an easy interface. <br/>
              Outsource your Node.js web application development services to us. Be assured of cutting-edge enterprise
              solutions for your business based on asynchronous, event-driven JavaScript runtime. You can always entrust
              our expertise, when it comes to building advanced enterprise solutions that help make your system backend
              more robust. Get in touch with us now!
            </p>
          </div>
        </div>
        <div className="col-lg-5">
          <div className="laravel-banner-img">
            <Image width={526} height={426} src="/node.js-image.png" alt=""/>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default BreadcrumbBanner