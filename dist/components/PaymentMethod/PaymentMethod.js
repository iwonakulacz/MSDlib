/* eslint-disable no-nested-ternary */
import React from 'react';
import { withTranslation } from 'react-i18next';
import labeling from 'containers/labeling';
import MyAccountError from 'components/MyAccountError';
import SkeletonWrapper from 'components/SkeletonWrapper';
import { CardTypesIcons } from './PaymentMethod.const';
import { WrapStyled, PaymentDetailsStyled, CardStyled, CardWrapStyled, CardTypeStyled, CardNumberStyled, CardExpirationStyled, CardExpirationLabel, CardExpirationDateStyled // CardEditStyled,
, Message } from './PaymentMethodStyled';

var PaymentCard = function PaymentCard(_ref) {
  var lastCardFourDigits = _ref.lastCardFourDigits,
      cardExpirationDate = _ref.cardExpirationDate,
      variant = _ref.variant,
      isDataLoaded = _ref.isDataLoaded,
      t = _ref.t;
  var LogoComponent = CardTypesIcons[variant] ? CardTypesIcons[variant] : React.Fragment;
  return /*#__PURE__*/React.createElement(CardWrapStyled, null, isDataLoaded ? /*#__PURE__*/React.createElement(CardStyled, null, /*#__PURE__*/React.createElement(CardTypeStyled, null, /*#__PURE__*/React.createElement(LogoComponent, null)), /*#__PURE__*/React.createElement(CardNumberStyled, null, "**** **** **** ", lastCardFourDigits), /*#__PURE__*/React.createElement(CardExpirationStyled, null, /*#__PURE__*/React.createElement(CardExpirationLabel, null, t('Expiry date')), /*#__PURE__*/React.createElement(CardExpirationDateStyled, null, cardExpirationDate))) : /*#__PURE__*/React.createElement(SkeletonWrapper, {
    height: 166
  }));
};

PaymentCard.defaultProps = {
  lastCardFourDigits: '',
  cardExpirationDate: '',
  isDataLoaded: true,
  variant: '',
  t: function t(k) {
    return k;
  }
};

var PaymentMethod = function PaymentMethod(_ref2) {
  var paymentDetailsLoading = _ref2.paymentDetailsLoading,
      paymentDetails = _ref2.paymentDetails,
      error = _ref2.error,
      t = _ref2.t;
  return paymentDetailsLoading ? /*#__PURE__*/React.createElement(PaymentCard, {
    isDataLoaded: false
  }) : /*#__PURE__*/React.createElement(WrapStyled, null, error.length !== 0 ? /*#__PURE__*/React.createElement(MyAccountError, {
    generalError: true,
    fullHeight: true
  }) : paymentDetails.length === 0 ? /*#__PURE__*/React.createElement(MyAccountError, {
    title: t('No payment method added!'),
    subtitle: t('Add a card to start your plan'),
    withBorder: true
  }) : /*#__PURE__*/React.createElement(PaymentDetailsStyled, null, paymentDetails.map(function (method) {
    if (method.paymentMethod === 'card') {
      var _method$paymentMethod = method.paymentMethodSpecificParams,
          lastCardFourDigits = _method$paymentMethod.lastCardFourDigits,
          cardExpirationDate = _method$paymentMethod.cardExpirationDate,
          variant = _method$paymentMethod.variant;
      return /*#__PURE__*/React.createElement(PaymentCard, {
        key: method.id,
        lastCardFourDigits: lastCardFourDigits,
        cardExpirationDate: cardExpirationDate,
        variant: variant
      });
    }

    if (method.paymentMethod === 'paypal') {
      var LogoComponent = CardTypesIcons[method.paymentMethod] ? CardTypesIcons[method.paymentMethod] : React.Fragment;
      return /*#__PURE__*/React.createElement(CardWrapStyled, {
        key: method.id,
        type: method.paymentMethod
      }, /*#__PURE__*/React.createElement(CardStyled, null, /*#__PURE__*/React.createElement(CardTypeStyled, null, /*#__PURE__*/React.createElement(LogoComponent, null))));
    }

    return /*#__PURE__*/React.createElement(Message, {
      key: "message"
    }, t('Payment by '), " ", method.paymentMethod, ' ', t('is not supported'));
  })));
};

PaymentMethod.defaultProps = {
  paymentDetails: [],
  error: [],
  paymentDetailsLoading: false,
  t: function t(k) {
    return k;
  }
};
export { PaymentMethod as PurePaymentMethod };
export default withTranslation()(labeling()(PaymentMethod));