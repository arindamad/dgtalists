"use client"
import Image from "next/image";
import Clients from "./Clients";
import { IoIosArrowRoundForward } from "react-icons/io";
import '@glidejs/glide/dist/css/glide.core.css';
import Glide from '@glidejs/glide';
import { useEffect } from "react";
import Link from "next/link";
import AboutUs from "./AboutUs";
import ServiceProviders from "./ServiceProviders";
import WhoAre from "./WhoAre";
import Expertise from "./Expertise";
import Skill from "./Skill";
import HappyClient from "./HappyClient";
import Contact from "./Contact";
import Vlogs from "./Vlogs";

export default function Home() {

  useEffect(() => {
    new Glide(".glide", {
      type: "slider",
      autoplay: 5600,
      hoverpause: false,
      gap: 0,
      startAt: 1
    }).mount();
  }, []);
  return (
    <>

      <div className="glide">

        <div className="glide__track" data-glide-el="track">

          <ul className="glide__slides">

            <li className="glide__slide">

              <div className="container text">
                <p className="Spcl-para">Intuitive, future-ready AI solutions for your business!</p>

                <h1>AI Development</h1>

                <p className="banner_content">We re-engineer your business operations with cutting-edge Artificial Intelligence
                  development services,
                  and help you make accurate decisions without losing time. </p>

                <Link className="cta cta-1" href="ai-software-development">Get Started</Link>

                <Link className="projects-btn" href="#">See Projects<IoIosArrowRoundForward /></Link>

              </div>

              <Image priority src="/hero-bg.png" alt="Img" width={1519} height={713} />

            </li>

            <li className="glide__slide">

              <div className="container text">

                <p className="Spcl-para">Be an industry leader with outstanding development assistance!</p>

                <h1>Software Development</h1>

                <p className="banner_content">With top-notch developers, we help ensure your digital success, enhance your
                  business and help you
                  achieve new heights.</p>

                <Link className="cta cta-1" href="custom-software-development">Get Started</Link>

                <Link className="projects-btn" href="#">See Projects<IoIosArrowRoundForward /></Link>

              </div>

              <Image src="/software-developement-banner.png" width={1519} height={713} />

            </li>

            <li className="glide__slide">

              <div className="container text">

                <p className="Spcl-para">Secure and scalable IoT solutions for real-time assistance!</p>

                <h1>Internet of Things (IOT) </h1>

                <p className="banner_content">Reimagine your digital future with our IoT development expertise, and handle even
                  the most complex
                  projects competently.</p>

                <Link className="cta cta-1" href="iot">Get Started</Link>

                <Link className="projects-btn" href="#">See Projects<IoIosArrowRoundForward /></Link>

              </div>

              <Image src="/iot-banner.png" width={1519} height={713} />

            </li>

            <li className="glide__slide">

              <div className="container text">

                <p className="Spcl-para">Cutting-edge, quick and exceptionally innovative apps!</p>

                <h1>Mobile App Development</h1>

                <p className="banner_content">Whether you are a startup, or have a mid-sized or enterprise-level business, get a
                  functional and
                  innovative app for your target audience.</p>

                <Link className="cta cta-1" href="mobile-app-development">Get Started</Link>

                <Link className="projects-btn" href="#">See Projects<IoIosArrowRoundForward /></Link>

              </div>

              <Image width={1519} height={713} src="/mobile-app-banner.png" />

            </li>

          </ul>

        </div>

        <div className="glide__bullets" data-glide-el="controls[nav]">

          <button className="glide__bullet" data-glide-dir="=0">AI Developemnt</button>

          <button className="glide__bullet" data-glide-dir="=1">Software Developemnt</button>

          <button className="glide__bullet" data-glide-dir="=2">Internet of Things (IOT)</button>

          <button className="glide__bullet" data-glide-dir="=3">Mobile App Development</button>

        </div>

      </div>

      <Clients />
      <AboutUs />
      <ServiceProviders />
      <WhoAre />
      <Expertise />
      <Skill />
      <HappyClient />
      <Contact />
      <Vlogs/>
    </>

  );
}
