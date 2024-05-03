'use client'
import React, { useState } from 'react';
import ModaL from 'react-bootstrap/Modal';


const Modal = ({show,onHide}) => {
    
  return (
    <ModaL
        show={show}
        onHide={onHide}
        dialogClassName="modal-50w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <ModaL.Header closeButton>
          <ModaL.Title id="example-custom-modal-styling-title">
          <h1 className="modal-title fs-5" id="exampleModalLabel">Get a Quote</h1>
          </ModaL.Title>
        </ModaL.Header>
        <ModaL.Body>
        <form>
            <div className="row">
              <div className="col-lg-6">
                <div className="mb-3">
                  <label for="exampleInputEmail1" className="form-label">Your Name</label>
                  <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="mb-3">
                  <label for="exampleInputEmail1" className="form-label">Email</label>
                  <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="mb-3">
                  <label for="exampleInputEmail1" className="form-label">Phone Number</label>
                  <input type="phone number" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="mb-3">
                  <label for="exampleInputEmail1" className="form-label">Company</label>
                  <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="mb-3">
                  <select className="form-select form-control" aria-label="Default select example">
                    <option selected>Select a Service</option>
                    <option value="1">Custom Software Development</option>
                    <option value="2">Enterprise Software Development </option>
                    <option value="3">Custom Web Development</option>
                    <option value="4">AI Software Development </option>
                    <option value="5">Internet of Things (IOT)</option>
                    <option value="6">Mobile App Development</option>
                    <option value="7">Quality Assurance - Test Engineering</option>
                    <option value="8">Digital Marketing</option>
                  </select>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="mb-3">
                  <label for="exampleFormControlTextarea1" className="form-label">Write Us</label>
                  <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
              </div>
            </div>
          </form>
          <div className="modal-footer">
          <button type="button" className="cta">Submit</button>
        </div>

        </ModaL.Body>
      </ModaL>
  )
}

export default Modal