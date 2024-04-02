import Image from 'next/image'
import React from 'react'
import { BsFillTelephoneFill } from "react-icons/bs";

const CallUs = () => {
  return (
    <section className="fixed-cost hire-laravel" id="fixed-cost"
      style={{backgroundImage: `url(/hire-laravel-developer-background.jpg)`}}>
      <div className="container">
        <h3 className="heading">Looking To Develop a Fixed Cost Project ?<span>Please get in touch</span></h3>
        <p>If the details are clear at the start of the project then project based hiring may be a cost effective
          solution.</p>
        <h4>
          <span className="ph-ic">
          

            <BsFillTelephoneFill/>
          </span>
          <span className="text-white">
            +91
          </span>
          9748791820
          <span className="arrow">
            <Image width={142} height={31} src="/white-arrow.png" alt=""/>
          </span>
          <a className="cta-1" href="#" data-bs-toggle="modal" data-bs-target=".enquiry_modal_wrap">Drop a Message</a>
        </h4>
      </div>
    </section>
  )
}

export default CallUs