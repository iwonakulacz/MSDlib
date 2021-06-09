import _taggedTemplateLiteral from '/Users/iwonakulacz/Documents/repos/msd-package/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral';

import styled from 'styled-components';
import * as colors from 'styles/variables';

function _templateObject5() {
  const data = _taggedTemplateLiteral([
    '\n  color: ',
    ';\n  padding-left: 4px;\n  font-weight: bold;\n  &:hover {\n    text-decoration: underline;\n  }\n'
  ]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  const data = _taggedTemplateLiteral([
    '\n  font-weight: 300;\n  & strong {\n    font-weight: bold;\n  }\n'
  ]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  const data = _taggedTemplateLiteral([
    '\n  font-size: 25px;\n  margin: 30px 0;\n  font-weight: 600;\n'
  ]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  const data = _taggedTemplateLiteral(['']);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  const data = _taggedTemplateLiteral([
    '\n  max-width: 420px;\n  margin: 0 auto;\n  padding: 50px 0 80px;\n  text-align: center;\n  line-height: 1.3em;\n  font-size: 15px;\n  color: ',
    ';\n  font-weight: bold;\n'
  ]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}
export var ThankYouPageStyled = styled.main(
  _templateObject(),
  colors.MainColor
);
export var IconStyled = styled.img(_templateObject2());
export var TitleStyled = styled.div(_templateObject3());
export var MessageStyled = styled.div(_templateObject4());
export var LinkStyled = styled.a(_templateObject5(), colors.MainColor);
