import _regeneratorRuntime from "/Users/iwonakulacz/Documents/repos/msd-package/node_modules/babel-preset-react-app/node_modules/@babel/runtime/regenerator";
import _asyncToGenerator from "/Users/iwonakulacz/Documents/repos/msd-package/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/asyncToGenerator";
import _classCallCheck from "/Users/iwonakulacz/Documents/repos/msd-package/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "/Users/iwonakulacz/Documents/repos/msd-package/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass";
import _inherits from "/Users/iwonakulacz/Documents/repos/msd-package/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits";
import _createSuper from "/Users/iwonakulacz/Documents/repos/msd-package/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createSuper";
import React, { Component } from 'react';
import { getPaymentMethods, submitPayment, submitPayPalPayment, submitPaymentWithoutDetails, updateOrder } from 'api';
import Button from 'components/Button';
import Adyen from 'components/Adyen';
import SectionHeader from 'components/SectionHeader';
import Loader from 'components/Loader';
import { getData, setData } from 'util/appConfigHelper';
import PaymentMethodButton from 'components/PaymentMethodButton';
import Auth from 'services/auth';
import { PaymentStyled, MethodsWrapperStyled, PaymentErrorStyled, PayPalWrapperStyled, PayPalTextStyled } from './PaymentStyled';

