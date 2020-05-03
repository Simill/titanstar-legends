import React from 'react';
import IButton from './IButton';
import './button.scss';

const getClassName = (classNameProp?: string): string =>
  `button ${classNameProp ? classNameProp : ''}`;

/**
 * A wrapper component around the default HTML button element. This is used for consistent styling across buttons.
 * @param props - button props.
 * @returns A styled button component.
 */
const Button = (props: IButton) => (
  <button {...props} className={getClassName(props.className)}>
    {props.text}
  </button>
);

export default Button;
