import _taggedTemplateLiteral from "/Users/iwonakulacz/Documents/repos/msd-package/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral";

function _templateObject16() {
  var data = _taggedTemplateLiteral(["\n        transform: scaleY(0.8) rotateX(180deg);\n      "]);

  _templateObject16 = function _templateObject16() {
    return data;
  };

  return data;
}

function _templateObject15() {
  var data = _taggedTemplateLiteral(["\n  position: relative;\n  line-height: 1.2;\n  &:after {\n    position: absolute;\n    right: -20px;\n    bottom: 0;\n    font-size: 11px;\n    transform: scaleY(0.8) rotate(0deg);\n    transition: all 0.3s ease-in-out;\n    content: '\u25BC';\n    ", "\n  }\n"]);

  _templateObject15 = function _templateObject15() {
    return data;
  };

  return data;
}

function _templateObject14() {
  var data = _taggedTemplateLiteral(["\n  margin-top: 6px;\n\n  color: ", ";\n\n  font-size: 12px;\n"]);

  _templateObject14 = function _templateObject14() {
    return data;
  };

  return data;
}

function _templateObject13() {
  var data = _taggedTemplateLiteral(["\n  color: ", ";\n\n  font-size: 13px;\n"]);

  _templateObject13 = function _templateObject13() {
    return data;
  };

  return data;
}

function _templateObject12() {
  var data = _taggedTemplateLiteral(["\n  margin-top: 6px;\n\n  color: ", ";\n\n  font-size: 12px;\n"]);

  _templateObject12 = function _templateObject12() {
    return data;
  };

  return data;
}

function _templateObject11() {
  var data = _taggedTemplateLiteral(["\n  color: ", ";\n\n  font-size: 13px;\n  font-weight: 700;\n  line-height: 15px;\n"]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  flex-shrink: 0;\n  margin-left: 20px;\n  text-align: right;\n"]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = _taggedTemplateLiteral(["\n  max-width: 70%;\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n      height: ", "px;\n    "]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n  height: 174px;\n  transition: all 0.3s ease-in-out;\n  overflow: hidden;\n\n  ", ";\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n        &:first-child {\n          padding: 0 0 18px 0;\n        }\n\n        &:last-child {\n          padding: 18px 0 0 0;\n          border-bottom: none;\n        }\n      "]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n        padding: 0;\n        border-bottom: none;\n      "]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: space-between;\n  flex-wrap: no-wrap;\n\n  padding: 18px 0;\n  border-bottom: 1px solid ", ";\n\n  ", "\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  color: ", ";\n  font-size: 13px;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    button{\n      width: 100%;\n    }\n  "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  position: relative;\n\n  margin-bottom: 20px;\n\n  ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

import styled, { css } from 'styled-components';
import { MyAccountTextGray, LineColor, MainColor } from 'styles/variables';
import { media } from 'styles/BreakPoints';
export var WrapStyled = styled.div(_templateObject(), media.small(_templateObject2()));
export var InfoMessageStyled = styled.div(_templateObject3(), MyAccountTextGray);
export var InsideWrapperStyled = styled.div(_templateObject4(), LineColor, function (props) {
  return props.length === 1 && css(_templateObject5()) || props.length !== 1 && css(_templateObject6());
});
export var TransactionListStyled = styled.div(_templateObject7(), function (props) {
  return props.length && css(_templateObject8(), props.length * 70);
});
export var LeftBoxStyled = styled.div(_templateObject9());
export var RightBoxStyled = styled.div(_templateObject10());
export var TitleStyled = styled.h3(_templateObject11(), MainColor);
export var SubTitleStyled = styled.div(_templateObject12(), MainColor);
export var IdStyled = styled.div(_templateObject13(), MainColor);
export var DateStyled = styled.div(_templateObject14(), MainColor);
export var ButtonTextStyled = styled.span(_templateObject15(), function (props) {
  return props.isExpanded && css(_templateObject16());
});