import _taggedTemplateLiteral from "/Users/iwonakulacz/Documents/repos/msd-package/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral";

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  height: 13px;\n  margin-top: 8px;\n  content: '';\n  color: ", ";\n  -webkit-transition: 0.2s ease-in-out;\n  transition: 0.2s ease-in-out;\n  font-size: 13px;\n  text-align: left;\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n      &::after {\n        content: '*';\n        margin-left: 4px;\n        height: 9px;\n        font-size: 12px;\n        line-height: 12px;\n        color: ", ";\n      }\n    "]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  text-align: left;\n  ", "\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  padding: 10px;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral([""]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral([""]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

/* eslint-disable import/prefer-default-export */
import styled, { css } from 'styled-components';
import { ErrorColor } from 'styles/variables';
export var CaptureFormStyled = styled.form(_templateObject());
export var CaptureRowStyled = styled.div(_templateObject2());
export var CaptureGroupStyled = styled.div(_templateObject3());
export var CaptureBoxStyled = styled.div(_templateObject4());
export var CaptureQuestionStyled = styled.div(_templateObject5(), function (props) {
  return props.required && css(_templateObject6(), ErrorColor);
});
export var CaptureError = styled.div(_templateObject7(), ErrorColor);