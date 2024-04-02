import Image from 'next/image'
import React from 'react'

const Vlogs = () => {
  return (
    <section id="blog" className="blog">

      <div className="container">

        <div className="section-header">

          <h1>Our Latest Blogs</h1>

        </div>

        <div className="row">

          <div className="col-lg-4 col-md-4">

            <div className="post-box">

              <div className="post-img">

                <Image width={415} height={259} src="/each-blog-2.jpg" alt=""/>
                <p className="post_date"> 22 Sep</p>

              </div>

              <div className="post-info">

                <a href="blog-details-why-choose-react-native.html">
                  <h2>Why choose React Native for mobile app development for your organization?</h2>
                </a>

                <a href="#" className="cta">Read More</a>




              </div>

            </div>

          </div>

          <div className="col-lg-4 col-md-4">

            <div className="post-box">

              <div className="post-img">

                <Image width={415} height={259} src="/each-blog-9.jpg" alt=""/>
                <p className="post_date"> 22 Sep</p>
              </div>

              <div className="post-info">

                <a href="blog-details-app-store-optimizing-boosting.html">
                  <h2>App Store Optimization for boosting your App's Visibility: Tips and Tricks</h2>
                </a>

                <a href="#" className="cta">Read More</a>




              </div>

            </div>

          </div>

          <div className="col-lg-4 col-md-4">

            <div className="post-box">

              <div className="post-img">

                <Image width={415} height={259} src="/each-blog-6.jpeg" alt=""/>
                <p className="post_date"> 22 Sep</p>
              </div>

              <div className="post-info">

                <a href="blog-details-required-web-developemnt.html">
                  <h2>What is required for web application development?</h2>
                </a>
                <a href="#" className="cta">Read More</a>



              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  )
}

export default Vlogs