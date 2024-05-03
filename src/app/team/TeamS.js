import Image from 'next/image'
import React from 'react'
import { FaLinkedinIn } from "react-icons/fa";


const TeamS = () => {
  return (
    <div className="teamS paddsection">
      <div className="container">
        <div className="row justify-content-between d-flex align-items-center">

          <div className="col-lg-4 ">
            <div className="div-img-bg">
              <div className="teamS-img">
                <Image width={375} height={400} src="/sujay.jpg" className="img-responsive" alt="me"/>
              </div>
            </div>
          </div>

          <div className="col-lg-7">
            <div className="teamS-descr">
              <h3>Sujay Saha</h3>
              <h6>FOUNDER & CEO</h6>
              <p className="p-heading">Mr. Sujay Saha has had a successful professional and entrepreneurial journey spanning
                18 years, during which he has built various successful digital ventures. He enjoys meeting new people
                and believes that great ideas come from interaction, whether it’s over a cup of coffee or casual
                chitchat. Mr. Saha is renowned for his ability to build unique software solutions and ROI-driven
                business models within the IT industry. He is currently focused on his brainchild, Dgtalists, a
                tech-driven company with the mission of driving digital transformation for start-ups, scale-ups, and
                enterprises.</p>

              <ul className="follow-us">
                <li>Follow Me On : <a href="#" className="linkedin"><FaLinkedinIn/></a></li>

              </ul>

            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default TeamS