import Image from 'next/image'
import React from 'react' 

const Custom_dev = () => {
  return (
    <section className="custom-development" id="custom-development"
      style={{backgroundImage: `url(/custom-software-section-bg.png)`}}>
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <h3 className="heading">WHAT IS CUSTOM SOFTWARE DEVELOPMENT?</h3>
            <p>Custom software development is the process of designing, implementing, testing, deploying software that
              is custom built to fit your organization’s requirements rather than purchased off-the-shelf software.</p>
            <p>Software outsourcing is a great tool for businesses to develop their custom software. Outsourcing enables
              businesses to hire developers who are experts in developing custom software and this greatly boosts their
              productivity.</p>
            <p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born
              and I will give you a complete account of the system, and expound the actual teachings of the great
              explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure
              itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally
              encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or
              desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in
              which toil and pain can procure him some great pleasure.</p>
          </div>
          <div className="col-lg-6">
            <Image width={636} height={689} src="/experts.png" alt=""/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Custom_dev