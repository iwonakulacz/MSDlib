import _taggedTemplateLiteral from "/Users/iwonakulacz/Documents/repos/msd-package/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral";

function _templateObject16() {
  var data = _taggedTemplateLiteral(["\n    flex-direction: row;\n    align-items: center;\n\n    padding: 0 26px 0 0;\n    margin-bottom: 16px;\n\n    border-radius: 8px;\n  "]);

  _templateObject16 = function _templateObject16() {
    return data;
  };

  return data;
}

function _templateObject15() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  padding: 12px 0;\n  border-radius: 12px;\n\n  transition: opacity 0.1s;\n\n  &:hover {\n    ", " {\n      &:after {\n        transform: scaleX(1);\n      }\n      opacity: 1;\n    }\n  }\n\n  &.active {\n    ", " {\n      path {\n        opacity: 1;\n        fill: ", ";\n      }\n    }\n\n    ", " {\n      &:after {\n        transform: scaleX(1);\n      }\n      opacity: 1;\n    }\n  }\n\n  ", "\n"]);

  _templateObject15 = function _templateObject15() {
    return data;
  };

  return data;
}

function _templateObject14() {
  var data = _taggedTemplateLiteral(["\n    margin: auto auto auto 20px;\n   font-size: 15px;\n  "]);

  _templateObject14 = function _templateObject14() {
    return data;
  };

  return data;
}

function _templateObject13() {
  var data = _taggedTemplateLiteral(["\n  opacity: 0.4;\n  width: auto;\n  margin: auto;\n\n  color: ", ";\n  font-size: 13px;\n\n  font-weight: 700;\n  line-height: 21px;\n\n  transition: all 0.1s ease-in-out;\n\n  &:after {\n    display: block;\n    content: '';\n    border-bottom: 2px solid ", ";\n    transform: scaleX(0);\n    transition: transform 250ms ease-in-out;\n    transform-origin: 0% 50%;\n  }\n\n  ", "\n"]);

  _templateObject13 = function _templateObject13() {
    return data;
  };

  return data;
}

function _templateObject12() {
  var data = _taggedTemplateLiteral(["\n    display: flex;\n    border: 0;\n    height: 50px;\n    width: 17px;\n  "]);

  _templateObject12 = function _templateObject12() {
    return data;
  };

  return data;
}

function _templateObject11() {
  var data = _taggedTemplateLiteral(["\n  display: none;\n  justify-content: center;\n  align-items: center;\n\n  path {\n    opacity: 0.4;\n    fill: ", ";\n  }\n\n  ", "\n"]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10() {
  var data = _taggedTemplateLiteral(["\n    margin-right: 0;\n  "]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = _taggedTemplateLiteral(["\n      margin-right: 16px;\n  "]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n        display: none;\n      "]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n      ", "\n    "]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  ", "\n\n  &.active {\n    opacity: 1;\n  }\n\n  ", "\n\n  ", "\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n    flex-direction: column;\n  "]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n    justify-content: flex-start;\n  "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n\n  ", "\n\n  ", "\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    padding: 26px 0;\n  "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  padding: 10px 0;\n\n  ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

import styled, { css } from 'styled-components';
import { mediaFrom } from 'styles/BreakPoints';
import { MyAccountTextGray, MainColor, ConfirmColor } from 'styles/variables';
import { NavLink } from 'react-router-dom';
export var WrapStyled = styled.nav(_templateObject(), mediaFrom.small(_templateObject2()));
export var ItemsStyled = styled.div(_templateObject3(), mediaFrom.smallest(_templateObject4()), mediaFrom.small(_templateObject5()));
export var ItemWrapStyled = styled.div(_templateObject6(), function (props) {
  return !props.visibleOnDesktop && css(_templateObject7(), mediaFrom.small(_templateObject8()));
}, mediaFrom.smallest(_templateObject9()), mediaFrom.small(_templateObject10()));
export var ItemIconWrapStyled = styled.div(_templateObject11(), MyAccountTextGray, mediaFrom.small(_templateObject12()));
export var ItemLabelStyled = styled.div(_templateObject13(), MainColor, ConfirmColor, mediaFrom.small(_templateObject14()));
export var ItemLinkStyled = styled(NavLink)(_templateObject15(), ItemLabelStyled, ItemIconWrapStyled, ConfirmColor, ItemLabelStyled, mediaFrom.small(_templateObject16()));