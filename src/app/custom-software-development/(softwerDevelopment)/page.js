import React from 'react'
import Breadceumb from './Breadcermb'
import Custom_dev from './Custom_dev'
import WebApp from './WebApp'
import CallUs from './CallUs'
import Industry from './Industry'
import SoftwerDev from './SoftwerDev'
import Technology from './Technology'
import CustomDev from './CustomDev'
import WeOffer from './WeOffer'

const SoftwareDevelopment = () => {
  return (
    <>
      <Breadceumb data1={'For Innovative, Custom Software Development Services, DGtalists is Your Best Bet!'} data2={'Looking for tailored software solutions that not only meet but exceed your expectations? Welcome to DGtalists, your go-to destination for tailored solutions for your business requirements.'} data3={'In a rapidly evolving digital landscape, our commitment to excellence makes us outstanding! With a team of highly skilled professionals, we deliver cutting-edge, custom software development services.'} url={"custom-software-bg.jpg"}/>
      <Custom_dev />
      <WebApp />
      <CallUs data1={"Looking To Develop a Fixed Cost Project ?"} data2={'Please get in touch'} data3={'If the details are clear at the start of the project then project based hiring may be a cost effective solution'}/>
      <Industry/>
      <SoftwerDev/>
      <Technology/>
      <CustomDev/>
      <WeOffer/>
    </>

  )
}

export default SoftwareDevelopment