import React from 'react';
import './footer.scss';
import SocialButton from '../../shared/components/social-button/SocialButton';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__nav-info">
        <span>
          <a href="#snowflakes">SNOWFLAKES</a> | <a href="#magnets">MAGNETS</a>{' '}
          | <a href="#liquids">LIQUIDS</a>
        </span>
        <span>Fandom Front-End Design Challenge - Copyright 2020</span>
      </div>
      <div className="footer__social-buttons">
        <SocialButton type="twitter" />
        <SocialButton type="facebook" />
        <SocialButton type="youtube" />
      </div>
    </footer>
  );
};

export default Footer;
