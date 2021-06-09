import _taggedTemplateLiteral from '/Users/iwonakulacz/Documents/repos/msd-package/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral';

import styled, { css } from 'styled-components';
import { IconsColor, White, LineColor, ConfirmColor } from 'styles/variables';
import { mediaFrom } from 'styles/BreakPoints';
import Button from 'components/Button';

function _templateObject13() {
  const data = _taggedTemplateLiteral([
    '\n  display: flex;\n  justify-content: flex-end;\n  width: 100%;\n'
  ]);

  _templateObject13 = function _templateObject13() {
    return data;
  };

  return data;
}

function _templateObject12() {
  const data = _taggedTemplateLiteral(['\n  margin-top: 20px;\n']);

  _templateObject12 = function _templateObject12() {
    return data;
  };

  return data;
}

function _templateObject11() {
  const data = _taggedTemplateLiteral([
    '\n  position: relative;\n  margin-right: 17px;\n  font-family: inherit;\n  font-weight: inherit;\n\n  &:after {\n    position: absolute;\n    right: -17px;\n    bottom: 0;\n    font-size: 11px;\n    ',
    ';\n  }\n'
  ]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10() {
  const data = _taggedTemplateLiteral([
    '\n  display: flex;\n  justify-content: flex-end;\n'
  ]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  const data = _taggedTemplateLiteral([
    '\n      width: unset;\n      max-width: unset;\n    '
  ]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  const data = _taggedTemplateLiteral(['\n  width: 100%;\n  ', '\n']);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  const data = _taggedTemplateLiteral([
    '\n      margin: 0;\n      width: unset;\n      max-width: unset;\n    '
  ]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  const data = _taggedTemplateLiteral([
    '\n  width: 48%;\n\n  text-transform: capitalize;\n  &:disabled:hover {\n    opacity: 0.9;\n  }\n  ',
    '\n'
  ]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  const data = _taggedTemplateLiteral([
    '\n  display: flex;\n  justify-content: flex-end;\n  align-items: flex-start;\n\n  border-top: 1px solid ',
    ';\n  margin-top: 17px;\n  padding-top: 17px;\n'
  ]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  const data = _taggedTemplateLiteral([
    '\n      &::after {\n        opacity: 1;\n      }\n    '
  ]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  const data = _taggedTemplateLiteral(['\n      cursor: pointer;\n    ']);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  const data = _taggedTemplateLiteral([
    '\n  background: ',
    ';\n  border: 1px solid ',
    ';\n  border-radius: 12px;\n\n  padding: 20px 18px;\n\n  ',
    "\n  &:not(:last-child) {\n    margin-bottom: 20px;\n    padding-bottom: 20px;\n  }\n\n  position: relative;\n  z-index: 1;\n\n  &::after {\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    top: -1px;\n    left: -1px;\n\n    content: '';\n    z-index: -1;\n\n    border-radius: 12px;\n    border: 1px solid ",
    ';\n    box-shadow: 0px 3px 20px #6767672c;\n\n    opacity: 0;\n    transition: opacity 0.2s ease-out;\n  }\n  ',
    '\n'
  ]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  const data = _taggedTemplateLiteral([
    '\n  position: relative;\n\n  margin-bottom: 20px;\n'
  ]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}
export var WrapStyled = styled.div(_templateObject());
export var SubscriptionStyled = styled.div(
  _templateObject2(),
  White,
  LineColor,
  function(props) {
    return props.onClick && props.cursorPointer && css(_templateObject3());
  },
  ConfirmColor,
  function(props) {
    return props.isSelected && css(_templateObject4());
  }
);
export var SubscriptionActionsStyled = styled.div(
  _templateObject5(),
  IconsColor
);
export var SimpleButtonStyled = styled(Button)(
  _templateObject6(),
  mediaFrom.small && css(_templateObject7())
);
export var FullWidthButtonStyled = styled(Button)(
  _templateObject8(),
  mediaFrom.small && css(_templateObject9())
);
export var SubscriptionManageWrapStyled = styled.div(_templateObject10());
export var ButtonTextStyled = styled.span(_templateObject11(), function(props) {
  return props.isExpanded ? "content: '▲'" : "content: '▼'";
});
export var StatusMessageWrapStyled = styled.div(_templateObject12());
export var CouponWrapStyled = styled.div(_templateObject13());
