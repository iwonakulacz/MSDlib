import _classCallCheck from '/Users/iwonakulacz/Documents/repos/msd-package/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck';
import _createClass from '/Users/iwonakulacz/Documents/repos/msd-package/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass';
import _inherits from '/Users/iwonakulacz/Documents/repos/msd-package/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits';
import _createSuper from '/Users/iwonakulacz/Documents/repos/msd-package/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createSuper';
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
import {
  StyledOfferBody,
  StyledOfferWrapper,
  StyledOfferDetailsAndCoupon,
  StyledOfferCouponWrapper,
  SubscriptionCardWrapperStyled
} from './OfferStyled';

const Offer = /* #__PURE__ */ (function(_Component) {
  _inherits(Offer, _Component);

  const _super = _createSuper(Offer);

  function Offer(props) {
    let _this;

    _classCallCheck(this, Offer);

    _this = _super.call(this, props);

    _this.generateDescription = function(offerType) {
      switch (offerType) {
        case 'S': {
          const _this$props = _this.props;
          const _this$props$offerDeta = _this$props.offerDetails;
          const { freePeriods } = _this$props$offerDeta;
          const { freeDays } = _this$props$offerDeta;
          const { trialAvailable } = _this$props$offerDeta;
          const { period } = _this$props$offerDeta;
          const { customerCurrencySymbol } = _this$props$offerDeta;
          const { offerPrice } = _this$props.orderDetails.priceBreakdown;
          const trialPeriodText = freeDays
            ? ''.concat(freeDays, ' days')
            : ''.concat(
                freePeriods > 1
                  ? ''.concat(freePeriods, ' ').concat(period, 's')
                  : period
              );

          if (trialAvailable) {
            return 'You will be charged '
              .concat(offerPrice)
              .concat(customerCurrencySymbol, ' after ')
              .concat(
                trialPeriodText,
                '. \n              </br>Next payments will occur for every '
              )
              .concat(periodMapper[period].chargedForEveryText, '.');
          }

          return 'You will be charged '
            .concat(offerPrice)
            .concat(customerCurrencySymbol, ' for every ')
            .concat(periodMapper[period].chargedForEveryText, '.');
        }

        case 'P': {
          const _this$props$offerDeta2 = _this.props.offerDetails;
          const _period = _this$props$offerDeta2.period;
          const { expiresAt } = _this$props$offerDeta2;

          if (!_period) {
            return 'Access until '.concat(dateFormat(expiresAt, true));
          }

          return periodMapper[_period]
            ? ''.concat(periodMapper[_period].accessText, ' season pass')
            : '';
        }

        case 'E': {
          const { startTime } = _this.props.offerDetails;
          return 'Pay-per-view event '.concat(
            startTime ? dateFormat(startTime, true) : ''
          );
        }

        case 'R': {
          const _period2 = _this.props.offerDetails.period;
          return periodMapper[_period2]
            ? ''.concat(periodMapper[_period2].accessText, ' access')
            : '';
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

  _createClass(Offer, [
    {
      key: 'render',
      value: function render() {
        const _this2 = this;

        const _this$props2 = this.props;
        const _this$props2$offerDet = _this$props2.offerDetails;
        const { offerTitle } = _this$props2$offerDet;
        const { customerCurrencySymbol } = _this$props2$offerDet;
        const { trialAvailable } = _this$props2$offerDet;
        const { period } = _this$props2$offerDet;
        const { expiresAt } = _this$props2$offerDet;
        const { startTime } = _this$props2$offerDet;
        const _this$props2$orderDet = _this$props2.orderDetails;
        const _this$props2$orderDet2 = _this$props2$orderDet.priceBreakdown;
        const { offerPrice } = _this$props2$orderDet2;
        const { discountAmount } = _this$props2$orderDet2;
        const { taxValue } = _this$props2$orderDet2;
        const { customerServiceFee } = _this$props2$orderDet2;
        const { paymentMethodFee } = _this$props2$orderDet2;
        const { applied } = _this$props2$orderDet.discount;
        const { totalPrice } = _this$props2$orderDet;
        const { requiredPaymentDetails } = _this$props2$orderDet;
        const _this$props2$couponPr = _this$props2.couponProps;
        const { showMessage } = _this$props2$couponPr;
        const { message } = _this$props2$couponPr;
        const { messageType } = _this$props2$couponPr;
        const { onSubmit } = _this$props2$couponPr;
        const { couponLoading } = _this$props2$couponPr;
        const { onPaymentComplete } = _this$props2;
        const { updatePriceBreakdown } = _this$props2;
        const { t } = _this$props2;
        const isCouponApplied = applied;
        const { coupon } = this.state;
        const finalPrice = totalPrice;
        const offerType = getData('CLEENG_OFFER_TYPE');
        const isFree = totalPrice === 0 && !trialAvailable && !isCouponApplied;
        return /* #__PURE__ */ React.createElement(
          StyledOfferWrapper,
          null,
          /* #__PURE__ */ React.createElement(
            Header,
            null,
            /* #__PURE__ */ React.createElement(Logout, null)
          ),
          /* #__PURE__ */ React.createElement(
            'main',
            null,
            isFree
              ? /* #__PURE__ */ React.createElement(FreeOffer, {
                  icon: period || offerType,
                  title: offerTitle,
                  period,
                  expiresAt,
                  startTime,
                  onPaymentComplete
                })
              : /* #__PURE__ */ React.createElement(
                  React.Fragment,
                  null,
                  /* #__PURE__ */ React.createElement(
                    StyledOfferBody,
                    null,
                    /* #__PURE__ */ React.createElement(
                      SectionHeader,
                      {
                        center: true
                      },
                      t('Complete your purchase')
                    ),
                    /* #__PURE__ */ React.createElement(
                      React.Fragment,
                      null,
                      /* #__PURE__ */ React.createElement(
                        StyledOfferDetailsAndCoupon,
                        null,
                        /* #__PURE__ */ React.createElement(
                          SubscriptionCardWrapperStyled,
                          null,
                          /* #__PURE__ */ React.createElement(
                            SubscriptionCard,
                            {
                              period,
                              icon: period || offerType,
                              title: offerTitle,
                              description: this.generateDescription(offerType),
                              currency: customerCurrencySymbol,
                              price: offerPrice,
                              isTrialAvailable: trialAvailable
                            }
                          )
                        ),
                        /* #__PURE__ */ React.createElement(
                          StyledOfferCouponWrapper,
                          null,
                          /* #__PURE__ */ React.createElement(CouponInput, {
                            showMessage,
                            message,
                            messageType,
                            onSubmit,
                            value: coupon,
                            onChange: function onChange(e) {
                              return _this2.setState({
                                coupon: e
                              });
                            },
                            couponLoading,
                            t
                          })
                        )
                      )
                    ),
                    /* #__PURE__ */ React.createElement(CheckoutPriceBox, {
                      finalPrice,
                      isCouponApplied,
                      discountAmount,
                      taxValue,
                      customerServiceFee,
                      paymentMethodFee,
                      customerCurrencySymbol,
                      offerPrice
                    })
                  ),
                  /* #__PURE__ */ React.createElement(Payment, {
                    onPaymentComplete,
                    isPaymentDetailsRequired: requiredPaymentDetails,
                    updatePriceBreakdown,
                    t
                  })
                )
          ),
          /* #__PURE__ */ React.createElement(Footer, null)
        );
      }
    }
  ]);

  return Offer;
})(Component);

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
