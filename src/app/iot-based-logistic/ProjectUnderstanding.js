import Image from 'next/image'
import React from 'react'

const ProjectUnderstanding = () => {
    return (
        <section className="project-understanding" id="project-understanding">
            <div className="container">
                <div className="content">
                    <h1 className="heading">Project Understanding </h1>
                    <p className="sub-heading">This business is running with following model (Top view) </p>
                </div>
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="project-img-part">
                            <Image width={636} height={390} src="/project-warehouse-img.png" alt=""/>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="mobSerlist  arrow-right">
                            <ul>
                                <h6>Warehouse/Dispatch Manager App:</h6>
                                <li className="app">The User Login In credentials would be created from the back end( Admin) itself</li>
                                <li className="app">Using those credentials , Warehouse/Dispatch Manager can log into their App</li>
                                <li className="app">Every Warehouse/Dispatch Manager account will be their respective warehouse specific , that is if a Warehouse/Dispatch Manager A is assigned to Warehouse B then he/she can do the activity on the app ( like creating consignment etc.. ) for the Warehouse B only</li>
                                <li className="app">On the App , they can check their available stock /inventory</li>
                                <li className="app">Also there will be a panel on the app from where they can get the detail of the consignments that needed to be created</li>
                                <li className="app">Warehouse/Dispatch Manager can create the consignment with data like materials being dispatched , Waybill No along with scan/photo , Destination/address etc..</li>
                                <li className="app">Once the Consignment is created ,</li>
                                <li className="app">Now Warehouse/Dispatch Manager can see the list of Available drivers of the Route / en-route or the destination for the consignment created</li>
                                <li className="app">From the list of available driver , Warehouse/Dispatch Manager can select any driver and assign Consignment(s) .</li>
                                <li className="app">Warehouse manager can track the movement of each consignment. On their App , they can see the list of on-going consignment. Clicking each of them , they can see the live tracking of that on-going consignment with all the Driver Data.</li>
                                <li className="app">Warehouse manager should also be able to track drivers travel history and customer locations travelled before.</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="mobSerlist mobSerlist-left  arrow-left">
                            <ul>
                                <h6>Driver App :</h6>
                                <li className="app">Each Driver need to sign up using the App where they need to give detail of current and permanent address , Ned to Upload Scanned copy of Address Proof,Photo ID Proof , Driving License . Also Contact No and alternative emergency Contact No, User Name </li>
                                <li className="app">After feeding all these data , a OTP will be sent to verify the Phone No.</li>
                                <li className="app">Once these data are being verified by the Admin then the account will be activated and a SMS would be going to their phone no with default password which they can change later .These Default Password would be valid for specific time frame..</li>
                                <li className="app">Once they logged in, they can see list of delivery. Clicking on the list they can see the detail of the delivery like where to delivery, whom to hand over what time etc.</li>
                                <li className="app">Driver can also check the their Schedule from Calendar.</li>
                                <li className="app">Clicking on the Date they will get to see the Detail of delivery.</li>
                                <li className="app">Now the driver can start the delivery for that consignment.</li>
                                <li className="app">Once the driver starts, Warehouse manager get's a push notification and clicking on that notification, they can start the tracking.</li>
                                <li className="app">Even the driver would get push notification when any delivery assignment comes in.</li>
                                <li className="app">Once one delivery is completed, then the driver need to take an E-signature on the app and Push “ Delivered “ button.</li>
                                <li className="app">Drivers can also check their travel history.</li>
                                <li className="app">If there are any other en route delivery , they can start that delivery and the process flows as stated above.</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <Image width={636} height={494} src="/project-driver-img.png" alt=""/>
                    </div>
                    <div className="col-lg-6">
                        <div className="project-img-part">
                            <Image width={636} height={493} src="/project-customer-img.png" alt=""/>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="mobSerlist  arrow-right">
                            <ul>
                                <h6>Customer / Receiver App :</h6>
                                <li className="app">Each Customer / receiver would download the App from the app store</li>
                                <li className="app">Once installed, they can sign up using conventional method or social profile</li>
                                <li className="app">Each customer can sign up via app by providing their detail . And Phone No would be verified by OTP</li>
                                <li className="app">Once the Sing Up process done they will get an account activation link on the registered email and after authenticating their account will be activated..</li>
                                <li className="app">When any consignment had been confirmed by the warehouse Manager , receiver can see the detail of the consignment.</li>
                                <li className="app">When any driver is being assigned for that consignment, the receiver of that consignment would be notified with Push Notification.</li>
                                <li className="app">Clicking on the Notification they can track the asset movement.</li>
                                <li className="app">Once delivered they have to give an e-signature. And also they will have an OTP that had been shoot to their registered mobile number . Once they put the OTP delivery gets authenticated.</li>
                                <li className="app">Receiver can also raise issue from the app against any delivered consignment by clicking on the consignment detail section.</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-12 mt-4">
                        <div className="mobSerlist">
                            <ul>
                                <h6>Admin Web Back End ( No App )</h6>
                                <li className="app">Admin Can create warehouses with detail</li>
                                <li className="app">Admin can create Warehouse/Dispatch Manager's initial login credentials . and can assign them to specific warehouse(s)</li>
                                <li className="app">Admin can activate/deactivate any account</li>
                                <li className="app">Admin will be notified when an new user ( Driver and Customer Registration ) takes place</li>
                                <li className="app">For Driver sign up, admin first verify every detail then activate the account</li>
                                <li className="app">Admin record/add vehicle's detail with their Registration No, Along with Owner details, Scanned Copy of Registration Document , Tax , Insurance details etc..</li>
                                <li className="app">Admin Can create routes which can be controlled by geofencing and assign to any fleet</li>
                                <li className="app">If the Fleet goes out of the route / radius set Admin will be notified on the Web Panel with Browser Push Notification and All this will be stored on the back end if Admin missed the Browser Push Notification and Drover of the Fleet will also get notified on their App</li>
                                <li className="app">Admin can see live tracking of all your Current fleets!</li>
                                <li className="app">Admin should be able to track drivers travel history and customer locations travelled before</li>
                                <li className="app">Admin can see detail of each fleet trips that may included start tie, routers , stoppage , time of delivery , customer feedback etc..</li>
                                <li className="app">Admin Can Manage Inventory for each ware house in following 2 ways
                                    <ul>
                                        <li className="admin-no-app"> <i className="bi bi-arrow-right-circle-fill"></i>If there is any existing Inventory Management system (IMS) then there should be a provision of linking that (IMS ) with our Back End Web Panel ( preferably using web method that need to be generated by the IMS provider you have )</li>
                                    </ul>
                                </li>
                                <li className="app">Admin can see all the customer feedback or Complains against each delivery</li>
                                <li className="app">Admin can also create Sub User for Support who can check customer feedback or Complains ageist each delivery</li>
                                <li className="app">There will be a message thread from where Support can communicate with the customer</li>
                                <li className="app">All these message threads are also accessible for Admin too</li>
                                <li className="app">Admin can also check all the consignments.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProjectUnderstanding