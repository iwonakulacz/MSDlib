import _taggedTemplateLiteral from '/Users/iwonakulacz/Documents/repos/msd-package/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral';

import styled, { css } from 'styled-components';
import {
  MainColor,
  BackgroundColor,
  LineColor,
  ErrorColor
} from 'styles/variables';

function _templateObject5() {
  const data = _taggedTemplateLiteral([
    '\n      border: 1px solid ',
    ';\n    '
  ]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  const data = _taggedTemplateLiteral([
    '\n  width: 100%;\n  padding: 10px 16px;\n\n  border: 1px solid ',
    ';\n  border-radius: 4px;\n  font-size: 13px;\n  line-height: 13px;\n\n  &:focus,\n  &:active {\n    border: 1px solid ',
    ';\n  }\n\n  &:disabled {\n    background-color: ',
    ';\n    color: ',
    ';\n  }\n\n  ',
    '\n'
  ]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  const data = _taggedTemplateLiteral([
    '\n  display: block;\n  margin-bottom: 12px;\n  color: ',
    ';\n  font-size: 13px;\n'
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
    '\n  position: relative;\n  margin-bottom: 12px;\n\n  ',
    ';\n'
  ]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}
export var WrapStyled = styled.div(_templateObject(), function(props) {
  return props.hideInput && css(_templateObject2());
});
export var InputElementLabelStyled = styled.label(
  _templateObject3(),
  MainColor
);
export var InputElementStyled = styled.input(
  _templateObject4(),
  LineColor,
  LineColor,
  BackgroundColor,
  MainColor,
  function(props) {
    return props.error && css(_templateObject5(), ErrorColor);
  }
);
