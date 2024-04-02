import Image from 'next/image'
import React from 'react'

const Vlogs = () => {
  return (
    <section id="blog" class="blog">

      <div class="container">

        <div class="section-header">

          <h1>Our Latest Blogs</h1>

        </div>

        <div class="row">

          <div class="col-lg-4 col-md-4">

            <div class="post-box">

              <div class="post-img">

                <Image width={415} height={259} src="/each-blog-2.jpg" alt=""/>
                <p class="post_date"> 22 Sep</p>

              </div>

              <div class="post-info">

                <a href="blog-details-why-choose-react-native.html">
                  <h2>Why choose React Native for mobile app development for your organization?</h2>
                </a>

                <a href="#" class="cta">Read More</a>




              </div>

            </div>

          </div>

          <div class="col-lg-4 col-md-4">

            <div class="post-box">

              <div class="post-img">

                <Image width={415} height={259} src="/each-blog-9.jpg" alt=""/>
                <p class="post_date"> 22 Sep</p>
              </div>

              <div class="post-info">

                <a href="blog-details-app-store-optimizing-boosting.html">
                  <h2>App Store Optimization for boosting your App's Visibility: Tips and Tricks</h2>
                </a>

                <a href="#" class="cta">Read More</a>




              </div>

            </div>

          </div>

          <div class="col-lg-4 col-md-4">

            <div class="post-box">

              <div class="post-img">

                <Image width={415} height={259} src="/each-blog-6.jpeg" alt=""/>
                <p class="post_date"> 22 Sep</p>
              </div>

              <div class="post-info">

                <a href="blog-details-required-web-developemnt.html">
                  <h2>What is required for web application development?</h2>
                </a>
                <a href="#" class="cta">Read More</a>



              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  )
}

export default Vlogs