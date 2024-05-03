import Image from 'next/image'
import React from 'react'

const EngagementModel = () => {
  return (
    <section className="engagement-model" id="engagement-model">
      <div className="bg-shape">
        <Image width={1006} height={1517} src="/bg-shape.png" alt="shape-img"/>
      </div>
      <div className="container">
        <h3 className="heading">You can get <br/>Our Engagement Models</h3>
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="card">
                <div className="card-box">
                  <div className="icon-box">
                    <Image width={60} height={60} src="/on-demand-testing.png" alt="on-demand-testing"/>
                  </div>
                  <div className="icon-box-cont">
                    <h6>On Demand Testing</h6>
                    <p>Whenever you need, you can get access to testing services from industry experts, ensuring
                      efficient resource utilization that align with your project requirements.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="card">
                <div className="card-box">
                  <div className="icon-box">
                    <Image width={60} height={60} src="/project-based.png" alt="on-demand-testing"/>
                  </div>
                  <div className="icon-box-cont">
                    <h6>Project Based</h6>
                    <p>We have the experience needed for improving teams and processes. With a project-based engagement
                      model and structured approach, we ensure successful collaboration.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="card">
                <div className="card-box">
                  <div className="icon-box">
                    <Image width={60} height={60} src="/managed-service.png" alt="on-demand-testing"/>
                  </div>
                  <div className="icon-box-cont">
                    <h6>Managed Services</h6>
                    <p>You can be assured of continuous improvement and success, powered by specialists who can detect
                      your custom testing solution.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default EngagementModel