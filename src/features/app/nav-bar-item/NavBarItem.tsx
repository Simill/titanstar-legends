import React from 'react';
import { INavBarItemProps } from './INavBarProps';
import './nav-bar-item.scss';

const getSubNavMenu = (props: INavBarItemProps) => {
  if (!props.subNavigationItems.length) return null;
  return (
    <ul className="nav-bar-item__sub-menu">
      {props.subNavigationItems.map((subNavItem) => (
        <li className="nav-bar-item__sub-nav-item" key={subNavItem}>
          {subNavItem}
        </li>
      ))}
    </ul>
  );
};

const DOWN_ARROW_UNICODE = '\u25bc';

const NavBarItem = (props: INavBarItemProps) => (
  <li className="nav-bar-item">
    <div className={`nav-bar-item__icon nav-bar-item__icon--${props.id}`}></div>
    <div className="nav-bar-item__text">
      {props.id.toUpperCase()}{' '}
      {props.subNavigationItems.length ? DOWN_ARROW_UNICODE : ''}
    </div>
    {getSubNavMenu(props)}
  </li>
);

export default NavBarItem;
