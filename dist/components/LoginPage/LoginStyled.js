import _taggedTemplateLiteral from '/Users/iwonakulacz/Documents/repos/msd-package/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral';

import styled from 'styled-components';
import * as colors from 'styles/variables';
import { media } from 'styles/BreakPoints';

function _templateObject8() {
  const data = _taggedTemplateLiteral([
    '\n  color: ',
    ';\n  position: absolute;\n  top: 20px;\n  width: 100%;\n  font-size: 13px;\n  font-weight: 600;\n'
  ]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  const data = _taggedTemplateLiteral([
    '\n  position: absolute;\n  top: 20px;\n  width: 100%;\n\n  color: ',
    ';\n\n  font-size: 13px;\n  font-weight: 600;\n\n  a {\n    color: ',
    ';\n    font-weight: 600;\n    text-decoration: underline;\n  }\n'
  ]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  const data = _taggedTemplateLiteral([
    '\n  display: block;\n  width: 100%;\n\n  padding: 20px 0;\n\n  color: ',
    ";\n\n  text-align: center;\n  font-size: 13px;\n\n  overflow: hidden;\n\n  &::before,\n  &::after {\n    position: relative;\n    display: inline-block;\n    vertical-align: middle;\n\n    content: '';\n    height: 1px;\n    width: 40%;\n\n    background-color: ",
    ';\n  }\n  &::before {\n    right: 5%;\n\n    margin-left: -50%;\n  }\n  &::after {\n    left: 5%;\n    margin-right: -50%;\n  }\n'
  ]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  const data = _taggedTemplateLiteral([
    '\n    flex-direction: column;\n    \n    margin-bottom: 20px;\n    \n    button{\n      width: 100%;\n\n      margin: 5px 0;\n    }\n  '
  ]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  const data = _taggedTemplateLiteral([
    '\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: space-between;\n\n  width: 100%;\n  margin-top: 10px;\n\n  p {\n    margin-top: 20px;\n  }\n\n  button {\n    width: 48%;\n    margin: 10px 0 0 0;\n  }\n\n  ',
    '\n'
  ]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  const data = _taggedTemplateLiteral([
    '\n  padding-top: 40px;\n  & input {\n    position: relative;\n  }\n'
  ]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  const data = _taggedTemplateLiteral(['\n    width: 80%;\n  ']);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  const data = _taggedTemplateLiteral([
    '\n  position: relative;\n\n  width: 55%;\n  margin: 0 auto;\n  padding-bottom: 70px;\n\n  text-align: center;\n\n  ',
    '\n'
  ]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}
export var ContentWrapperStyled = styled.main(
  _templateObject(),
  media.small(_templateObject2())
);
export var FromStyled = styled.form(_templateObject3());
export var SocialStyled = styled.div(
  _templateObject4(),
  media.smallest(_templateObject5())
);
export var SeparatorStyled = styled.div(
  _templateObject6(),
  colors.MainColor,
  colors.MediumGrey
);
export var FormErrorStyled = styled.div(
  _templateObject7(),
  colors.ErrorColor,
  colors.ErrorColor
);
export var FormSuccessStyled = styled.h1(
  _templateObject8(),
  colors.ConfirmColor
);
