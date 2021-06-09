import _taggedTemplateLiteral from '/Users/iwonakulacz/Documents/repos/msd-package/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral';

import styled, { css } from 'styled-components';
import {
  MainColor,
  ErrorColor,
  ConfirmColor,
  LineColor,
  FocusColor
} from 'styles/variables';
import tickIcon from 'assets/images/input/tick.svg';
import enableIcon from 'assets/images/input/enable_check.svg';

function _templateObject13() {
  const data = _taggedTemplateLiteral([
    '\n  position: relative;\n\n  width: 100%;\n  margin-top: 10px;\n\n  color: ',
    ';\n\n  font-size: 12px;\n  font-weight: 300;\n  text-align: center;\n'
  ]);

  _templateObject13 = function _templateObject13() {
    return data;
  };

  return data;
}

function _templateObject12() {
  const data = _taggedTemplateLiteral([
    '\n      width: 20px;\n      height: 20px;\n      top: -1px;\n      left: -1px;\n      background-image: url(',
    ');\n      background-position: center;\n      background-size: cover;\n    '
  ]);

  _templateObject12 = function _templateObject12() {
    return data;
  };

  return data;
}

function _templateObject11() {
  const data = _taggedTemplateLiteral([
    '\n      top: 50%;\n      left: 50%;\n      transform: translate(-50%, -50%);\n\n      width: 12px;\n      height: 12px;\n\n      background: ',
    ';\n      border-radius: 50%;\n    '
  ]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10() {
  const data = _taggedTemplateLiteral([
    '\n  position: absolute;\n\n  width: 13px;\n  height: 10px;\n  top: 4px;\n  left: 3px;\n\n  background-image: url(',
    ');\n  background-repeat: no-repeat;\n  ',
    '\n  ',
    '\n'
  ]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  const data = _taggedTemplateLiteral(['\n      border-color: ', ';\n    ']);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  const data = _taggedTemplateLiteral([
    '\n      border: 1px solid ',
    ';\n    '
  ]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  const data = _taggedTemplateLiteral(['\n      border-radius: 50%;\n    ']);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  const data = _taggedTemplateLiteral(['\n      border-color: ', ';\n    ']);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  const data = _taggedTemplateLiteral([
    '\n  position: relative;\n  box-sizing: border-box;\n\n  border: 1px solid ',
    ';\n  border-radius: 2px;\n  width: 20px;\n  min-width: 20px;\n  height: 20px;\n\n  &:focus {\n    outline: 2px solid ',
    ';\n  }\n  ',
    '\n  ',
    '\n  ',
    '\n\n  ',
    '\n'
  ]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  const data = _taggedTemplateLiteral(['\n      opacity: 1;\n    ']);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  const data = _taggedTemplateLiteral([
    '\n  position: relative;\n  padding-left: 10px;\n  margin-top: 0;\n\n  font-weight: 400;\n  text-align: left;\n  a {\n    color: ',
    ';\n\n    text-decoration: underline;\n    &:focus {\n      outline: 2px solid ',
    ';\n    }\n  }\n  opacity: 0.8;\n  ',
    '\n'
  ]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  const data = _taggedTemplateLiteral(['\n      opacity: 0.7;\n    ']);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  const data = _taggedTemplateLiteral([
    '\n  display: flex;\n  width: 100%;\n  height: 100%;\n  cursor: pointer;\n  margin-top: 10px;\n\n  align-items: center;\n  font-size: 13px;\n  color: ',
    ';\n\n  &:focus {\n    outline: none;\n  }\n  ',
    '\n'
  ]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}
export var CheckboxStyled = styled.div(_templateObject(), MainColor, function(
  props
) {
  return props.disabled && css(_templateObject2());
});
export var ConsentDefinitionStyled = styled.div(
  _templateObject3(),
  MainColor,
  FocusColor,
  function(props) {
    return props.checked && css(_templateObject4());
  }
);
export var CheckFrameStyled = styled.div(
  _templateObject5(),
  LineColor,
  FocusColor,
  function(props) {
    return props.error && css(_templateObject6(), ErrorColor);
  },
  function(props) {
    return props.isRadioButton && css(_templateObject7());
  },
  function(props) {
    return (
      props.isRadioButton &&
      props.checked &&
      css(_templateObject8(), ConfirmColor)
    );
  },
  function(props) {
    return (
      props.isMyAccount &&
      props.checked &&
      css(_templateObject9(), ConfirmColor)
    );
  }
);
export var CheckMarkStyled = styled.div(
  _templateObject10(),
  tickIcon,
  function(props) {
    return props.isRadioButton && css(_templateObject11(), ConfirmColor);
  },
  function(props) {
    return props.isMyAccount && css(_templateObject12(), enableIcon);
  }
);
export var ErrorFieldStyled = styled.div(_templateObject13(), ErrorColor);
