import Image from 'next/image'
import React from 'react'

const WeTest = () => {
  return (
    <section className="we_test" id="we_test">
      <div className="bg-graphics">
        <Image width={175} height={175} src="/graphic-2.png" alt="bg-graphics"/>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-12">
            <div className="about-image">
              <div className="row">
                <div className="col-lg-4 col-md-4 col-4">
                  <div className="each_about_img">
                    <Image width={195} height={430} src="/about-1.png" alt="about-1"/>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-4">
                  <div className="each_about_img">
                    <Image width={195} height={427} src="/about-2.png" alt="about-1"/>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-4">
                  <div className="each_about_img">
                    <Image width={195} height={396} src="/about-3.png" alt="about-1"/>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 col-12">
            <div className="about_content">
              <div className="section_top">
                <h4 className="heading">We Test Different Types of Applications</h4>
              </div>
              <div className="test_item">
                <div className="row">
                  <div className="col-lg-4">
                    <div className="each_test_item">
                      <Image width={40} height={40} src="/sass-test.png" alt="sass-test"/>
                      <h2 className="item_heading">Sass</h2>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="each_test_item">
                      <Image width={40} height={40} src="/mobile-app-1.png" alt=""/>
                      <h2 className="item_heading">Web Applications</h2>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="each_test_item">
                      <Image width={40} height={40} src="/website.png" alt=""/>
                      <h2 className="item_heading">DWH</h2>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="each_test_item">
                      <Image width={40} height={40} src="/desktop.png" alt=""/>
                      <h2 className="item_heading">Desktop Applications</h2>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="each_test_item">
                      <Image width={40} height={40} src="/mobile-app-1.png" alt=""/>
                      <h2 className="item_heading">Mobile Apps</h2>
                    </div>
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

export default WeTest