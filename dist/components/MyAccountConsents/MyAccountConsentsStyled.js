import _taggedTemplateLiteral from '/Users/iwonakulacz/Documents/repos/msd-package/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral';

import styled, { css } from 'styled-components';
import Button from 'components/Button';
import Checkbox from 'components/Checkbox';
import Card from 'components/Card';
import { mediaFrom } from 'styles/BreakPoints';
import { ConfirmColor } from 'styles/variables';

function _templateObject11() {
  const data = _taggedTemplateLiteral([
    '\n  color: ',
    ';\n  text-align: center;\n  margin: 5px 0 15px 0;\n  font-size: 12px;\n  position: relative;\n'
  ]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10() {
  const data = _taggedTemplateLiteral([
    '\n  font-size: 13px;\n  opacity: 0.6;\n  margin-top: 15px;\n'
  ]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  const data = _taggedTemplateLiteral([
    '\n  display: flex;\n  justify-content: flex-end;\n'
  ]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  const data = _taggedTemplateLiteral(['\n      display: none;\n    ']);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  const data = _taggedTemplateLiteral(['\n      cursor: default;\n    ']);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  const data = _taggedTemplateLiteral([
    '\n  align-items: flex-start;\n  line-height: 1.3rem;\n\n  ',
    '\n\n  ',
    '\n'
  ]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  const data = _taggedTemplateLiteral([
    '\n      margin: 20px 0 0 5px;\n      width: unset;\n      max-width: unset;\n    '
  ]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  const data = _taggedTemplateLiteral(['\n      width: ', ';\n    ']);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  const data = _taggedTemplateLiteral([
    '\n  margin: 20px 0 10px 0;\n  width: 48%;\n  min-width: 100px;\n\n  ',
    '\n\n  ',
    '\n'
  ]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  const data = _taggedTemplateLiteral([
    '\n      padding: 0 0 20px 0;\n      border: none;\n      background: transparent;\n    '
  ]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  const data = _taggedTemplateLiteral(['\n  margin-bottom: 0;\n\n  ', '\n']);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}
export var CardStyled = styled(Card)(_templateObject(), function(props) {
  return props.showConsentsOnly && css(_templateObject2());
});
export var ButtonStyled = styled(Button)(
  _templateObject3(),
  function(props) {
    return props.width && css(_templateObject4(), props.width);
  },
  mediaFrom.small && css(_templateObject5())
);
export var CheckboxStyled = styled(Checkbox)(
  _templateObject6(),
  function(props) {
    return props.disabled && css(_templateObject7());
  },
  function(props) {
    return props.hide && css(_templateObject8());
  }
);
export var ButtonWrapperStyled = styled.div(_templateObject9());
export var InfoStyled = styled.div(_templateObject10());
export var SuccessMessageStyled = styled.h6(_templateObject11(), ConfirmColor);
