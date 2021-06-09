import _classCallCheck from '/Users/iwonakulacz/Documents/repos/msd-package/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck';
import _createClass from '/Users/iwonakulacz/Documents/repos/msd-package/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass';
import _inherits from '/Users/iwonakulacz/Documents/repos/msd-package/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits';
import _createSuper from '/Users/iwonakulacz/Documents/repos/msd-package/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createSuper';

/* eslint-disable no-nested-ternary */
import React, { PureComponent } from 'react';
import { withTranslation } from 'react-i18next';
import labeling from 'containers/labeling';
import { ReactComponent as noSubscriptionsIcon } from 'assets/images/errors/sad_coupon.svg';
import { dateFormat, currencyFormat } from 'util/planHelper';
import MyAccountError from 'components/MyAccountError';
import SubscriptionCard from 'components/SubscriptionCard';
import SubscriptionManagement from 'components/SubscriptionManagement';
import CouponInput from 'components/CouponInput';
import MessageBox from 'components/MessageBox';
import { applyCoupon } from 'api';
import {
  WrapStyled,
  SubscriptionStyled,
  SubscriptionActionsStyled,
  FullWidthButtonStyled,
  SimpleButtonStyled,
  CouponWrapStyled,
  StatusMessageWrapStyled
} from './CurrentPlanStyled';

export var SkeletonCard = function SkeletonCard() {
  return /* #__PURE__ */ React.createElement(
    SubscriptionStyled,
    null,
    /* #__PURE__ */ React.createElement(SubscriptionCard, {
      isDataLoaded: false
    })
  );
};

