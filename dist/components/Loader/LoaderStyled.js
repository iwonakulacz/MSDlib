import _taggedTemplateLiteral from '/Users/iwonakulacz/Documents/repos/msd-package/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral';

import styled, { keyframes, css } from 'styled-components';
import { MainColor } from 'styles/variables';

function _templateObject7() {
  const data = _taggedTemplateLiteral([
    '\n      position: absolute;\n      right: 0;\n      top: 0;\n\n      height: 11px;\n      width: 13px;\n      transform: translateY(100%) translateX(-100%) scale(0.3);\n    '
  ]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  const data = _taggedTemplateLiteral([
    '\n      width: 18px;\n      height: 18px;\n      transform: scale(0.4) translate(-20px, -25px);\n    '
  ]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  const data = _taggedTemplateLiteral(['\n        background: ', ';\n      ']);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  const data = _taggedTemplateLiteral([
    '\n      position: absolute;\n      top: 50%;\n      left: 50%;\n      transform: translate(-50%, -50%);\n    '
  ]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  const data = _taggedTemplateLiteral(['\n      margin: 50px auto;\n    ']);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  const data = _taggedTemplateLiteral([
    '\n  margin: 0 auto;\n  position: relative;\n  width: 64px;\n  height: 64px;\n  ',
    ';\n\n  ',
    '\n\n  & div {\n    position: absolute;\n    width: 5px;\n    height: 5px;\n    background: ',
    ';\n    border-radius: 50%;\n    animation: ',
    ' 1.2s linear infinite;\n    ',
    ';\n  }\n\n  & div:nth-child(1) {\n    animation-delay: 0s;\n    top: 29px;\n    left: 53px;\n  }\n\n  & div:nth-child(2) {\n    animation-delay: -0.1s;\n    top: 18px;\n    left: 50px;\n  }\n\n  & div:nth-child(3) {\n    animation-delay: -0.2s;\n    top: 9px;\n    left: 41px;\n  }\n\n  & div:nth-child(4) {\n    animation-delay: -0.3s;\n    top: 6px;\n    left: 29px;\n  }\n\n  & div:nth-child(5) {\n    animation-delay: -0.4s;\n    top: 9px;\n    left: 18px;\n  }\n\n  & div:nth-child(6) {\n    animation-delay: -0.5s;\n    top: 18px;\n    left: 9px;\n  }\n\n  & div:nth-child(7) {\n    animation-delay: -0.6s;\n    top: 29px;\n    left: 6px;\n  }\n\n  & div:nth-child(8) {\n    animation-delay: -0.7s;\n    top: 41px;\n    left: 9px;\n  }\n\n  & div:nth-child(9) {\n    animation-delay: -0.8s;\n    top: 50px;\n    left: 18px;\n  }\n\n  & div:nth-child(10) {\n    animation-delay: -0.9s;\n    top: 53px;\n    left: 29px;\n  }\n\n  & div:nth-child(11) {\n    animation-delay: -1s;\n    top: 50px;\n    left: 41px;\n  }\n\n  & div:nth-child(12) {\n    animation-delay: -1.1s;\n    top: 41px;\n    left: 50px;\n  }\n\n  ',
    '\n\n  ',
    '\n'
  ]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  const data = _taggedTemplateLiteral([
    '\n  0%,\n  20%,\n  80%,\n  100% {\n    transform: scale(1);\n  }\n\n  50% {\n    transform: scale(1.5);\n  }\n'
  ]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}
export var LoaderKeyframeStyled = keyframes(_templateObject());
export var LoaderStyled = styled.div(
  _templateObject2(),
  function(props) {
    return props.isMyAccount && css(_templateObject3());
  },
  function(props) {
    return props.centered && css(_templateObject4());
  },
  function(props) {
    return props.color ? props.color : '#d4d4d4';
  },
  LoaderKeyframeStyled,
  function(props) {
    return props.isMyAccount && css(_templateObject5(), MainColor);
  },
  function(props) {
    return props.buttonLoader && css(_templateObject6());
  },
  function(props) {
    return props.smallLoader && css(_templateObject7());
  }
);
