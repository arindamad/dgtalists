"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

const Intro = () => {
    const [activeTab,setActiveTab]=useState({
        admin:true,
        passenger:false,
        driver:false
    })
    const [activeTab2,setActiveTab2]=useState({
        admin:true,
        passenger:false,
        driver:false
    })
    return (
        <>
            <section id="intro" className="clearfix" style={{ background: `linear-gradient(to right, rgba(3,26,47, 0.5) 0 100%), url(/intro-bg.jpg) center top no-repeat` }}>
                <div className="container h-100">
                    <div className="row justify-content-center align-self-center">
                        <div className="col-lg-7 col-md-12 intro-info order-md-first order-last">
                            <h2>Cab Booking App <br />
                                Solutions</h2>
                            <p>Supercar also referred to as an exotic is a luxury, high-performance sports car or grand tourer. </p>
                            <div>
                                <a href="#" className="cta" data-toggle="modal" data-target="#popupModal">Request for A Free
                                    Demo</a>

                            </div>
                        </div>

                        <div className="col-md-5 intro-img ">

                        </div>
                    </div>

                </div>
            </section>
            <section id="banner-bottom" className="wow fadeInUp">

                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-6">
                            <div className="areaDiv">
                                <Image width={106} height={106} src="/advnc-feature-ic.png" alt="Ic" />
                                <h3>SOLUTION BENIFIT</h3>
                                <p>Technological advancement has changed the way of commuting from one place to another. It becomes more
                                    tech-driven when Uber model comes into existence. Develop your vehicle booking app to bridge the gap
                                    between drivers and riders to a more convenient option. We have the expertise in offering Uber like app
                                    solutions that serves as a catalyst between you and your customers for vehicle (Cab, Toto, Auto, Bike,
                                    Scooty etc.) booking. </p>

                            </div>

                        </div>

                        <div className="col-lg-6 col-md-6">
                            <div className="areaDiv">
                                <Image width={106} height={106} src="/adv-admin-panel-ic.png" alt="Ic" />
                                <h3>Business Goal and Advantage </h3>
                                <p>Before going into the details of How to Start an App Like Uber, you should know the benefits of having
                                    such an app for vehicle booking business. If you are in vehicle business looking for growth
                                    opportunities, you should consider getting an app for your business. Uber Taxi App has been popular due
                                    to its features.</p>

                            </div>

                        </div>


                    </div>
                </div>

            </section>

            <section id="solution-for-all" className="wow fadeInUp">
                <div className="container">
                    <header className="section-header">
                        <h3>Cab Booking App Features</h3>
                    </header>
                    <div className="row">
                        <div className="col-lg-3 col-sm-12">
                            <div className="column-box1">
                                <h3 className="plan-title"> Admin Panel</h3>
                                <ul className="plan-features">
                                    <li><i className="ion-checkmark"> </i>Driver Management</li>
                                    <li><i className="ion-checkmark"> </i>Passenger Management</li>
                                    <li><i className="ion-checkmark"> </i>Vehicle Management</li>
                                    <li><i className="ion-checkmark"> </i>Trip Management</li>
                                    <li><i className="ion-checkmark"> </i>Vehicle Tracking via GPS</li>
                                    <li><i className="ion-checkmark"> </i>Billing and Invoicing</li>
                                    <li><i className="ion-checkmark"> </i>Commission amount</li>
                                    <li><i className="ion-checkmark"> </i>Revenue Management</li>
                                    <li><i className="ion-checkmark"> </i>Estimated arrival time</li>
                                    <li><i className="ion-checkmark"> </i>Estimated Reaching time</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-6 col-sm-12">
                            <div className="column-boxMid">
                                <h3 className="plan-title"> Passenger Panel</h3>
                                <ul className="plan-features">
                                    <li><i className="ion-checkmark"> </i>Register/Sign in</li>
                                    <li><i className="ion-checkmark"> </i>Destination address</li>
                                    <li><i className="ion-checkmark"> </i>Pick up location</li>
                                    <li><i className="ion-checkmark"> </i>Saved locations</li>
                                    <li><i className="ion-checkmark"> </i>Arrival Time Estimation</li>
                                    <li><i className="ion-checkmark"> </i>Vehicle Type Option</li>
                                    <li><i className="ion-checkmark"> </i>Estimated Fare</li>
                                    <li><i className="ion-checkmark"> </i>Driver Rating</li>
                                    <li><i className="ion-checkmark"> </i>Payment</li>
                                    <li><i className="ion-checkmark"> </i>Push Notifications</li>
                                    <li><i className="ion-checkmark"> </i>Messaging</li>
                                    <li><i className="ion-checkmark"> </i>Past Rides</li>
                                    <li><i className="ion-checkmark"> </i>Real-time Tracking</li>
                                    <li><i className="ion-checkmark"> </i>Schedule Ride</li>
                                    <li><i className="ion-checkmark"> </i>Coupon codes</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-12">
                            <div className="column-box1">
                                <h3 className="plan-title"> Driver Panel</h3>
                                <ul className="plan-features">
                                    <li><i className="ion-checkmark"> </i>Register/ Sign in</li>
                                    <li><i className="ion-checkmark"> </i>Driver Profile</li>
                                    <li><i className="ion-checkmark"> </i>Booking Alert</li>
                                    <li><i className="ion-checkmark"> </i>Navigation/Route Selection</li>
                                    <li><i className="ion-checkmark"> </i>Fare calculation</li>
                                    <li><i className="ion-checkmark"> </i>Comments and Ratings by riders</li>
                                    <li><i className="ion-checkmark"> </i>Reports</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="featured-solution" className=""
                style={{
                    background: 'linear-gradient(to right, rgba(1,16,59, 0.5) 0 100%), url(/solution-bg.jpg) center top no-repeat',
                    backgroundSize: 'cover'
                }}>
                <div className="container">
                    <header className="section-header">
                        <h3>Experience Full Line of Features in
                            Your <span>Car Dispatch Solutions App</span></h3>

                    </header>

                    <div className="row">
                        <div className="col-lg-12">
                            <div className="tabBox">
                                <ul className="tabs">
                                    <li className={`${activeTab.admin && 'active'}`} onClick={()=>setActiveTab({admin:true,passenger:false,driver:false})}><a href="#admin-panel" className="adm-p">Admin Panel</a></li>
                                    <li className={`${activeTab.passenger && 'active'}`} onClick={()=>setActiveTab({admin:false,passenger:true,driver:false})}><a href="#passenger-panel" className="psngr-p">Passenger Panel</a></li>
                                    <li className={`${activeTab.driver && 'active'}`} onClick={()=>setActiveTab({admin:false,passenger:false,driver:true})}><a href="#driver-panel" className="dvr-p">Driver Panel</a></li>
                                </ul>

                                <div className="tabContainer">
                                    <div id="admin-panel" style={{display:`${!activeTab.admin ? "none":"block"}`}} className="tabContent">
                                        <div className="row">
                                            <div className="col-lg-6 order-2 order-lg-1">
                                                <div className="left-img">
                                                    <Image width={634} height={361} src="/admin-left-img.png" alt="Img" />
                                                </div>
                                            </div>
                                            <div className="col-lg-6 order-1 order-lg-2">
                                                <div className="tab-right">
                                                    <div className="row">
                                                        <div className="col-lg-6">
                                                            <div className="admin-panel-right">
                                                                <Image width={50} height={50} src="/ic-1.png" alt="Img" />
                                                                <h3>Interactive Dashboard</h3>
                                                                <p>It is a long established fact that a reader will be distracted by the readable content
                                                                    of a page when looking at its layout.</p>
                                                            </div>
                                                        </div>

                                                        <div className="col-lg-6">
                                                            <div className="admin-panel-right">
                                                                <Image width={50} height={50} src="/ic-2.png" alt="Img" />
                                                                <h3>Manage Drivers</h3>
                                                                <p>It is a long established fact that a reader will be distracted by the readable content
                                                                    of a page when looking at its layout.</p>
                                                            </div>
                                                        </div>

                                                        <div className="col-lg-6">
                                                            <div className="admin-panel-right">
                                                                <Image width={50} height={50} src="/ic-3.png" alt="Img" />
                                                                <h3>Track Drivers</h3>
                                                                <p>It is a long established fact that a reader will be distracted by the readable content
                                                                    of a page when looking at its layout.</p>
                                                            </div>
                                                        </div>

                                                        <div className="col-lg-6">
                                                            <div className="admin-panel-right">
                                                                <Image width={50} height={50} src="/ic-4.png" alt="Img" />
                                                                <h3>Manage Customers</h3>
                                                                <p>It is a long established fact that a reader will be distracted by the readable content
                                                                    of a page when looking at its layout.</p>
                                                            </div>
                                                        </div>

                                                        <div className="col-lg-6">
                                                            <div className="admin-panel-right">
                                                                <Image width={50} height={50} src="/ic-5.png" alt="Img" />
                                                                <h3>Manage Vehicles</h3>
                                                                <p>It is a long established fact that a reader will be distracted by the readable content
                                                                    of a page when looking at its layout.</p>
                                                            </div>
                                                        </div>

                                                        <div className="col-lg-6">
                                                            <div className="admin-panel-right">
                                                                <Image width={50} height={50} src="/ic-6.png" alt="Img" />
                                                                <h3>Payment Management</h3>
                                                                <p>It is a long established fact that a reader will be distracted by the readable content
                                                                    of a page when looking at its layout.</p>
                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                    <div id="passenger-panel" style={{display:`${!activeTab.passenger ? "none":"block"}`}} className="tabContent">
                                        <div className="row">
                                            <div className="col-lg-6 order-2 order-lg-1">
                                                <div className="left-img">
                                                    <Image width={634} height={696} src="/passenger-panel-left-img.png" alt="Img" />
                                                </div>
                                            </div>
                                            <div className="col-lg-6 order-1 order-lg-2">
                                                <div className="tab-right">
                                                    <div className="row">
                                                        <div className="col-lg-6">
                                                            <div className="admin-panel-right">
                                                                <Image width={50} height={50} src="/ic-1a.png" alt="Img" />
                                                                <h3>Set the Location and Book The Ride</h3>
                                                                <p>It is a long established fact that a reader will be distracted by the readable content
                                                                    of a page when looking at its layout.</p>
                                                            </div>
                                                        </div>

                                                        <div className="col-lg-6">
                                                            <div className="admin-panel-right">
                                                                <Image width={50} height={50} src="/ic-1b.png" alt="Img" />
                                                                <h3>Schedule Ride</h3>
                                                                <p>It is a long established fact that a reader will be distracted by the readable content
                                                                    of a page when looking at its layout.</p>
                                                            </div>
                                                        </div>

                                                        <div className="col-lg-6">
                                                            <div className="admin-panel-right">
                                                                <Image width={50} height={50} src="/ic-1c.png" alt="Img" />
                                                                <h3>Trip History</h3>
                                                                <p>It is a long established fact that a reader will be distracted by the readable content
                                                                    of a page when looking at its layout.</p>
                                                            </div>
                                                        </div>

                                                        <div className="col-lg-6">
                                                            <div className="admin-panel-right">
                                                                <Image width={50} height={50} src="/ic-6.png" alt="Img" />
                                                                <h3>Easy Payment Option </h3>
                                                                <p>It is a long established fact that a reader will be distracted by the readable content
                                                                    of a page when looking at its layout.</p>
                                                            </div>
                                                        </div>

                                                        <div className="col-lg-6">
                                                            <div className="admin-panel-right">
                                                                <Image width={50} height={50} src="/ic-1d.png" alt="Img" />
                                                                <h3>Driver Review & Rating</h3>
                                                                <p>It is a long established fact that a reader will be distracted by the readable content
                                                                    of a page when looking at its layout.</p>
                                                            </div>
                                                        </div>

                                                        <div className="col-lg-6">
                                                            <div className="admin-panel-right">
                                                                <Image width={50} height={50} src="/ic-1e.png" alt="Img" />
                                                                <h3>Push Notifications</h3>
                                                                <p>It is a long established fact that a reader will be distracted by the readable content
                                                                    of a page when looking at its layout.</p>
                                                            </div>
                                                        </div>

                                                        <div className="col-lg-6">
                                                            <div className="admin-panel-right">
                                                                <Image width={50} height={50} src="/ic-1g.png" alt="Img" />
                                                                <h3>ETA</h3>
                                                                <p>It is a long established fact that a reader will be distracted by the readable content
                                                                    of a page when looking at its layout.</p>
                                                            </div>
                                                        </div>

                                                        <div className="col-lg-6">
                                                            <div className="admin-panel-right">
                                                                <Image width={50} height={50} src="/ic-1f.png" alt="Img" />
                                                                <h3>Trip Completed and Invoice Summery</h3>
                                                                <p>It is a long established fact that a reader will be distracted by the readable content
                                                                    of a page when looking at its layout.</p>
                                                            </div>
                                                        </div>


                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>

                                    <div id="driver-panel" style={{display:`${!activeTab.driver ? "none":"block"}`}} className="tabContent">
                                        <div className="row">
                                            <div className="col-lg-6 order-2 order-lg-1">
                                                <div className="left-img">
                                                    <Image width={634} height={696} src="/driver-panel-left-img.png" alt="Img" />
                                                </div>
                                            </div>
                                            <div className="col-lg-6 order-1 order-lg-2">
                                                <div className="tab-right">
                                                    <div className="row">
                                                        <div className="col-lg-6">
                                                            <div className="admin-panel-right">
                                                                <Image width={50} height={50} src="/ic-1h.png" alt="Img" />
                                                                <h3>Driver Dashboard Got A Trip Notification</h3>
                                                                <p>It is a long established fact that a reader will be distracted by the readable content
                                                                    of a page when looking at its layout.</p>
                                                            </div>
                                                        </div>

                                                        <div className="col-lg-6">
                                                            <div className="admin-panel-right">
                                                                <Image width={50} height={50} src="/ic-1b.png" alt="Img" />
                                                                <h3>Trip Completed </h3>
                                                                <p>It is a long established fact that a reader will be distracted by the readable content
                                                                    of a page when looking at its layout.</p>
                                                            </div>
                                                        </div>

                                                        <div className="col-lg-6">
                                                            <div className="admin-panel-right">
                                                                <Image width={50} height={50} src="/ic-1c.png" alt="Img" />
                                                                <h3>Trip History</h3>
                                                                <p>It is a long established fact that a reader will be distracted by the readable content
                                                                    of a page when looking at its layout.</p>
                                                            </div>
                                                        </div>

                                                        <div className="col-lg-6">
                                                            <div className="admin-panel-right">
                                                                <Image width={50} height={50} src="/ic-6.png" alt="Img" />
                                                                <h3>Transaction History</h3>
                                                                <p>It is a long established fact that a reader will be distracted by the readable content
                                                                    of a page when looking at its layout.</p>
                                                            </div>
                                                        </div>

                                                        <div className="col-lg-6">
                                                            <div className="admin-panel-right">
                                                                <Image width={50} height={50} src="/ic-1i.png" alt="Img" />
                                                                <h3>Rider Review</h3>
                                                                <p>It is a long established fact that a reader will be distracted by the readable content
                                                                    of a page when looking at its layout.</p>
                                                            </div>
                                                        </div>

                                                        <div className="col-lg-6">
                                                            <div className="admin-panel-right">
                                                                <Image width={50} height={50} src="/ic-1j.png" alt="Img" />
                                                                <h3>Driver Earning </h3>
                                                                <p>It is a long established fact that a reader will be distracted by the readable content
                                                                    of a page when looking at its layout.</p>
                                                            </div>
                                                        </div>




                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>

                                </div>

                            </div>


                        </div>
                    </div>

                </div>
            </section>

            <section id="cab-booking-mobile-solution" className="wow fadeInUp">
                <div className="container">
                    <header className="section-header">
                        <h3><span>Cab Booking Mobile Solution detail Features</span></h3>
                        <p>The Taxi booking app offers a really good user experience to book a taxi with quick options. With great
                            user interface with Google map, with real-time location, the time and the fare calculation. This system also
                            takes care of the driver who wants to make driving business smooth. </p>
                    </header>

                    <div className="row">
                        <div className="col-lg-12">
                            <ul id="tabs" className="nav nav-tabs ak_nav" role="tablist">
                                <li onClick={()=>setActiveTab2({admin:true,passenger:false,driver:false})} className={`nav-item`}>
                                    <a id="tab-A" href="#pane-A" className={`nav-link ${activeTab2.admin && 'active'}`}  data-toggle="tab" role="tab">Admin Detail
                                        Features</a>
                                </li>
                                <li onClick={()=>setActiveTab2({admin:false,passenger:true,driver:false})} className={`nav-item`}>
                                    <a id="tab-B" href="#pane-B" className={`nav-link ${activeTab2.passenger && 'active'}`} data-toggle="tab" role="tab">Rider Detail Features</a>
                                </li>
                                <li onClick={()=>setActiveTab2({admin:false,passenger:false,driver:true})} className={`nav-item`}>
                                    <a id="tab-C" href="#pane-C"  className={`nav-link ${activeTab2.driver && 'active'}`} data-toggle="tab" role="tab">Driver Detail Features </a>
                                </li>
                            </ul>


                            <div id="content" className="tab-content" role="tablist">
                                <div style={{display:`${!activeTab2.admin ? 'none':'block'}`}} id="pane-A" className="card each_tab   active" role="tabpanel" aria-labelledby="tab-A">
                                    <div className="card-header" role="tab" id="heading-A">
                                        <h5 className="mb-0">
                                            <a data-toggle="collapse" href="#collapse-A" aria-expanded="true" aria-controls="collapse-A">
                                                Admin Detail Features
                                            </a>
                                        </h5>
                                    </div>
                                    <div id="collapse-A" className="collapse show" data-parent="#content" role="tabpanel"
                                        aria-labelledby="heading-A">
                                        <div className="card-body">
                                            <p>It is the binding, the putting-it-all-together aspect of any cab aggregator app development as
                                                this panel empowers the owner of the cab service provider or the aggregator to track the way the
                                                app is progressing.</p>
                                            <div className="row">
                                                <div className="col-lg-6 col-md-6 col-sm-6  wow bounceInUp" data-wow-duration="1.4s">
                                                    <div className="feature-item">
                                                        <div className="left-icon">
                                                            1
                                                        </div>
                                                        <div className="right-content">
                                                            <h4>Secure Admin Panel Login</h4>
                                                            <p>Supper admin’s team can securely access the admin console through two-factor
                                                                authentication.</p>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="col-lg-6 col-md-6 col-sm-6  wow bounceInUp" data-wow-duration="1.4s">
                                                    <div className="feature-item">
                                                        <div className="left-icon">
                                                            2
                                                        </div>
                                                        <div className="right-content">
                                                            <h4>Application Configuration</h4>
                                                            <p>Admin and given other user roles can configure system variables that can govern the ride
                                                                business and system Like tax, ride fee, subscription fee, limit variables.</p>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="col-lg-6 col-md-6 col-sm-6  wow bounceInUp" data-wow-duration="1.4s">
                                                    <div className="feature-item">
                                                        <div className="left-icon">
                                                            3
                                                        </div>
                                                        <div className="right-content">
                                                            <h4>Interactive Dashboard </h4>
                                                            <p>The admin dashboard shows real-time stats, reports of active drivers, on-going rides,
                                                                regions with maximum bookings, etc. The stats and reports can be used to find any
                                                                deviation in the daily target and overall operations can be improved. The admin dashboard
                                                                also has advanced analytics and financial tools to create any report or result. </p>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="col-lg-6 col-md-6 col-sm-6  wow bounceInUp" data-wow-duration="1.4s">
                                                    <div className="feature-item">
                                                        <div className="left-icon">
                                                            4
                                                        </div>
                                                        <div className="right-content">
                                                            <h4>User Management</h4>
                                                            <p>Super admin can manage Admin user from this section. Admin can add / edit / delete user.
                                                                Admin can allocate and control granular access levels to different users of the vehicle
                                                                booking software admin panel.</p>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="col-lg-6 col-md-6 col-sm-6  wow bounceInUp" data-wow-duration="1.4s">
                                                    <div className="feature-item">
                                                        <div className="left-icon">
                                                            5
                                                        </div>
                                                        <div className="right-content">
                                                            <h4>Driver Management</h4>
                                                            <p>Admin can manage the drivers on the system also review the driver documentation. The
                                                                admin does a background check by verifying the driver license and documents before being
                                                                admitted into the company. Admin can review the documents of the particular vehicles added
                                                                by the owner. Admin can approve and reject any driver account of a vehicle with reason.
                                                                Driver would be able to get online only if their account is been approved by the admin.
                                                                Admin can Add/ Edit / Delete the drivers. All the activities of the driver are monitored
                                                                on the admin dashboard. </p>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="col-lg-6 col-md-6 col-sm-6  wow bounceInUp" data-wow-duration="1.4s">
                                                    <div className="feature-item">
                                                        <div className="left-icon">
                                                            6
                                                        </div>
                                                        <div className="right-content">
                                                            <h4>Vehicle Type/Rate Management </h4>
                                                            <p>Admin can manage the vehicle Type / category shown on the rider app. They can define the
                                                                vehicle Type name, Rates and other details. Rate will be defined as per the vehicle type.
                                                                Admin would define the price per Kms, price per minute, minimum fare, base fare,
                                                                commission (%), Cancelation charges, and Peak time charges for each vehicle. </p>
                                                        </div>
                                                    </div>
                                                </div>


                                                <div className="col-lg-6 col-md-6 col-sm-6  wow bounceInUp" data-wow-duration="1.4s">
                                                    <div className="feature-item">
                                                        <div className="left-icon">
                                                            7
                                                        </div>
                                                        <div className="right-content">
                                                            <h4>Riders Management </h4>
                                                            <p>All the Riders details who are registered with the app can be accessed in the web panel.
                                                                All the issues and queries raised by the rider regarding the app or driver or ride is
                                                                taken care of by the admin. Apart from this, the admin can modify customer details, access
                                                                ride history, and debar a rider when his rating is below a prescribed limit. </p>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="col-lg-6 col-md-6 col-sm-6  wow bounceInUp" data-wow-duration="1.4s">
                                                    <div className="feature-item">
                                                        <div className="left-icon">
                                                            8
                                                        </div>
                                                        <div className="right-content">
                                                            <h4>Trips Management </h4>
                                                            <p>Admin can view all the trips done so far on the system. Admin can filter the trip by
                                                                date, Owner, Driver, and Rider. Also can check the all the invoice of any trip. If any
                                                                Rider cancels the trip admin assign user can check the reason for cancelation. The entire
                                                                required filter can be used here in this screen so that admin user can get relevant
                                                                information. </p>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="col-lg-6 col-md-6 col-sm-6  wow bounceInUp" data-wow-duration="1.4s">
                                                    <div className="feature-item">
                                                        <div className="left-icon">
                                                            9
                                                        </div>
                                                        <div className="right-content">
                                                            <h4>Promotional Code Management </h4>
                                                            <p>Promo codes, discounts, offers, and cash backs can be determined based on date, time, and
                                                                customer in the admin panel. In the web panel, the validity, discount limit, activation
                                                                date, and status can be set and modified.</p>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="col-lg-6 col-md-6 col-sm-6  wow bounceInUp" data-wow-duration="1.4s">
                                                    <div className="feature-item">
                                                        <div className="left-icon">
                                                            10
                                                        </div>
                                                        <div className="right-content">
                                                            <h4>Review Management </h4>
                                                            <p>This section will enable the admin to view all the reviews that been given over the app
                                                                for the drivers by the Riders as well as for the Riders by the drivers. Admin will be able
                                                                to export this into an excel format. </p>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="col-lg-6 col-md-6 col-sm-6  wow bounceInUp" data-wow-duration="1.4s">
                                                    <div className="feature-item">
                                                        <div className="left-icon">
                                                            11
                                                        </div>
                                                        <div className="right-content">
                                                            <h4>Heat Map View </h4>
                                                            <p>Admin can see the location where the maximum number of riders may be looking for vehicles
                                                                in order to divert them to those locations and take advantage of the requirement.</p>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="col-lg-6 col-md-6 col-sm-6  wow bounceInUp" data-wow-duration="1.4s">
                                                    <div className="feature-item">
                                                        <div className="left-icon">
                                                            12
                                                        </div>
                                                        <div className="right-content">
                                                            <h4>Advertisement Management Panel </h4>
                                                            <p>Using this section admin user can promote, highlight or even showcase the different
                                                                offers as well as information about your app. You can also put in all the details from
                                                                here and the information you set on this section will reflect on the opening page of the
                                                                app.</p>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="col-lg-6 col-md-6 col-sm-6  wow bounceInUp" data-wow-duration="1.4s">
                                                    <div className="feature-item">
                                                        <div className="left-icon">
                                                            13
                                                        </div>
                                                        <div className="right-content">
                                                            <h4>MIS Reports </h4>
                                                            <p>We have an enhancement report selection where in you as an admin can see various reports
                                                                like Payment reports, Total Earning Report, Referral Report, Driver Payment report, Driver
                                                                log report etc. All reports have the advance search option so that based on business need
                                                                we can generate reports. </p>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="col-lg-6 col-md-6 col-sm-6  wow bounceInUp" data-wow-duration="1.4s">
                                                    <div className="feature-item">
                                                        <div className="left-icon">
                                                            14
                                                        </div>
                                                        <div className="right-content">
                                                            <h4>Settings </h4>
                                                            <p>Admin can manage all the settings related to entire system from here like General
                                                                settings, Email template, documents, vehicle model as per vehicle type, FAQ etc.</p>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="col-lg-6 col-md-6 col-sm-6  wow bounceInUp" data-wow-duration="1.4s">
                                                    <div className="feature-item">
                                                        <div className="left-icon">
                                                            15
                                                        </div>
                                                        <div className="right-content">
                                                            <h4>Location management (Geofence Location) </h4>
                                                            <p>This is an extremely useful feature that can enable you to set a parameter for various
                                                                reasons. For example, you can list an area for specific location wise fare or for setting
                                                                up an area restriction to prevent ride request. Using add location feature enable admin
                                                                user to create a geolocation and identify a particular area to mark it separately for area
                                                                restriction, vehicle type restriction, location wise fare or airport surcharge. </p>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="col-lg-6 col-md-6 col-sm-6  wow bounceInUp" data-wow-duration="1.4s">
                                                    <div className="feature-item">
                                                        <div className="left-icon">
                                                            16
                                                        </div>
                                                        <div className="right-content">
                                                            <h4>Push Notification Management </h4>
                                                            <p>This is a feature that allows you to connect with your entire user base by giving them
                                                                information regarding various offers or promotions that you have. You can select user
                                                                type, select Riders and put down the message that you want to sent out.</p>
                                                        </div>
                                                    </div>
                                                </div>





                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div style={{display:`${!activeTab2.driver ? 'none':'block'}`}} id="pane-B" className="card each_tab  " role="tabpanel" aria-labelledby="tab-B">
                                    <div className="card-header" role="tab" id="heading-B">
                                        <h5 className="mb-0">
                                            <a className="collapsed" data-toggle="collapse" href="#collapse-B" aria-expanded="false"
                                                aria-controls="collapse-B">
                                                Rider Detail Features
                                            </a>
                                        </h5>
                                    </div>
                                    <div id="collapse-B" className="collapse" data-parent="#content" role="tabpanel"
                                        aria-labelledby="heading-B">
                                        <div className="card-body">
                                            <p>Provide Easy to Use Features to Book Ride Immediately or Schedule as Per Their Needs. First of
                                                all, the potential passenger should have an account on the app next, whenever the user opens the
                                                app on his phone, he should get welcomed with a home screen.</p>
                                            <div className="row">
                                                <div className="col-lg-6 col-md-6 col-sm-6  wow bounceInUp" data-wow-duration="1.4s">
                                                    <div className="feature-item">
                                                        <div className="left-icon">
                                                            1
                                                        </div>
                                                        <div className="right-content">
                                                            <h4>Login and Registration Screen</h4>
                                                            <p>After the home screen app will landed with login or register option. Rider will have an
                                                                option to login via his email ID, Facebook or Gmail account or mobile number. </p>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="col-lg-6 col-md-6 col-sm-6  wow bounceInUp" data-wow-duration="1.4s">
                                                    <div className="feature-item">
                                                        <div className="left-icon">
                                                            2
                                                        </div>
                                                        <div className="right-content">
                                                            <h4>Call Emergency</h4>
                                                            <p>In case of an emergency or any unfortunate event, the driver or Rider can contact company
                                                                on a single click or can click on send message button. Upon this their exact location will
                                                                help message will be sent to their 5 contacts. </p>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="col-lg-6 col-md-6 col-sm-6  wow bounceInUp" data-wow-duration="1.4s">
                                                    <div className="feature-item">
                                                        <div className="left-icon">
                                                            3
                                                        </div>
                                                        <div className="right-content">
                                                            <h4>Driver Arriving </h4>
                                                            <p>Once the driver accept the ride, Rider will see Driver’s Detail on screen and see that he
                                                                is coming to pick him & can also track the driver on map. Rider can call the driver share
                                                                the Ride detail on social networking site and also can cancel the trip if he wants to. A
                                                                Notification will be show up on the screen of Rider’s app as soon driver arrived nearby
                                                                location or pickup location of Rider. At this point, the Rider will receive a notification
                                                                that the trip has begun. </p>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="col-lg-6 col-md-6 col-sm-6  wow bounceInUp" data-wow-duration="1.4s">
                                                    <div className="feature-item">
                                                        <div className="left-icon">
                                                            4
                                                        </div>
                                                        <div className="right-content">
                                                            <h4>Set the Location and Book The Ride</h4>
                                                            <p>Once the user has entered this information Rider register successfully, than the app
                                                                should ask him/her for the number of passengers. It would also be useful if the user can
                                                                select the type of vehicle he wants to ride in; after this, the app should search for a
                                                                selected type of vehicle available in the current location of the user. Riders can set the
                                                                pickup and drop-off location before they book a ride through the app by entering address
                                                                or selecting on map.</p>
                                                        </div>
                                                    </div>
                                                </div>


                                                <div className="col-lg-6 col-md-6 col-sm-6  wow bounceInUp" data-wow-duration="1.4s">
                                                    <div className="feature-item">
                                                        <div className="left-icon">
                                                            5
                                                        </div>
                                                        <div className="right-content">
                                                            <h4>Review and Rating </h4>
                                                            <p>Rider can provide the safety rating based on safety precautions taken by the driver
                                                                during the trip. Rider also can provide the review based on the ride experience. </p>
                                                        </div>
                                                    </div>
                                                </div>


                                                <div className="col-lg-6 col-md-6 col-sm-6  wow bounceInUp" data-wow-duration="1.4s">
                                                    <div className="feature-item">
                                                        <div className="left-icon">
                                                            6
                                                        </div>
                                                        <div className="right-content">
                                                            <h4>Multiple Stop Over Points</h4>
                                                            <p>This feature allows you to visit and hold at multiple destinations during your trip. Can
                                                                do trip with Pickup & drop anywhere. Additional stop can be added automatically on rider’s
                                                                route, which makes easy cost effective shared rides. </p>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="col-lg-6 col-md-6 col-sm-6  wow bounceInUp" data-wow-duration="1.4s">
                                                    <div className="feature-item">
                                                        <div className="left-icon">
                                                            7
                                                        </div>
                                                        <div className="right-content">
                                                            <h4>Trip Completed and Invoice Summery</h4>
                                                            <p>Rider will see the app notification that the trip is completed. After completed the trip
                                                                on the rider’s screen Invoice summery will appear with breakdown. And upon payment
                                                                deduction from rider’s card that was saved by the Rider at the time of account setting up
                                                                or rider have the choice to make the payment for his ride by using Gpay, Phone pay, Rezor
                                                                pay, Paytm. If rider would like to make the payment via cash he will see a notification
                                                                asking him to pay cash. </p>
                                                        </div>
                                                    </div>
                                                </div>


                                            </div>

                                        </div>
                                    </div>
                                </div>

                                <div style={{display:`${!activeTab2.passenger ? 'none':'block'}`}} id="pane-C" className="card each_tab tab-pane " role="tabpanel" aria-labelledby="tab-C">
                                    <div className="card-header" role="tab" id="heading-C">
                                        <h5 className="mb-0">
                                            <a className="collapsed" data-toggle="collapse" href="#collapse-C" aria-expanded="false"
                                                aria-controls="collapse-C">
                                                Driver Detail Features
                                            </a>
                                        </h5>
                                    </div>
                                    <div id="collapse-C" className="collapse" role="tabpanel" data-parent="#content"
                                        aria-labelledby="heading-C">
                                        <div className="card-body">
                                            <p>All the drivers linked to your business should have a profile with correct information on your
                                                app. The app should notify them whenever their vehicle gets booked. Vehicle Driver App gave
                                                importance to this aspect.</p>

                                            <div className="row">
                                                <div className="col-lg-6 col-md-6 col-sm-6  wow bounceInUp" data-wow-duration="1.4s">
                                                    <div className="feature-item">
                                                        <div className="left-icon">
                                                            1
                                                        </div>
                                                        <div className="right-content">
                                                            <h4>Driver App Login and Registration</h4>
                                                            <p>Driver will have an option to login via his Email ID, Facebook or Gmail Account. In case
                                                                he has forgot his password he can retrieve it using forgot password option. Driver can
                                                                register into the app via his Email ID, Facebook or Gmail account and also set their
                                                                Mobile number and other detail. </p>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="col-lg-6 col-md-6 col-sm-6  wow bounceInUp" data-wow-duration="1.4s">
                                                    <div className="feature-item">
                                                        <div className="left-icon">
                                                            2
                                                        </div>
                                                        <div className="right-content">
                                                            <h4>Got Trip</h4>
                                                            <p>The entire driver’s in the range of X miles/ Km’s will receive a notification on their
                                                                mobile with a countdown screen. They will have option to accept or Reject/ ignore the
                                                                incoming ride request. They will also see the pickup location & Destination address of the
                                                                request ride before they can accept the ride. </p>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="col-lg-6 col-md-6 col-sm-6  wow bounceInUp" data-wow-duration="1.4s">
                                                    <div className="feature-item">
                                                        <div className="left-icon">
                                                            3
                                                        </div>
                                                        <div className="right-content">
                                                            <h4>Call Emergency</h4>
                                                            <p>In case of an emergency or any unfortunate event, the driver can contact company on a
                                                                single click or can click on send message button. Upon this their exact location will help
                                                                message will be sent to their 5 contacts. </p>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="col-lg-6 col-md-6 col-sm-6  wow bounceInUp" data-wow-duration="1.4s">
                                                    <div className="feature-item">
                                                        <div className="left-icon">
                                                            4
                                                        </div>
                                                        <div className="right-content">
                                                            <h4>Application menu </h4>
                                                            <p>A driver can access his trip statistics, Manage Vehicles & their documents through the
                                                                driver app in user friendly way. Driver can also see his wallet balance on top along with
                                                                settings icon.</p>
                                                        </div>
                                                    </div>
                                                </div>


                                                <div className="col-lg-6 col-md-6 col-sm-6  wow bounceInUp" data-wow-duration="1.4s">
                                                    <div className="feature-item">
                                                        <div className="left-icon">
                                                            5
                                                        </div>
                                                        <div className="right-content">
                                                            <h4>Driver Arriving</h4>
                                                            <p>As soon as driver accepts the ride he will see rider’s pickup location on map. Then he
                                                                will drive to pick up location and mark the status “Arrived”. He can view rider’s detail
                                                                and can also contact rider via call from his phone if he want to ask for any directions
                                                                etc. Driver will slide a button to start the trip once the rider is in the vehicle ready
                                                                for the trip. </p>
                                                        </div>
                                                    </div>
                                                </div>


                                                <div className="col-lg-6 col-md-6 col-sm-6  wow bounceInUp" data-wow-duration="1.4s">
                                                    <div className="feature-item">
                                                        <div className="left-icon">
                                                            6
                                                        </div>
                                                        <div className="right-content">
                                                            <h4>Trip Completed </h4>
                                                            <p>Once vehicle reached the destination, the driver will slide a button to stop end the
                                                                trip. Once the ride is completed, the invoice summary will be displayed on the screen.
                                                                Upon clicking on “Collect Payment” button money will be auto deducted from card saved from
                                                                rider’s account if card payment option enable in rider’s account and also auto debit
                                                                option enable. In case rider chose to pay by cash he will hand over to driver. Driver also
                                                                can rate the rider. </p>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="col-lg-6 col-md-6 col-sm-6  wow bounceInUp" data-wow-duration="1.4s">
                                                    <div className="feature-item">
                                                        <div className="left-icon">
                                                            7
                                                        </div>
                                                        <div className="right-content">
                                                            <h4>Transaction History</h4>
                                                            <p>Drivers can keep account of all the rides they have previously made. They can view
                                                                details such as trip fares, ride dates, pickup location, destination, and much more. </p>
                                                        </div>
                                                    </div>
                                                </div>


                                                <div className="col-lg-6 col-md-6 col-sm-6  wow bounceInUp" data-wow-duration="1.4s">
                                                    <div className="feature-item">
                                                        <div className="left-icon">
                                                            8
                                                        </div>
                                                        <div className="right-content">
                                                            <h4>Earnings Tab</h4>
                                                            <p>The feature let drivers keep track of their earnings every day. Drivers can use the
                                                                earnings information for future reference.</p>
                                                        </div>
                                                    </div>
                                                </div>


                                            </div>


                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>


                    </div>

                </div>
            </section>
            <section id="call-to-action" className="wow fadeInUp"
                style={{ background: 'linear-gradient(to right, rgba(0,0,0, 0.7) 0 100%), url(/quote-bg.jpg) center top no-repeat' }}>
                <div className="container">

                    <header className="section-header">
                        <h3>Expand Your Business With
                            <span>Our Complete Support</span>
                        </h3>
                        <p>Lorem Ipsum has been the industry's standard dummy text ever since, when an unknown printer took a galley
                            of type and scrambled it to make a type specimen book.</p>

                        <a href="#" className="cta" data-toggle="modal" data-target="#bottompopupModal">Request For A
                            quote</a>
                    </header>



                </div>
            </section>

            <section id="contact-info" className="wow fadeInUp">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="info-box ">
                                <i className="bi bi-geo-alt"></i>
                                <h3>Contact Address</h3>
                                <p>77/A/4 Raja S. C. Mallick Road, Jadavpur, Kolkata- 700092</p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="info-box ">
                                <i className="bi bi-phone"></i>
                                <h3>Connect With Us!</h3>
                                <p>(Mobile) +91 97487 91820 </p>
                                <p>(Whatsapp)+91 98304 02932 </p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="info-box ">
                                <i className="bi bi-envelope"></i>
                                <h3>Email</h3>
                                <p>contact@dgtalists.com</p>
                                <p>contact@dgtalists.com</p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 col-sm-6 ">
                            <div className="info-box ">
                                <i className="bi bi-clock"></i>
                                <h3>Working Hours</h3>
                                <p>Mon - Sat 9am to 11pm</p>
                                <p>Sunday - 10am to 6pm</p>
                            </div>
                        </div>


                    </div>
                </div>
            </section>

            <section className="industry-expertise ak_industry-expertise">
                <div className="container">
                    <h4 className="heading">Other Solutions</h4>
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="testimonial-wrap">

                                <div className="testimonial-item">

                                    <div className="each_testimonial-1">

                                        <Image width={415} height={278} src="/manufacturing.jpg" className="testimonial-img" alt="" />

                                    </div>
                                    <div className="developer-content">
                                        <h5 className="name"><a href="#">Trucking & logistics App</a></h5>
                                    </div>

                                </div>

                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="testimonial-wrap">

                                <div className="testimonial-item">

                                    <div className="each_testimonial-1">

                                        <Image width={415} height={278} src="/manufacturing.jpg" className="testimonial-img" alt="" />

                                    </div>
                                    <div className="developer-content">
                                        <h5 className="name"><a href="#">Trucking & logistics App</a></h5>
                                    </div>

                                </div>

                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="testimonial-wrap">

                                <div className="testimonial-item">

                                    <div className="each_testimonial-1">

                                        <Image width={415} height={278} src="/manufacturing.jpg" className="testimonial-img" alt="" />

                                    </div>
                                    <div className="developer-content">
                                        <h5 className="name"><a href="#">Trucking & logistics App</a></h5>
                                    </div>

                                </div>

                            </div>
                        </div>


                    </div>
                </div>
            </section>

        </>

    )
}

export default Intro