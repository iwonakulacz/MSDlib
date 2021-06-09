import React from 'react';
import { WrapStyled } from './CardStyled';

const Card = function Card(_ref) {
  const { className } = _ref;
  const { children } = _ref;
  const { withShadow } = _ref;
  const { withBorder } = _ref;
  return /* #__PURE__ */ React.createElement(
    WrapStyled,
    {
      withShadow,
      className,
      withBorder
    },
    children
  );
};

export default Card;
Card.defaultProps = {
  children: '',
  withShadow: false,
  className: '',
  withBorder: false
};
