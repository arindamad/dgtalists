import Image from 'next/image'
import React from 'react'
import Link from 'next/link'

import { IoIosArrowRoundForward } from "react-icons/io";
const CaseStudies = () => {
  return (
    <>
    
    <section className="all_case_studies" style={{backgroundImage: "url(/case-study-bg.jpg)"}}>
      <div className="container">
        <h2 className="heading">Check Few Of Our
          Case Studies</h2>
        <p className="sub-heading">Designed specifically with modern businesses, companies and startups in mind, Connect is
          an astounding and commanding theme sure to meet all of your needs. Packed with a large collection of elements,
          pages, blog templates, shop layouts, portfolio lists and portfolio sliders, Connect ensures effortless website
          creation.</p>
      </div>
    </section>
    <div className="all_case_studies_wrap">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="each_case_box">
              <div className="case_img">
                <Image src="/automation-test.jpg" width={415} height={276} alt="case-img"/>
                <div className="readmore">
                  <Link href="automation-testing"><IoIosArrowRoundForward/></Link>
                </div>
              </div>
              <div className="case_content">
                <Link href="automation-testing">RFID based Asset Tracking Solution And EAM</Link>
              </div>

            </div>
          </div>
          <div className="col-lg-4">
            <div className="each_case_box">
              <div className="case_img">
                <Image width={415} height={276} src="/saas-case.jpg" alt="case-img"/>
                <div className="readmore">
                  <Link href="saas-based-case-study"><IoIosArrowRoundForward/></Link>
                </div>
              </div>
              <div className="case_content">
                <Link href="saas-based-case-study">RFID based Asset Tracking Solution And EAM</Link>
              </div>

            </div>
          </div>
          <div className="col-lg-4">
            <div className="each_case_box">
              <div className="case_img">
                <Image width={415} height={276} src="/mobile-case.jpg" alt="case-img"/>
                <div className="readmore">
                  <Link href="katalon-case-study"><IoIosArrowRoundForward/>
</Link>
                </div>
              </div>
              <div className="case_content">
                <Link href="katalon-case-study">RFID based Asset Tracking Solution And EAM</Link>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default CaseStudies