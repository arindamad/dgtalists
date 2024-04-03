import Image from 'next/image'
import React from 'react'
import { IoIosArrowRoundForward } from "react-icons/io";


const AllCaseStudies = () => {
  return (
    <>
    <section className="all_case_studies" style={{backgroundImage: 'url(/case-study-bg.jpg)'}}>
      <div className="container">
        <h2 className="heading">Check Few Of Our
          Case Studies</h2>
        <p className="sub-heading">At DGTALISTS, we are committed to making testing more efficient by adopting the
          proprietary Integrated Manual and Automated Testing (IMAAT) approach. Our proficient Test Automation Leads
          conduct a meticulous analysis to gauge the feasibility of automated testing for each project, meticulously
          weighing the potential Return on Investment (ROI).
          After establishing the economic viability, we develop reusable test scripts to expedite the process. These are
          designed for automated testing at the level of UI and API. We follow a meticulous approach, ensuring seamless
          and quick integration of test automation in just 3 weeks. This ensures efficiency as well as a robust
          foundation for comprehensive testing strategies.</p>
      </div>
    </section>
    <div className="all_case_studies_wrap">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="each_case_box">
              <div className="case_img">
                <Image width={415} height={276} src="/automation-test.jpg" alt="case-img"/>
                <div className="readmore">
                  <a href="iot-case-study.html"><IoIosArrowRoundForward/></a>
                </div>
              </div>
              <div className="case_content">
                <a href="iot-case-study.html"> Overcoming Needle Breakage with IoT</a>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default AllCaseStudies