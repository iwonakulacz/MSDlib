import React from 'react';
import { isHeaderOff } from 'util/layoutHelper';
import { HeaderStyled, LogoStyled } from './HeaderStyled';
import headerLogo from './img/logo.png';

const Header = function Header(_ref) {
  const { withoutLogo } = _ref;
  const { children } = _ref;
  return /* #__PURE__ */ React.createElement(
    HeaderStyled,
    {
      switchOff: isHeaderOff()
    },
    !withoutLogo &&
      /* #__PURE__ */ React.createElement(LogoStyled, {
        logoSrc: headerLogo
      }),
    children
  );
};

Header.defaultProps = {
  withoutLogo: false,
  children: null
};
export default Header;
