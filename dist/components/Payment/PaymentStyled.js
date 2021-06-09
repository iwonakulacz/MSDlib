import _taggedTemplateLiteral from "/Users/iwonakulacz/Documents/repos/msd-package/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral";

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n    width: 90%;\n    max-width: 400px;\n  "]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  max-width: 50%;\n  margin-bottom: 20px;\n  text-align: center;\n  line-height: 1.4em;\n  font-size: 13px;\n  ", "\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  height: 180px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n    button{\n      flex-basis: 100%;\n    }\n  "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  margin-bottom: 10px;\n  font-size: 20px;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  align-items: center;\n  button {\n    flex-basis: 200px;\n    margin: 10px;\n\n    :not(:disabled):hover,\n    :active,\n    :focus {\n      background-color: ", ";\n    }\n  }\n  ", "\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  text-align: center;\n  font-size: 15px;\n  color: ", ";\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  padding: 20px 35px 70px 35px;\n  width: 100%;\n  margin-top: 20px;\n  background-color: ", ";\n  border-top: 1px solid ", ";\n  border-bottom: 1px solid ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

import styled from 'styled-components';
import * as colors from 'styles/variables';
import { media } from 'styles/BreakPoints';
export var PaymentStyled = styled.div(_templateObject(), colors.BackgroundColor, colors.LineColor, colors.LineColor);
export var PaymentErrorStyled = styled.div(_templateObject2(), colors.ErrorColor);
export var MethodsWrapperStyled = styled.div(_templateObject3(), colors.MediumGrey, media.smallest(_templateObject4()));
export var PayPalWrapperStyled = styled.div(_templateObject5());
export var PayPalTextStyled = styled.p(_templateObject6(), media.small(_templateObject7()));