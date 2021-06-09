import _taggedTemplateLiteral from "/Users/iwonakulacz/Documents/repos/msd-package/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral";

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n    width:100%;\n  "]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  width: 80%;\n\n  margin: 30px auto 50px auto;\n\n  ", "\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  font-weight: 300;\n  & strong {\n    font-weight: bold;\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  margin: 40px 0 25px 0;\n\n  font-size: 25px;\n  font-weight: 600;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    width:90%;\n    & button {\n      margin-top: 50px;\n    }\n  "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  width: 80%;\n  margin: 0 auto;\n  padding: 40px 0;\n\n  color: ", ";\n\n  text-align: center;\n  line-height: 1.3em;\n  font-size: 15px;\n\n  font-weight: bold;\n  & button {\n    margin-top: 30px;\n  }\n\n  ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

import styled from 'styled-components';
import * as colors from 'styles/variables';
import { media } from 'styles/BreakPoints';
export var PasswordResetPageStyled = styled.main(_templateObject(), colors.MainColor, media.smallest(_templateObject2()));
export var StyledTitle = styled.div(_templateObject3());
export var StyledMessage = styled.div(_templateObject4());
export var FormStyled = styled.form(_templateObject5(), media.smallest(_templateObject6()));