import _objectSpread from '/Users/iwonakulacz/Documents/repos/msd-package/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2';
import _classCallCheck from '/Users/iwonakulacz/Documents/repos/msd-package/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck';
import _createClass from '/Users/iwonakulacz/Documents/repos/msd-package/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass';
import _inherits from '/Users/iwonakulacz/Documents/repos/msd-package/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits';
import _createSuper from '/Users/iwonakulacz/Documents/repos/msd-package/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createSuper';
import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Offer from 'components/Offer';
import { MESSAGE_TYPE_SUCCESS, MESSAGE_TYPE_FAIL } from 'components/Input';
import { withTranslation } from 'react-i18next';
import ErrorPage from 'components/ErrorPage';
import Loader from 'components/Loader';
import {
  getOfferDetails,
  createOrder,
  updateOrder,
  getPaymentMethods
} from 'api';
import saveOfferId from 'util/offerIdHelper';
import { setData, getData } from 'util/appConfigHelper';
import StyledLoaderContainer from './StyledOfferContainer';
import labeling from '../labeling';

const OfferContainer = /* #__PURE__ */ (function(_Component) {
  _inherits(OfferContainer, _Component);

  const _super = _createSuper(OfferContainer);

  function OfferContainer(props) {
    let _this;

    _classCallCheck(this, OfferContainer);

    _this = _super.call(this, props);

    _this.updatePriceBreakdown = function(updatedOrder) {
      _this.setState({
        orderDetails: updatedOrder
      });
    };

    _this.setOfferId = function(value) {
      return _this.setState({
        offerId: value
      });
    };

    _this.onCouponSubmit = function(couponCode) {
      if (couponCode === '') {
        return;
      }

      _this.setState({
        couponProps: {
          couponLoading: true
        }
      });

      const { id } = _this.state.orderDetails;
      updateOrder(id, {
        couponCode
      }).then(function(result) {
        if (result.errors.length) {
          _this.setState({
            couponProps: {
              couponLoading: false,
              showMessage: true,
              message:
                'This is not a valid coupon code for this offer. Please check the code on your coupon and try again.',
              messageType: MESSAGE_TYPE_FAIL
            }
          });
        } else {
          _this.setState({
            orderDetails: result.responseData.order,
            couponProps: {
              couponLoading: false,
              showMessage: true,
              message: 'Your coupon has been applied!',
              messageType: MESSAGE_TYPE_SUCCESS
            }
          });
        }
      });
    };

    _this.state = {
      offerDetails: null,
      couponProps: null,
      error: '',
      offerId: null,
      orderDetails: {
        priceBreakdown: {
          offerPrice: 0,
          discountedPrice: 0,
          discountAmount: 0
        },
        discount: {
          applied: false
        }
      },
      isOrderCreated: false
    };
    return _this;
  }

  _createClass(OfferContainer, [
    {
      key: 'componentDidMount',
      value: function componentDidMount() {
        const { urlProps } = this.props;
        saveOfferId(urlProps.location, this.setOfferId);
      }
    },
    {
      key: 'componentDidUpdate',
      value: function componentDidUpdate(prevProps, prevState) {
        const _this2 = this;

        const { offerId } = this.state;

        if (offerId !== prevState.offerId) {
          if (offerId) {
            getOfferDetails(offerId).then(function(offerDetailsResponse) {
              if (offerDetailsResponse.errors.length) {
                _this2.setState({
                  error: offerDetailsResponse.errors[0]
                });
              } else {
                _this2.setState({
                  offerId: offerDetailsResponse.offerId,
                  offerDetails: offerDetailsResponse.responseData
                });

                if (
                  offerDetailsResponse &&
                  offerDetailsResponse.responseData &&
                  offerDetailsResponse.responseData.offerId
                )
                  createOrder(offerDetailsResponse.responseData.offerId).then(
                    function(orderDetailsResponse) {
                      if (!orderDetailsResponse.errors.length) {
                        _this2.setState({
                          orderDetails: orderDetailsResponse.responseData.order,
                          isOrderCreated: true
                        });

                        setData(
                          'CLEENG_ORDER_ID',
                          orderDetailsResponse.responseData.order.id
                        );
                      } else {
                        _this2.setState({
                          error: orderDetailsResponse.errors[0]
                        });
                      }

                      if (
                        orderDetailsResponse.responseData.order.totalPrice ===
                          0 &&
                        !orderDetailsResponse.responseData.order.discount
                          .applied
                      ) {
                        getPaymentMethods().then(function(
                          paymentMethodResponse
                        ) {
                          const properPaymentMethodId = paymentMethodResponse.responseData.paymentMethods.find(
                            function(method) {
                              return getData('CLEENG_OFFER_TYPE') === 'S'
                                ? method.methodName === 'manual'
                                : method.methodName !== 'manual';
                            }
                          );
                          updateOrder(
                            orderDetailsResponse.responseData.order.id,
                            {
                              paymentMethodId: properPaymentMethodId
                                ? properPaymentMethodId.id
                                : 0
                            }
                          );
                        });
                      }
                    }
                  );
              }
            });
          } else if (offerId === '') {
            // eslint-disable-next-line react/no-did-update-set-state
            this.setState({
              error: 'Offer not set'
            });
          }
        }
      }
    },
    {
      key: 'render',
      value: function render() {
        const _this$state = this.state;
        const { error } = _this$state;
        const { offerDetails } = _this$state;
        const { couponProps } = _this$state;
        const { orderDetails } = _this$state;
        const { isOrderCreated } = _this$state;
        const _this$props = this.props;
        const { onPaymentComplete } = _this$props;
        const { t } = _this$props;

        if (error) {
          if (error.includes('Offer is blocked for country')) {
            return /* #__PURE__ */ React.createElement(ErrorPage, {
              type: 'cannotPurchase'
            });
          }

          if (
            error.includes("doesn't exist.") ||
            error.includes('does not exist.') ||
            error.includes('Invalid param offerId') ||
            error.includes('Offer not set')
          ) {
            return /* #__PURE__ */ React.createElement(ErrorPage, {
              type: 'offerNotExist'
            });
          }

          if (error.includes('Access already granted')) {
            return /* #__PURE__ */ React.createElement(ErrorPage, {
              type: 'alreadyHaveAccess'
            });
          }

          if (error.includes('Request failed with status code 500')) {
            return /* #__PURE__ */ React.createElement(ErrorPage, {
              type: 'generalError'
            });
          }

          return /* #__PURE__ */ React.createElement(Redirect, {
            to: '/login'
          });
        }

        return offerDetails && isOrderCreated
          ? /* #__PURE__ */ React.createElement(Offer, {
              offerDetails,
              orderDetails,
              couponProps: _objectSpread(
                _objectSpread({}, couponProps),
                {},
                {
                  onSubmit: this.onCouponSubmit
                }
              ),
              onPaymentComplete,
              updatePriceBreakdown: this.updatePriceBreakdown,
              t
            })
          : /* #__PURE__ */ React.createElement(
              StyledLoaderContainer,
              null,
              /* #__PURE__ */ React.createElement(Loader, null)
            );
      }
    }
  ]);

  return OfferContainer;
})(Component);

OfferContainer.defaultProps = {
  urlProps: {},
  t: function t(k) {
    return k;
  }
};
export { OfferContainer as PureOfferContainer };
export default withTranslation()(labeling()(OfferContainer));
