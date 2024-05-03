import React from 'react'
import Image from 'next/image'

const SaasBased = () => {
  return (
    <>
    <section className="breadcrumb-banner" style={{backgroundImage: `url(/quality-assurance-bg.png)`}}>
    <div className="container">
      <div className="row">
        <div className="col-lg-7">
          <div className="breadcrumb-content">
            <h1>DGtalists Helps You with Quality Assurance, Within Time and Budget!</h1>
            <p>Quality is non-negotiable at DGtalists. Our commitment to quality extends to thorough testing, ensuring
              functional, reliable and secure solutions for you at all stages. For many years, we have been providing
              businesses with tailored software development assistance, realizing their visions and matching their
              budget within specified time-span. </p>
          </div>
        </div>
        <div className="col-lg-5">
        </div>
      </div>
    </div>
  </section>
  <section className="automation-test" id="automation-test">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <h4 className="heading">Overview</h4>
            <p className="sub-heading">One of the primary areas of concentration for Inceptial Tech, a quickly expanding IT
              services provider, is TaaS. Manual testing is laborious,not reliable due to the possibility of manual
              errors. We suggest implementing Automation testing, which is more reliable due to use of automated tools
              and scripts. This case study examines Selenium's advantages and shows how it can greatly enhance Inceptial
              Tech's testing procedure's efficiency</p>
          </div>
          <div className="col-lg-6">
            <div className="automation-testimg">
              <Image width={636} height={423} src="/saas-img.jpg" alt=""/>
            </div>

          </div>
        </div>
      </div>
    </section>
    <section className="automation-test automation-test-1" id="automation-test">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="automation-testimg-1">
              <Image width={508} height={339} src="/challenges.jpg" alt=""/>
            </div>
          </div>
          <div className="col-lg-6">
            <h4 className="heading">Challenges</h4>
            <ul className="tt-list-01">
              <li>The goal of SaaS based applications is to identify the challenges the customers have faced before
                using the SaaS based application.</li>
              <li>It is important to prioritize the safety and security of the application and its users during the
                testing process.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    <section className="result s-padding ak_result">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="about-s7__content">
              <h2 className="s-title heading">Objectives </h2>
              <div className="info-list-s2">
                <div className="s-info">
                  <p>
                    After using the SaaS based application,the clients increase their productivity,lower costs,higher
                    revenue and optimized growth strategy.
                  </p>
                </div>
                <div className="s-info">
                  <p>
                    Maintaining the security and integrity of the application is crucial to maintain customer trust.
                  </p>
                </div>

              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="about-s7__thumb">
              <div className="p-left">
                <Image width={290} height={346} src="/result-1.jpg" alt=""/>
              </div>
              <div className="p-right">
                <Image width={290} height={404} src="/result-2.png" alt=""/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div className="target_reason">
      <div className="container">
        <h4 className="heading">Our Target</h4>
        <div className="row justify-content-center align-items-center">
          <div className=" col-lg-4 col-md-6">
            <div className="single__offer__box ">
              <div className="icon" style={{background: `rgba(142, 102, 255, 0.2)`}}>
                <Image width={54} height={54} className="icon-front" src="/targeting.png" alt="icon"/>
              </div>
              <div className="offer__name mt-10">
                <h4 className="offer__title">Target</h4>
                <p>Web Application</p>
              </div>
            </div>
          </div>
          <div className=" col-lg-4 col-md-6">
            <div className="single__offer__box ">
              <div className="icon" style={{background: `rgba(255, 62, 74, 0.2)`}}>
                <Image width={54} height={54} className="icon-front" src="/logical.png" alt="icon"/>
              </div>
              <div className="offer__name ">
                <h4 className="offer__title ">Reason</h4>
                <p>Strengthen the overall application security</p>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
    <section className="technology-sec ak_technology test_automation_tool" id="technology-sec">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="technology-sec-cont">
              <h3 className="heading">Technologies Used</h3>
            </div>
            <div className="row justify-content-center">
              <div className="col-lg-3">
                <div className="spcl-card">
                  <Image width={50} height={50} src="/physics.png" alt=""/>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="spcl-card">
                  <Image width={50} height={50} src="/api.png" alt=""/>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="spcl-card">
                  <Image width={50} height={50} src="/auth0.png" alt=""/>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="spcl-card">
                  <Image width={50} height={50} src="/cloud-service.png" alt=""/>
                </div>
              </div>

            </div>
          </div>
          <div className="col-lg-6">
            <div className="technology-sec-image">
              <Image width={636} height={400} src="/saas-tech.png" alt=""/>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default SaasBased