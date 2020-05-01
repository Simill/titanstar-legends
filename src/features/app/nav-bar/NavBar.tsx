import React from 'react';
import './nav-bar.scss';
import { INavBarItemProps } from '../nav-bar-item/INavBarProps';
import NavBarItem from '../nav-bar-item/NavBarItem';

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
    <div className="nav-bar">
      {navItems.map((itemProps) => (
        <NavBarItem {...itemProps} key={itemProps.id} />
      ))}
    </div>
  );
};

export default NavBar;
