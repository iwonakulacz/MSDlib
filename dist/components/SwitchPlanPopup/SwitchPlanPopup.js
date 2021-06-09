import _regeneratorRuntime from '/Users/iwonakulacz/Documents/repos/msd-package/node_modules/babel-preset-react-app/node_modules/@babel/runtime/regenerator';
import _asyncToGenerator from '/Users/iwonakulacz/Documents/repos/msd-package/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/asyncToGenerator';
import _slicedToArray from '/Users/iwonakulacz/Documents/repos/msd-package/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray';
import React, { useState } from 'react';
import { withTranslation } from 'react-i18next';
import labeling from 'containers/labeling';
import { subscriptionSwitch } from 'api';
import Button from 'components/Button';
import InnerPopupWrapper from 'components/InnerPopupWrapper';
import Loader from 'components/Loader';
import { dateFormat } from 'util/planHelper';
import checkmarkIcon from 'assets/images/checkmark.svg';
import {
  ContentStyled,
  TitleStyled,
  TextStyled,
  ButtonWrapperStyled
} from 'components/InnerPopupWrapper/InnerPopupWrapperStyled';
import {
  ImageWrapper,
  ArrowStyled,
  SubscriptionIconStyled,
  ImageStyled
} from './SwitchPlanPopupStyled';

