import Image from 'next/image'
import React from 'react'

const TechnologySec = () => {
    return (
        <section className="technology-sec technology-sec-1 test_automation_tool tools_we_use" id="technology-sec">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="technology-sec-cont">
                            <h3 className="heading">Test Automation Tools We Use
                            </h3>
                            <p>The tools help us conduct efficient and comprehensive automated testing across various platforms and
                                technologies.
                            </p>
                            <p>We utilize a diverse array of industry-leading test automation tools including:</p>
                        </div>
                        <div className="row">
                            <div className="col-lg-3">
                                <div className="spcl-card spcl-card-1">
                                    <Image width={141} height={29} src="/we-use-1.png" alt=""/>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="spcl-card spcl-card-1">
                                    <Image width={141} height={29} src="/we-use-2.png" alt=""/>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="spcl-card spcl-card-1">
                                    <Image width={141} height={29} src="/we-use-3.png" alt=""/>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="spcl-card spcl-card-1">
                                    <Image width={141} height={29} src="/we-use-4.png" alt=""/>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="spcl-card spcl-card-1">
                                    <Image width={141} height={29} src="/we-use-5.png" alt=""/>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="spcl-card spcl-card-1">
                                    <Image width={141} height={29} src="/we-use-6.png" alt=""/>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="spcl-card spcl-card-1">
                                    <Image width={141} height={29} src="/telerik.png" alt=""/>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="spcl-card spcl-card-1">
                                    <Image width={141} height={29} src="/cucumber.png" alt=""/>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="spcl-card spcl-card-1">
                                    <Image width={141} height={29} src="/testcomplete.png" alt=""/>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="spcl-card spcl-card-1">
                                    <Image width={141} height={29} src="/lambadatest.png" alt=""/>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="spcl-card spcl-card-1">
                                    <Image width={141} height={29} src="/testingwhiz.png" alt=""/>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="spcl-card spcl-card-1">
                                    <Image width={141} height={29} src="/roboto.png" alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="technology-sec-image">
                            <Image width={636} height={454} src="/test-automation.jpg" alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TechnologySec