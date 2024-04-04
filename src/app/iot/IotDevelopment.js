import Image from 'next/image'
import React from 'react'

const IotDevelopment = () => {
  return (
    <section className="iot-development" id="iot-development">
      <div className="container">
        <h4 className="heading">IoT App Development & <br/>Consulting Services</h4>
        <p className="sub-heading">We have expertise in developing cutting-edge IoT applications that satisfy diverse
          business requirements and challenges. You can also get first-rate consulting services on IoT from our end.</p>
        <div className="row">
          <div className="col-lg-4 col-md-6 ">
            <div className="iot-services">
              <div className="iot-icon-spcl">
                <div className="iot-icon">
                  <Image width={40} height={40} src="/iot-icon-1.png" alt=""/>
                </div>
                <div className="iot-icon-cont">
                  <h5>Custom IoT Applications</h5>
                  <p>We offer IoT solutions crafted and tailor-made to match your specific business requirements. You
                    can be assured of seamless integration and optimal performance.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="iot-services">
              <div className="iot-icon-spcl">
                <div className="iot-icon">
                  <Image width={40} height={40} src="/iot-icon-2.png" alt=""/>
                </div>
                <div className="iot-icon-cont">
                  <h5>Asset Tracking Apps</h5>
                  <p>Looking for reliable and efficient asset tracking applications? We use state-of-the-art IoT
                    technology to enhance asset control, visibility, and management across various industries.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="iot-services">
              <div className="iot-icon-spcl">
                <div className="iot-icon">
                  <Image width={40} height={40} src="/iot-icon-3.png" alt=""/>
                </div>
                <div className="iot-icon-cont">
                  <h5>IoT Integration</h5>
                  <p>Be assured of seamless integration of IoT solutions into your existing systems. We provide your
                    business with an interconnected, cohesive infrastructure for enhanced efficiency and functionality.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="iot-services">
              <div className="iot-icon-spcl">
                <div className="iot-icon">
                  <Image width={40} height={40} src="/iot-icon-4.png" alt=""/>
                </div>
                <div className="iot-icon-cont">
                  <h5>IoT Cloud Platforms</h5>
                  <p>For businesses venturing into the Internet of Things, we offer robust IoT cloud platforms that
                    enable secure scalable solutions, real-time analytics, and proper data storage. </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="iot-services">
              <div className="iot-icon-spcl">
                <div className="iot-icon">
                  <Image width={40} height={40} src="/iot-icon-5.png" alt=""/>
                </div>
                <div className="iot-icon-cont">
                  <h5>Smart Home Solutions</h5>
                  <p>We specialize in creating user-friendly, intelligent IoT solutions for smart homes, offering
                    security, automation, and energy efficiency through connected devices.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="iot-services">
              <div className="iot-icon-spcl">
                <div className="iot-icon">
                  <Image width={40} height={40} src="/iot-icon-6.png" alt=""/>
                </div>
                <div className="iot-icon-cont">
                  <h5>iOT Based Logistic Apps</h5>
                  <p>Optimize supply chain processes, improve tracking capabilities, and boost overall efficiency with
                    innovative logistics applications powered by IoT.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default IotDevelopment