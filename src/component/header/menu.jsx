import React from 'react';
import _nav from './_nav';
import Link from 'next/link';
import { TfiAngleDown } from "react-icons/tfi";


const Navigation = () => {
  return (
    <ul>
      {_nav.map((navItem, index) => (
        <NavItem key={index} {...navItem} />
      ))}
    </ul>
  );
};

const NavItem = ({ component, name, to, class: className, items }) => {
  if (component === 'item') {
    return (
      <li>
        <Link href={to}>{name}</Link>
      </li>
    );
  } else if (component === 'group') {
    return (
      <li className={`${className} mega_menu_dropdown mega_menu_demo_2 has_dropdown`}>
        <span>{name} <TfiAngleDown /></span>
        <ul style={{ paddingLeft: "0" }} className={`mega_menu sub_menu`}>
          <div class="mega_menu_item">
            {items.slice(0, 4).map((subItem, index) => (
              <NavItem key={index} {...subItem} />
            ))}
          </div>
          <div class="mega_menu_item">
            {items.slice(4, 8).map((subItem, index) => (
              <NavItem key={index} {...subItem} />
            ))}
          </div>
        </ul>
      </li>
    );
  }
};

export default Navigation;