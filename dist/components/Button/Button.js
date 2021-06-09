/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Link } from 'react-router-dom';
import ButtonStyled from './ButtonStyled';

export var BUTTON_SIZE = {
  BIG: 'big'
};
export var BUTTON_THEME = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
  SIMPLE: 'simple',
  NAVLINK: 'navLink',
  LINK: 'link',
  PAYMENT: 'payment',
  CONFIRM: 'confirm'
};

const Button = function Button(_ref) {
  const { type } = _ref;
  const { onClickFn } = _ref;
  const { disabled } = _ref;
  const { children } = _ref;
  const { isLink } = _ref;
  const { to } = _ref;
  const { label } = _ref;
  const { size } = _ref;
  const { theme } = _ref;
  const { fontSize } = _ref;
  const { margin } = _ref;
  const { fontWeight } = _ref;
  const { width } = _ref;
  const { icon } = _ref;
  const { padding } = _ref;
  const { className } = _ref;
  const LinkProps = {
    as: Link,
    to: {
      pathname: to.pathname,
      state: {
        fromMyAccount: to.fromMyAccount
      }
    }
  };
  const ButtonProps = {
    type,
    onClick: onClickFn
  };
  return /* #__PURE__ */ React.createElement(
    ButtonStyled,
    {
      ...(isLink ? LinkProps : ButtonProps),
      disabled,
      'aria-label': label,
      size,
      theme,
      fontSize,
      margin,
      fontWeight,
      width,
      icon,
      padding,
      className
    },
    children
  );
};

export default Button;
Button.defaultProps = {
  size: null,
  theme: BUTTON_THEME.PRIMARY,
  children: '',
  type: 'button',
  onClickFn: function onClickFn() {},
  disabled: false,
  isLink: false,
  to: {
    pathname: '',
    state: {
      fromMyAccount: false
    }
  },
  label: null,
  fontSize: null,
  margin: null,
  fontWeight: null,
  width: null,
  icon: null,
  padding: null,
  className: ''
};
