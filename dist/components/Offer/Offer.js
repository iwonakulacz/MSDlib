import _classCallCheck from "/Users/iwonakulacz/Documents/repos/msd-package/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "/Users/iwonakulacz/Documents/repos/msd-package/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass";
import _inherits from "/Users/iwonakulacz/Documents/repos/msd-package/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits";
import _createSuper from "/Users/iwonakulacz/Documents/repos/msd-package/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createSuper";
import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';
import labeling from 'containers/labeling';
import { PureCouponInput as CouponInput } from 'components/CouponInput/CouponInput';
import { MESSAGE_TYPE_FAIL, MESSAGE_TYPE_SUCCESS } from 'components/Input';
import Payment from 'components/Payment';
import Logout from 'components/Logout';
import Header from 'components/Header';
import SectionHeader from 'components/SectionHeader';
import Footer from 'components/Footer';
import SubscriptionCard from 'components/SubscriptionCard';
import CheckoutPriceBox from 'components/CheckoutPriceBox';
import FreeOffer from 'components/FreeOffer';
import { getData } from 'util/appConfigHelper';
import { periodMapper, dateFormat } from 'util/planHelper';
import { StyledOfferBody, StyledOfferWrapper, StyledOfferDetailsAndCoupon, StyledOfferCouponWrapper, SubscriptionCardWrapperStyled } from './OfferStyled';

