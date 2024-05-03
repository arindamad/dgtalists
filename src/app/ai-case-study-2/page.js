import React from 'react'
import Image from 'next/image'

const AicaseStudy2 = () => {
    return (
  <>
            <section className="breadcrumb-banner ai-Breadcrumb" style={{backgroundImage: `url(/ai-software-development-bg.jpg)`}}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7">
                            <div className="breadcrumb-content">
                                <h1>AI Solution</h1>
                                <p><h4>Customer Churn rate</h4></p>
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
                            <h3>Customer Churn rate of a telecom company</h3>
                            <h4></h4>
                        </div>

                        <div className="sol-sec-1">
                            <div className="row">
                                <div className="col-lg-8">
                                    <h2>Background</h2>
                                    <p>When it comes to useful business applications of machine learning, it doesn’t get much better than
                                        customer churn prediction. Churn rate is a critical metric of customer satisfaction. Low churn rates
                                        mean happy customers; high churn rates mean customers are leaving you. It takes a lot more money
                                        (up to five times more) to get new customers than to keep the ones you already have.</p>

                                    <p>A telecom company wanted a report on its customer churn rate. An understanding of the problem is
                                        critical in devising a solution. The churn rate in this case provides clarity on the quality of the
                                        business, shows customer satisfaction with the service, and allows for comparison with competitors
                                        to gauge an acceptable level of churn.</p>
                                </div>

                            </div>
                        </div>

                        <div className="sol-sec-2">
                            <div className="row">
                                <div className="col-lg-8">
                                    <h2>Challenges/Problems</h2>

                                    <ul className="caseList">
                                        <li> <span>Identifying at-risk customers.</span></li>
                                        <li><span>Identifying customer pain points.</span></li>
                                        <li><span>Identifying strategy/methods to lower churn and increase customer retention.</span></li>

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
                                    <p><strong>DGitalist responded with a custom solution with the following features:</strong></p>


                                    <ul className="caseList2">
                                        <li><span>Initially some features were extracted from the data:</span> <br/>
                                            <p> Tenure: Number of months the customer has stayed with the company</p>
                                            <p> MonthlyCharges: The amount charged to the customer monthly</p>
                                            <p> TotalCharges: The total amount charged to the customer</p>
                                        </li>

                                        <li><span>These features can also be subdivided into:</span> <br/>
                                            <p>Demographic customer information: Gender , SeniorCitizen , Partner , Dependents</p>
                                            <span>Services that each customer has signed up for:</span> <br/>
                                                <p>PhoneService , MultipleLines , InternetService , OnlineSecurity , OnlineBackup ,
                                                    DeviceProtection , TechSupport , StreamingTV , StreamingMovies</p>
                                            </li>

                                            <li><span>Finally, there’s a prediction feature:</span> <br/>
                                                <p><strong>Churn:</strong> Whether the customer churned or not (Yes or No)</p>
                                            </li>

                                        </ul>

                                            <h3>We found some churn rates and some of them as shown in the graphs below:</h3>


                                            <Image width={753} height={861} src="/ai-case2-graph.jpg" alt="Img" />


                                                <h3>Churn prediction is a binary classification problem, as customers either churn or are retained in a given period. Two questions need answering to guide model building:</h3>

                                                <ul className="caseList2">
                                                    <li>Which features make customers churn or retain?</li>
                                                    <li>What are the most important features to train a model with high performance?</li>
                                                </ul>
                                                <br/>

                                                    <p>We then used generalized linear model (GLM) to gain some statistics of the respective features with the target.</p>


                                                    <h3>For the first question, we looked at the (P&gt;|z|) column. If the absolute p-value is smaller than 0.05, it means that the feature affects Churn in a statistically significant way. The significant features were:</h3>



                                                    <ul className="caseList2">
                                                        <li>Senior Citizen</li>
                                                        <li>Tenure</li>
                                                        <li>Contract</li>
                                                        <li>Paperless Billings etc.</li>
                                                    </ul>

                                                    <p>The second question about feature importance can be answered by looking at the exponential coefficient values.</p>

                                                    <p>We then created a baseline model with a Logistic Regression algorithm, then predict with other machine learning models like Support Vector classifier (SVC), Random Forest classifier, Decision-tree classifier, and Naive-Bayes classifier.</p>

                                                </div>

                                            </div>
                                        </div>

                                        <div className="sol-sec-5">
                                            <h3>Benefits</h3>
                                            <p>The implementation of this solution brought about several significant benefits:</p>
                                            <br/>
                                                <div className="row">
                                                    <div className="col-lg-4">
                                                        <div className="benifitsBlock">
                                                            <Image width={80} height={80} src="/risk-customer-ic.png" alt="Ic"/>
                                                                <div><h5>We successfully identified <br/>at-risk customers.</h5>
                                                                </div>
                                                        </div>
                                                    </div>

                                                    <div className="col-lg-4">
                                                        <div className="benifitsBlock">
                                                            <Image width={80} height={80} src="/customer-pain-point-ic.png" alt="Ic"/>
                                                                <div><h5>We successfully identified <br/>customer pain points,</h5>
                                                                </div>
                                                        </div>
                                                    </div>

                                                    <div className="col-lg-4">
                                                        <div className="benifitsBlock">
                                                            <Image width={80} height={80} src="/customer-strategy-ic.png" alt="Ic"/>
                                                                <div><h5>We successfully devised a strategy/method to lower churn and increase customer retention.</h5>
                                                                </div>
                                                        </div>
                                                    </div>

                                                </div>

                                                <div>
                                                </div>
                                        </div>



                                        <div className="sol-sec-1">
                                            <div className="row">
                                                <div className="col-lg-12">
                                                    <div className="conclusion">
                                                        <h2>Conclusion</h2>
                                                        <p>Churn rate is an important indicator for subscription-based companies. Identifying customers who
                                                            aren’t happy can help managers identify product or pricing plan weak points, operation issues, as
                                                            well as customer preferences and expectations. When you know all that, it’s easier to introduce
                                                            proactive ways of reducing churn.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>





                                </div>
                            </section>


                        </main>
                    </>
                    )
}

                    export default AicaseStudy2