import React from 'react'
import Breadceumb from '../custom-software-development/(softwerDevelopment)/Breadcermb'
import Automation from './Automation'
import Solution from './Solution'
import AiDevelopment from './AiDevelopment'
import AiTechnology from './AiTechnology'
import CaseStudies from './CaseStudies'

const AiDev = () => {
  return (
    <>
    <Breadceumb data1={'Avail Top-Rated AI Software Development Services, at the Best Rates!'} data2={'Do you want to make your business stand out, leveraging the potential of AI (Artificial Intelligence)? Choose the Dgtalists team! As a top-notch AI Software Development services provider, we can help you make the most of AI and transform your business digitally.'} data3={'Watch in amazement as we harness the power of advanced machine learning technologies and state-of-the-art AI tools to resolve the unique challenges for your enterprise.'} url={'ai-software-development-bg.jpg'}/>
    <Automation/>
    <Solution/>
    <AiDevelopment/>
    <AiTechnology/>
    <CaseStudies/>

    </>
  )
}

export default AiDev