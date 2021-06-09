import _taggedTemplateLiteral from "/Users/iwonakulacz/Documents/repos/msd-package/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral";

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n  margin: 0 auto 10px auto;\n  svg {\n    max-width: 100%;\n  }\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n  color: ", ";\n\n  font-size: 13px;\n\n  max-width: 310px;\n  margin: auto;\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  max-width: 380px;\n  margin: auto auto 5px auto;\n\n  color: ", ";\n\n  font-size: 16px;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n        margin: auto;\n      "]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n        min-height: 100vh;\n      "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n      height: 100%;\n      margin: auto;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      flex-direction: column;\n      ", "\n    "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n      border: 1px dashed ", ";\n      border-radius: 20px;\n      padding: 35px 0;\n    "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  position: relative;\n  max-width: ", ";\n\n  padding: 18px;\n  margin: ", " ;\n\n  text-align: center;\n  line-height: 1.4;\n\n  ", "\n\n  ", "\n\n    ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

import styled, { css } from 'styled-components';
import { MainColor } from 'styles/variables';
import { media } from 'styles/BreakPoints';
export var WrapStyled = styled.div(_templateObject(), function (props) {
  return props.fullWidth ? 'unset' : '320px';
}, function (props) {
  return props.margin ? props.margin : '0 auto 32px auto';
}, function (props) {
  return props.withBorder && css(_templateObject2(), MainColor);
}, function (props) {
  return props.fullHeight && css(_templateObject3(), media.small(_templateObject4()));
}, function (props) {
  return props.centered && css(_templateObject5());
});
export var TitleStyled = styled.div(_templateObject6(), MainColor);
export var SubTitleStyled = styled.div(_templateObject7(), MainColor);
export var IconStyled = styled.div(_templateObject8());