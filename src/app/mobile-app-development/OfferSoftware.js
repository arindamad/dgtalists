import Image from 'next/image'
import React from 'react'

const OfferSoftware = () => {
  return (
    <section className="offer-software offer-software-1" id="offer-software">
      <div className="container">
        <h3 className="heading">What we offer in <br/> mobile app development Service</h3>
        
        <div className="row">
          <div className="col-lg-4">
            <div className="offer-software-sec">
              <Image width={415} height={277} src="/dedicated-team.jpg" alt=""/>
              <h6>Hire Developer</h6>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="offer-software-sec">
              <Image width={415} height={277} src="/dedicated-team.jpg" alt=""/>
              <h6>Hire Dedicated team</h6>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="offer-software-sec">
              <Image width={415} height={277} src="/dedicated-team.jpg" alt=""/>
              <h6>Fixed Cost Project</h6>
            </div>
          </div>
        </div>
        <div className="button-1">
          <a className="cta" href="#" data-bs-toggle="modal" data-bs-target=".enquiry_modal_wrap">Discuss Your Project</a>
        </div>
      </div>
    </section>
  )
}

export default OfferSoftware