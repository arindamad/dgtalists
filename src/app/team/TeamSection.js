import Image from 'next/image'
import React from 'react'

const TeamSection = () => {
  return (
    <>
    <section className="team-section ">
      <div className="container">
        <div className="section-title">
       
          <h2 className="heading">
            Senior Management Team Members
          </h2>
        </div>
        <div className="row">
          <div className="col-xl-3 col-lg-4 col-md-6 ">
            <div className="single-team-style-1">
              <div className="team-image ">
                <Image width={306} height={318} src="/animesh.jpg" alt="team-img"/>

              </div>
              <div className="team-content ">
                <h3>Dipanjan Mondal </h3>
                <p>
                  Co-Founder
                </p>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6 ">
            <div className="single-team-style-1">
              <div className="team-image ">
                <Image width={306} height={318} src="/arunava.jpg" alt="team-img"/>

              </div>
              <div className="team-content center">
                <h3>  Arunava Chakraborty</h3>
                <p>
                  Sr. Business Development
                </p>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6 ">
            <div className="single-team-style-1">
              <div className="team-image ">
                <Image width={306} height={318} src="/animesh.jpg" alt="team-img"/>

              </div>
              <div className="team-content center">
                <h3> Animesh Majumder</h3>
                <p>
                  Sr. Business Development
                </p>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6 ">
            <div className="single-team-style-1">
              <div className="team-image ">
                <Image width={306} height={318} src="/animesh.jpg" alt="team-img"/>

              </div>
              <div className="team-content center">
                <h3>Shiladitya Dasgupta</h3>
                <p>
                  Sr. Data Analyst and AI head
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
    <section className="team-section team_bg" style={{backgroundImage: `url(/team-banner.jpg)`}}>
      <div className="container">
        <div className="section-title">
          <h2 className="heading">
            We Have Highly Experience <br/>
            Team Leaders
          </h2>
        </div>
        <div className="row">
          <div className="col-xl-3 col-lg-4 col-md-6 ">
            <div className="single-team-style-1">
              <div className="team-image ">
                <Image width={306} height={315} src="/rijwan.png" alt="team-img"/>

              </div>
              <div className="team-content center">
                <h3>  Rizwan Haque </h3>
                <p>
                  Sr. Mobile team Lead
                </p>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6 ">
            <div className="single-team-style-1">
              <div className="team-image ">
                <Image width={306} height={315} src="/arindam.png" alt="team-img"/>
              </div>
              <div className="team-content center">
                <h3>  Arindam Sarkar
                </h3>
                <p>
                  Sr. Full Stack Developer
                </p>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6 ">
            <div className="single-team-style-1">
              <div className="team-image ">
                <Image width={306} height={315} src="/susmita_di.png" alt="team-img"/>
              </div>
              <div className="team-content center">
                <h3> Susmita Dey               
                </h3>
                <p>
                  Sr. UI/UX
                </p>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6 ">
            <div className="single-team-style-1">
              <div className="team-image ">
                <Image width={306} height={315} src="/susweta.png" alt="team-img"/>
              </div>
              <div className="team-content center">
                <h3> Susweta Ghosh  </h3>
                <p>
                  Testing Head
                </p>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6 ">
            <div className="single-team-style-1">
              <div className="team-image ">
                <Image width={306} height={315} src="/sandi.png" alt="team-img"/>

              </div>
              <div className="team-content center">
                <h3> Sandipan Dey</h3>
                <p>
                  Sr Application Programmer
                </p>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6 ">
            <div className="single-team-style-1">
              <div className="team-image ">
                <Image width={306} height={315} src="/asifda.png" alt="team-img"/>

              </div>
              <div className="team-content center">
                <h3>  Asif Baidya   </h3>
                <p>
                  Project Manager
                </p>
              </div>
            </div>
          </div>

          <div className="col-xl-3 col-lg-4 col-md-6 ">
            <div className="single-team-style-1">
              <div className="team-image ">
                <Image width={306} height={315} src="/sucharita.png" alt="team-img"/>

              </div>
              <div className="team-content center">
                <h3> Sucharita Ghosh Bannerjee</h3>
                <p>
                  Sr. Application Programmer
                </p>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6 ">
            <div className="single-team-style-1">
              <div className="team-image ">
                <Image width={306} height={315} src="/ria.png" alt="team-img"/>

              </div>
              <div className="team-content center">
                <h3> Ria Mondal </h3>
                <p>
                  Digital Marketing Project Manager
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    </>
    
  )
}

export default TeamSection