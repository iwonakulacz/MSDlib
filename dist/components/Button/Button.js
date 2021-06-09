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

var Button = function Button(_ref) {
  var type = _ref.type,
      onClickFn = _ref.onClickFn,
      disabled = _ref.disabled,
      children = _ref.children,
      isLink = _ref.isLink,
      to = _ref.to,
      label = _ref.label,
      size = _ref.size,
      theme = _ref.theme,
      fontSize = _ref.fontSize,
      margin = _ref.margin,
      fontWeight = _ref.fontWeight,
      width = _ref.width,
      icon = _ref.icon,
      padding = _ref.padding,
      className = _ref.className;
  var LinkProps = {
    as: Link,
    to: {
      pathname: to.pathname,
      state: {
        fromMyAccount: to.fromMyAccount
      }
    }
  };
  var ButtonProps = {
    type: type,
    onClick: onClickFn
  };
  return /*#__PURE__*/React.createElement(ButtonStyled, Object.assign({}, isLink ? LinkProps : ButtonProps, {
    disabled: disabled,
    "aria-label": label,
    size: size,
    theme: theme,
    fontSize: fontSize,
    margin: margin,
    fontWeight: fontWeight,
    width: width,
    icon: icon,
    padding: padding,
    className: className
  }), children);
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