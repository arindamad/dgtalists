import Image from 'next/image'
import React from 'react'

const WhyChooseUs = () => {
  return (
    <section className="why_choose_us" style={{backgroundImage: `url(/partner_bg.jpg)`}}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-12">
            <div className="why_choose_us_left">
              <h4 className="heading">Why Choose Us?</h4>
              <div className="expertise_box">
                <div className="row">
                  <div className="col-lg-3">
                    <div className="each_expertise_box">
                      <div className="expertise_icon">
                        <Image width={40} height={40} src="/incep-teamwork.png" alt="expertice-img"/>
                      </div>
                      <div className="expertise_content">
                        <h6>50+ Workforce</h6>
                        <p>senectus justo malesuada condimentum imperdiet sagittis convallis fusce</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3">
                    <div className="each_expertise_box">
                      <div className="expertise_icon">
                        <Image width={40} height={40} src="/incep-team.png" alt="expertice-img"/>
                      </div>
                      <div className="expertise_content">
                        <h6>1500+ Candidate Talent Pool Available</h6>
                        <p>senectus justo malesuada condimentum imperdiet sagittis convallis fusce</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3">
                    <div className="each_expertise_box">
                      <div className="expertise_icon">
                        <Image width={40} height={40} src="/country.png" alt="expertice-img"/>
                      </div>
                      <div className="expertise_content">
                        <h6>Physical Presence In 2 Countries</h6>
                        <p>senectus justo malesuada condimentum imperdiet sagittis convallis fusce</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3">
                    <div className="each_expertise_box">
                      <div className="expertise_icon">
                        <Image width={40} height={40} src="/talent.png" alt="expertice-img"/>
                      </div>
                      <div className="expertise_content">
                        <h6>Client Ranging From Fortune 500 To Mid-Size Enterprise</h6>
                        <p>senectus justo malesuada condimentum imperdiet sagittis convallis fusce</p>
                      </div>
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

export default WhyChooseUs