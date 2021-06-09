import _taggedTemplateLiteral from '/Users/iwonakulacz/Documents/repos/msd-package/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral';

import styled from 'styled-components';
import { BackgroundColor, LineColor } from 'styles/variables';
import { mediaFrom } from 'styles/BreakPoints';

function _templateObject2() {
  const data = _taggedTemplateLiteral([
    '\n    border-left: 1px solid ',
    ';\n    border-top: none;\n    padding: 35px;\n\n  '
  ]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  const data = _taggedTemplateLiteral([
    '\n  position: relative;\n  display: flex;\n  flex-grow: 1;\n  min-height: 100%;\n\n  padding: 35px 26px;\n\n  background-color: ',
    ';\n  border-top: 1px solid ',
    ';\n  border-left: none;\n\n  ',
    '\n'
  ]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
} // eslint-disable-next-line import/prefer-default-export

export var WrapStyled = styled.main(
  _templateObject(),
  BackgroundColor,
  LineColor,
  mediaFrom.small(_templateObject2(), LineColor)
);