var Payment = /*#__PURE__*/function (_Component) {
  _inherits(Payment, _Component);

  var _super = _createSuper(Payment);

  function Payment(props) {
    var _this;

    _classCallCheck(this, Payment);

    _this = _super.call(this, props);

    _this.onAdyenSubmit = function (_ref) {
      var card = _ref.data.paymentMethod;
      var _this$props = _this.props,
          onPaymentComplete = _this$props.onPaymentComplete,
          t = _this$props.t;

      _this.setState({
        generalError: '',
        isLoading: true
      });

      submitPayment(card).then(function (paymentReponse) {
        if (paymentReponse.errors.length) {
          var notSupportedMethod = paymentReponse.errors[0].includes('Payment details are not supported');

          if (notSupportedMethod) {
            _this.setState({
              generalError: t('Payment method not supported. Try different payment method'),
              isLoading: false
            });
          } else {
            _this.setState({
              generalError: t('The payment failed. Please try again.'),
              isLoading: false
            });
          }
        } else {
          onPaymentComplete();
        }
      });
    };

    _this.clearError = function () {
      _this.setState({
        generalError: ''
      });
    };

    _this.choosePaymentMethod = function (methodId, methodName) {
      var orderId = getData('CLEENG_ORDER_ID');
      setData('CLEENG_PAYMENT_METHOD_ID', methodId);

      if (orderId) {
        updateOrder(orderId, {
          paymentMethodId: methodId
        }).then(function (response) {
          var updatePriceBreakdown = _this.props.updatePriceBreakdown;

          if (response.errors.length && response.errors[0].includes('JWT')) {
            Auth.logout();
          }

          updatePriceBreakdown(response.responseData.order);
        });
      }

      if (methodName === 'paypal') {
        _this.setState({
          isPayPal: true
        });
      } else {
        _this.setState({
          isPayPal: false
        });
      }
    };

    _this.submitPayPal = function () {
      var t = _this.props.t;

      _this.setState({
        isLoading: true
      });

      submitPayPalPayment().then(function (resp) {
        window.location.href = resp.responseData.redirectUrl;
      }).catch(function () {
        return _this.setState({
          generalError: t('The payment failed. Please try again.'),
          isLoading: false
        });
      });
    };

    _this.finishTransaction = function () {
      var _this$props2 = _this.props,
          onPaymentComplete = _this$props2.onPaymentComplete,
          t = _this$props2.t;

      _this.setState({
        isLoading: true,
        generalError: ''
      });

      submitPaymentWithoutDetails().then(function (paymentReponse) {
        if (paymentReponse.errors.length) {
          _this.setState({
            generalError: t('The payment failed. Please try again.'),
            isLoading: false
          });
        } else {
          onPaymentComplete();
        }
      });
    };

    _this.state = {
      isPaymentFormDisplayed: false,
      isPayPal: false,
      isLoading: false,
      paymentMethods: [],
      generalError: ''
    };
    return _this;
  }

  _createClass(Payment, [{
    key: "componentDidMount",
    value: function () {
      var _componentDidMount = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee() {
        var t, response, paymentMethods;
        return _regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                t = this.props.t;
                _context.prev = 1;
                _context.next = 4;
                return getPaymentMethods();

              case 4:
                response = _context.sent;
                paymentMethods = response.responseData.paymentMethods;

                if (paymentMethods) {
                  if (!paymentMethods.length) {
                    this.setState({
                      generalError: t('Payment methods are not defined')
                    });
                  } else {
                    this.setState({
                      paymentMethods: response.responseData.paymentMethods
                    });
                    setData('CLEENG_PAYMENT_METHOD_ID', response.responseData.paymentMethods[0].id);
                  }
                } else if (!response.errors.length) {
                  this.setState({
                    generalError: t('Cannot fetch payment methods')
                  });
                }

                _context.next = 12;
                break;

              case 9:
                _context.prev = 9;
                _context.t0 = _context["catch"](1);
                this.setState({
                  generalError: t('Cannot fetch payment methods')
                });

              case 12:
                if (window.location.search && window.location.search.includes('message')) {
                  this.setState({
                    generalError: t('Your payment was not processed. Please, try again')
                  });
                }

              case 13:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[1, 9]]);
      }));

      function componentDidMount() {
        return _componentDidMount.apply(this, arguments);
      }

      return componentDidMount;
    }()
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props3 = this.props,
          isPaymentDetailsRequired = _this$props3.isPaymentDetailsRequired,
          t = _this$props3.t;
      var _this$state = this.state,
          isPaymentFormDisplayed = _this$state.isPaymentFormDisplayed,
          generalError = _this$state.generalError,
          paymentMethods = _this$state.paymentMethods,
          isPayPal = _this$state.isPayPal,
          isLoading = _this$state.isLoading;
      return /*#__PURE__*/React.createElement(PaymentStyled, null, isPaymentDetailsRequired ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(SectionHeader, {
        center: true
      }, t('Purchase using')), /*#__PURE__*/React.createElement(MethodsWrapperStyled, null, paymentMethods.map(function (method) {
        return method.methodName !== 'manual' && /*#__PURE__*/React.createElement(PaymentMethodButton, {
          key: method.id,
          methodName: method.methodName,
          onClickFn: function onClickFn() {
            _this2.setState({
              isPaymentFormDisplayed: true
            });

            _this2.choosePaymentMethod(method.id, method.methodName);
          }
        });
      })), generalError && /*#__PURE__*/React.createElement(PaymentErrorStyled, null, generalError), isPayPal && /*#__PURE__*/React.createElement(PayPalWrapperStyled, null, /*#__PURE__*/React.createElement(PayPalTextStyled, null, t('Click ‘Continue with PayPal’ to complete your purchase.')), /*#__PURE__*/React.createElement(Button, {
        type: "button",
        theme: "payment",
        onClickFn: this.submitPayPal
      }, isLoading ? /*#__PURE__*/React.createElement(Loader, {
        buttonLoader: true,
        color: "#ffffff"
      }) : t('Continue with PayPal'))), isPaymentFormDisplayed && !isPayPal && /*#__PURE__*/React.createElement(Adyen, {
        onSubmit: this.onAdyenSubmit,
        onChange: this.clearError,
        isPaymentProcessing: isLoading
      })) : /*#__PURE__*/React.createElement(Button, {
        onClickFn: this.finishTransaction,
        theme: "confirm",
        width: "250px",
        size: "big",
        margin: "20px auto 0 auto"
      }, isLoading ? /*#__PURE__*/React.createElement(Loader, {
        buttonLoader: true,
        color: "#ffffff"
      }) : t('Complete purchase')));
    }
  }]);

  return Payment;
}(Component);

Payment.defaultProps = {
  isPaymentDetailsRequired: true,
  updatePriceBreakdown: function updatePriceBreakdown() {},
  t: function t(k) {
    return k;
  }
};
export default Payment;