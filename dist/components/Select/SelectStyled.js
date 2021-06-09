import _taggedTemplateLiteral from "/Users/iwonakulacz/Documents/repos/msd-package/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral";

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n      .react-select__value-container {\n        &::after {\n          display: block;\n          position: absolute;\n          right: 16px;\n          top: 50%;\n          transform: translate(0, -50%);\n          content: '*';\n          height: 9px;\n          font-size: 12px;\n          line-height: 12px;\n          color: ", ";\n        }\n      }\n    "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n      .react-select__control {\n        border: 1px solid #d3dbe6;\n        border-radius: 4px;\n      }\n      .react-select__value-container {\n        padding: 0 16px;\n        font-size: 13px;\n      }\n    "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  &:focus-within,\n  &:focus {\n    border-color: ", ";\n  }\n  .react-select__control {\n    background: white;\n    border: 1px solid ", ";\n    border-radius: 0;\n    transition: 0.2s ease-in-out;\n    &--is-focused {\n      &:focus-within,\n      &:focus {\n        border-color: ", ";\n        box-shadow: none;\n      }\n    }\n    &--is-disabled {\n      background-color: ", ";\n    }\n  }\n  .react-select__placeholder {\n    color: ", ";\n  }\n  .react-select__value-container {\n    padding: 13px 15px 14px;\n    color: ", ";\n  }\n  .react-select__menu {\n    border-radius: 0px;\n  }\n  .react-select__menu-list {\n  }\n  .react-select__option {\n    padding: 13px 15px 14px;\n    text-align: left;\n    &--is-focused {\n      background-color: ", ";\n    }\n    &--is-selected {\n      color: ", ";\n      background-color: #fff;\n    }\n  }\n  ", "\n  ", "\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  position: relative;\n\n  width: 100%;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

import styled, { css } from 'styled-components';
import ReactSelect from 'react-select';
import * as Colors from 'styles/variables';
export var SelectStyled = styled.div(_templateObject());
export var ReactSelectStyled = styled(ReactSelect)(_templateObject2(), Colors.ConfirmColor, Colors.MediumGrey, Colors.ConfirmColor, Colors.BackgroundColor, Colors.MainColor, Colors.MainColor, Colors.MediumGrey, Colors.ConfirmColor, function (props) {
  return props.isMyAccount && css(_templateObject3());
}, function (props) {
  return props.required && css(_templateObject4(), Colors.ErrorColor);
});