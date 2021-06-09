import _taggedTemplateLiteral from "/Users/iwonakulacz/Documents/repos/msd-package/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral";

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n  margin-top: 10px;\n  color: ", ";\n  font-size: 12px;\n  line-height: 1.3em;\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n  max-width: 200px;\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  flex: 0 0 75px;\n  min-width: 75px;\n\n  margin: 0;\n  padding: 23px 15px;\n\n  font-size: ", ";\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  margin: 20px 0 0 0;\n\n  font-size: ", ";\n  color: ", ";\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  margin: 0 0 30px 0;\n\n  font-size: ", ";\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  margin: 20px 0 15px 0;\n\n  font-weight: ", ";\n  font-size: ", ";\n  line-height: 1.2em;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  max-width: 400px;\n\n  margin: auto;\n  padding: 40px 30px;\n\n  border: 1px solid ", ";\n  border-radius: 12px;\n  background: ", ";\n\n  text-align: center;\n  color: ", ";\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  padding: 50px 30px 86px 30px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

import styled from 'styled-components';
import SubscriptionIcon from 'components/SubscriptionIcon';
import { LineColor, BackgroundColor, MediumGrey, MainColor, BoldFont, SmallFont, MediumFont, LargeFont, ErrorColor } from 'styles/variables';
export var WrapStyled = styled.div(_templateObject());
export var CardStyled = styled.div(_templateObject2(), LineColor, BackgroundColor, MainColor);
export var TitleStyled = styled.h1(_templateObject3(), BoldFont, LargeFont);
export var DescriptionStyled = styled.h2(_templateObject4(), MediumFont);
export var SubTextStyled = styled.p(_templateObject5(), SmallFont, MediumGrey);
export var SubscriptionIconStyled = styled(SubscriptionIcon)(_templateObject6(), LargeFont);
export var ButtonWrapperStyled = styled.div(_templateObject7());
export var ErrorMessageStyled = styled.div(_templateObject8(), ErrorColor);