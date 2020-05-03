import React from 'react';
import './nav-bar.scss';
import { INavBarItemProps } from '../nav-bar-item/INavBarProps';
import NavBarItem from '../nav-bar-item/NavBarItem';

/**
 * Renders the app's nav bar.
 * @returns - the nav bar component.
 */
const NavBar = () => {
  const navItems: INavBarItemProps[] = [
    {
      id: 'snowflakes',
      subNavigationItems: [],
    },
    { id: 'magnets', subNavigationItems: [] },
    {
      id: 'liquids',
      subNavigationItems: ['Flammable', 'Combustable', 'Flambustable'],
    },
  ];

  return (
    <nav className="nav-bar">
      {navItems.map((itemProps) => (
        <NavBarItem {...itemProps} key={itemProps.id} />
      ))}
    </nav>
  );
};

export default NavBar;
