import _taggedTemplateLiteral from '/Users/iwonakulacz/Documents/repos/msd-package/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral';

import styled from 'styled-components';
import * as variables from 'styles/variables';
import { media } from 'styles/BreakPoints';

function _templateObject9() {
  const data = _taggedTemplateLiteral([
    '\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 12px;\n'
  ]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  const data = _taggedTemplateLiteral(['\n    width: 100%;\n  ']);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  const data = _taggedTemplateLiteral(['\n  width: 400px;\n\n  ', '\n']);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  const data = _taggedTemplateLiteral([
    '\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-end;\n  margin: 16px 0;\n'
  ]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  const data = _taggedTemplateLiteral([
    '\n  font-size: 25px;\n  font-weight: ',
    ';\n'
  ]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  const data = _taggedTemplateLiteral([
    '\n  font-weight: ',
    ';\n  text-transform: uppercase;\n'
  ]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  const data = _taggedTemplateLiteral(['\n    width: auto;\n  ']);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  const data = _taggedTemplateLiteral([
    '\n  float: right;\n  font-size: 16px;\n  color: ',
    ';\n\n  & span {\n    font-size: 12px;\n  }\n\n  ',
    '\n'
  ]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  const data = _taggedTemplateLiteral([
    '\n  font-size: 16px;\n  color: ',
    ';\n'
  ]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}
export var StyledLabel = styled.div(_templateObject(), variables.MainColor);
export var StyledOfferPrice = styled.h3(
  _templateObject2(),
  variables.MainColor,
  media.small(_templateObject3())
);
export var StyledTotalLabel = styled(StyledLabel)(
  _templateObject4(),
  variables.BoldFont
);
export var StyledTotalOfferPrice = styled(StyledOfferPrice)(
  _templateObject5(),
  variables.MediumFontWeight
);
export var StyledPriceBox = styled.div(_templateObject6());
export var StyledPriceBoxWrapper = styled.div(
  _templateObject7(),
  media.small(_templateObject8())
);
export var StyledPriceWrapper = styled.div(_templateObject9());
