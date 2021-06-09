import _taggedTemplateLiteral from "/Users/iwonakulacz/Documents/repos/msd-package/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral";

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  color: ", ";\n\n  font-size: 14px;\n  & img {\n    padding-right: 5px;\n  }\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n\n  color: ", ";\n\n  font-size: 12px;\n  font-weight: 300;\n  & a {\n    padding: 0 5px;\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n      position: fixed;\n      left: 0;\n    "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n      border: none;\n    "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n\n  width: 100%;\n  padding: 10px 34px;\n\n  border-top: 1px solid ", ";\n  background-color: ", ";\n\n  ", "\n\n  ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

import styled, { css } from 'styled-components';
import * as colors from 'styles/variables';
export var FooterStyled = styled.footer(_templateObject(), colors.LineColor, function (props) {
  return props.isTransparent ? 'transparent' : colors.White;
}, function (props) {
  return props.isTransparent && css(_templateObject2());
}, function (props) {
  return props.isInPopup && css(_templateObject3());
});
export var ProductByStyled = styled.span(_templateObject4(), colors.MainColor);
export var SecurityStyled = styled.div(_templateObject5(), colors.ConfirmColor);