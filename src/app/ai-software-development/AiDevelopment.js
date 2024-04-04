import Image from 'next/image'
import React from 'react'

const AiDevelopment = () => {
    return (
        <section className="ai_software_development" style={{backgroundImage: 'url(/ai-bg.jpg)'}}>
            <div className="container">
                <h4 className="heading">Best in className <br/> AI Software Development Services</h4>
                <p className="sub-heading">Hire us, to avail the widest variety of Custom AI Software Development Services. Be it AI
                    Development and Deployment, AI Strategy and Consultation, or AI Integration and Maintenance, we can provide
                    you with all. We have skilled Data Scientists and AI Developers to provide you with Custom AI
                    Solutions, catering to your business objectives as well as budget.
                </p>
                <div className="row">
                    <div className="col-lg-4">
                        <div className="each_ai_box">
                            <figure>
                                <Image width={415} height={298} src="/strategy.png" alt="ai-img"/>
                            </figure>
                            <div className="ai_content">
                                <div className="ai_icon_box">
                                    <Image width={40} height={40} src="/ai-strategy-icon.png" alt="ai-icon"/>
                                </div>
                                <h5>AI Strategy & Consultation</h5>
                                <p>Our team works with you in close collaboration, getting a hang of your business goals and challenges.
                                    We come up with AI strategies that align with your goals, offer consultation on AI technologies such
                                    as Machine Learning and assist you in choosing the best AI technology for particular use cases.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="each_ai_box">
                            <figure>
                                <Image width={415} height={298} src="/ai-development.png" alt="ai-img"/>
                            </figure>
                            <div className="ai_content">
                                <div className="ai_icon_box">
                                    <Image width={40} height={40} src="/ai-development-icon.png" alt="ai-icon"/>
                                </div>
                                <h5>AI Development and Deployment</h5>
                                <p>With advanced AI software development platforms and tools, we provide you with cutting-edge AI
                                    solutions that take care of the unique challenges faced by your enterprise. We design, develop, and
                                    deploy the best solutions. You can get Custom AI models, easy to integrate with present business
                                    processes and systems.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="each_ai_box">
                            <figure>
                                <Image width={415} height={298} src="/ai-maintenance.png" alt="ai-img"/>
                            </figure>
                            <div className="ai_content">
                                <div className="ai_icon_box">
                                    <Image width={40} height={40} src="/ai-maintenance-icon.png" alt="ai-icon"/>
                                </div>
                                <h5>AI Integration and Maintenance</h5>
                                <p>We have a skilled team, offering ongoing support and maintenance for AI solutions, which can easily
                                    be integrated into already existing IT infrastructure. Opt for our solutions and get high value for
                                    your business.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AiDevelopment