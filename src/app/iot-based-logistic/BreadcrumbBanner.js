import Image from 'next/image'
import React from 'react'

const BreadcrumbBanner = () => {
  return (
    <section className="breadcrumb-banner" style={{backgroundImage: `url(/iot-bg.jpg)`}}>
<div className="container">
  <div className="row">
    <div className="col-lg-7">
      <div className="breadcrumb-content">
        <h1>IOT Based LOgistic Solution</h1>
        <h3>Project Introduction</h3>
        <p>Shineroad Foods ( India ) Pvt.Ltd  invited DGTALISTS for discussing their requirement for Logistic Mobile App and Web Admin.</p>
        <h3>Business Objective:</h3>
        <p>To build a App to ease the operation of the entire logistic system</p>
      </div>
    </div>
    <div className="col-lg-5">
	
      <form className="bannerform">
        <div className="card">

          <h1>Talk to our experts</h1>
  
          <div>
  
            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Full Name"/>
  
          </div>
  
          <div>
  
            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Email address"/>
  
          </div>
  
          <div>
  
            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Phone Number"/>
  
          </div>
  
          <div>
  
            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="I am interested in"></textarea>
  
          </div>
          <div className="robot-cap">
            <Image width={170} height={38} src="/i-am-nt-robot.png" alt=""/>
            <a className="cta" href="#">Contact Us</a>
          </div>
        </div>
      </form>
    </div>
  </div>
</div>
</section>
  )
}

export default BreadcrumbBanner