import React from 'react';
import roundNumber from 'util/roundNumber';
import { WrapperStyled, CurrencyStyled, PriceStyled, PeriodStyled, InnerWrapper } from './PriceStyled';

var addSpaceAfterNumber = function addSpaceAfterNumber(str) {
  if (!/\d/.test(str.charAt(0))) {
    return str;
  }

  return "".concat(str.charAt(0), " ").concat(str.substring(1));
};

var Price = function Price(_ref) {
  var currency = _ref.currency,
      price = _ref.price,
      period = _ref.period;
  return /*#__PURE__*/React.createElement(WrapperStyled, null, /*#__PURE__*/React.createElement(InnerWrapper, null, /*#__PURE__*/React.createElement(CurrencyStyled, null, currency), /*#__PURE__*/React.createElement(PriceStyled, null, roundNumber(price))), period && /*#__PURE__*/React.createElement(PeriodStyled, null, "/\xA0", addSpaceAfterNumber(period)));
};

Price.defaultProps = {
  currency: '',
  price: '',
  period: ''
};
export default Price;