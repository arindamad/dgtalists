import Image from 'next/image'
import React from 'react'

const AboutIncepTech = () => {
  return (
    <section className="about_incep_tech">
      <div className="incep-shape">
        <Image width={821} height={311} src="/incep-bg-shape-1.png"/>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <div className="right_side">
              <h6 className="sub-heading">About</h6>
              <h4>Inceptial Tech</h4>
              <div className="about_incep_content">
                <p>Inceptial Tech UK is a renowned name with a presence overseas, including USA and India. Within a mere few years, they have achieved a great milestone in delivering efficient digital technology services in various industries. They have a specialty in Bpo / Kpo / Lpo & Staffing services. Their fully operational offshore delivery center in India enables them to handle projects in real time and offer offshore support to both their domestic and foreign clients.</p>
                <p>Inceptial Tech UK has extensive experience and expertise in IT Development, Staffing & Testing to deliver their clients satisfactory services. With a large team of over 60 testing professionals, they are always eager to deliver support to our esteemed customers. Their primary focus is on Quality, Learnability, adaptation, skill & talent. Over the years, they have successfully assisted various leading institutions, training centers, and Boutique Service providers to provide agile responses to our clients.</p>
                <a href="#" className="cta">Read More</a>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="left_img">
              <Image width={415} height={496} src="/about_incep.jpg" alt="incep-img"/>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  )
}

export default AboutIncepTech