const CurrentPlan = /* #__PURE__ */ (function(_PureComponent) {
  _inherits(CurrentPlan, _PureComponent);

  const _super = _createSuper(CurrentPlan);

  function CurrentPlan(props) {
    let _this;

    _classCallCheck(this, CurrentPlan);

    _this = _super.call(this, props);

    _this.submitCoupon = function(subscriptionId) {
      const _this$props = _this.props;
      const { t } = _this$props;
      const { updateList } = _this$props;
      const { couponValue } = _this.state;

      _this.resetErrorMessage();

      if (couponValue) {
        _this.setState({
          isSubmitting: true
        });

        applyCoupon(subscriptionId, couponValue)
          .then(function(resp) {
            switch (resp.status) {
              case 200:
                _this.showMessageBox(
                  'success',
                  t('Your Coupon has been successfully reedemed.'),
                  subscriptionId
                );

                _this.setState({
                  isCouponInputOpened: false,
                  isSubmitting: false
                });

                updateList();
                break;

              case 422:
                if (
                  resp.errors.some(function(e) {
                    return e.includes('not found');
                  })
                )
                  _this.showErrorMessage(t('Invalid coupon code.'));
                if (
                  resp.errors.some(function(e) {
                    return e.includes('already');
                  })
                )
                  _this.showErrorMessage(t('Coupon already used'));

                _this.setState({
                  isSubmitting: false
                });

                break;

              default:
                _this.showErrorMessage(t('Invalid coupon code.'));

                _this.setState({
                  isSubmitting: false
                });

                break;
            }
          })
          .catch(function() {
            _this.showErrorMessage('Ooops. Something went wrong.');

            _this.setState({
              isSubmitting: false
            });
          });
      } else {
        _this.showErrorMessage(t('Please enter coupon code.'));
      }
    };

    _this.onInputToggle = function() {
      _this.setState({
        isCouponInputOpened: true
      });
    };

    _this.resetErrorMessage = function() {
      _this.setState({
        isErrorMessageShown: false
      });
    };

    _this.showErrorMessage = function(message) {
      _this.setState({
        isErrorMessageShown: true,
        errorMessage: message
      });
    };

    _this.showMessageBox = function(type, text, subscriptionId) {
      _this.setState({
        messageBoxType: type,
        messageBoxText: text,
        isMessageBoxOpened: true,
        messageSubscriptionId: subscriptionId
      });
    };

    _this.state = {
      isMessageBoxOpened: false,
      messageBoxType: null,
      messageBoxText: '',
      isErrorMessageShown: false,
      errorMessage: '',
      isCouponInputOpened: false,
      couponValue: '',
      isSubmitting: false,
      messageSubscriptionId: null
    };
    return _this;
  }

  _createClass(CurrentPlan, [
    {
      key: 'render',
      value: function render() {
        const _this2 = this;

        const _this$state = this.state;
        const { isMessageBoxOpened } = _this$state;
        const { isCouponInputOpened } = _this$state;
        const { isErrorMessageShown } = _this$state;
        const { messageBoxType } = _this$state;
        const { messageBoxText } = _this$state;
        const { errorMessage } = _this$state;
        const { couponValue } = _this$state;
        const { isSubmitting } = _this$state;
        const { messageSubscriptionId } = _this$state;
        const _this$props2 = this.props;
        const { subscriptions } = _this$props2;
        const { isLoading } = _this$props2;
        const { errors } = _this$props2;
        const { showInnerPopup } = _this$props2;
        const { setOfferToSwitch } = _this$props2;
        const { offerToSwitch } = _this$props2;
        const { isManagementBarOpen } = _this$props2;
        const { t } = _this$props2;
        const areFewOffers = subscriptions.length > 1;
        return isLoading
          ? /* #__PURE__ */ React.createElement(SkeletonCard, null)
          : /* #__PURE__ */ React.createElement(
              WrapStyled,
              null,
              errors.length !== 0
                ? /* #__PURE__ */ React.createElement(MyAccountError, {
                    generalError: true
                  })
                : subscriptions.length === 0
                ? /* #__PURE__ */ React.createElement(MyAccountError, {
                    title: t('No subscriptions yet!'),
                    subtitle: t(
                      'If you choose your plan, you will be able to manage your Subscriptions here.'
                    ),
                    icon: noSubscriptionsIcon
                  })
                : /* #__PURE__ */ React.createElement(
                    React.Fragment,
                    null,
                    subscriptions.map(function(subItem) {
                      const description = ''
                        .concat(
                          subItem.status === 'active'
                            ? t('Next payment is on')
                            : t('This plan will expire on'),
                          ' '
                        )
                        .concat(dateFormat(subItem.expiresAt));
                      return /* #__PURE__ */ React.createElement(
                        SubscriptionStyled,
                        {
                          key: subItem.offerId,
                          onClick: function onClick() {
                            if (areFewOffers && subItem.status === 'active')
                              setOfferToSwitch(subItem);
                          },
                          cursorPointer:
                            areFewOffers && subItem.status === 'active',
                          isSelected:
                            areFewOffers &&
                            offerToSwitch.offerId === subItem.offerId
                        },
                        /* #__PURE__ */ React.createElement(SubscriptionCard, {
                          period: subItem.period,
                          title: subItem.offerTitle,
                          description,
                          currency: currencyFormat[subItem.nextPaymentCurrency],
                          price: subItem.nextPaymentPrice
                        }),
                        isMessageBoxOpened &&
                          messageSubscriptionId === subItem.subsctiptionId &&
                          /* #__PURE__ */ React.createElement(
                            StatusMessageWrapStyled,
                            null,
                            /* #__PURE__ */ React.createElement(MessageBox, {
                              type: messageBoxType,
                              message: messageBoxText
                            })
                          ),
                        /* #__PURE__ */ React.createElement(
                          SubscriptionManagement,
                          {
                            isOpened: isManagementBarOpen,
                            onClose: function onClose() {
                              return _this2.setState({
                                isCouponInputOpened: false
                              });
                            }
                          },
                          /* #__PURE__ */ React.createElement(
                            SubscriptionActionsStyled,
                            null,
                            subItem.status === 'active' &&
                              !isCouponInputOpened &&
                              /* #__PURE__ */ React.createElement(
                                SimpleButtonStyled,
                                {
                                  theme: 'simple',
                                  onClickFn: function onClickFn(event) {
                                    event.stopPropagation();
                                    showInnerPopup({
                                      type: 'updateSubscription',
                                      data: {
                                        action: 'unsubscribe',
                                        offerData: {
                                          offerId: subItem.offerId,
                                          expiresAt: subItem.expiresAt
                                        }
                                      }
                                    });
                                  }
                                },
                                t('Unsubscribe')
                              ),
                            subItem.status === 'cancelled' &&
                              !isCouponInputOpened &&
                              /* #__PURE__ */ React.createElement(
                                FullWidthButtonStyled,
                                {
                                  theme: 'simple',
                                  onClickFn: function onClickFn(event) {
                                    event.stopPropagation();
                                    showInnerPopup({
                                      type: 'updateSubscription',
                                      data: {
                                        action: 'resubscribe',
                                        offerData: {
                                          offerId: subItem.offerId,
                                          expiresAt: subItem.expiresAt,
                                          price: ''
                                            .concat(subItem.nextPaymentPrice)
                                            .concat(
                                              currencyFormat[
                                                subItem.nextPaymentCurrency
                                              ]
                                            )
                                        }
                                      }
                                    });
                                  }
                                },
                                t('Resume')
                              ),
                            subItem.status !== 'cancelled' &&
                              /* #__PURE__ */ React.createElement(
                                CouponWrapStyled,
                                null,
                                /* #__PURE__ */ React.createElement(
                                  CouponInput,
                                  {
                                    fullWidth: true,
                                    showMessage: isErrorMessageShown,
                                    value: couponValue,
                                    message: errorMessage,
                                    couponLoading: isSubmitting,
                                    onSubmit: function onSubmit() {
                                      return _this2.submitCoupon(
                                        subItem.subscriptionId
                                      );
                                    },
                                    onChange: function onChange(e) {
                                      return _this2.setState({
                                        couponValue: e
                                      });
                                    },
                                    onClose: function onClose() {
                                      return _this2.setState({
                                        isCouponInputOpened: false
                                      });
                                    },
                                    onInputToggle: function onInputToggle() {
                                      return _this2.onInputToggle();
                                    }
                                  }
                                )
                              )
                          )
                        )
                      );
                    })
                  )
            );
      }
    }
  ]);

  return CurrentPlan;
})(PureComponent);

CurrentPlan.defaultProps = {
  subscriptions: [],
  isLoading: false,
  errors: [],
  offerToSwitch: {},
  isManagementBarOpen: false,
  t: function t(k) {
    return k;
  }
};
export { CurrentPlan as PureCurrentPlan };
export default withTranslation()(labeling()(CurrentPlan));
