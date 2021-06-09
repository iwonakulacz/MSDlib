import React from 'react';
import { logos } from 'util/paymentMethodHelper';
import { StyledButton, StyledMethodName } from './PaymentMethodButtonStyled';

var PaymentMethodButton = function PaymentMethodButton(_ref) {
  var methodName = _ref.methodName,
      onClickFn = _ref.onClickFn;
  var LogoComponent = logos[methodName];
  return /*#__PURE__*/React.createElement(StyledButton, {
    onClickFn: onClickFn,
    theme: "simple"
  }, LogoComponent ? /*#__PURE__*/React.createElement(LogoComponent, null) : /*#__PURE__*/React.createElement(StyledMethodName, null, methodName));
};

PaymentMethodButton.defaultProps = {
  methodName: '',
  onClickFn: function onClickFn() {}
};
export default PaymentMethodButton;