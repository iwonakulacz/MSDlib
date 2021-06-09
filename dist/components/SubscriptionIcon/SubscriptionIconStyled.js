import _taggedTemplateLiteral from "/Users/iwonakulacz/Documents/repos/msd-package/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral";

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  position: absolute;\n  top: 0;\n  left: 50%;\n  height: 18px;\n  width: 48px;\n\n  background: ", ";\n  border-radius: 10px;\n\n  color: ", ";\n  font-size: 9px;\n  font-weight: 600;\n\n  transform: translate(-50%, -10px);\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    flex: 0 0 50px;\n    margin-right: 15px;\n    padding: 14px 10px;\n    \n    font-size: 20px;\n  "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  position: relative;\n  padding: 10px;\n  margin-right: 10px;\n  border-radius: 8px;\n  flex: 0 0 40px;\n\n  max-width: 50px;\n\n  font-size: 16px;\n  font-weight: ", ";\n  text-align: center;\n\n  background-color: ", ";\n  color: ", ";\n  border: 1px solid ", ";\n\n  ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

import styled from 'styled-components';
import { mediaFrom } from 'styles/BreakPoints';
import { BoldFont, MainColor, White, ConfirmColor } from 'styles/variables';
export var WrapperStyled = styled.div(_templateObject(), BoldFont, function (props) {
  return props.bg;
}, function (props) {
  return props.color;
}, function (props) {
  return props.border;
}, mediaFrom.small(_templateObject2()));
export var LabelStyled = styled.span(_templateObject3(), function (props) {
  return props.label === 'New' ? ConfirmColor : MainColor;
}, White);