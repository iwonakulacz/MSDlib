import _taggedTemplateLiteral from "/Users/iwonakulacz/Documents/repos/msd-package/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral";

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n    width: 288px;\n    padding: 30px 34px;\n\n    footer {\n      display: block;\n      padding: 23px 34px;\n    }\n  "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  position: relative;\n  padding: 0 26px;\n  overflow: hidden;\n\n  footer {\n    display: none;\n  }\n\n  ", "\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    flex-direction: row;\n    min-height: ", ";\n    height: ", ";\n\n    padding: 0;\n  "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  position: relative;\n  display: flex;\n  flex-direction: column;\n\n  height: 100%;\n  min-height: 100vh;\n\n  padding-top: 44px;\n\n  background-color: ", ";\n\n  ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

import styled from 'styled-components';
import { mediaFrom } from 'styles/BreakPoints';
import { White } from 'styles/variables';
export var WrapperStyled = styled.div(_templateObject(), White, mediaFrom.small(_templateObject2(), function (props) {
  return props.hosted ? '100vh' : 'unset';
}, function (props) {
  return props.hosted ? '100vh' : '700px';
}));
export var HeaderStyled = styled.div(_templateObject3(), mediaFrom.small(_templateObject4()));
export var ScrollBarWrapper = styled.div(_templateObject5());