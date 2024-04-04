import React from 'react'
import Breadceumb from '../custom-software-development/(softwerDevelopment)/Breadcermb'
import Automation from './Automation'
import CallUs from '../custom-software-development/(softwerDevelopment)/CallUs'
import TestingSec from './TestingSec'
import TestingType from './TestingType'
import WeTest from './WeTest'
import OurSolution from './OurSolution'
import TechnologySec from './TechnologySec'
import CaseStudies from './CaseStudies'



const TestEngineering = () => {
  return (
    <>
    <Breadceumb data1={'DGtalists Helps You with Quality Assurance.'} data2={"When it comes to test engineering services, do not look beyond DGtalists. Quality is non-negotiable at DGtalists. Our commitment to quality extends to thorough testing, ensuring functional, reliable and secure solutions for you at all stages. For many years, we have been providing businesses with tailored software development assistance, realizing their visions and matching their budget within specified time-span."} url={'quality-assurance-bg.png'}/>
    <Automation/>
    <CallUs data1={'Want to Hire a Test Engineer?'} data2={'Please get in touch'} data3={'We provide Extended Team, Managed Team and Managed services. Hire 5-10+yrs Experienced, Top Rated Custom Enterprise Application Developers'}/>
    <TestingSec/>
    <TestingType/>
    <WeTest/>
    <OurSolution/>
    <TechnologySec/>
    <CaseStudies/>
    </>
  )
}

export default TestEngineering