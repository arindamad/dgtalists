"use client"
import Image from "next/image";
import '@glidejs/glide/dist/css/glide.core.css';
import Glide from '@glidejs/glide';
import { useEffect } from "react";
import '@glidejs/glide/dist/css/glide.theme.css';

export default function Home() {

  useEffect(() => {
    new Glide(".glide", {
      type: "carousel",
      autoplay: 5600,
      hoverpause: false,
      gap: 0
    }).mount();
  }, []);
  return (
    <>

<div class="glide">

<div class="glide__track" data-glide-el="track">

  <ul class="glide__slides">

    <li class="glide__slide">

      <div class="container text">
        <p class="Spcl-para">Intuitive, future-ready AI solutions for your business!</p>

        <h1>AI Development</h1>

        <p class="banner_content">We re-engineer your business operations with cutting-edge Artificial Intelligence
          development services,
          and help you make accurate decisions without losing time. </p>

        <a class="cta cta-1" href="ai-software-development.html">Get Started</a>

        <a class="projects-btn" href="#">See Projects<i class="bi bi-arrow-right-short"></i></a>

      </div>

      <Image src="/hero-bg.png" alt="Img" width={1519} height={713}/>

    </li>

    <li class="glide__slide">

      <div class="container text">

        <p class="Spcl-para">Be an industry leader with outstanding development assistance!</p>

        <h1>Software Development</h1>

        <p class="banner_content">With top-notch developers, we help ensure your digital success, enhance your
          business and help you
          achieve new heights.</p>

        <a class="cta cta-1" href="custom-software-development.html">Get Started</a>

        <a class="projects-btn" href="#">See Projects<i class="bi bi-arrow-right-short"></i></a>

      </div>

      <Image src="/software-developement-banner.png" width={1519} height={713} />

    </li>

    <li class="glide__slide">

      <div class="container text">

        <p class="Spcl-para">Secure and scalable IoT solutions for real-time assistance!</p>

        <h1>Internet of Things (IOT) </h1>

        <p class="banner_content">Reimagine your digital future with our IoT development expertise, and handle even
          the most complex
          projects competently.</p>

        <a class="cta cta-1" href="iot.html">Get Started</a>

        <a class="projects-btn" href="#">See Projects<i class="bi bi-arrow-right-short"></i></a>

      </div>

      <Image src="/iot-banner.png" width={1519} height={713} />

    </li>

    <li class="glide__slide">

      <div class="container text">

        <p class="Spcl-para">Cutting-edge, quick and exceptionally innovative apps!</p>

        <h1>Mobile App Development</h1>

        <p class="banner_content">Whether you are a startup, or have a mid-sized or enterprise-level business, get a
          functional and
          innovative app for your target audience.</p>

        <a class="cta cta-1" href="mobile-app-development.html">Get Started</a>

        <a class="projects-btn" href="#">See Projects<i class="bi bi-arrow-right-short"></i></a>

      </div>

      <Image width={1519} height={713} src="/mobile-app-banner.png" />

    </li>

  </ul>

</div>

<div class="glide__bullets" data-glide-el="controls[nav]">

  <button class="glide__bullet" data-glide-dir="=0">AI Developemnt</button>

  <button class="glide__bullet" data-glide-dir="=1">Software Developemnt</button>

  <button class="glide__bullet" data-glide-dir="=2">Internet of Things (IOT)</button>

  <button class="glide__bullet" data-glide-dir="=3">Mobile App Development</button>

</div>

</div>

<section class="client" id="client">

      <div class="container">

        <div class="row">

          <div class="col-lg-3">

            <div class="our-client">

              <h4>Clients/Partners</h4>

            </div>

          </div>

          <div class="col-lg-9">

            <div class="swiper clientSlider">

              <div class="swiper-wrapper">

                <div class="swiper-slide slide-item">

                  <figure>

                    <Image width={153} height={61} src="/oracle.png" alt="" />

                  </figure>

                </div>

                <div class="swiper-slide slide-item">

                  <figure>

                    <Image width={153} height={61} src="/cdac.png" alt="" />

                  </figure>

                </div>

                <div class="swiper-slide slide-item">

                  <figure>

                    <Image width={153} height={61} src="/ast.png" alt="" />

                  </figure>

                </div>

                <div class="swiper-slide slide-item">

                  <figure>

                    <Image width={153} height={61} src="/dream-tech.png" alt="" />

                  </figure>

                </div>

                <div class="swiper-slide slide-item">

                  <figure>

                    <Image width={153} height={61} src="/tera-motors.png" alt="" />

                  </figure>

                </div>
                <div class="swiper-slide slide-item">

                  <figure>

                    <Image width={153} height={61} src="/shineroad.png" alt="" />

                  </figure>

                </div>
                <div class="swiper-slide slide-item">

                  <figure>

                    <Image width={153} height={61} src="/bassetti.png" alt="" />

                  </figure>

                </div>
                <div class="swiper-slide slide-item">

                  <figure>

                    <Image width={153} height={61} src="/tcg.png" alt="" />

                  </figure>

                </div>

              </div>

              <div class="swiper-button-next"></div>

              <div class="swiper-button-prev"></div>

              <div class="swiper-pagination"></div>

            </div>

          </div>

        </div>
      </div>
    </section>
    
    </>
    
  );
}
