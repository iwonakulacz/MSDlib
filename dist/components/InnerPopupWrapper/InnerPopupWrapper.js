import React from 'react';
import { withTranslation } from 'react-i18next';
import labeling from 'containers/labeling';
import MyAccountError from 'components/MyAccountError';
import { WrapperStyled, CardStyled, HeaderStyled, HeaderTitleStyled, DotsWrapperStyled, DotStyled } from './InnerPopupWrapperStyled';

var InnerPopupWrapper = function InnerPopupWrapper(_ref) {
  var steps = _ref.steps,
      popupTitle = _ref.popupTitle,
      currentStep = _ref.currentStep,
      children = _ref.children,
      isError = _ref.isError,
      t = _ref.t;
  return /*#__PURE__*/React.createElement(CardStyled, null, isError ? /*#__PURE__*/React.createElement(MyAccountError, {
    generalError: true,
    centered: true
  }) : /*#__PURE__*/React.createElement(WrapperStyled, null, /*#__PURE__*/React.createElement(HeaderStyled, null, /*#__PURE__*/React.createElement(DotsWrapperStyled, {
    currentStep: currentStep
  }, steps > 1 && Array.from({
    length: steps
  }, function (_, k) {
    return /*#__PURE__*/React.createElement(DotStyled, {
      key: k
    });
  })), /*#__PURE__*/React.createElement(HeaderTitleStyled, null, t(popupTitle))), children));
};

InnerPopupWrapper.defaultProps = {
  t: function t(k) {
    return k;
  }
};
export { InnerPopupWrapper as PureInnerPopupWrapper };
export default withTranslation()(labeling()(InnerPopupWrapper));