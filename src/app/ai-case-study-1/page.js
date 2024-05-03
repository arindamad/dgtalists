import React from 'react';
import Image from 'next/image';

const AiCaseStydu = () => {
    return (
        <>
            <section className="breadcrumb-banner ai-Breadcrumb" style={{backgroundImage: `url(/ai-software-development-bg.jpg)`}}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7">
                            <div className="breadcrumb-content">
                                <h1>AI Solution</h1>
                                <h4> Credit Risk Scoring</h4>
                                <p>We provide high-quality, cost-effective, reliable, full-cycle bespoke software development that matches your specific needs, budget, and timeframe. Increase your competitive advantage with a custom solution.</p>

                                <a className="cta cta-1" href="#">Hire A Developer</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <main id="main">

                <section className="serviceInnerCaseStudy-sec" >
                    <div className="container">
                        <div className="caseTopHeading">
                            <h3>Credit Risk Scoring</h3>
                            <h4></h4>
                        </div>

                        <div className="sol-sec-1">
                            <div className="row">
                                <div className="col-lg-8">
                                    <h2>Background</h2>
                                    <p>An NBFC was looking for a robust credit risk management system. In response to the unprecedented
                                        growth in unsecured retail loans and the consequent concerns regarding rising systemic risk,
                                        the Reserve Bank of India has increased the risk weights on unsecured consumer loans, including
                                        credit cards, by 25 per cent for both banks and NBFCs. Further, RBI also hiked the risk weights on
                                        credit card receivables by 25 per cent. Presently, a risk weight of 125 per cent is applicable on credit
                                        card receivables for commercial banks, and of 100 per cent for NBFCs.
                                    </p>
                                </div>

                            </div>
                        </div>

                        <div className="sol-sec-2">
                            <div className="row">
                                <div className="col-lg-8">
                                    <h2>Challenges/Problems</h2>
                                    <p>This NBFC had very basic risk management system and needed a credit risk scoring system using Machine Language for the following reasons:</p>

                                    <ul className="caseList">
                                        <li><span>RBI Regulatory compliance:</span> The banking sector is constantly exposed to various types of risk, including strategic risk,
                                            cybersecurity risk, market risk, liquidity risk, credit risk, and operational risk. Among these,
                                            credit risk is arguably the most significant, especially for commercial banks. A credit score is a
                                            numeric expression measuring a person’s creditworthiness. Service suppliers sometimes
                                            need to evaluate a customer’s credit history in order to determine whether or not to provide
                                            a particular service.</li>

                                        <li><span> Inefficient data management:</span> An inability to access the right data when it’s needed causes problematic delays.</li>

                                        <li><span>Constant rework:</span> Analysts can’t change model parameters easily, which results in too much duplication of effort and negatively affects a bank’s efficiency ratio.</li>

                                        <li><span>Cumbersome reporting:</span> Manual, spreadsheet-based reporting processes overburden analysts and IT</li>
                                        <li><span>Use of Machine Language:</span> In order to take advantage of new technologies like Machine Learning that create scores that are far more accurate than traditional analytical techniques.</li>


                                    </ul>
                                </div>

                                <div className="col-lg-4">
                                    <div className="caseRightBtn" style={{background:`url(/expert.jpg) no-repeat center top`, backgroundSize:`cover`}}>
                                        <p> <strong>Ready to experience?</strong></p>
                                        <p><a className="cta" href="#">Talk To Experts</a></p>
                                    </div>
                                </div>

                            </div>
                        </div>


                        <div className="sol-sec-2">
                            <div className="row">
                                <div className="col-lg-12">
                                    <h2>Solutions</h2>
                                    <p>The Solution that DGitalist created used multiple ML models on the data we received and picked the
                                        best performing one. As ML is becoming more represented and influential in finance, it is important
                                        to recognize its benefits and drawbacks to prudently evaluate its performance. ML models have the
                                        potential to uncover subtle relationships, capture various nonlinearities, and process unstructured
                                        data. For example, applications such as fraud-detection analysis or textual data analytics benefit from
                                        not needing to predefine structure, that is, the theory behind finding patterns and extracting
                                        meaningful outputs. ML can do this without the need for humans to derive theoretical models with
                                        accompanied assumptions, and the data is empirically driving the ML model.</p>


                                    <ul className="caseList2">
                                        <li><span>Variable Selection:</span> To account for the limited availability of private company financial data, we only
                                            use ratios that have sufficiently good coverage across the S&P Capital IQ platform, while also
                                            ensuring the representation of relevant risk dimensions.</li>

                                        <li><span>In-Sample and Out-of-Sample Analysis:</span> We split the dataset of private companies into two samples to
                                            help assess the performance of the model in a real-world deployment. The in-sample portion (90%)
                                            represents our training dataset and is used to develop the model, while the out-of-sample portion
                                            (10%) is used to evaluate the model.</li>

                                        <li><span>Different ML Algorithms</span> There are several ML algorithms available, and selecting the optimal algorithm is not straightforward.
                                            Algorithm selection depends on various factors, such as data type and features, transparency and
                                            interpretability, and model performance characteristics.</li>

                                    </ul>

                                    <h3>We selected the following classification and regression algorithms for further analysis:</h3>

                                    <ul className="classificationList">
                                        <li className="highlight">Altman Z-score</li>
                                        <li className="highlight">Logistic regression</li>
                                        <li className="highlight">Support Vector Machine (SVM)</li>
                                        <li className="highlight">Naïve Bayes</li>
                                    </ul>


                                </div>



                            </div>
                        </div>

                        <div className="sol-sec-4">
                            <h3>Results</h3>
                            <p>We evaluated the ML models using the receiver operating characteristics (ROC) curve and
                                corresponding area under the curve (AUC). In-sample, the decision tree model exhibits superior
                                performance with a near-perfect classification of defaulted and non-defaulted companies. Logistic
                                regression and SVM are similar techniques and exhibit equally excellent performance, while the
                                other two approaches demonstrate good or fair performance.</p>

                            <p>Out-of-sample AUC, however, demonstrates a more realistic measure of the model’s performance in
                                a real-world situation. While the decision tree method still shows the best performance, it is only
                                marginally better than logistic regression. It is worth noting that the performance of the decision tree
                                deteriorates considerably out-of-sample compared to in-sample, indicating lower reliability of this
                                method in a real-world application. In comparison, the other approaches exhibit more consistent
                                performance.</p>

                            <Image width={777} height={161} src="/table.jpg" alt="Img" />


                                <p>While two models may have the same AUC, the shape of corresponding ROC curves may be very
                                    different. For example, the decision tree and logistic regression have very similar out-of-sample
                                    AUCs, but their corresponding ROC curves are very distinct and cross at the low false positive rate
                                    and the high true positive rate. This reflects the Type I error and Type II error characteristics of the
                                    two models.
                                </p>

                                <Image width={777} height={597} src="/graph.jpg" alt="Img" />

                                <br/>

                                <div>
                                </div>
                        </div>


                        <div className="sol-sec-1">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="conclusion">
                                        <h2>Summary</h2>
                                        <p>In addition to model performance, transparency and interpretability also play a vital role in the
                                            model evaluation. Namely, understanding drivers and the sensitivity of model predictions to changes
                                            in the input is an important aspect of model usability. In that aspect, logistic regression is preferred
                                            to SVM as it is more straightforward to analyse and interpret. The logistic regression also enables
                                            users to incorporate various constrains easily, thus making this technique highly controllable and
                                            adaptable.</p>
                                    </div>
                                </div>
                            </div>
                        </div>



                        <div className="sol-sec-5">
                            <h3>Benefits</h3>

                        <br/>
                        <div className="row">
                            <div className="col-lg-3">
                                <div className="benifitsBlock">
                                    <Image width={70} height={70} src="/downtime-ic.png" alt="Ic" />
                                    <div><h5>Better model management that spans the entire modelling life cycle.</h5>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3">
                                <div className="benifitsBlock">
                                    <Image width={70} height={70} src="/pro-efficiancy-ic.png" alt="Ic" />
                                    <div><h5>Real-time scoring and limits monitoring.</h5>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3">
                                <div className="benifitsBlock">
                                    <Image width={70} height={70} src="/cost-saving-ic.png" alt="Ic" />
                                    <div><h5>Robust stress-testing capabilities.</h5>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3">
                                <div className="benifitsBlock">
                                    <Image width={70} height={70} src="/product-quality-ic.png" alt="Ic" />
                                    <div><h5>Data visualisation capabilities and business intelligence tools that get important information
                                        into the hands of those who need it, when they need it</h5>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                        </div>
                    </div>





                </div>
            </section>


        </main >
    </>
  )
}

export default AiCaseStydu