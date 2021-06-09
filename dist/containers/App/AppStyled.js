import _taggedTemplateLiteral from '/Users/iwonakulacz/Documents/repos/msd-package/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral';

import styled, { css } from 'styled-components';
import { media } from 'styles/BreakPoints';

function _templateObject6() {
  const data = _taggedTemplateLiteral([
    '\n      max-width: unset;\n      min-height: 100vh;\n    '
  ]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  const data = _taggedTemplateLiteral([
    '\n    min-height: 100vh;\n    width: 100%;\n  '
  ]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  const data = _taggedTemplateLiteral([
    '\n  position: relative;\n\n  height: 100%;\n  margin: auto;\n  max-width: 900px;\n\n  background: white;\n  box-shadow: 0px 0px 79px #00000024;\n\n  ',
    '\n\n  ',
    '\n'
  ]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  const data = _taggedTemplateLiteral([
    '\n      width: 100%;\n      padding: 0;\n    '
  ]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  const data = _taggedTemplateLiteral(['\n    padding: 0;\n  ']);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  const data = _taggedTemplateLiteral([
    '\n  min-height: 100vh;\n  padding: 40px 0;\n\n  background: #eaeff8;\n\n  ',
    '\n\n  ',
    '\n'
  ]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}
export var AppStyled = styled.div(
  _templateObject(),
  media.small(_templateObject2()),
  function(props) {
    return props.hosted && css(_templateObject3());
  }
);
export var AppContentStyled = styled.div(
  _templateObject4(),
  media.small(_templateObject5()),
  function(props) {
    return props.hosted && css(_templateObject6());
  }
);
