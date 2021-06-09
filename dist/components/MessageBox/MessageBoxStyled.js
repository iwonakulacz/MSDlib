import _taggedTemplateLiteral from '/Users/iwonakulacz/Documents/repos/msd-package/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral';

import styled from 'styled-components';
import { BackgroundColor, LineColor, ConfirmColor } from 'styles/variables';

function _templateObject3() {
  const data = _taggedTemplateLiteral([
    '\n  margin-left: 13px;\n  font-size: 12px;\n  color: ',
    ';\n'
  ]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  const data = _taggedTemplateLiteral([
    '\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  width: 18px;\n  height: 18px;\n  background-color: ',
    ';\n  border-radius: 3px;\n\n  svg {\n    height: 12px;\n    fill: #fff;\n  }\n'
  ]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  const data = _taggedTemplateLiteral([
    '\n  display: flex;\n  align-items: center;\n  padding: 19px 18px;\n  background-color: ',
    ';\n  border: 1px solid ',
    ';\n  border-radius: 7px;\n'
  ]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}
export var MessageBoxStyled = styled.div(
  _templateObject(),
  BackgroundColor,
  LineColor
);
export var MessageBoxIconWrapStyled = styled.div(
  _templateObject2(),
  ConfirmColor
);
export var MessageBoxMessageStyled = styled.div(
  _templateObject3(),
  ConfirmColor
);
