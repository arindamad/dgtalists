import Image from 'next/image'
import React from 'react'
import Style from "./header.module.css";
import { IoIosArrowDown } from "react-icons/io";
import { BsTelephone } from "react-icons/bs";
import Link from 'next/link';



export default function Header() {
  return (
  <div id="header" className={`${Style.header} fixed-top d-flex align-items-center`}>

    <div className="container d-flex align-items-center justify-content-between">
      <Link href="/" className={`${Style.logo} d-flex align-items-center me-auto me-lg-0`}>

        <Image src="/logo-blue-- 1.png" alt="" width={88} height={76} />

      </Link>

      <nav>

        <div className="container">

          <div className="row">

            <div className={Style.mobile_btn}>

              <i className="bi bi-list"></i>

            </div>

            <div className={Style.main_menu}>

              <ul>
                <li><Link href="/">Home</Link></li>
                <li className={`${Style.mega_menu_dropdown} ${Style.mega_menu_demo_2} ${Style.has_dropdown}`}>

                  <a href="#">Services <IoIosArrowDown/></a>

                  <div className={`${Style.mega_menu} ${Style.sub_menu}`}>

                    <div className={`${Style.mega_menu_item}`}>

                      <Link href="custom_software_development">Custom Software Development</Link>

                      <a href="enterprise-software-development.html">Enterprise Software Development </a>

                      <a href="custom-web-development.html">Custom Web Development</a>

                      <a href="ai-software-development.html">AI Software Development </a>

                    </div>

                    <div className={Style.mega_menu_item}>

                      <a href="iot.html">Internet of Things (IOT)</a>

                      <a href="mobile-app-development.html">Mobile App Development</a>

                      <a href="test-engineering.html">Quality Assurance - Test Engineering</a>

                      <a href="digital-marketing.html">Digital Marketing</a>

                    </div>

                  </div>

                </li>
                <li><a href="case-study.html">Case Studies</a></li>

                <li className={Style.has_dropdown}><a href="#">Company <IoIosArrowDown/></a>
                  <ul className="sub_menu">
                    <li><a href="about-us.html">About Us</a></li>
                    <li><a href="partnership.html">Partnership And Association </a></li>
                    <li><a href="team.html">Core Team</a></li>


                  </ul>

                </li>

                <li><a href="contact-us.html">Contact Us</a></li>



              </ul>

            </div>

          </div>

        </div>

      </nav>

      <div className={Style.call_icon_cta}>
        <div className={Style.call_icon}>
          <BsTelephone/>
          <a href="#">+91 9748791820</a>
        </div>
        <a className="cta" href="#" data-bs-toggle="modal" data-bs-target="#exampleModal">Get A Quote</a>
      </div>


    </div>

  </div>
  )
}
