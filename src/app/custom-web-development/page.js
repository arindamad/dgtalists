import React from 'react'
import CustomDevBanner from './CustomDevBanner'
import CustomWeb from './CustomWeb'
import RightService from './RightService'
import Technology from '../custom-software-development/(softwerDevelopment)/Technology'
import WebApplication from './WebApplication'
import CallUs from '../custom-software-development/(softwerDevelopment)/CallUs'
import OfferSoftware from './OfferSoftware'


const CustomDev = () => {
  return (
    <>
    <CustomDevBanner/>
    <CustomWeb/>
    <RightService/>
    <Technology/>
    <WebApplication/>
    <CallUs data1={'Want to Hire a Custom Web Development Team?'} data2={'Please Get In Touch'} data3={'We provide Extended Team, Managed Team and Managed services. Hire 5-10+yrs Experienced, Top Rated Custom Web Developers.'}/>
    <OfferSoftware/>
    </>
  )
}

export default CustomDev