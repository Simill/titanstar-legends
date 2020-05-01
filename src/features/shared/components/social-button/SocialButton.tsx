import React from 'react';
import './social-button.scss';
import ISocialButton from './ISocialButton';

const SocialButton = (props: ISocialButton) => {
  return <button className={`social-button social-button--${props.type}`} />;
};

export default SocialButton;
