import React from 'react'
import PartnerShipBreadcrum from './PartnerShipBreadcrum'
import Innovate from './Innovate'
import WhyChooseUs from './WhyChooseUs'
import ValuableClient from '../digital-marketing/ValuableClient'
import CallUs from '../custom-software-development/(softwerDevelopment)/CallUs'
import OfficeMap from './OfficeMap'
import AboutIncepTech from './AboutIncepTech'

const PartnerShip = () => {
  return (
    <>
    <PartnerShipBreadcrum/>
    <Innovate/>
    <WhyChooseUs/>
    <ValuableClient/>
    <CallUs data1={'Looking For Something Specific?'} data2={'Please Get In Touch'} data3={'With advanced tech expertise, we can engineer industry-standard web solutions for your business. If you want to hire , feel free to contact us.'}/>
    <OfficeMap/>
    <AboutIncepTech/>
    
    </>
  )
}

export default PartnerShip