import React from 'react';
import { WrapStyled } from './CardStyled';

var Card = function Card(_ref) {
  var className = _ref.className,
      children = _ref.children,
      withShadow = _ref.withShadow,
      withBorder = _ref.withBorder;
  return /*#__PURE__*/React.createElement(WrapStyled, {
    withShadow: withShadow,
    className: className,
    withBorder: withBorder
  }, children);
};

export default Card;
Card.defaultProps = {
  children: '',
  withShadow: false,
  className: '',
  withBorder: false
};