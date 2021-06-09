/* eslint-disable no-nested-ternary */
import React from 'react';
import { withTranslation } from 'react-i18next';
import labeling from 'containers/labeling';
import MyAccountError from 'components/MyAccountError';
import SkeletonWrapper from 'components/SkeletonWrapper';
import { CardTypesIcons } from './PaymentMethod.const';
import {
  WrapStyled,
  PaymentDetailsStyled,
  CardStyled,
  CardWrapStyled,
  CardTypeStyled,
  CardNumberStyled,
  CardExpirationStyled,
  CardExpirationLabel,
  CardExpirationDateStyled, // CardEditStyled,
  Message
} from './PaymentMethodStyled';

const PaymentCard = function PaymentCard(_ref) {
  const { lastCardFourDigits } = _ref;
  const { cardExpirationDate } = _ref;
  const { variant } = _ref;
  const { isDataLoaded } = _ref;
  const { t } = _ref;
  const LogoComponent = CardTypesIcons[variant]
    ? CardTypesIcons[variant]
    : React.Fragment;
  return /* #__PURE__ */ React.createElement(
    CardWrapStyled,
    null,
    isDataLoaded
      ? /* #__PURE__ */ React.createElement(
          CardStyled,
          null,
          /* #__PURE__ */ React.createElement(
            CardTypeStyled,
            null,
            /* #__PURE__ */ React.createElement(LogoComponent, null)
          ),
          /* #__PURE__ */ React.createElement(
            CardNumberStyled,
            null,
            '**** **** **** ',
            lastCardFourDigits
          ),
          /* #__PURE__ */ React.createElement(
            CardExpirationStyled,
            null,
            /* #__PURE__ */ React.createElement(
              CardExpirationLabel,
              null,
              t('Expiry date')
            ),
            /* #__PURE__ */ React.createElement(
              CardExpirationDateStyled,
              null,
              cardExpirationDate
            )
          )
        )
      : /* #__PURE__ */ React.createElement(SkeletonWrapper, {
          height: 166
        })
  );
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

const PaymentMethod = function PaymentMethod(_ref2) {
  const { paymentDetailsLoading } = _ref2;
  const { paymentDetails } = _ref2;
  const { error } = _ref2;
  const { t } = _ref2;
  return paymentDetailsLoading
    ? /* #__PURE__ */ React.createElement(PaymentCard, {
        isDataLoaded: false
      })
    : /* #__PURE__ */ React.createElement(
        WrapStyled,
        null,
        error.length !== 0
          ? /* #__PURE__ */ React.createElement(MyAccountError, {
              generalError: true,
              fullHeight: true
            })
          : paymentDetails.length === 0
          ? /* #__PURE__ */ React.createElement(MyAccountError, {
              title: t('No payment method added!'),
              subtitle: t('Add a card to start your plan'),
              withBorder: true
            })
          : /* #__PURE__ */ React.createElement(
              PaymentDetailsStyled,
              null,
              paymentDetails.map(function(method) {
                if (method.paymentMethod === 'card') {
                  const _method$paymentMethod =
                    method.paymentMethodSpecificParams;
                  const { lastCardFourDigits } = _method$paymentMethod;
                  const { cardExpirationDate } = _method$paymentMethod;
                  const { variant } = _method$paymentMethod;
                  return /* #__PURE__ */ React.createElement(PaymentCard, {
                    key: method.id,
                    lastCardFourDigits,
                    cardExpirationDate,
                    variant
                  });
                }

                if (method.paymentMethod === 'paypal') {
                  const LogoComponent = CardTypesIcons[method.paymentMethod]
                    ? CardTypesIcons[method.paymentMethod]
                    : React.Fragment;
                  return /* #__PURE__ */ React.createElement(
                    CardWrapStyled,
                    {
                      key: method.id,
                      type: method.paymentMethod
                    },
                    /* #__PURE__ */ React.createElement(
                      CardStyled,
                      null,
                      /* #__PURE__ */ React.createElement(
                        CardTypeStyled,
                        null,
                        /* #__PURE__ */ React.createElement(LogoComponent, null)
                      )
                    )
                  );
                }

                return /* #__PURE__ */ React.createElement(
                  Message,
                  {
                    key: 'message'
                  },
                  t('Payment by '),
                  ' ',
                  method.paymentMethod,
                  ' ',
                  t('is not supported')
                );
              })
            )
      );
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
