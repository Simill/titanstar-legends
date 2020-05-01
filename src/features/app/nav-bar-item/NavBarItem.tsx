import React from 'react';
import { INavBarItemProps } from './INavBarProps';
import './nav-bar-item.scss';

const getSubNavMenu = (props: INavBarItemProps) => {
  if (!props.subNavigationItems.length) return null;
  return (
    <div className="nav-bar-item__sub-menu">
      {props.subNavigationItems.map((subNavItem) => (
        <span className="nav-bar-item__sub-nav-item" key={subNavItem}>
          {subNavItem}
        </span>
      ))}
    </div>
  );
};

const NavBarItem = (props: INavBarItemProps) => (
  <div className="nav-bar-item">
    <div className={`nav-bar-item__icon nav-bar-item__icon--${props.id}`}></div>
    <div className="nav-bar-item__text">{props.id.toUpperCase()}</div>
    {getSubNavMenu(props)}
  </div>
);

export default NavBarItem;
