import _taggedTemplateLiteral from "/Users/iwonakulacz/Documents/repos/msd-package/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral";

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n      margin-top: ", ";\n    "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n      text-align: center;\n    "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  margin: 25px 0;\n  font-size: ", ";\n  font-weight: ", ";\n  color: ", ";\n  text-transform: uppercase;\n  ", "\n  ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

import React from 'react';
import styled, { css } from 'styled-components';
import { MainColor, BigFont, BoldFont } from 'styles/variables';
var HeadingStyled = styled.h2(_templateObject(), BigFont, BoldFont, MainColor, function (props) {
  return props.center && css(_templateObject2());
}, function (props) {
  return props.marginTop && css(_templateObject3(), props.marginTop);
});

var SectionHeader = function SectionHeader(_ref) {
  var children = _ref.children,
      center = _ref.center,
      marginTop = _ref.marginTop;
  return /*#__PURE__*/React.createElement(HeadingStyled, {
    center: center,
    marginTop: marginTop
  }, children);
};

export default SectionHeader;
SectionHeader.defaultProps = {
  children: '',
  center: false,
  marginTop: '25px'
};