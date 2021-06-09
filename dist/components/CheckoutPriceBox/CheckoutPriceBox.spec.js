/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { shallow } from 'enzyme';
import roundNumber from 'util/roundNumber';
import { PureCheckoutPriceBox as CheckoutPriceBox } from './CheckoutPriceBox';
import { StyledPriceBoxWrapper, StyledPriceWrapper, StyledOfferPrice, StyledTotalOfferPrice } from './CheckoutPriceBoxStyled';
jest.mock('containers/labeling', function () {
  return function () {
    return function (Component) {
      return function (props) {
        return /*#__PURE__*/React.createElement(Component, Object.assign({
          t: function t(k) {
            return k;
          }
        }, props));
      };
    };
  };
});
jest.mock('react-i18next', function () {
  return {
    withTranslation: function withTranslation() {
      return function (Component) {
        return function (props) {
          return /*#__PURE__*/React.createElement(Component, Object.assign({
            t: function t(k) {
              return k;
            }
          }, props));
        };
      };
    }
  };
});
describe('CheckoutPriceBox', function () {
  var customerServiceFee = 2;
  var paymentFee = 1;
  var offerPrice = 10;
  var customerCurrencySymbol = '$';
  var discountAmount = 2;
  var taxValue = 0.23;
  var finalPriceWithCoupon = offerPrice + taxValue - discountAmount;
  var finalPriceWithFees = offerPrice + customerServiceFee + paymentFee;
  it('displays coupon discount', function () {
    var wrapper = shallow( /*#__PURE__*/React.createElement(CheckoutPriceBox, {
      isCouponApplied: true,
      finalPrice: finalPriceWithCoupon,
      discountAmount: discountAmount,
      taxValue: taxValue,
      customerServiceFee: 0,
      paymentMethodFee: 0,
      customerCurrencySymbol: customerCurrencySymbol,
      offerPrice: offerPrice
    }));
    expect(wrapper.find(StyledPriceBoxWrapper)).toHaveLength(1);
    expect(wrapper.find(StyledPriceWrapper)).toHaveLength(4);
    expect(wrapper.find(StyledPriceWrapper).at(0).find(StyledOfferPrice).text()).toBe("".concat(customerCurrencySymbol).concat(offerPrice, " exVAT"));
    expect(wrapper.find(StyledPriceWrapper).at(1).find(StyledOfferPrice).text()).toBe("".concat(customerCurrencySymbol).concat(discountAmount));
    expect(wrapper.find(StyledPriceWrapper).at(2).find(StyledOfferPrice).text()).toBe("".concat(customerCurrencySymbol).concat(taxValue));
    expect(wrapper.find(StyledPriceWrapper).at(3).find(StyledTotalOfferPrice).text()).toBe("".concat(customerCurrencySymbol).concat(finalPriceWithCoupon));
  });
  it('displays payment and service fee', function () {
    var wrapper = shallow( /*#__PURE__*/React.createElement(CheckoutPriceBox, {
      isCouponApplied: false,
      finalPrice: offerPrice + customerServiceFee + paymentFee,
      discountAmount: 0,
      taxValue: 0,
      customerServiceFee: customerServiceFee,
      paymentMethodFee: paymentFee,
      customerCurrencySymbol: customerCurrencySymbol,
      offerPrice: offerPrice
    }));
    expect(wrapper.find(StyledPriceBoxWrapper)).toHaveLength(1);
    expect(wrapper.find(StyledPriceWrapper)).toHaveLength(3);
    expect(wrapper.find(StyledPriceWrapper).at(0).find(StyledOfferPrice).text()).toBe("".concat(customerCurrencySymbol).concat(roundNumber(customerServiceFee)));
    expect(wrapper.find(StyledPriceWrapper).at(1).find(StyledOfferPrice).text()).toBe("".concat(customerCurrencySymbol).concat(roundNumber(paymentFee)));
    expect(wrapper.find(StyledPriceWrapper).at(2).find(StyledTotalOfferPrice).text()).toBe("".concat(customerCurrencySymbol).concat(roundNumber(finalPriceWithFees)));
  });
});