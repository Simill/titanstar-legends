import React from 'react';
import IButton from './IButton';
import './button.scss';

const getClassName = (classNameProp?: string): string =>
  `button ${classNameProp ? classNameProp : ''}`;

const Button = (props: IButton) => (
  <button {...props} className={getClassName(props.className)}>
    {props.text}
  </button>
);

export default Button;
