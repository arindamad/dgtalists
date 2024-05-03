'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import Style from "./header.module.css";
import { BsTelephone } from "react-icons/bs";
import { CiMenuFries } from "react-icons/ci";
import _nav from "./_nav";
import Link from 'next/link';
import TopNav from './top_navigation';
import Model from '../modal/Modal';



export default function Header() {
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  return (
    <>

      <div id="header" className={`${Style.header} fixed-top d-flex align-items-center`}>

        <div className="container d-flex align-items-center justify-content-between">
          <Link href="/" className={`${Style.logo} d-flex align-items-center me-auto me-lg-0`}>
            <Image priority src="/logo2.png" alt="" width={88} height={76} />
          </Link>

          <nav>
            <div className="container">
              <div className="row">
                <TopNav />
              </div>
            </div>
          </nav>

          <div className={Style.call_icon_cta}>
            <div className={Style.call_icon}>
              <BsTelephone />
              <Link href="/contact-us">+91 9748791820</Link>
            </div>
            <Link className="cta" href="#" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={handleShow}>Get A Quote</Link>
          </div>


        </div>

      </div>
      
      <Model show={show} onHide={handleClose} />
    </>

  )
}
