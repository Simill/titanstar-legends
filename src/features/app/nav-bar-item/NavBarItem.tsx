import React from 'react';
import { INavBarItemProps } from './INavBarProps';
import './nav-bar-item.scss';
import { DOWN_ARROW_UNICODE } from '../../shared/constants';

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

/**
 * An individual nav bar item. This renders the item's text and icon.
 * If the item has a sub-nav menu, that is rendered below it after hovering over it.
 * @param props - The nav bar item's props.
 * @returns the nav bar item component.
 */
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
