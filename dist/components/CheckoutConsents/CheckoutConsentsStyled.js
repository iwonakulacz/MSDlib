import _taggedTemplateLiteral from "/Users/iwonakulacz/Documents/repos/msd-package/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral";

function _templateObject9() {
  var data = _taggedTemplateLiteral(["\n      text-align: center;\n    "]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  height: 13px;\n  margin-top: 8px;\n  content: '';\n  color: ", ";\n  transition: 0.2s ease-in-out;\n  font-size: 13px;\n  text-align: left;\n\n  ", "\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral([""]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  margin-bottom: 36px;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  margin-bottom: 16px;\n  font-size: 13px;\n  line-height: 22px;\n  text-align: center;\n  font-weight: 700;\n\n  color: ", ";\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  margin-bottom: 16px;\n  font-size: 16px;\n  line-height: 22px;\n  text-align: center;\n  font-weight: 700;\n\n  color: ", ";\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  width: 80%;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  position: relative;\n\n  width: 55%;\n  margin: 0 auto;\n  padding-top: 80px;\n  padding-bottom: 105px;\n\n  text-align: center;\n\n  ", "\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral([""]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

import styled, { css } from 'styled-components';
import * as colors from 'styles/variables';
import { media } from 'styles/BreakPoints';
export var CheckoutConsentsStyled = styled.div(_templateObject());
export var CheckoutConsentsContentStyled = styled.div(_templateObject2(), media.small(_templateObject3()));
export var CheckoutConsentsTitleStyled = styled.h3(_templateObject4(), colors.MainColor);
export var CheckoutConsentsSubTitleStyled = styled.h4(_templateObject5(), colors.MediumGrey);
export var CheckoutConsentsListStyled = styled.div(_templateObject6());
export var CheckoutConsentsCheckbox = styled.div(_templateObject7());
export var CheckoutConsentsError = styled.div(_templateObject8(), colors.ErrorColor, function (props) {
  return props.center && css(_templateObject9());
});