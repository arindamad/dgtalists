"use client"
import React, { useState } from 'react'
import Modal from '@/component/modal/Modal';

const AiBreadcrumb = () => {
  const [show, setShow] = useState(false);
    
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  return (
    <section className="breadcrumb-banner ai-Breadcrumb" style={{backgroundImage: `url(/team_members.jpg)`}}>
    <div className="container">
      <div className="row">
        <div className="col-lg-7">
          <div className="breadcrumb-content">
            <h1>Our Team</h1>

            <p>We provide high-quality, cost-effective, reliable, full-cycle bespoke software development that matches
              your specific needs, budget, and timeframe. Increase your competitive advantage with a custom solution.
            </p>

            <a className="cta cta-1" onClick={handleShow}>Hire A Developer</a>
          </div>
        </div>
      </div>
    </div>
    <Modal show={show} onHide={handleClose}/>
    
  </section>
  )
}

export default AiBreadcrumb