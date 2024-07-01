"use client"
import React, { useState } from 'react'
import Modal from '@/component/modal/Modal';

const PartnerShipBreadcrum = () => {
  const [show, setShow] = useState(false);
    
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  return (
    <section className="breadcrumb-banner ai-Breadcrumb" style={{backgroundImage: `url(/ai-software-development-bg.jpg)`}}>
    <div className="container">
      <div className="row">
        <div className="col-lg-7">
          <div className="breadcrumb-content">
            <h1>Partnership & Association</h1>
            <p>At DGtalists, we take pride in delivering effective digital marketing solutions along with mobile app
              development and website designing. In the future, we want to provide outstanding service to a wider
              audience. Hence, we have formed an alliance with Inceptial Tech.</p>

            <a className="cta cta-1" onClick={handleShow} >Hire A Developer</a>
          </div>
        </div>
      </div>
    </div>
    <Modal show={show} onHide={handleClose}/>

  </section>
  )
}

export default PartnerShipBreadcrum