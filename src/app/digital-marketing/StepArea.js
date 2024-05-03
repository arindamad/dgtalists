import Image from 'next/image'
import React from 'react'
import { FaPenNib } from "react-icons/fa";


const StepArea = () => {
  return (
    <section className="step-area dm_step_area">
      <div className="container">
        <h2 className="heading">Our Digital <br/> Marketing Process</h2>
        <div className="row">
          <div className="col-lg-12">
            <div className="tp-step-wrapper">
              <div className="tp-step-item ">
                <div className="tp-step-item-count">
                  <span>1</span>
                </div>
                <div className="tp-step-item-overlay">
                  <div className="tp-step-item-thumb">
                    <Image width={200} height={200} src="/step-thumb-1.png" alt=""/>
                  </div>
                  <div className="tp-step-item-thumb-icon">
                    <i className="bi bi-vector-pen"></i>
                  </div>
                </div>
                <div className="tp-step-item-content">
                  <h4 className="tp-step-item-title">Analyze <br/> Business Landscape</h4>

                </div>
              </div>
              <div className="tp-step-item tp-step-item-even ">
                <div className="tp-step-item-count">
                  <span>2</span>
                </div>
                <div className="tp-step-item-overlay">
                  <div className="tp-step-item-thumb">
                    <Image width={200} height={200} src="/step-thumb-2.png" alt=""/>
                  </div>
                  <div className="tp-step-item-thumb-icon">
                    <i className="bi bi-vector-pen"></i>
                  </div>
                </div>
                <div className="tp-step-item-content">
                  <h4 className="tp-step-item-title">Build <br/> Smart Strategies</h4>

                </div>
              </div>
              <div className="tp-step-item ">
                <div className="tp-step-item-count">
                  <span>3</span>
                </div>
                <div className="tp-step-item-overlay">
                  <div className="tp-step-item-thumb">
                    <Image width={200} height={200} src="/step-thumb-3.png" alt=""/>
                  </div>
                  <div className="tp-step-item-thumb-icon">
                    <i className="bi bi-vector-pen"></i>
                  </div>
                </div>
                <div className="tp-step-item-content">
                  <h4 className="tp-step-item-title">Create <br/> Compelling Content</h4>

                </div>
              </div>
              <div className="tp-step-item tp-step-item-even">
                <div className="tp-step-item-count">
                  <span>4</span>
                </div>
                <div className="tp-step-item-overlay">
                  <div className="tp-step-item-thumb">
                    <Image width={200} height={200} src="/step-thumb-4.png" alt=""/>
                  </div>
                  <div className="tp-step-item-thumb-icon">
                    <i className="bi bi-vector-pen"></i>
                  </div>
                </div>
                <div className="tp-step-item-content">
                  <h4 className="tp-step-item-title">Derive <br/> Meaningful Insights</h4>

                </div>
              </div>
              <div className="tp-step-item ">
                <div className="tp-step-item-count">
                  <span>5</span>
                </div>
                <div className="tp-step-item-overlay ">
                  <div className="tp-step-item-thumb">
                    <Image width={200} height={200} src="/step-thumb-5.png" alt=""/>
                  </div>
                  <div className="tp-step-item-thumb-icon">
                    <i className="bi bi-vector-pen"></i>
                  </div>
                </div>
                <div className="tp-step-item-content">
                  <h4 className="tp-step-item-title">Enrich <br/> Customer Experiences
                  </h4>

                </div>
              </div>
              <div className="tp-step-line-shape d-none d-xl-block">
                <Image width={200} height={200} src="/step-line-shape-1.svg" alt=""/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default StepArea