import React from 'react'

const IotKeyFeature = () => {
  return (
    <section className="iot-key-feature" id="iot-key-feature" style={{backgroundImage: `url(/iot-key-feature-bg.png)`}}>
  <div className="container">
    <h2 className="heading">Keys to Success:</h2>
    <div className="row">
      <div className="col-lg-6">
        <div className="each-feature-1">
            <h6>First Key Success</h6>
            <p className="sub-heading">App to monitor real time tracking of vehicles with it's statistics and possible fastest distribution</p>
        </div>
      </div>
      <div className="col-lg-6">
        <div className="each-feature-1 each-feature-2">
            <h6>Second Key Success</h6>
            <p className="sub-heading">And eagles eye on the activity to obliterate any bottleneck </p>
        </div>
      </div>
    </div>
  </div>
</section>
  )
}

export default IotKeyFeature