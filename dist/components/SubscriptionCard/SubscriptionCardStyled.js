import _taggedTemplateLiteral from '/Users/iwonakulacz/Documents/repos/msd-package/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral';

import styled from 'styled-components';
import { mediaFrom } from 'styles/BreakPoints';
import {
  BoldFont,
  MediumFont,
  MediumFontWeight,
  TinyFont,
  SmallFont,
  MicroFont,
  MainColor,
  White,
  LineColor,
  BackgroundColor
} from 'styles/variables';

function _templateObject10() {
  const data = _taggedTemplateLiteral([
    '\n  font-size: ',
    ';\n  color: ',
    ';\n  margin: 0 0 0 10px;\n'
  ]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  const data = _taggedTemplateLiteral([
    '\n  display: flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  align-items: center;\n  margin: 15px 0;\n  padding: 12px;\n  border: 1px solid ',
    ';\n  background: ',
    ';\n  border-radius: 4px;\n'
  ]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  const data = _taggedTemplateLiteral([
    '\n  width: 80px;\n  padding: 4px 8px;\n  margin-bottom: 4px;\n  background-color: ',
    ';\n  color: ',
    ';\n  border: 1px solid ',
    ';\n  border-radius: 10px;\n  font-size: 9px;\n  font-size: ',
    ';\n  font-weight: ',
    ';\n  text-transform: uppercase;\n'
  ]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  const data = _taggedTemplateLiteral([
    '\n  display: flex;\n  flex-direction: column;\n  margin: auto 0 auto auto;\n'
  ]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  const data = _taggedTemplateLiteral([
    '\n  font-size: ',
    ';\n  font-weight: ',
    ';\n  line-height: 17px;\n'
  ]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  const data = _taggedTemplateLiteral([
    '\n    font-size: ',
    ';\n    line-height: 19px;\n  '
  ]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  const data = _taggedTemplateLiteral([
    '\n  margin: 0 auto 3px 0;\n\n  font-weight: ',
    ';\n  font-size: ',
    ';\n  line-height: 15px;\n\n  ',
    ';\n'
  ]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  const data = _taggedTemplateLiteral([
    '\n    max-width: none;\n    margin-right: 20px;\n  '
  ]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  const data = _taggedTemplateLiteral([
    '\n  max-width: 50%;\n  color: ',
    ';\n  margin-right: 15px;\n\n  ',
    '\n'
  ]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  const data = _taggedTemplateLiteral([
    '\n  display: flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  align-items: center;\n  width: 100%;\n'
  ]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}
export var WrapperStyled = styled.section(_templateObject());
export var InnerWrapper = styled.div(
  _templateObject2(),
  MainColor,
  mediaFrom.small(_templateObject3())
);
export var TitleStyled = styled.h1(
  _templateObject4(),
  BoldFont,
  SmallFont,
  mediaFrom.small(_templateObject5(), MediumFont)
);
export var DescriptionStyled = styled.h2(
  _templateObject6(),
  TinyFont,
  MediumFontWeight
);
export var PriceWrapperStyled = styled.div(_templateObject7());
export var TrialBadgeStyled = styled.div(
  _templateObject8(),
  White,
  MainColor,
  LineColor,
  MicroFont,
  MediumFontWeight
);
export var SubBoxStyled = styled.div(
  _templateObject9(),
  LineColor,
  BackgroundColor
);
export var BoxTextStyled = styled.p(_templateObject10(), TinyFont, MainColor);
