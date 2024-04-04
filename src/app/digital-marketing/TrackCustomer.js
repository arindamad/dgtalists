import Image from 'next/image'
import React from 'react'

const TrackCustomer = () => {
  return (
    <section className="track-customer" id="track-customer">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <Image width={636} height={465} src="/track-order.png" alt=""/>
          </div>
          <div className="col-lg-6">
            <div className="second-part">
              <span>Track Customers</span>
              <h6 className="heading">Powerful Tools For Your Customers</h6>
              <p className="sub-heading">This is due to their excellent service, competitive pricing and customer support.
                It's throughly refresing to get such a personal touch.</p>
              <ul>
                <li>Refresing to get such a personal touch.</li>
                <li>Refresing to get such a personal touch.</li>
                <li>Refresing to get such a personal touch.</li>
              </ul>
              <a href="#" className="cta">Learn More</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TrackCustomer