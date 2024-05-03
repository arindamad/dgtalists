import React from 'react';
import Link from 'next/link'

const SoftwerDev = () => {
  return (
    <section id="expertise" className="expertise" style={{backgroundImage:`url(/expertise-bg.jpg)`}}>

      <div className="container">

        <div className="expertise-content">

          <p className="sub-heading">BRING YOUR IDEAS</p>

          <h2 className="heading">Outsource Custom Enterprise Software Development to Us, Now!</h2>

          <p className="para-5">Are you ready to take your business to the next level? Experience the difference of
            working with a team dedicated to your success. Outsource your custom enterprise software development
            requirements to DGtalists.</p>
          <p className="para-5">With us, custom software solutions are only a click away for you! Contact us today to
            transform your vision into reality. Discuss your project with us, now.</p>
          <Link className="cta" href="contact-us">Contact us today</Link>

        </div>

      </div>

    </section>
  )
}

export default SoftwerDev