import _taggedTemplateLiteral from "/Users/iwonakulacz/Documents/repos/msd-package/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral";

function _templateObject13() {
  var data = _taggedTemplateLiteral(["\n    width: 100%;\n    max-width: unset;\n    align-items: center;\n  \n    margin-left: 0;\n  "]);

  _templateObject13 = function _templateObject13() {
    return data;
  };

  return data;
}

function _templateObject12() {
  var data = _taggedTemplateLiteral(["\n      ", " {\n        background-color: ", ";\n        width: 100%;\n        border-radius: 10px;\n\n        min-height: 24px;\n      }\n      ", " {\n        background-color: ", ";\n        width: 100%;\n        border-radius: 5px;\n      }\n      ", " {\n        width: 100%;\n      }\n    "]);

  _templateObject12 = function _templateObject12() {
    return data;
  };

  return data;
}

function _templateObject11() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-grow: 1;\n  flex-direction: column;\n  justify-content: center;\n\n  max-width: calc(100% - 78px);\n  margin-left: 14px;\n\n  color: ", ";\n\n  ", "\n\n  ", "\n"]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10() {
  var data = _taggedTemplateLiteral(["\n  padding: 5px 16px;\n  background-color: #f0f0ff;\n  border-radius: 14px;\n  border: 1px solid #d7d7f5;\n  color: #7172c9;\n  font-size: 9px;\n  line-height: 12px;\n  text-align: center;\n  font-weight: ", ";\n  min-height: 19px;\n"]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = _taggedTemplateLiteral(["\n    margin-bottom: 14px;\n  "]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n      font-size: 14px;\n      font-weight: 700;\n    "]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n  max-width: 100%;\n\n  margin-bottom: 6px;\n\n  color: ", ";\n\n  font-size: ", ";\n  font-weight: 500;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  line-height: 1.2;\n\n  ", "\n\n  ", "\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n    font-size: 26px;\n    line-height: 29px;\n    margin-bottom: 10px;\n    text-align: center;\n  "]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  max-width: 100%;\n\n  margin-bottom: 6px;\n\n  font-size: 20px;\n  line-height: 24px;\n  font-weight: 700;\n  color: ", ";\n  text-overflow: ellipsis;\n  overflow: hidden;\n\n  ", ";\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n    width: 84px;\n    height: 84px;\n    margin-bottom: 20px;\n  "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  width: 64px;\n  height: 64px;\n  min-width: 64px;\n\n  border-radius: 50%;\n  background-image: url(", ");\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n\n  ", "\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    flex-direction: column;\n    align-items: center;\n    border-bottom: 1px solid ", ";\n    padding-bottom: 26px;\n  "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: row;\n\n  padding-bottom: 10px;\n\n  ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

import styled, { css } from 'styled-components';
import { mediaFrom } from 'styles/BreakPoints';
import { MainColor, MyAccountTextLightGray, LineColor, SmallFont, MediumFontWeight } from 'styles/variables';
import portrait from './img/icon_myaccount.svg';
export var WrapStyled = styled.header(_templateObject(), mediaFrom.small(_templateObject2(), LineColor));
export var PhotoStyled = styled.div(_templateObject3(), portrait, mediaFrom.small(_templateObject4()));
export var NameStyled = styled.div(_templateObject5(), MainColor, mediaFrom.small(_templateObject6()));
export var MailStyled = styled.div(_templateObject7(), MainColor, SmallFont, function (props) {
  return props.bigger && css(_templateObject8());
}, mediaFrom.small(_templateObject9()));
export var TextStyled = styled.div(_templateObject10(), MediumFontWeight);
export var DetailsStyled = styled.div(_templateObject11(), MainColor, function (props) {
  return props.isEmpty && css(_templateObject12(), NameStyled, MyAccountTextLightGray, MailStyled, MyAccountTextLightGray, TextStyled);
}, mediaFrom.small(_templateObject13()));