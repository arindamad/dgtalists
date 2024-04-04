import Image from 'next/image'
import React from 'react'

const HowIot = () => {
  return (
    <section className="how-iot" id="how-iot">
      <div className="container">
        <h4 className="heading">How does IoT <br/> (Internet Of Things) Work?</h4>
        <p className="sub-heading">Nowadays, IoT mobile app development has become popular for the many benefits it offers.
          Here is how the ToT concept works:</p>
        <div className="row">
          <div className="col-lg-4 p-0">
            <div className="card">
              <h6>Sensors</h6>
              <p>The device needs to integrate with the sensor to track the request, such as the location, vehicle, lock
                the door weather conditions, etc.</p>
            </div>
          </div>
          <div className="col-lg-4 p-0">
            <div className="card card-1">
              <Image width={439} height={293} src="/iot-work-1.png" alt=""/>
            </div>
          </div>
          <div className="col-lg-4 p-0">
            <div className="card">
              <h6>IP Addresses</h6>
              <p>The communication protocol (IPv6, the latest version of IP)gives location systems and identification of
                systems onnetworks and plays a vital role in loT working. To communicatewith another device, all the
                devices need to assign an IP addres on the internet</p>
            </div>
          </div>
          <div className="col-lg-4 p-0">
            <div className="card card-1">
              <Image width={439} height={293} src="/iot-work-2.png" alt=""/>
            </div>
          </div>
          <div className="col-lg-4 p-0">
            <div className="card">
              <h6>IoT Gateways</h6>
              <p>IoT gateways can be created by setting up custom bullta devices. It connects the devices to the
                internet using differentmodes of communication like Bluctooth, WI-Fl, NFC, Beacon.BLE, etc. It enables
                devices to talk to cach othet</p>
            </div>
          </div>
          <div className="col-lg-4 p-0">
            <div className="card card-1">
              <Image width={439} height={293} src="/iot-work-3.png" alt=""/>
            </div>
          </div>
          <div className="col-lg-4 p-0">
            <div className="card">
              <h6>Cloud Server</h6>
              <p>When the gateway receives the device information (data), suchaas the device's ID and current status, it
                stores and processesfurther in the cloud server. The data after the process is used toaccomplish the
                actions that, in turn, make the device worksmartly</p>
            </div>
          </div>
          <div className="col-lg-4 p-0">
            <div className="card card-1">
              <Image width={439} height={293} src="/iot-work-4.png" alt=""/>
            </div>
          </div>
          <div className="col-lg-4 p-0">
            <div className="card">
              <h6>IoT Application</h6>
              <p>The toT app administrator can controldevice's activities arany time. An loT app helps the administrator
                communicatewith the smart device by sending commands (Cloud servicesenable authentication of the device
                messages) that make itpossible to perform the oiven task to the device.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HowIot