var Offer = /*#__PURE__*/function (_Component) {
  _inherits(Offer, _Component);

  var _super = _createSuper(Offer);

  function Offer(props) {
    var _this;

    _classCallCheck(this, Offer);

    _this = _super.call(this, props);

    _this.generateDescription = function (offerType) {
      switch (offerType) {
        case 'S':
          {
            var _this$props = _this.props,
                _this$props$offerDeta = _this$props.offerDetails,
                freePeriods = _this$props$offerDeta.freePeriods,
                freeDays = _this$props$offerDeta.freeDays,
                trialAvailable = _this$props$offerDeta.trialAvailable,
                period = _this$props$offerDeta.period,
                customerCurrencySymbol = _this$props$offerDeta.customerCurrencySymbol,
                offerPrice = _this$props.orderDetails.priceBreakdown.offerPrice;
            var trialPeriodText = freeDays ? "".concat(freeDays, " days") : "".concat(freePeriods > 1 ? "".concat(freePeriods, " ").concat(period, "s") : period);

            if (trialAvailable) {
              return "You will be charged ".concat(offerPrice).concat(customerCurrencySymbol, " after ").concat(trialPeriodText, ". \n              </br>Next payments will occur for every ").concat(periodMapper[period].chargedForEveryText, ".");
            }

            return "You will be charged ".concat(offerPrice).concat(customerCurrencySymbol, " for every ").concat(periodMapper[period].chargedForEveryText, ".");
          }

        case 'P':
          {
            var _this$props$offerDeta2 = _this.props.offerDetails,
                _period = _this$props$offerDeta2.period,
                expiresAt = _this$props$offerDeta2.expiresAt;

            if (!_period) {
              return "Access until ".concat(dateFormat(expiresAt, true));
            }

            return periodMapper[_period] ? "".concat(periodMapper[_period].accessText, " season pass") : '';
          }

        case 'E':
          {
            var startTime = _this.props.offerDetails.startTime;
            return "Pay-per-view event ".concat(startTime ? dateFormat(startTime, true) : '');
          }

        case 'R':
          {
            var _period2 = _this.props.offerDetails.period;
            return periodMapper[_period2] ? "".concat(periodMapper[_period2].accessText, " access") : '';
          }

        case 'A':
          return 'Unlimited access';

        default:
          return '';
      }
    };

    _this.state = {
      coupon: ''
    };
    return _this;
  }

  _createClass(Offer, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props2 = this.props,
          _this$props2$offerDet = _this$props2.offerDetails,
          offerTitle = _this$props2$offerDet.offerTitle,
          customerCurrencySymbol = _this$props2$offerDet.customerCurrencySymbol,
          trialAvailable = _this$props2$offerDet.trialAvailable,
          period = _this$props2$offerDet.period,
          expiresAt = _this$props2$offerDet.expiresAt,
          startTime = _this$props2$offerDet.startTime,
          _this$props2$orderDet = _this$props2.orderDetails,
          _this$props2$orderDet2 = _this$props2$orderDet.priceBreakdown,
          offerPrice = _this$props2$orderDet2.offerPrice,
          discountAmount = _this$props2$orderDet2.discountAmount,
          taxValue = _this$props2$orderDet2.taxValue,
          customerServiceFee = _this$props2$orderDet2.customerServiceFee,
          paymentMethodFee = _this$props2$orderDet2.paymentMethodFee,
          applied = _this$props2$orderDet.discount.applied,
          totalPrice = _this$props2$orderDet.totalPrice,
          requiredPaymentDetails = _this$props2$orderDet.requiredPaymentDetails,
          _this$props2$couponPr = _this$props2.couponProps,
          showMessage = _this$props2$couponPr.showMessage,
          message = _this$props2$couponPr.message,
          messageType = _this$props2$couponPr.messageType,
          onSubmit = _this$props2$couponPr.onSubmit,
          couponLoading = _this$props2$couponPr.couponLoading,
          onPaymentComplete = _this$props2.onPaymentComplete,
          updatePriceBreakdown = _this$props2.updatePriceBreakdown,
          t = _this$props2.t;
      var isCouponApplied = applied;
      var coupon = this.state.coupon;
      var finalPrice = totalPrice;
      var offerType = getData('CLEENG_OFFER_TYPE');
      var isFree = totalPrice === 0 && !trialAvailable && !isCouponApplied;
      return /*#__PURE__*/React.createElement(StyledOfferWrapper, null, /*#__PURE__*/React.createElement(Header, null, /*#__PURE__*/React.createElement(Logout, null)), /*#__PURE__*/React.createElement("main", null, isFree ? /*#__PURE__*/React.createElement(FreeOffer, {
        icon: period || offerType,
        title: offerTitle,
        period: period,
        expiresAt: expiresAt,
        startTime: startTime,
        onPaymentComplete: onPaymentComplete
      }) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(StyledOfferBody, null, /*#__PURE__*/React.createElement(SectionHeader, {
        center: true
      }, t('Complete your purchase')), /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(StyledOfferDetailsAndCoupon, null, /*#__PURE__*/React.createElement(SubscriptionCardWrapperStyled, null, /*#__PURE__*/React.createElement(SubscriptionCard, {
        period: period,
        icon: period || offerType,
        title: offerTitle,
        description: this.generateDescription(offerType),
        currency: customerCurrencySymbol,
        price: offerPrice,
        isTrialAvailable: trialAvailable
      })), /*#__PURE__*/React.createElement(StyledOfferCouponWrapper, null, /*#__PURE__*/React.createElement(CouponInput, {
        showMessage: showMessage,
        message: message,
        messageType: messageType,
        onSubmit: onSubmit,
        value: coupon,
        onChange: function onChange(e) {
          return _this2.setState({
            coupon: e
          });
        },
        couponLoading: couponLoading,
        t: t
      })))), /*#__PURE__*/React.createElement(CheckoutPriceBox, {
        finalPrice: finalPrice,
        isCouponApplied: isCouponApplied,
        discountAmount: discountAmount,
        taxValue: taxValue,
        customerServiceFee: customerServiceFee,
        paymentMethodFee: paymentMethodFee,
        customerCurrencySymbol: customerCurrencySymbol,
        offerPrice: offerPrice
      })), /*#__PURE__*/React.createElement(Payment, {
        onPaymentComplete: onPaymentComplete,
        isPaymentDetailsRequired: requiredPaymentDetails,
        updatePriceBreakdown: updatePriceBreakdown,
        t: t
      }))), /*#__PURE__*/React.createElement(Footer, null));
    }
  }]);

  return Offer;
}(Component);

Offer.defaultProps = {
  orderDetails: {
    priceBreakdown: {
      offerPrice: 0,
      discountedPrice: 0,
      discountAmount: 0,
      taxValue: 0,
      customerServiceFee: 0,
      paymentMethodFee: 0
    },
    discount: {
      applied: false
    },
    totalPrice: 0,
    requiredPaymentDetails: true
  },
  couponProps: null,
  t: function t(k) {
    return k;
  }
};
export { Offer as PureOffer };
export default withTranslation()(labeling()(Offer));