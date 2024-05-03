import Image from 'next/image'
import React from 'react'

const TestingType = () => {
    return (
        <section className="testing-type" id="testing-type">
            <div className="offer__shadow ">
                <Image width={36} height={36} src="/offer-shadow-shape.png" alt="shadow"/>
            </div>
           
            <div className="offer__shape-right">
                <Image width={36} height={36} src="/offer-bg-shape-right.png" alt="shape"/>
            </div>
            <div className="container">
                <h4 className="heading">We Perform Various Kinds of Testing</h4>
                <p className="sub-heading">You can depend on us for:</p>
                <div className="row">
                    <div className="col-lg-2">

                        <div className="offer__item">
                            <div className="offer__icon">
                                <Image width={36} height={36} src="/testing-type-1.png" alt=""/>
                            </div>
                            <div className="card-content">
                                <h6>Usability <br/> Testing</h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-2">
                        <div className="offer__item">
                            <div className="offer__icon">
                                <Image width={36} height={36} src="/integration-testing.png" alt=""/>
                            </div>
                            <div className="card-content">
                                <h6>Security <br/> Testing</h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-2">
                        <div className="offer__item">
                            <div className="offer__icon">
                                <Image width={36} height={36} src="/compatibility-testing.png" alt=""/>
                            </div>
                            <div className="card-content">
                                <h6>Performance <br/> Testing</h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-2">
                        <div className="offer__item">
                            <div className="offer__icon">
                                <Image width={36} height={36} src="/performance-testing.png" alt=""/>
                            </div>
                            <div className="card-content">
                                <h6>Compatibility <br/> Testing</h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-2">

                        <div className="offer__item">
                            <div className="offer__icon">
                                <Image width={36} height={36} src="/security-testing-2.png" alt=""/>
                            </div>
                            <div className="card-content">
                                <h6>Integration <br/> Testing</h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-2">

                        <div className="offer__item">
                            <div className="offer__icon">
                                <Image width={36} height={36} src="/usability-testing.png" alt=""/>
                            </div>
                            <div className="card-content">
                                <h6>Functional <br/> Testing</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TestingType