import _taggedTemplateLiteral from '/Users/iwonakulacz/Documents/repos/msd-package/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral';

import styled from 'styled-components';
import Button from 'components/Button';
import * as variables from 'styles/variables';

function _templateObject2() {
  const data = _taggedTemplateLiteral(['\n  text-transform: uppercase;\n']);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  const data = _taggedTemplateLiteral([
    '\n  max-width: 160px;\n  height: 90px;\n  background-color: ',
    ';\n  border: 1px solid ',
    ';\n  border-radius: 7px;\n\n  svg {\n    path {\n      fill: ',
    ';\n    }\n  }\n\n  &:hover,\n  &:focus {\n    color: ',
    ';\n    svg {\n      path {\n        fill: ',
    ';\n      }\n    }\n  }\n'
  ]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}
export var StyledButton = styled(Button)(
  _templateObject(),
  variables.White,
  variables.LineColor,
  variables.MainColor,
  variables.White,
  variables.White
);
export var StyledMethodName = styled.div(_templateObject2());
