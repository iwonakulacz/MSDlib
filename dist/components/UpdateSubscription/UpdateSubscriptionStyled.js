import _taggedTemplateLiteral from '/Users/iwonakulacz/Documents/repos/msd-package/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral';

import styled from 'styled-components';
import { MainColor, LineColor } from 'styles/variables';
import { media } from 'styles/BreakPoints';
import Card from 'components/Card';

function _templateObject7() {
  const data = _taggedTemplateLiteral(['\n  text-transform: uppercase;\n']);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  const data = _taggedTemplateLiteral([
    '\n  border: 1px solid rgba(0, 0, 0, 0.2);\n  border-color: #5cb85c;\n  position: relative;\n  display: inline-block;\n  vertical-align: top;\n  border-radius: 50%;\n  width: 7em;\n  height: 7em;\n  transition: border 500ms ease-out;\n  margin-bottom: 20px;\n'
  ]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  const data = _taggedTemplateLiteral([
    '\n  margin: 0 0 20px 0;\n  color: ',
    ';\n\n  font-size: 13px;\n'
  ]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  const data = _taggedTemplateLiteral(['\n  margin: 30px 0;\n']);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  const data = _taggedTemplateLiteral([
    '\n  padding: 30px 10px;\n  margin: auto;\n'
  ]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  const data = _taggedTemplateLiteral([
    '\n    display: flex;\n    align-items: flex-start;\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100vh;\n    overflow-y: scroll;\n  '
  ]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  const data = _taggedTemplateLiteral([
    '\n  border: 1px solid ',
    ';\n  height: 100%;\n  min-height: 500px;\n  display: flex;\n  ',
    ';\n'
  ]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}
export var SurveyCard = styled(Card)(
  _templateObject(),
  LineColor,
  media.small(_templateObject2())
);
export var WrapperStyled = styled.div(_templateObject3());
export var ReasonsWrapper = styled.ul(_templateObject4());
export var StyledItem = styled.li(_templateObject5(), MainColor);
export var Loader = styled.div(_templateObject6());
export var StrongStyled = styled.strong(_templateObject7());
