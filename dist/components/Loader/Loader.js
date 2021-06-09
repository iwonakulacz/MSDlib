import React from 'react';
import { LoaderStyled } from './LoaderStyled';

const Loader = function Loader(_ref) {
  const { buttonLoader } = _ref;
  const { smallLoader } = _ref;
  const { centered } = _ref;
  const { color } = _ref;
  const { isMyAccount } = _ref;
  return /* #__PURE__ */ React.createElement(
    LoaderStyled,
    {
      buttonLoader,
      smallLoader,
      centered,
      color,
      isMyAccount
    },
    /* #__PURE__ */ React.createElement('div', null),
    /* #__PURE__ */ React.createElement('div', null),
    /* #__PURE__ */ React.createElement('div', null),
    /* #__PURE__ */ React.createElement('div', null),
    /* #__PURE__ */ React.createElement('div', null),
    /* #__PURE__ */ React.createElement('div', null),
    /* #__PURE__ */ React.createElement('div', null),
    /* #__PURE__ */ React.createElement('div', null),
    /* #__PURE__ */ React.createElement('div', null),
    /* #__PURE__ */ React.createElement('div', null),
    /* #__PURE__ */ React.createElement('div', null),
    /* #__PURE__ */ React.createElement('div', null)
  );
};

Loader.defaultProps = {
  buttonLoader: false,
  smallLoader: false,
  centered: false,
  color: null,
  isMyAccount: false
};
export default Loader;
