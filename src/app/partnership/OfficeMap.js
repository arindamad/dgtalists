import Image from 'next/image';
import React from 'react'
import { FaLocationDot } from "react-icons/fa6";


const OfficeMap = () => {
  return (
    <section className="office_map">
      <div className="container">
        <h2 className="heading"> Our Office Address</h2>
        <div className="map_img">
          <Image width={900} height={467} src="/map.png" alt="map"/>
          <div className="each_office_address left_office">
            <div className="pin_icon">
              <FaLocationDot fill='#cf0505'/>
              <div className="office_info ">
                <h6>Dgtalists</h6>
                <p>Stesalit Towers, 3rd floor, Block GP, Sector V, Salt Lake Electronics Complex, Kolkata-700091, West
                  Bengal </p>
              </div>
            </div>

          </div>
          <div className="each_office_address">
            <div className="pin_icon">
                <FaLocationDot fill='#cf0505'/>
              <div className="office_info">
                <h6>Inceptial Tech</h6>
                <p>Liverpool Science Park, Innovation Centre One, 131 Mount Pleasant, Liverpool, L.3 5TF, England</p>

              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default OfficeMap