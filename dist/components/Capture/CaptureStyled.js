import _taggedTemplateLiteral from '/Users/iwonakulacz/Documents/repos/msd-package/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral';

import styled from 'styled-components';
import * as colors from 'styles/variables';
import { media } from 'styles/BreakPoints';

function _templateObject4() {
  const data = _taggedTemplateLiteral([
    '\n  margin-bottom: 16px;\n  font-size: 16px;\n  line-height: 22px;\n  text-align: center;\n  text-transform: uppercase;\n  font-weight: 700;\n\n  color: ',
    ';\n'
  ]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  const data = _taggedTemplateLiteral(['\n    width: 80%;\n  ']);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  const data = _taggedTemplateLiteral([
    '\n  position: relative;\n\n  width: 55%;\n  margin: 0 auto;\n  padding-top: 80px;\n  padding-bottom: 70px;\n\n  text-align: center;\n\n  ',
    '\n'
  ]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  const data = _taggedTemplateLiteral(['']);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}
export var CaptureStyled = styled.div(_templateObject());
export var CaptureContentStyled = styled.div(
  _templateObject2(),
  media.small(_templateObject3())
);
export var CaptureTitle = styled.div(_templateObject4(), colors.MainColor);
