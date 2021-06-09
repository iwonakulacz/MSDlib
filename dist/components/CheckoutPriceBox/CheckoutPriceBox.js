import React from 'react';
import roundNumber from 'util/roundNumber';
import { withTranslation } from 'react-i18next';
import labeling from 'containers/labeling';
import { StyledTotalLabel, StyledOfferPrice, StyledPriceBox, StyledPriceBoxWrapper, StyledTotalOfferPrice, StyledLabel, StyledPriceWrapper } from './CheckoutPriceBoxStyled';

var CheckoutPriceBox = function CheckoutPriceBox(_ref) {
  var isCouponApplied = _ref.isCouponApplied,
      finalPrice = _ref.finalPrice,
      discountAmount = _ref.discountAmount,
      taxValue = _ref.taxValue,
      customerServiceFee = _ref.customerServiceFee,
      paymentMethodFee = _ref.paymentMethodFee,
      customerCurrencySymbol = _ref.customerCurrencySymbol,
      offerPrice = _ref.offerPrice,
      t = _ref.t;
  return /*#__PURE__*/React.createElement(StyledPriceBox, null, /*#__PURE__*/React.createElement(StyledPriceBoxWrapper, null, isCouponApplied && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(StyledPriceWrapper, null, /*#__PURE__*/React.createElement(StyledLabel, null, t('Price'), ":"), /*#__PURE__*/React.createElement(StyledOfferPrice, null, "".concat(customerCurrencySymbol).concat(offerPrice, " "), /*#__PURE__*/React.createElement("span", null, t('exVAT')))), /*#__PURE__*/React.createElement(StyledPriceWrapper, null, /*#__PURE__*/React.createElement(StyledLabel, null, t('Coupon Discount')), /*#__PURE__*/React.createElement(StyledOfferPrice, null, "".concat(customerCurrencySymbol).concat(discountAmount)))), taxValue !== 0 && /*#__PURE__*/React.createElement(StyledPriceWrapper, null, /*#__PURE__*/React.createElement(StyledLabel, null, t('Applicable Tax')), /*#__PURE__*/React.createElement(StyledOfferPrice, null, "".concat(customerCurrencySymbol).concat(taxValue))), customerServiceFee !== 0 && /*#__PURE__*/React.createElement(StyledPriceWrapper, null, /*#__PURE__*/React.createElement(StyledLabel, null, t('Service Fee')), /*#__PURE__*/React.createElement(StyledOfferPrice, null, "".concat(customerCurrencySymbol).concat(roundNumber(customerServiceFee)))), paymentMethodFee !== 0 && /*#__PURE__*/React.createElement(StyledPriceWrapper, null, /*#__PURE__*/React.createElement(StyledLabel, null, t('Payment Method Fee')), /*#__PURE__*/React.createElement(StyledOfferPrice, null, "".concat(customerCurrencySymbol).concat(roundNumber(paymentMethodFee)))), /*#__PURE__*/React.createElement(StyledPriceWrapper, null, /*#__PURE__*/React.createElement(StyledTotalLabel, null, t('Total'), ":"), /*#__PURE__*/React.createElement(StyledTotalOfferPrice, null, "".concat(customerCurrencySymbol).concat(roundNumber(finalPrice))))));
};

CheckoutPriceBox.defaultProps = {
  customerCurrencySymbol: '',
  offerPrice: 0,
  discountAmount: 0,
  taxValue: 0,
  customerServiceFee: 0,
  paymentMethodFee: 0,
  isCouponApplied: false,
  finalPrice: 0,
  t: function t(k) {
    return k;
  }
};
export { CheckoutPriceBox as PureCheckoutPriceBox };
export default withTranslation()(labeling()(CheckoutPriceBox));