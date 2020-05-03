import React from 'react';
import logo from '../../../assets/logo.png';
import SocialButton from '../../shared/components/social-button/SocialButton';
import SearchBar from '../search-bar/SearchBar';
import './header.scss';

/**
 * The app's header component. This includes the TitanStar Legends logo, social media buttons, and a search bar.
 * @returns the app's header component.
 */
const Header = () => {
  return (
    <header className="header">
      <img src={logo} alt="TitanStar Legends" />

      <div className="header__social-bar">
        <SocialButton type="twitter" />
        <SocialButton type="facebook" />
        <SocialButton type="youtube" />
        <SearchBar />
      </div>
    </header>
  );
};

export default Header;
