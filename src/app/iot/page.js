import React from 'react'
import Breadceumb from '../custom-software-development/(softwerDevelopment)/Breadcermb'
import IotDevelopment from './IotDevelopment'
import CallUs from '../custom-software-development/(softwerDevelopment)/CallUs'
import IotApplication from './IotApplication'
import OurSolution from './OurSolution'
import HowIot from './HowIot'
import Technology from '../custom-software-development/(softwerDevelopment)/Technology'
import AllCaseStudies from './AllCaseStudies'

const Iot = () => {
  return (
    <>
    <Breadceumb data1={'Need Proven, Tailored (Internet of Things) IoT Services and Solutions for Your Business? Choose DGtalists!'} data2={'Internet of Things (IoT) stands at the forefront of innovation in a world driven by technological advancements. Businesses are leveraging IoT to gain a competitive edge, enhancing efficiency and streamlining operations.'} data3={'Are you seeking tailored, proven IoT services and solutions? Look no further than DGtalists! With a commitment to excellence, we can be your go-to partner for harnessing the full potential of IoT technologies.'} url={'iot-bg.jpg'}/>
    <IotDevelopment/>
    <CallUs data1={'Looking To IoT Domain Expert ?'} data2={'Please Get In Touch'} data3={'With DGtalists, you can expect the perfect blend of IoT domain expertise, technological competency, and industry-specific experience.'}/>
    <IotApplication/>
    <OurSolution/>
    <HowIot/>
    <Technology/>
    <AllCaseStudies/>
    </>

  )
}

export default Iot