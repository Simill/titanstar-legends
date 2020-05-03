import React from 'react';
import './social-button.scss';
import ISocialButton from './ISocialButton';

/**
 * A styled wrapper around an HTML button element that displays social media icons.
 * @param props - The props that indicate which social media icon to display.
 * @returns The social media button for that particular icon.
 */
const SocialButton = (props: ISocialButton) => {
  return <button className={`social-button social-button--${props.type}`} />;
};

export default SocialButton;
