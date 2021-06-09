import _taggedTemplateLiteral from "/Users/iwonakulacz/Documents/repos/msd-package/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral";

function _templateObject14() {
  var data = _taggedTemplateLiteral(["\n  color: ", ";\n  font-size: 13px;\n"]);

  _templateObject14 = function _templateObject14() {
    return data;
  };

  return data;
}

function _templateObject13() {
  var data = _taggedTemplateLiteral(["\n  margin-bottom: 24px;\n  font-size: 12px;\n  font-weight: 500;\n  text-align: center;\n  color: ", ";\n"]);

  _templateObject13 = function _templateObject13() {
    return data;
  };

  return data;
}

function _templateObject12() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 40px;\n"]);

  _templateObject12 = function _templateObject12() {
    return data;
  };

  return data;
}

function _templateObject11() {
  var data = _taggedTemplateLiteral(["\n      ", " {\n        background-color: ", ";\n\n        &:after {\n          background-color: ", ";\n        }\n      }\n    "]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10() {
  var data = _taggedTemplateLiteral(["\n  max-width: 298px;\n  margin: auto;\n  font-family: Arial, Helvetica, sans-serif;\n\n  ", "\n"]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = _taggedTemplateLiteral(["\n  position: absolute;\n  bottom: 18px;\n  right: 16px;\n  color: ", ";\n  font-size: 12px;\n  z-index: 2;\n\n  padding: 9px 17px;\n  background-color: ", ";\n  font-size: 13px;\n  font-weight: 700;\n  border-radius: 12px;\n  border: 0;\n  box-shadow: 0px 3px 50px #00000014;\n\n  &:hover {\n    cursor: pointer;\n  }\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n  color: ", ";\n  font-size: 13px;\n  z-index: 2;\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n  color: ", ";\n  font-size: 10px;\n  margin-bottom: 4px;\n  z-index: 2;\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  position: absolute;\n  bottom: 18px;\n  left: 16px;\n  color: ", ";\n  font-size: 12px;\n  z-index: 2;\n  display: flex;\n  flex-direction: column;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  position: absolute;\n  top: 28px;\n  right: 16px;\n  color: ", ";\n  font-size: 13px;\n  z-index: 2;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  position: absolute;\n  left: 16px;\n  top: 28px;\n  height: 24px;\n  z-index: 2;\n\n  svg {\n    height: 100%;\n    width: auto;\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  position: relative;\n\n  height: 0;\n  padding-top: 56.25%;\n\n  background-color: ", ";\n  border-radius: 20px;\n\n  overflow: hidden;\n\n  &:after {\n    position: absolute;\n    left: 30%;\n    bottom: -10px;\n    display: block;\n    content: '';\n\n    height: 400px;\n    width: 400px;\n\n    border-radius: 50%;\n    background-color: ", ";\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral([""]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  position: relative;\n\n  margin-bottom: 30px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

import styled, { css } from 'styled-components';
import { MyAccountBlue, White, CardEditButtonBg, MainColor, CardSecondaryColor, MyAccountTextGray, PaypalMainColor, PaypalSecondaryColor } from 'styles/variables';
export var WrapStyled = styled.div(_templateObject());
export var PaymentDetailsStyled = styled.div(_templateObject2());
export var CardStyled = styled.div(_templateObject3(), MyAccountBlue, CardSecondaryColor);
export var CardTypeStyled = styled.div(_templateObject4());
export var CardNumberStyled = styled.div(_templateObject5(), White);
export var CardExpirationStyled = styled.div(_templateObject6(), White);
export var CardExpirationLabel = styled.div(_templateObject7(), MainColor);
export var CardExpirationDateStyled = styled.div(_templateObject8(), White);
export var CardEditStyled = styled.button(_templateObject9(), White, CardEditButtonBg);
export var CardWrapStyled = styled.div(_templateObject10(), function (props) {
  return props.type === 'paypal' && css(_templateObject11(), CardStyled, PaypalMainColor, PaypalSecondaryColor);
});
export var StyledLoaderContainer = styled.div(_templateObject12());
export var Message = styled.div(_templateObject13(), MyAccountTextGray);
export var InfoMessageStyled = styled.div(_templateObject14(), MyAccountTextGray);