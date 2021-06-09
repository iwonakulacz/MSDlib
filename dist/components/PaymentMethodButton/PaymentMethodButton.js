import React from 'react';
import { logos } from 'util/paymentMethodHelper';
import { StyledButton, StyledMethodName } from './PaymentMethodButtonStyled';

const PaymentMethodButton = function PaymentMethodButton(_ref) {
  const { methodName } = _ref;
  const { onClickFn } = _ref;
  const LogoComponent = logos[methodName];
  return /* #__PURE__ */ React.createElement(
    StyledButton,
    {
      onClickFn,
      theme: 'simple'
    },
    LogoComponent
      ? /* #__PURE__ */ React.createElement(LogoComponent, null)
      : /* #__PURE__ */ React.createElement(StyledMethodName, null, methodName)
  );
};

PaymentMethodButton.defaultProps = {
  methodName: '',
  onClickFn: function onClickFn() {}
};
export default PaymentMethodButton;
