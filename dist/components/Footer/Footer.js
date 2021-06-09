import React from 'react';
import { FooterStyled, ProductByStyled, SecurityStyled } from './FooterStyled';
import logo from './img/cleeng-logo-sm.png';
import security from './img/security.svg';

const Footer = function Footer(_ref) {
  const { className } = _ref;
  const { isInPopup } = _ref;
  const { isCheckout } = _ref;
  const { isTransparent } = _ref;
  return /* #__PURE__ */ React.createElement(
    FooterStyled,
    {
      isInPopup,
      isTransparent,
      className
    },
    /* #__PURE__ */ React.createElement(
      ProductByStyled,
      null,
      'Powered by',
      /* #__PURE__ */ React.createElement(
        'a',
        {
          href: 'https://cleeng.com/who-are-cleeng',
          rel: 'noopener noreferrer',
          target: '_blank'
        },
        /* #__PURE__ */ React.createElement('img', {
          src: logo,
          alt: 'Cleeng'
        })
      )
    ),
    isCheckout &&
      /* #__PURE__ */ React.createElement(
        SecurityStyled,
        null,
        /* #__PURE__ */ React.createElement('img', {
          src: security,
          alt: ''
        }),
        'Secured checkout'
      )
  );
};

Footer.defaultProps = {
  isInPopup: false,
  isCheckout: true,
  isTransparent: false,
  className: ''
};
export default Footer;
