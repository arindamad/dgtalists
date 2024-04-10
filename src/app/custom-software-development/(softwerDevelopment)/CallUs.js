'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import { BsFillTelephoneFill } from "react-icons/bs";
import Model from '@/component/modal/Modal';

const CallUs = ({data1,data2,data3}) => {
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  return (
    
    <>
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
          <a className="cta-1" href="#" data-bs-toggle="modal" data-bs-target=".enquiry_modal_wrap" onClick={handleShow}>Drop a Message</a>
        </h4>
      </div>
    </section>
    <Model show={show} onHide={handleClose}/>
    
    </>
    
  )
}

export default CallUs