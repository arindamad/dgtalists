"use client"
import { CiMenuFries } from "react-icons/ci";
import Navigation from "./menu";
import Style from "./header.module.css";
import { useState } from "react";

export default function TopNav() {  
    const [menu, setMenu]=useState(false);
    const toggleMenu = ()=>{
        setMenu(prev => !prev);
    }
    return(<>
            <div className={Style.mobile_btn} onClick={toggleMenu}>
              <CiMenuFries />
            </div>
            <div className={`${Style.main_menu} ${menu?Style.open:""}`}>
              <Navigation/> 
            </div>
    </>)
}
