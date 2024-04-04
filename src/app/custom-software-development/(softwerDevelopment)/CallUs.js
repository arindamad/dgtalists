import Image from 'next/image'
import React from 'react'
import { BsFillTelephoneFill } from "react-icons/bs";

const CallUs = ({data1,data2,data3}) => {
  return (
    <section className="fixed-cost hire-laravel" id="fixed-cost"
      style={{backgroundImage: `url(/hire-laravel-developer-background.jpg)`}}>
      <div className="container">
        <h3 className="heading">{data1}<span>{data2}</span></h3>
        <p>{data3}</p>
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