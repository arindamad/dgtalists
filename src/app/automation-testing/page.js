'use client'
import React from 'react'
import Image from 'next/image';
import Accordion from 'react-bootstrap/Accordion';

const AutomationTest = () => {
  return (
    <>
      <section className="breadcrumb-banner" style={{ backgroundImage: `url(/quality-assurance-bg.png)` }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-7">
              <div className="breadcrumb-content">
                <h3 className="heading">DGtalists Helps You with Quality Assurance, Within Time and Budget!</h3>
                <p>Quality is non-negotiable at DGtalists. Our commitment to quality extends to thorough testing, ensuring
                  functional, reliable and secure solutions for you at all stages. For many years, we have been providing
                  businesses with tailored software development assistance, realizing their visions and matching their
                  budget within specified time-span. </p>
              </div>
            </div>
            <div className="col-lg-5">
            </div>
          </div>
        </div>
      </section>
      <section className="automation-test" id="automation-test">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h4 className="heading">Overview</h4>
              <p className="sub-heading">One of the primary areas of concentration for Inceptial Tech, a quickly expanding IT
                services provider, is TaaS. Manual testing is laborious,not reliable due to the possibility of manual
                errors. We suggest implementing Automation testing, which is more reliable due to use of automated tools
                and scripts. This case study examines Selenium's advantages and shows how it can greatly enhance Inceptial
                Tech's testing procedure's efficiency</p>
            </div>
            <div className="col-lg-6">
              <div className="automation-testimg">
                <Image width={636} height={412} src="/automation-testing-img1.jpg" alt="" />
              </div>

            </div>
          </div>
        </div>
      </section>
      <section className="automation-test automation-test-1" id="automation-test">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="automation-testimg-1">
                <Image width={508} height={530} src="/client-situation-img.png" alt="" />
              </div>
            </div>
            <div className="col-lg-6">
              <h4 className="heading">Client Situation</h4>
              <ul className="tt-list-01">
                <li>Run the test suite using the continuous integration tool</li>
                <li>Automate the critical scenarios for Regression Testing</li>
                <li>Integrate a test management and bug tracking tool within the automation tool to update and track test
                  results</li>
                <li>Open case logs using the tracking tool for failed instances</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="business-need" id="business-need" style={{ backgroundImage: `url(/automation-testing-bg.jpg)` }}>
        <div className="business-cont">
          <h5 className="heading">
            Business Need
          </h5>
          <ul className="tt-list-01">
            <li>To automate test cases for admin and user portals of their core application for different Operating
              Systems and browser combinations using Selenium Webdriver.</li>
            <li>To expand the scope of test automation to cover all the major functionalities of user portal such as
              purchasing items, creating an user account, registering a new user, selecting an item,adding the item into
              the cart etc</li>
            <li>To apply test automation for major functionalities covered as part of the admin portal as well including
              adding the selling items, maintaining items etc</li>
          </ul>
        </div>
      </section>
      <section className="result s-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="about-s7__content">
                <h2 className="s-title heading">Results </h2>
                <div className="info-list-s2">
                  <div className="s-info">
                    <p>
                      Client achieved 100% test automation coverage for cross browser compatibility
                    </p>
                  </div>
                  <div className="s-info">
                    <p>
                      Successfully managed parallel execution on multiple machines simultaneously.
                    </p>
                  </div>
                  <div className="s-info">
                    <p>
                      Executed all test scripts through all different browser and OS combinations which helped in
                      identifying issues much faster than ever before.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-s7__thumb">
                <div className="p-left">
                  <Image width={290} height={346} src="/result-1.jpg" alt="" />
                </div>
                <div className="p-right">
                  <Image width={290} height={404} src="/result-2.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="recommended" id="recommended" style={{ backgroundImage: `url(/faq-bg-recommended.jpg)` }}>
        <div className="container">
          <h4 className="heading">Recommended Solution</h4>
          <div className="mt-20" id="faqAccordion">
            <Accordion defaultActiveKey="0" flush>
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  <div>
                    Selenium Webdriver:
                  </div>
                </Accordion.Header>
                <Accordion.Body>
                  <ul className="tt-list-01">
                    <li>Selenium Webdriver for end-to-end automation of test scenarios, covering both admin and user
                      portals.</li>
                    <li>Leveraging Selenium's API to interact programmatically with web elements, executing actions such
                      as button clicks, text entry, and result validation</li>
                    <li>Implementation of Amazon aws with eclipse for parallel test execution across multiple machines,
                      optimizing test suite performance</li>
                  </ul>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>
                  Test Automation
                  Framework:
                </Accordion.Header>
                <Accordion.Body>
                  <ul className="tt-list-01">
                    <li>Development of a modular automation framework for scalability and maintainability.</li>
                    <li>The Page Object Model (POM) design pattern to encapsulate page-specific elements and functions,
                      enhancing code organization</li>
                    <li>Integration of data-driven testing by leveraging Apache POI with Microsoft Excel, allowing dynamic
                      test data management</li>
                  </ul>
                </Accordion.Body>
              </Accordion.Item>
              
              <Accordion.Item eventKey="2">
                <Accordion.Header>
                Continuous Integration
                  with Jenkins:
                </Accordion.Header>
                <Accordion.Body>
                <ul className="tt-list-01">
                    <li>Integration the automation suite seamlessly into the continuous integration workflow using Jenkins
                    </li>
                    <li>The use of Jenkins jobs to trigger automated test runs upon code commits, facilitating early
                      detection of defects</li>
                    <li>Implementation of post-build actions to generate comprehensive test reports, aiding in detailed
                      analysis of test execution results</li>
                  </ul>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header>
                Regression
                  Testing:
                </Accordion.Header>
                <Accordion.Body>
                <ul className="tt-list-01">
                    <li>Identification of critical regression test scenarios and automate them for rapid feedback on
                      application changes.</li>
                    <li>Scheduling periodic regression test runs using scheduling tools jobs to ensure continuous
                      validation across various OS and browser combinations</li>
                  </ul>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="4">
                <Accordion.Header>
                Reporting:
                </Accordion.Header>
                <Accordion.Body>
                <ul className="tt-list-01">
                    <li>Integration of ExtentReports to generate customized and visually appealing reports, providing
                      stakeholders with clear insights into test results</li>
                    <li>Usage of ATUTestRecorder to record the Test Execution Video as a Test Evidence</li>
                  </ul>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </div>
      </section>
      <section className="technology-sec test_automation_tool" id="technology-sec">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="technology-sec-cont">
                <h3 className="heading">Technologies Used</h3>
              </div>
              <div className="row ">
                <div className="col-lg-3">
                  <div className="spcl-card">
                    <Image width={50} height={50} src="/eclipse-icon-img.png" alt="" />
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="spcl-card">
                    <Image width={50} height={50} src="/java.png" alt="" />
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="spcl-card">
                    <Image width={50} height={50} src="/maven-icon-img.png" alt="" />
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="spcl-card">
                    <Image width={50} height={50} src="/testng-icon-img.png" alt="" />
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="spcl-card">
                    <Image width={50} height={50} src="/git-icon-img.png" alt="" />
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="spcl-card">
                    <Image width={50} height={50} src="/jenkins-icon-img.png" alt="" />
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="spcl-card">
                    <Image width={50} height={50} src="/selenium-icon-img.png" alt="" />
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="spcl-card">
                    <Image width={50} height={50} src="/net.png" alt="" />
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="spcl-card">
                    <Image width={50} height={50} src="/python-icon.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="technology-sec-image">
                <Image width={636} height={454} src="/automation_testing_tool.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default AutomationTest