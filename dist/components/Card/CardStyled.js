import _taggedTemplateLiteral from "/Users/iwonakulacz/Documents/repos/msd-package/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral";

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n      border: 1px solid ", ";\n    "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n      box-shadow: 0px 3px 50px #0000001f;\n    "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  position: relative;\n  width: 100%;\n\n  padding: 18px;\n  border-radius: 12px;\n\n  margin-bottom: 39px;\n\n  background-color: ", ";\n\n  ", "\n  ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

import styled, { css } from 'styled-components';
import { White, LineColor } from 'styles/variables'; // eslint-disable-next-line import/prefer-default-export

export var WrapStyled = styled.div(_templateObject(), White, function (props) {
  return props.withShadow && css(_templateObject2());
}, function (props) {
  return props.withBorder && css(_templateObject3(), LineColor);
});