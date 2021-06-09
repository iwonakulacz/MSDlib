import _taggedTemplateLiteral from "/Users/iwonakulacz/Documents/repos/msd-package/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral";

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n  line-height: 1rem;\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n  margin: auto 0 0 5px;\n\n  font-size: ", ";\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n    font-size: ", ";\n  "]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  font-size: ", ";\n\n  font-weight: ", ";\n\n  ", "\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n    font-size: ", ";\n  "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  margin-right: 2px;\n\n  font-size: ", ";\n  font-weight: ", ";\n\n  ", "\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    flex-wrap: nowrap;\n  "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: flex-end;\n\n  align-items: center;\n\n  color: ", ";\n\n  ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

import styled from 'styled-components';
import { mediaFrom } from 'styles/BreakPoints';
import { MainColor, BigFont, LargeFont, MediumFontWeight, TinyFont } from 'styles/variables';
export var WrapperStyled = styled.h3(_templateObject(), MainColor, mediaFrom.small(_templateObject2()));
export var CurrencyStyled = styled.span(_templateObject3(), TinyFont, MediumFontWeight, mediaFrom.small(_templateObject4(), BigFont));
export var PriceStyled = styled.span(_templateObject5(), BigFont, MediumFontWeight, mediaFrom.small(_templateObject6(), LargeFont));
export var PeriodStyled = styled.span(_templateObject7(), TinyFont);
export var InnerWrapper = styled.div(_templateObject8());