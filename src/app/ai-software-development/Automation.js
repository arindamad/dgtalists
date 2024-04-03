import Image from 'next/image'
import React from 'react'

const Automation = () => {
    return (
        <section className="automation" id="automation">
            <div className="container">
                <h3 className="heading">Our AI Software <br/> Development Process!</h3>
                <p className="sub-heading">Our AI development team at DGtalists consists of experts specializing in AI solutions
                    development, to provide you with high-quality solutions satisfying your particular requirements.</p>
                <div className="row">
                    <div className="col-lg-4">
                        <div className="card">
                            <div className="card-img">
                                <Image width={60} height={60} src="/search.png" alt=""/>
                            </div>
                            <small>01</small>
                            <div className="card-content">
                                <h6>Discovery and Analysis</h6>
                                <p className="sub-heading">We understand the specific business goals and requirements of our clients and
                                    analyze their
                                    existing processes and systems, to detect areas where maximum improvement with AI is possible.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="card">
                            <div className="card-img">
                                <Image width={60} height={60} src="/task.png" alt=""/>
                            </div>
                            <small>02</small>
                            <div className="card-content">
                                <h6>Strategy and Planning</h6>
                                <p className="sub-heading">Our team understands your requirements clearly and comes up with AI strategies
                                    that align with your business goals properly. You can expect proper plans outlining project scope,
                                    development, resources required and timelines.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="card">
                            <div className="card-img">
                                <Image width={60} height={60} src="/curve.png" alt=""/>
                            </div>
                            <small>03</small>
                            <div className="card-content">
                                <h6>Design and Development</h6>
                                <p className="sub-heading">Based on information about your business needs gathered during discovery and
                                    analysis stage we provide you with customized AI solutions. We use cutting-edge AI development
                                    platforms and tools, to give you custom AI models as per your specific business requirements.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="card">
                            <div className="card-img">
                                <Image width={60} height={60} src="/testing-2.png" alt=""/>
                            </div>
                            <small>04</small>
                            <div className="card-content">
                                <h6>Testing and Validation </h6>
                                <p className="sub-heading">We carry out proper AI solutions testing, to ensure that the outcomes satisfy
                                    your particular
                                    business requirements. With a variety of testing methods, we validate AI solution performance and
                                    accuracy as precisely as possible.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="card">
                            <div className="card-img">
                                <Image width={60} height={60} src="/integration.png" alt=""/>
                            </div>
                            <small>05</small>
                            <div className="card-content">
                                <h6>Integration and Deployment </h6>
                                <p className="sub-heading">We integrate AI solutions into your business processes and systems in a seamless
                                    manner. Solutions
                                    are deployed effectively and constant support is offered by our team during the process of
                                    deployment.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="card">
                            <div className="card-img">
                                <Image width={60} height={60} src="/customer-supporrt.png" alt=""/>
                            </div>
                            <small>06</small>
                            <div className="card-content">
                                <h6>Maintenance and Support </h6>
                                <p className="sub-heading">We develop cutting-edge AI solutions and also offer ongoing support and
                                    maintenance throughout.
                                    Whether it comes to ensuring operational efficiency, detecting and fixing problems, monitoring the
                                    system or making upgrades that are needed, you can always rely on our specialists.</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Automation