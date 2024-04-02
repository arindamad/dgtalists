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
      <li className={`${className} has_dropdown`}>
        <span>{name} <TfiAngleDown /></span>
        <ul className={`mega_menu sub_menu`}>
          {items.map((subItem, index) => (
            <NavItem key={index} {...subItem} />
          ))}
        </ul>
      </li>
    );
  }
};

export default Navigation;