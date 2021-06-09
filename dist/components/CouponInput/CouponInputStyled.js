import _taggedTemplateLiteral from "/Users/iwonakulacz/Documents/repos/msd-package/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral";

function _templateObject11() {
  var data = _taggedTemplateLiteral(["\n      opacity: 1;\n    "]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10() {
  var data = _taggedTemplateLiteral(["\n  position: absolute;\n  height: 22px;\n  width: 22px;\n  top: 50%;\n  left: 7px;\n  transform: translate(0, -50%);\n  background-color: ", ";\n  opacity: 0;\n  border: 0;\n  border-radius: 50%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n\n  svg {\n    width: 8px;\n    height: 8px;\n    fill: ", ";\n  }\n\n  ", "\n"]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = _taggedTemplateLiteral(["\n      opacity: 0.5;\n    "]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n          width: 100%;\n          max-width: 100%;\n        "]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n        width: 100%;\n        max-width: 100%;\n      "]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n      width: 198px\n      max-width: 198px;\n      left: 37px;\n      padding-right: 25px;\n      ", "\n\n      ", "\n    "]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  flex-grow: 1;\n  position: relative;\n  width: 0px;\n\n  color: ", ";\n  padding: 0;\n\n  border: none;\n  outline: none;\n\n  font-size: 15px;\n  line-height: 1.3;\n  ", "\n\n  ", "\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  position: relative;\n  margin-bottom: 8px;\n\n  border: 1px solid ", ";\n  border-radius: 30px;\n\n  background: white;\n  transition: 0.2s ease-in-out;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  color: ", ";\n  border-radius: 5px;\n\n  font-size: 12px;\n\n  opacity: ", ";\n  transition: opacity 250ms linear;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n      max-width: 100%;\n      width: 100%;\n    "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n\n  max-width: 300px;\n\n  ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

import styled, { css } from 'styled-components';
import * as Colors from 'styles/variables';
import { media } from 'styles/BreakPoints';
import { MESSAGE_TYPE_SUCCESS } from 'components/Input/InputConstants';
export var InputComponentStyled = styled.div(_templateObject(), function (props) {
  return props.fullWidth && props.isOpened && css(_templateObject2());
});
export var MessageStyled = styled.div(_templateObject3(), function (props) {
  return props.messageType === MESSAGE_TYPE_SUCCESS ? Colors.ConfirmColor : Colors.ErrorColor;
}, function (props) {
  return props.showMessage ? 1 : 0;
});
export var InputElementWrapperStyled = styled.div(_templateObject4(), Colors.LineColor);
export var InputElementStyled = styled.input(_templateObject5(), Colors.MainColor, function (props) {
  return props.isOpened && css(_templateObject6(), media.small(_templateObject7()), props.fullWidth && css(_templateObject8()));
}, function (props) {
  return props.readOnly && css(_templateObject9());
});
export var CloseButtonStyled = styled.button(_templateObject10(), Colors.LineColor, Colors.White, function (props) {
  return props.isInputOpened && css(_templateObject11());
});