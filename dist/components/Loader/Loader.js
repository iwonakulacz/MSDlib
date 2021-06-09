import React from 'react';
import { LoaderStyled } from './LoaderStyled';

var Loader = function Loader(_ref) {
  var buttonLoader = _ref.buttonLoader,
      smallLoader = _ref.smallLoader,
      centered = _ref.centered,
      color = _ref.color,
      isMyAccount = _ref.isMyAccount;
  return /*#__PURE__*/React.createElement(LoaderStyled, {
    buttonLoader: buttonLoader,
    smallLoader: smallLoader,
    centered: centered,
    color: color,
    isMyAccount: isMyAccount
  }, /*#__PURE__*/React.createElement("div", null), /*#__PURE__*/React.createElement("div", null), /*#__PURE__*/React.createElement("div", null), /*#__PURE__*/React.createElement("div", null), /*#__PURE__*/React.createElement("div", null), /*#__PURE__*/React.createElement("div", null), /*#__PURE__*/React.createElement("div", null), /*#__PURE__*/React.createElement("div", null), /*#__PURE__*/React.createElement("div", null), /*#__PURE__*/React.createElement("div", null), /*#__PURE__*/React.createElement("div", null), /*#__PURE__*/React.createElement("div", null));
};

Loader.defaultProps = {
  buttonLoader: false,
  smallLoader: false,
  centered: false,
  color: null,
  isMyAccount: false
};
export default Loader;