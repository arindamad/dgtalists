import React from 'react'
import { BsArrowRight } from "react-icons/bs";
import Link from 'next/link'



const Expertise = () => {
    return (
        <div>
            <section id="expertise" className="expertise" style={{backgroundImage: `url(/expertise-bg.jpg)`}}>

                <div className="container">

                    <div className="expertise-content">

                        <p className="sub-heading">BRING YOUR IDEAS</p>

                        <h2 className="heading">Need the Best Customization Software? We can build it from scratch!</h2>

                        <p>Got ideas? We can make them a reality! Share your ideas with us. Our team can quickly develop customization
                            software just as you envision, with a level of expertise that never fails to achieve results. </p>

                        <Link className="cta " href="custom-software-development">Get Started &nbsp; <BsArrowRight/></Link>

                    </div>

                </div>

            </section>
        </div>
    )
}

export default Expertise