import _taggedTemplateLiteral from "/Users/iwonakulacz/Documents/repos/msd-package/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral";

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n  animation-duration: 800ms;\n  animation-timing-function: ease;\n  animation-name: ", ";\n  transform: scaleX(-1) rotate(135deg);\n  opacity: 1;\n  height: 3.5em;\n  width: 1.75em;\n  transform-origin: left top;\n  border-right: 3px solid #5cb85c;\n  border-top: 3px solid #5cb85c;\n  content: '';\n  left: 1.75em;\n  top: 3.5em;\n  position: absolute;\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n    0% {\n      height: 0;\n      width: 0;\n      opacity: 1;\n    }\n\n    20% {\n      height: 0;\n      width: 1.75em;\n      opacity: 1;\n    }\n\n    40% {\n      height: 3.5em;\n      width: 1.75em;\n      opacity: 1;\n    }\n\n    100% {\n      height: 3.5em;\n      width: 1.75em;\n      opacity: 1;\n    }\n  "]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  border: 1px solid rgba(0, 0, 0, 0.2);\n  border-color: #5cb85c;\n  position: relative;\n  display: inline-block;\n  vertical-align: top;\n  border-radius: 50%;\n  width: 7em;\n  height: 7em;\n  transition: border 500ms ease-out;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  margin: 35px 35px 0;\n  padding-top: 20px;\n  border-top: 1px ", " solid;\n  font-size: 13px;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  color: ", ";\n  font-weight: bold;\n  &:hover {\n    text-decoration: underline;\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  font-weight: 300;\n  & strong {\n    font-weight: bold;\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  font-size: 25px;\n  margin-top: 75px;\n  margin-bottom: 25px;\n  font-weight: 600;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  width: 80%;\n  margin: 0 auto;\n  padding: 40px 0;\n  text-align: center;\n  line-height: 1.3em;\n  font-size: 15px;\n  color: ", ";\n\n  font-weight: bold;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

import styled, { keyframes } from 'styled-components';
import * as colors from 'styles/variables';
export var PasswordResetSuccessPageStyled = styled.div(_templateObject(), colors.MainColor);
export var StyledTitle = styled.div(_templateObject2());
export var StyledMessage = styled.div(_templateObject3());
export var StyledLink = styled.span(_templateObject4(), colors.MainColor);
export var NoteStyled = styled.div(_templateObject5(), colors.MediumGrey);
export var Loader = styled.div(_templateObject6());
var animateCheckmark = keyframes(_templateObject7());
export var Checkmark = styled.div(_templateObject8(), animateCheckmark);