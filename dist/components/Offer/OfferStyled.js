import _taggedTemplateLiteral from "/Users/iwonakulacz/Documents/repos/msd-package/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral";

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  background: ", ";\n  border: 1px solid ", ";\n  border-radius: 12px;\n\n  padding: 20px;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n    padding: 0 10px;\n  "]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  padding: 0 35px;\n  ", "\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: flex-end;\n  margin-top: 12px;\n  margin-bottom: 12px;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  margin: 16px 0;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  background-color: #fff;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

import styled from 'styled-components';
import * as variables from 'styles/variables';
import { media } from 'styles/BreakPoints';
export var StyledOfferWrapper = styled.div(_templateObject());
export var StyledOfferCouponWrapper = styled.div(_templateObject2());
export var StyledOfferDetailsAndCoupon = styled.div(_templateObject3());
export var StyledOfferBody = styled.div(_templateObject4(), media.small(_templateObject5()));
export var SubscriptionCardWrapperStyled = styled.section(_templateObject6(), variables.BackgroundColor, variables.LineColor);