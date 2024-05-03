import Image from 'next/image'
import React from 'react'

const Innovate = () => {
  return (
    <section className="innovate" id="innovate">
      <div className="container">
        <div className="about-wrap">
          <div className="row">
            <div className="col-lg-6">
              <div className="about-img-wrap">
                <Image width={459} height={599} className="shape-1" src="/about-shape2.png" alt=""/>
                <div className="about-img">
                  <Image width={300} height={462} src="/about-3.jpg" alt=""/>
                </div>
                <div className="about-img about-img-2">
                  <Image width={300} height={452} src="/about-4.jpg" alt=""/>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-content-wrap">
                <div className="section-title">
                  <p className="sub-heading">Who we are</p>
                  <h3 className="heading">DGTALISTS as your preferred
                    business consulting partner</h3>
                </div>
                <p className="sub-heading">Selecting DGTALISTS as your business consulting partner in executing IT/software
                  and digital marketing projects and solutions will help your organization achieve its desired goal.
                  With us, you can accomplish greater automation through successful solutions and implementation
                  programs. By joining hands with various global partners and using the enriched experience of its
                  leaders, DGTALISTS is in a much better position to meet the global needs of its valued customers. The
                  senior advisory panel of DGTALISTS is rich in information technology, and the marketing industry and
                  their inclusion in any complex operation will certainly add invaluable value. With our Combined
                  technicalities and expertise ‘delivery DGTALISTS’ experts are confident of offering a very strong
                  value proposition to our valued clients in any given opportunity.</p>
                <p className="sub-heading">DGTALISTS has a close network of a few eminent Solutions and Service providers in
                  the global IT/Software and Digital Marketing industry, thereby ensuring a greater value proposition to
                  your business on a long-term basis.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Innovate