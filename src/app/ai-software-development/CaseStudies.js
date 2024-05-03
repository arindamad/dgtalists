import Image from 'next/image'
import React from 'react'
import Link from 'next/link';
import { IoIosArrowRoundForward } from "react-icons/io";

const CaseStudies = () => {
    return (
        <>
            <section className="all_case_studies" style={{ backgroundImage: 'url(/case-study-bg.jpg)' }}>
                <div className="container">
                    <h2 className="heading">Check Few Of Our
                        Case Studies</h2>
                    <p className="sub-heading">As a top of the line AI software development company, we cater to businesses across the
                        globe. Over the last few years, we have developed various enterprises software solutions to deal with the
                        needs of various industries globally.<br />

                        At DGtalists, our team consists of skilled, efficient and highly experienced Enterprise App engineers and
                        developers. They use advanced technology tools and programming languages to provide businesses with
                        state-of-the-art AI software solutions to satisfy business objectives, improve customer experience, and give a
                        boost to daily operations in a seamless manner.</p>
                </div>
            </section>
            <div className="all_case_studies_wrap">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="each_case_box">
                                <div className="case_img">
                                    <Image width={415} height={353} src="/rfid-based.png" alt="case-img" />
                                    <div className="readmore">
                                        <Link href="ai-case-study-1"><IoIosArrowRoundForward /></Link>
                                    </div>
                                </div>
                                <div className="case_content">
                                    <Link href="ai-case-study-1"> Credit Risk Scoring</Link>
                                </div>

                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="each_case_box">
                                <div className="case_img">
                                    <Image width={415} height={353} src="/laboratory.png" alt="case-img" />
                                    <div className="readmore">
                                        <Link href="ai-case-study-2"><IoIosArrowRoundForward /></Link>
                                    </div>
                                </div>
                                <div className="case_content">
                                    <Link href="ai-case-study-2"> Customer Churn Rate</Link>
                                </div>

                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="each_case_box">
                                <div className="case_img">
                                    <Image width={415} height={353} src="/block-chain-enable.png" alt="case-img" />
                                    <div className="readmore">
                                        <Link href="ai-case-study-3"><IoIosArrowRoundForward />
                                        </Link>
                                    </div>
                                </div>
                                <div className="case_content">
                                    <Link href="ai-case-study-3">Forex prediction</Link>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CaseStudies