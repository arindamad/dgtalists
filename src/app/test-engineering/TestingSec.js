import Image from 'next/image'
import React from 'react'

const TestingSec = () => {
    return(
    <section className="testing-sec" id="testing-sec">
        <div className="container">
            <h3 className="heading">The Best Test Engineer Development Team for Your Needs!</h3>
            <p className="sub-heading">We offer Managed, Managed Team and Extended Team assistance. Our Custom Enterprise
                Application developers come with 5 – 10 years of industry experience. Thus, you can expect security at all
                stages of the performance of your product. We offer superior Test Engineer development and QA services that
                integrate seamlessly with your project.
                You can get:
            </p>
            <div className="addon-service-main">
                <div className="row no-gutters">
                    <div className="col-lg-3 col-md-6 md-mb-50">
                        <div className="rs-addon-services">
                            <div className="addon-wrap">
                                <div className="number-text pt-100 md-pt-60">
                                    <div className="number-area">
                                        <Image width={40} height={40} src="/thought-1.png" alt=""/>
                                    </div>
                                    <div className="content-txt">
                                        <h3 className="number-title">
                                            Swift testing, fueled by in-depth domain expertise
                                        </h3>
                                        <p className="number-txt">
                                            We conduct rapid testing propelled by a profound understanding of the specific domain, ensuring
                                            both speed and precision in the testing process.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 md-mb-50">
                        <div className="rs-addon-services">
                            <div className="addon-wrap">
                                <div className="number-text pt-72 md-pt-60">
                                    <div className="number-area">
                                        <Image width={40} height={40} src="/automation.png" alt=""/>
                                    </div>
                                    <div className="content-txt">
                                        <h3 className="number-title">
                                            Comprehensive test automation across all layers
                                        </h3>
                                        <p className="number-txt">
                                            We implement a resilient Automated Regression test strategy that covers every layer of your
                                            software architecture, ensuring thorough and consistent testing for heightened product quality.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 md-mb-50">
                        <div className="rs-addon-services">
                            <div className="addon-wrap">
                                <div className="number-text pt-100 md-pt-60">
                                    <div className="number-area">
                                        <Image width={40} height={40} src="/high-performance-1.png" alt=""/>
                                    </div>
                                    <div className="content-txt">
                                        <h3 className="number-title">
                                            High-Performance testing automation
                                        </h3>
                                        <p className="number-txt">
                                            We optimize testing efficiency by employing high-performance testing methodologies that
                                            transcend various platforms, ensuring robust and reliable evaluations of your software.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 md-mb-50">
                        <div className="rs-addon-services">
                            <div className="addon-wrap">
                                <div className="number-text pt-72 md-pt-60">
                                    <div className="number-area">
                                        <Image width={40} height={40} src="/fast-&-frequent.png" alt=""/>
                                    </div>
                                    <div className="content-txt">
                                        <h3 className="number-title">
                                            Agile, regular releases with ongoing testing integration
                                        </h3>
                                        <p className="number-txt">
                                            We facilitate agile development cycles with frequent releases, supported by the integration of
                                            continuous testing methodologies to ensure that iterations are reliable and superior in quality.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default TestingSec