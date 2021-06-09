import React from 'react';
import roundNumber from 'util/roundNumber';
import {
  WrapperStyled,
  CurrencyStyled,
  PriceStyled,
  PeriodStyled,
  InnerWrapper
} from './PriceStyled';

const addSpaceAfterNumber = function addSpaceAfterNumber(str) {
  if (!/\d/.test(str.charAt(0))) {
    return str;
  }

  return ''.concat(str.charAt(0), ' ').concat(str.substring(1));
};

const Price = function Price(_ref) {
  const { currency } = _ref;
  const { price } = _ref;
  const { period } = _ref;
  return /* #__PURE__ */ React.createElement(
    WrapperStyled,
    null,
    /* #__PURE__ */ React.createElement(
      InnerWrapper,
      null,
      /* #__PURE__ */ React.createElement(CurrencyStyled, null, currency),
      /* #__PURE__ */ React.createElement(PriceStyled, null, roundNumber(price))
    ),
    period &&
      /* #__PURE__ */ React.createElement(
        PeriodStyled,
        null,
        '/\xA0',
        addSpaceAfterNumber(period)
      )
  );
};

Price.defaultProps = {
  currency: '',
  price: '',
  period: ''
};
export default Price;
