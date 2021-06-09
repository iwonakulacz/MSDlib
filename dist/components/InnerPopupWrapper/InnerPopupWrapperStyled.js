import _taggedTemplateLiteral from "/Users/iwonakulacz/Documents/repos/msd-package/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral";

function _templateObject18() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  margin-bottom: ", ";\n\n  button {\n    text-transform: capitalize;\n    width: 40%;\n    margin: 0 5px;\n    &:disabled {\n      cursor: not-allowed;\n    }\n  }\n"]);

  _templateObject18 = function _templateObject18() {
    return data;
  };

  return data;
}

function _templateObject17() {
  var data = _taggedTemplateLiteral(["\n  font-weight: 700;\n"]);

  _templateObject17 = function _templateObject17() {
    return data;
  };

  return data;
}

function _templateObject16() {
  var data = _taggedTemplateLiteral(["\n  color: ", ";\n  opacity: 0.8;\n  font-size: 14px;\n  line-height: 1.5;\n  margin: 24px 0;\n"]);

  _templateObject16 = function _templateObject16() {
    return data;
  };

  return data;
}

function _templateObject15() {
  var data = _taggedTemplateLiteral(["\n        font-size: 20px;\n      "]);

  _templateObject15 = function _templateObject15() {
    return data;
  };

  return data;
}

function _templateObject14() {
  var data = _taggedTemplateLiteral(["\n      font-size: 20px;\n      ", "\n    "]);

  _templateObject14 = function _templateObject14() {
    return data;
  };

  return data;
}

function _templateObject13() {
  var data = _taggedTemplateLiteral(["\n    font-size: 27px;\n  "]);

  _templateObject13 = function _templateObject13() {
    return data;
  };

  return data;
}

function _templateObject12() {
  var data = _taggedTemplateLiteral(["\n  font-size: 26px;\n  color: ", ";\n  font-weight: 600;\n  text-transform: capitalize;\n  line-height: 1.2;\n\n  ", "\n\n  ", "\n"]);

  _templateObject12 = function _templateObject12() {
    return data;
  };

  return data;
}

function _templateObject11() {
  var data = _taggedTemplateLiteral(["\n    width: 90%;\n  "]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10() {
  var data = _taggedTemplateLiteral(["\n  text-align: center;\n  margin: auto;\n  width: 80%;\n\n  ", "\n"]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = _taggedTemplateLiteral(["\n  font-size: 14px;\n  margin: 0;\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n  display: block;\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  background: ", ";\n  margin-right: 10px;\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n    margin: 30px 0 0 0;\n  "]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  color: ", ";\n  ", "\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n      span:nth-child(-n + ", ") {\n        background: ", ";\n      }\n    "]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: row;\n  ", "\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  padding: 30px;\n  height: 100%;\n  width: 100%;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    display: flex;\n    align-items: flex-start;\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100vh;\n    overflow-y: scroll;\n  "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  border: 1px solid ", ";\n  height: 100%;\n  min-height: 500px;\n  display: flex;\n  padding: 0;\n  margin: 0;\n  ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

import styled, { css } from 'styled-components';
import { MainColor, LineColor } from 'styles/variables';
import { media } from 'styles/BreakPoints';
import Card from 'components/Card';
export var CardStyled = styled(Card)(_templateObject(), LineColor, media.small(_templateObject2()));
export var WrapperStyled = styled.div(_templateObject3());
export var DotsWrapperStyled = styled.div(_templateObject4(), function (props) {
  return props.currentStep && css(_templateObject5(), props.currentStep, MainColor);
});
export var HeaderStyled = styled.div(_templateObject6(), MainColor, media.small(_templateObject7()));
export var DotStyled = styled.span(_templateObject8(), LineColor);
export var HeaderTitleStyled = styled.h1(_templateObject9());
/* USE IT FOR CHILDREN */

export var ContentStyled = styled.div(_templateObject10(), media.small(_templateObject11()));
export var TitleStyled = styled.h1(_templateObject12(), MainColor, media.small(_templateObject13()), function (props) {
  return props.step === 2 && css(_templateObject14(), media.small(_templateObject15()));
});
export var TextStyled = styled.p(_templateObject16(), MainColor);
export var MailStyled = styled.span(_templateObject17());
export var ButtonWrapperStyled = styled.div(_templateObject18(), function (props) {
  return props.removeMargin ? '0' : '60px';
});