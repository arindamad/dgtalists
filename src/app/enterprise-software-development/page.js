import React from 'react';
import BreadceumbBanner from './breadcrumb-banner';
import KeyService from './KeyService';
import CallUs from '../custom-software-development/(softwerDevelopment)/CallUs';
import Emerging from './Emerging';
import Technology from '../custom-software-development/(softwerDevelopment)/Technology';
import CaseStudies from './CaseStudies';


const softwerDev = () => {
  return (
    <>
    <BreadceumbBanner/>
    <KeyService/>
    <CallUs data1={'Want to Hire a Enterprise Software Development Team? '} data2={'Please get in touch'} data3={'We provide Extended Team, Managed Team and Managed services.Hire 5-10+yrs Experienced, Top Rated Custom Enterprise Application Developers'}/>
    <Emerging/>
    <Technology/>
    <CaseStudies/>
    </>
  )
}

export default softwerDev