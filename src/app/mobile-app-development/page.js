import React from 'react'
import MbBreadcrumb from './MbBreadcrumb'
import MobileAppIntro from './mobileAppIntro'
import Expert from './Expert'
import Emerging from './Emerging'
import OfferSoftware from './OfferSoftware'
import CaseStudies from '../enterprise-software-development/CaseStudies'

const MobileAppDev = () => {
  return (
    <>
    <MbBreadcrumb/>
    <MobileAppIntro/>
    <Expert/>
    <Emerging/>
    <OfferSoftware/>
    <CaseStudies/>
    </>
  )
}

export default MobileAppDev