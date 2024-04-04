import React from 'react'
import Breadceumb from '../custom-software-development/(softwerDevelopment)/Breadcermb'
import TrackCustomer from './TrackCustomer'
import AiSoftwareDevelopment from './AiSoftwareDevelopment'
import StepArea from './StepArea'
import TestingType from './TestingType'
import ValuableClient from './ValuableClient'

const DigitalMarketing = () => {
    return (
        <>
            <Breadceumb data1={'Digital Marketing'} data2={'Looking for high quality Python development services for your projects, at affordable rates and with 100% guarantee of reliability? When there is the Dgtalists team, you need not look further. With decades of industry experience and a proven track record, we are ready to provide your business with cutting-edge, effective and result-oriented Python development services that stand out from the clutter. Discuss your projects with our specialist Python developers, now!'} url={'digital-marketing-bg.png'} />
            <TrackCustomer />
            <AiSoftwareDevelopment/>
            <StepArea/>
            <TestingType/>
            <ValuableClient/>

        </>
    )
}

export default DigitalMarketing