const SwitchPlanPopup = function SwitchPlanPopup(_ref) {
  const { toOffer } = _ref;
  const { fromOffer } = _ref;
  const { hideInnerPopup } = _ref;
  const { updateList } = _ref;
  const { t } = _ref;

  const _useState = useState(1);
  const _useState2 = _slicedToArray(_useState, 2);
  const step = _useState2[0];
  const setStep = _useState2[1];

  const _useState3 = useState(false);
  const _useState4 = _slicedToArray(_useState3, 2);
  const isLoading = _useState4[0];
  const setIsLoading = _useState4[1];

  const _useState5 = useState(false);
  const _useState6 = _slicedToArray(_useState5, 2);
  const isError = _useState6[0];
  const setError = _useState6[1];

  const changePlan = /* #__PURE__ */ (function() {
    const _ref2 = _asyncToGenerator(
      /* #__PURE__ */ _regeneratorRuntime.mark(function _callee() {
        let resp;
        return _regeneratorRuntime.wrap(
          function _callee$(_context) {
            while (1) {
              switch ((_context.prev = _context.next)) {
                case 0:
                  setIsLoading(true);
                  _context.prev = 1;
                  _context.next = 4;
                  return subscriptionSwitch(
                    fromOffer.offerId,
                    toOffer.toOfferId,
                    toOffer.switchDirection
                  );

                case 4:
                  resp = _context.sent;

                  if (!resp.errors.length) {
                    setIsLoading(false);
                    setStep(2);
                  } else {
                    setError(true);
                    setIsLoading(false);
                  }

                  _context.next = 12;
                  break;

                case 8:
                  _context.prev = 8;
                  _context.t0 = _context.catch(1);
                  setError(true);
                  setIsLoading(false);

                case 12:
                case 'end':
                  return _context.stop();
              }
            }
          },
          _callee,
          null,
          [[1, 8]]
        );
      })
    );

    return function changePlan() {
      return _ref2.apply(this, arguments);
    };
  })();

  const closePopupAndRefresh = function closePopupAndRefresh() {
    hideInnerPopup();
    updateList();
  };

  return /* #__PURE__ */ React.createElement(
    InnerPopupWrapper,
    {
      steps: 2,
      popupTitle: t('Change Plan'),
      isError,
      currentStep: step
    },
    step === 1
      ? /* #__PURE__ */ React.createElement(
          React.Fragment,
          null,
          /* #__PURE__ */ React.createElement(
            ContentStyled,
            null,
            /* #__PURE__ */ React.createElement(
              ImageWrapper,
              null,
              /* #__PURE__ */ React.createElement(SubscriptionIconStyled, {
                period: fromOffer.period,
                showLabel: 'Current'
              }),
              /* #__PURE__ */ React.createElement(ArrowStyled, null),
              /* #__PURE__ */ React.createElement(SubscriptionIconStyled, {
                period: toOffer.period,
                showLabel: 'New'
              })
            ),
            /* #__PURE__ */ React.createElement(
              TitleStyled,
              {
                step
              },
              t(toOffer.switchDirection)
            ),
            /* #__PURE__ */ React.createElement(TextStyled, {
              step,
              dangerouslySetInnerHTML: {
                __html: ''
                  .concat(
                    t(
                      'You are about to change your plan from <b>\n                  '
                        .concat(
                          fromOffer.offerTitle,
                          '</b> to <b> \n                  '
                        )
                        .concat(
                          toOffer.title,
                          ' </b>. You will be charged the new price <b>\n                  '
                        )
                        .concat(toOffer.nextPaymentPrice)
                        .concat(
                          toOffer.nextPaymentPriceCurrencySymbol,
                          ' \n                  </b> on your next billing date <b>\n                  '
                        )
                        .concat(dateFormat(fromOffer.expiresAt), '</b>.')
                    ),
                    '\n                  <br />\n                  '
                  )
                  .concat(
                    toOffer.couponNotApplicable
                      ? '<br />\n                    '.concat(
                          t(
                            'Your current coupon will not apply to the new plan. If you have a coupon for your new plan, you can apply it after confirming your switch.'
                          ),
                          ' <br />'
                        )
                      : '',
                    '\n                  <br /> '
                  )
                  .concat(t('Do you want to apply the change now?'))
              }
            })
          ),
          /* #__PURE__ */ React.createElement(
            ButtonWrapperStyled,
            {
              removeMargin: true
            },
            /* #__PURE__ */ React.createElement(
              Button,
              {
                theme: 'simple',
                onClickFn: hideInnerPopup
              },
              t('Keep Current Plan')
            ),
            /* #__PURE__ */ React.createElement(
              Button,
              {
                theme: 'confirm',
                onClickFn: changePlan
              },
              isLoading
                ? /* #__PURE__ */ React.createElement(Loader, {
                    buttonLoader: true,
                    color: '#ffffff'
                  })
                : t('Change Plan')
            )
          )
        )
      : /* #__PURE__ */ React.createElement(
          React.Fragment,
          null,
          /* #__PURE__ */ React.createElement(
            ContentStyled,
            null,
            /* #__PURE__ */ React.createElement(
              ImageWrapper,
              null,
              /* #__PURE__ */ React.createElement(ImageStyled, {
                src: checkmarkIcon,
                alt: 'checkmark icon'
              })
            ),
            /* #__PURE__ */ React.createElement(
              TitleStyled,
              {
                step
              },
              t('Thank you')
            ),
            /* #__PURE__ */ React.createElement(
              TextStyled,
              {
                step
              },
              t(
                'You have successfully changed your plan. Your new fee will be '
              ),
              /* #__PURE__ */ React.createElement(
                'strong',
                null,
                toOffer.nextPaymentPrice,
                toOffer.nextPaymentPriceCurrencySymbol
              ),
              ' ',
              t('starting from '),
              /* #__PURE__ */ React.createElement(
                'strong',
                null,
                ' ',
                dateFormat(fromOffer.expiresAt)
              ),
              '.'
            )
          ),
          /* #__PURE__ */ React.createElement(
            ButtonWrapperStyled,
            null,
            /* #__PURE__ */ React.createElement(
              Button,
              {
                theme: 'confirm',
                onClickFn: closePopupAndRefresh
              },
              t('Back to settings')
            )
          )
        )
  );
};

SwitchPlanPopup.defaultProps = {
  toOffer: {},
  fromOffer: {},
  hideInnerPopup: function hideInnerPopup() {},
  updateList: function updateList() {},
  t: function t(k) {
    return k;
  }
};
export { SwitchPlanPopup as PureSwitchPlanPopup };
export default withTranslation()(labeling()(SwitchPlanPopup));
