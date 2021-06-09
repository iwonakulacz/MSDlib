import _taggedTemplateLiteral from "/Users/iwonakulacz/Documents/repos/msd-package/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral";

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  margin-bottom: 30px;\n  color: ", ";\n  font-size: 13px;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  position: absolute;\n  clip: rect(0 0 0 0);\n\n  height: 1px;\n  width: 1px;\n\n  margin: -1px;\n  padding: 0;\n\n  overflow: hidden;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  height: 13px;\n\n  color: ", ";\n\n  font-size: 13px;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  position: relative;\n\n  padding-bottom: 10px;\n\n  font-weight: 300;\n\n  & button {\n    margin-top: 35px;\n  }\n  & a {\n    font-weight: 600;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

import styled from 'styled-components';
import { ErrorColor } from 'styles/variables';
export var ConsentsWrapperStyled = styled.div(_templateObject());
export var ConsentsErrorStyled = styled.div(_templateObject2(), ErrorColor);
export var InvisibleLegend = styled.legend(_templateObject3());
export var GeneralErrorStyled = styled.p(_templateObject4(), ErrorColor);