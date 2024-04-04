import Image from 'next/image'
import React from 'react'

const CounterBox = () => {
  return (
    <section className="counter_box">
      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            <div className="each_cpounter_box">
              <div className="counter_icon">
                <Image width={60} height={60} src="/client.png" alt="counter-img"/>
              </div>
              <div className="counter_content">
                <span>150</span>
                <p>Satisfied Clients</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="each_cpounter_box">
              <div className="counter_icon">
                <Image width={60} height={60} src="/closure.png" alt="counter-img"/>
              </div>
              <div className="counter_content">
                <span>530</span>
                <p>Projects Delivered</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="each_cpounter_box">
              <div className="counter_icon">
                <Image width={60} height={60} src="/team.png" alt="counter-img"/>
              </div>
              <div className="counter_content">
                <span>45</span>
                <p>Team Members</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="each_cpounter_box">
              <div className="counter_icon">
                <Image width={60} height={60} src="/experience.png" alt="counter-img"/>
              </div>
              <div className="counter_content">
                <span>5</span>
                <p>Years Of Experience</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CounterBox