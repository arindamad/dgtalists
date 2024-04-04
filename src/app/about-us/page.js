import React from 'react'
import Breadceumb from '../custom-software-development/(softwerDevelopment)/Breadcermb'
import Innovate from './Innovate'
import MissionVision from './MissionVision'
import CounterBox from './CounterBox'

const AboutUs = () => {
  return (
    <>
    <Breadceumb data1={'About Us'} data2={'We are known for top-notch web and mobile app solutions that are scalable and rich in features. Our team of skilled developers are experts in building high-tech enterprise solutions that can easily empower your system backend. Expect a blazing fast back end and user-friendly front end for your web and mobile apps. We use event-driven asynchronous JavaScript runtime for the creation of enterprise solutions.'} url={'laravel-bg.jpg'}/>
    <Innovate/>
    <MissionVision/>
    <CounterBox/>
    </>
  )
}

export default AboutUs