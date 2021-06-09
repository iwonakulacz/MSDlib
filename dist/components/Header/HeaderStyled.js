import _taggedTemplateLiteral from '/Users/iwonakulacz/Documents/repos/msd-package/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral';

import styled, { css } from 'styled-components';
import * as colors from 'styles/variables';

function _templateObject4() {
  const data = _taggedTemplateLiteral(['url(', ')']);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  const data = _taggedTemplateLiteral([
    '\n  height: 80px;\n  width: 100%;\n\n  background-image: ',
    ';\n  background-size: auto 35%;\n  background-position: center;\n  background-repeat: no-repeat;\n'
  ]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  const data = _taggedTemplateLiteral(['\n      display: none;\n    ']);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  const data = _taggedTemplateLiteral([
    '\n  display: flex;\n  position: relative;\n\n  padding: 0;\n\n  background-color: ',
    ';\n  border-bottom: 1px ',
    ' solid;\n\n  text-align: center;\n\n  ',
    '\n'
  ]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}
export var HeaderStyled = styled.header(
  _templateObject(),
  colors.BackgroundColor,
  colors.LineColor,
  function(props) {
    return props.switchOff && css(_templateObject2());
  }
);
export var LogoStyled = styled.div(_templateObject3(), function(props) {
  return props.logoSrc && css(_templateObject4(), props.logoSrc);
});
