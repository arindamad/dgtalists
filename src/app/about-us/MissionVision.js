import Image from 'next/image'
import React from 'react'

const MissionVision = () => {
  return (
    <section className="mission_vision" style={{backgroundImage: `url(/areaof-ecp-1.jpg)`}}>
      <div className="container">
        <div className="row ">
          <div className="col-lg-5">
            <div className="mission_img">
              <Image width={526} height={575} src="/img-10.png" alt=""/>
            </div>
          </div>
          <div className="col-lg-7">
            <div className="how_we_help">
              <h4 className="heading">How We Can Help You!</h4>
              <p>DGTALISTS With Its Composite Team Of Skilled Professionals, Having Average Industry Experience To The
                Extent Of 15-20 Years In The Digital Marketing, IT And Software Solutions And Services Domains, Has A
                Clear Value Proposition To Offer To Its Revered Clients. DGTALISTS Through Its Team Of Motivated
                Experts, Consultants And Advisors Works As A One-Stop Shop And Delivers The Best Services Effectively
                Through Its Assessment Mechanism Of The Project Requirements And Align The Right Technology Partner For
                The Execution.</p>
            </div>
            <div className="mission_vision_content">
              <div className="moveable_item"></div>
              <div className="row justify-content-center">
                <div className="col-lg-6">
                  <div className="each_mission_block">
                    <Image width={64} height={64} src="/mission.png" alt="icon"/>
                    <h4>Our Mission</h4>
                    <p>To act as affordable digital partner for businesses by providing simple, safe and secure online
                      solutions and enabling them to achieve profitable growth and high ROI. DGtalists will help your
                      business grow more. </p>
                   
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="each_mission_block">
                    <Image width={64} height={64} src="/binoculars.png" alt="icon"/>
                    <h4>Our Vission</h4>
                    <p>We desire to become one of the most reliable web development firms catering to the global
                      clients.
                      Quality work, dedicated PR, strict adherence to deadlines are what we believe will get us there.
                    </p>
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

export default MissionVision