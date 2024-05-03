import Image from 'next/image'
import React from 'react'
import { PiGear } from "react-icons/pi";
import Link from 'next/link'


const AboutUs = () => {
  return (
        <section className="about-us" id="about-us">

<div className="container">

  <div className="row">

    <div className="col-lg-6">

      <div className="left-side">

        <div className="left-first-img">

          <div className="total-img">

            <Image src="/about-1-1.jpg" width={484} height={348} alt=""/>

            <div className="second-img">

              <Image src="/about-1-2.jpg" width={290} height={226} alt=""/>

            </div>

          </div>

        </div>

        <div className="left-side-pop">

          <div className="left-side-icon">

            <PiGear/>



          </div>

          <div className="left-side-text">

            <p className="heading">150+ Project Done</p>

            <span className="sub-heading">Small Until High Projects</span>

          </div>

        </div>

      </div>

    </div>

    <div className="col-lg-6">

      <div className="spacer">

        <h2 className="sub-heading">ABOUT US</h2>

          <h3 className="heading">Feel the Difference with Dgtalists! Work with the #1 Software Development Company,
            Now!</h3>

          <p className="about-us-cont">Welcome to Dgtalists, the #1 Software Development Company that ensures a
            transformative experience for every project. Innovation meets excellence at our company, and we pride
            ourselves on delivering tailored solutions to our valued clients. </p>
          <Link className="cta" href="about-us">Read More</Link>
         

      </div>


    </div>

  </div>

  <div className="float-img">

    <Image width={120} height={107} src="/client-bg.png"/>

  </div>

</div>

</section>
  )
}

export default AboutUs