import _taggedTemplateLiteral from '/Users/iwonakulacz/Documents/repos/msd-package/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral';

import React from 'react';
import styled, { css } from 'styled-components';
import { MainColor, BigFont, BoldFont } from 'styles/variables';

function _templateObject3() {
  const data = _taggedTemplateLiteral(['\n      margin-top: ', ';\n    ']);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  const data = _taggedTemplateLiteral(['\n      text-align: center;\n    ']);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  const data = _taggedTemplateLiteral([
    '\n  margin: 25px 0;\n  font-size: ',
    ';\n  font-weight: ',
    ';\n  color: ',
    ';\n  text-transform: uppercase;\n  ',
    '\n  ',
    '\n'
  ]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}
const HeadingStyled = styled.h2(
  _templateObject(),
  BigFont,
  BoldFont,
  MainColor,
  function(props) {
    return props.center && css(_templateObject2());
  },
  function(props) {
    return props.marginTop && css(_templateObject3(), props.marginTop);
  }
);

const SectionHeader = function SectionHeader(_ref) {
  const { children } = _ref;
  const { center } = _ref;
  const { marginTop } = _ref;
  return /* #__PURE__ */ React.createElement(
    HeadingStyled,
    {
      center,
      marginTop
    },
    children
  );
};

export default SectionHeader;
SectionHeader.defaultProps = {
  children: '',
  center: false,
  marginTop: '25px'
};
