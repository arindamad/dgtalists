import Image from 'next/image'
import React from 'react'

const OfferSoftware = () => {
    return (
        <section className="offer-software" id="offer-software">
            <div className="container">
                <h3 className="heading">What We Offer In Custom Web <br/>Application Development Service</h3>

                <div className="row">
                    <div className="col-lg-4">
                        <div className="offer-software-sec">
                            <Image width={415} height={277} src="/dedicated-team.jpg" alt=""/>
                                <h6>Dedicated Team</h6>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="offer-software-sec">
                            <Image width={415} height={277} src="/dedicated-team.jpg" alt=""/>
                                <h6>Dedicated Team</h6>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="offer-software-sec">
                            <Image width={415} height={277} src="/dedicated-team.jpg" alt=""/>
                                <h6>Dedicated Team</h6>
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